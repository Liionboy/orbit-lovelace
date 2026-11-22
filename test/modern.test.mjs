import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const source=readFileSync(new URL('../src/orbit-modern.js',import.meta.url),'utf8');
function fixture(){
 class Element{constructor(){this.attrs=new Map();}setAttribute(k,v){this.attrs.set(k,v);}getAttribute(k){return this.attrs.get(k);}removeAttribute(k){this.attrs.delete(k);}}
 const orbitModernProfiles=JSON.parse(readFileSync(new URL('../src/modern-profiles.json',import.meta.url))).profiles;
 const context=vm.createContext({HTMLElement:Element,window:{},console,orbitModernProfiles,CSSStyleSheet:class{replaceSync(css){this.css=css;}}});vm.runInContext(source+';globalThis.modern=orbitModern;',context);
 class Card extends Element{setConfig(config){if(config.invalid)throw Error('native validation');this.saved=config;this.configCalls=(this.configCalls||0)+1;}static getConfigForm(){return{schema:[{name:'entity'}],computeLabel:s=>s.name};}}
 context.modern.prepare('ha-temperature-orbit-card',Card);return{Card,modern:context.modern};
}
test('Modern provenance, coverage and immutable feature scope',()=>{
 const m=JSON.parse(readFileSync(new URL('../components.json',import.meta.url))),f=m.suiteFeatures.find(f=>f.id==='modern-design');
 assert.equal(f.sha256,createHash('sha256').update(source).digest('hex'));assert.equal(f.version,'0.2.0');
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
 const{Card}=fixture(),form=Card.getConfigForm();assert.deepEqual(form.schema.map(s=>s.name).join(','),'design,entity');assert.equal(form.computeLabel({name:'entity'}),'entity');assert.equal(form.computeLabel({name:'design'}),'Card design');assert.equal(form.schema[0].default,'classic');
});
test('unregistered types and constructors are unchanged',()=>{const{modern}=fixture();class Other{}assert.equal(modern.prepare('not-an-orbit-card',Other),Other);assert.equal(Other.prototype.setConfig,undefined);});
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
