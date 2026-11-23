import test from 'node:test';
import {fallbackPaletteTypes} from '../scripts/card-palettes.mjs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const source=readFileSync(new URL('../src/orbit-modern.js',import.meta.url),'utf8');
function fixture(){
 class Element{constructor(){this.attrs=new Map();}setAttribute(k,v){this.attrs.set(k,v);}getAttribute(k){return this.attrs.get(k);}removeAttribute(k){this.attrs.delete(k);}}
 const orbitModernProfiles=JSON.parse(readFileSync(new URL('../src/modern-profiles.json',import.meta.url))).profiles;
 const context=vm.createContext({HTMLElement:Element,window:{},console,orbitModernProfiles,orbitPaletteCatalog:JSON.parse(readFileSync(new URL('../src/card-palettes.json',import.meta.url))).palettes,orbitFallbackPaletteTypes:fallbackPaletteTypes,CSSStyleSheet:class{replaceSync(css){this.css=css;}}});vm.runInContext(source+';globalThis.modern=orbitModern;',context);
 class Card extends Element{setConfig(config){if(config.invalid)throw Error('native validation');this.saved=config;this.configCalls=(this.configCalls||0)+1;}static getConfigForm(){return{schema:[{name:'entity'}],computeLabel:s=>s.name};}}
 context.modern.prepare('ha-temperature-orbit-card',Card);return{Card,modern:context.modern,Element,context};
}
test('Modern provenance, coverage and immutable feature scope',()=>{
 const m=JSON.parse(readFileSync(new URL('../components.json',import.meta.url))),f=m.suiteFeatures.find(f=>f.id==='modern-design');
 assert.equal(f.sha256,createHash('sha256').update(source).digest('hex'));assert.equal(f.version,'0.4.3');
 assert.deepEqual([...fixture().modern.types],f.types);assert.equal(new Set(f.types).size,37);
 assert.ok(f.types.every(t=>[...m.components,...m.nativeComponents].some(c=>c.types.includes(t))));
});
test('invalid Modern option does not call the source or change active design',()=>{
 const{Card}=fixture(),c=new Card();c.setConfig({entity:'sensor.example',design:'modern'});
 for(const design of ['',false,1,{},'<script>']){assert.throws(()=>c.setConfig({design}),/design must/);assert.equal(c.getAttribute('data-orbit-design'),'modern');assert.equal(c.configCalls,1);}
 assert.throws(()=>c.setConfig({invalid:true,design:'classic'}),/native validation/);assert.equal(c.getAttribute('data-orbit-design'),'modern');
});
test('presentation switches preserve original config, nodes, subscriptions and caller object',()=>{
 const{Card}=fixture(),c=new Card(),config={entity:'sensor.example',layout:'compact',design:'classic'};c.setConfig(config);const saved=c.saved;
 c.setConfig({...config,design:'modern'});assert.equal(c.configCalls,1);assert.equal(c.saved,saved);assert.equal(c.getAttribute('data-orbit-design'),'modern');assert.equal(config.design,'classic');assert.equal(c.saved.design,undefined);
 c.setConfig({...config,design:'classic'});assert.equal(c.configCalls,1);assert.equal(c.getAttribute('data-orbit-design'),undefined);
 c.setConfig({...config,entity:'sensor.other',design:'modern'});assert.equal(c.configCalls,2);
 c.setConfig({...config,entity:'sensor.other',design:'modern'});assert.equal(c.configCalls,3,'unchanged configs still follow the original source path');
});
test('native form preserves original fields and adds a separate design choice',()=>{
 const{Card}=fixture(),form=Card.getConfigForm();assert.deepEqual(form.schema.map(s=>s.name).join(','),'design,glow,entity');assert.equal(form.computeLabel({name:'entity'}),'entity');assert.equal(form.computeLabel({name:'design'}),'Card design');assert.equal(form.computeLabel({name:'glow'}),'Glow');assert.equal(form.schema[0].default,'classic');assert.equal(form.schema[1].default,false);
});
test('unregistered types and constructors are unchanged',()=>{const{modern}=fixture();class Other{}assert.equal(modern.prepare('not-an-orbit-card',Other),Other);assert.equal(Other.prototype.setConfig,undefined);});
test('Glow validates before source changes, strips the key and preserves caller and native nodes on toggles',()=>{const{Card}=fixture(),c=new Card(),config=Object.freeze({entity:'sensor.example',glow:true});c.setConfig(config);assert.equal(c.saved.glow,undefined);assert.equal(c.getAttribute('data-orbit-glow'),'true');const saved=c.saved;c.setConfig({...config,glow:false});assert.equal(c.configCalls,1);assert.equal(c.saved,saved);assert.equal(c.getAttribute('data-orbit-glow'),undefined);for(const glow of ['true','false',0,1,{},[]])assert.throws(()=>c.setConfig({...config,glow}),/glow must/);assert.equal(c.configCalls,1);assert.throws(()=>c.setConfig({invalid:true,glow:true}),/native validation/);assert.equal(c.getAttribute('data-orbit-glow'),undefined);});
test('Glow sheets are cached, removable and independent of Classic/Modern',()=>{const{Card}=fixture(),c=new Card();c.shadowRoot={adoptedStyleSheets:[]};c.setConfig({entity:'sensor.example',glow:true,palette:'teal'});const sheet=c._orbitGlowSheet;assert.ok(sheet.css.includes('box-shadow'));assert.equal(c.shadowRoot.adoptedStyleSheets.length,1);c.setConfig({entity:'sensor.example',glow:false,palette:'teal'});assert.equal(c.shadowRoot.adoptedStyleSheets.length,0);c.setConfig({entity:'sensor.example',glow:true,palette:'teal',design:'modern'});assert.equal(c._orbitGlowSheet,sheet);assert.equal(c.shadowRoot.adoptedStyleSheets.at(-1),c._orbitModernSheet);assert.equal(new Set(c.shadowRoot.adoptedStyleSheets).size,2);});
test('Glow falls back to one removable style element without constructable sheets',()=>{
 const{Card,context}=fixture(),c=new Card(),nodes=[];context.CSSStyleSheet=undefined;
 context.document={createElement:()=>({dataset:{},remove(){nodes.splice(nodes.indexOf(this),1);}})};
 c.shadowRoot={querySelector:()=>nodes[0],append:n=>nodes.push(n)};
 c.setConfig({entity:'sensor.example',glow:true,palette:'ice'});assert.equal(nodes.length,1);assert.ok(nodes[0].textContent.includes('box-shadow'));
 const style=nodes[0];c.setConfig({entity:'sensor.example',glow:true,palette:'teal'});assert.equal(nodes.length,1);assert.equal(nodes[0],style);
 c.setConfig({entity:'sensor.example',glow:false,palette:'teal'});assert.equal(nodes.length,0);
});
test('Modern cascade remains last after Compact inserts a sheet; never duplicates styles',()=>{
 const{Card}=fixture(),c=new Card();c.shadowRoot={adoptedStyleSheets:[]};c.setConfig({entity:'sensor.example',design:'modern'});const modern=c.shadowRoot.adoptedStyleSheets[0],compact={};c.shadowRoot.adoptedStyleSheets.push(compact);
 c.setConfig({entity:'sensor.example',design:'modern'});assert.equal(c.shadowRoot.adoptedStyleSheets.at(-1),modern);assert.equal(c.shadowRoot.adoptedStyleSheets.length,2);
 c.setConfig({entity:'sensor.example',design:'modern'});assert.equal(c.shadowRoot.adoptedStyleSheets.length,2);
});
test('inherited editor factories are unwrapped only before Compact, preserving the parent',()=>{
 const{modern}=fixture();class Parent{static getConfigElement(){return 'native';}}
 const native=Parent.getConfigElement;modern.prepare('unifi-orbit-card',Parent);const parentFactory=Parent.getConfigElement;
 class Child extends Parent{}assert.equal(Object.hasOwn(Child,'getConfigElement'),false);
 assert.equal(modern.beforeCompact(Child),Child);assert.equal(Child.getConfigElement,native);assert.equal(Parent.getConfigElement,parentFactory);
 class Own extends Parent{static getConfigElement(){return 'custom';}}const own=Own.getConfigElement;modern.beforeCompact(Own);assert.equal(Own.getConfigElement,own);
});

test('formerly palette-less cards validate and strip palette without recreating source on color switches',()=>{const{modern,Element}=fixture();class Media extends Element{setConfig(c){this.saved=c;this.calls=(this.calls||0)+1;}}modern.prepare('media-player-card',Media);const c=new Media();c.setConfig({entity:'media_player.example',design:'modern',palette:'teal'});assert.equal(c.saved.palette,undefined);assert.equal(c.getAttribute('data-orbit-palette'),'teal');c.setConfig({entity:'media_player.example',design:'modern',palette:'ice'});assert.equal(c.calls,1);for(const palette of ['bad',false,{},12])assert.throws(()=>c.setConfig({palette}),/palette/);assert.equal(c.getAttribute('data-orbit-palette'),'ice');});
