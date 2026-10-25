import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import {themeBridge,bridgeVersion} from './theme-bridge.mjs';
import {buildThemes,palettes} from './themes.mjs';
export const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export const manifest=JSON.parse(readFileSync(resolve(root,'components.json'),'utf8'));
const NL=String.fromCharCode(10);
const themeContracts=JSON.parse(readFileSync(resolve(root,'themes/bridge-contracts.json'),'utf8'));
export function componentSource(c){
 let source=readFileSync(resolve(root,c.source),'utf8');
 if(createHash('sha256').update(source).digest('hex')!==c.sha256)throw Error('Source digest mismatch: '+c.id);
 const replaceOnce=(old,replacement)=>{if(!source.includes(old)||source.indexOf(old)!==source.lastIndexOf(old))throw Error('Patch contract changed: '+c.id);source=source.replace(old,replacement);};
 if(c.id==='ha-unifi-orbit-card')replaceOnce('export { UnifiOrbitCard, UnifiCommandCenterCard };','');
 if(c.id==='ha-vacuum-commander-card')replaceOnce('export{gt as VacuumCommanderCard};','');
 if(c.id==='temperature-humidity-card'){
  replaceOnce('customElements.define(LEGACY_CARD_TYPE, TemperatureHumidityCard);','customElements.define(LEGACY_CARD_TYPE, class extends TemperatureHumidityCard {});');
  replaceOnce('const VERSION = "1.2.5";','const VERSION = "1.2.6";');
 }
 if(source.split(NL).some(line=>line.startsWith('import ')||line.startsWith('export ')))throw Error('Unexpected module dependency: '+c.id);
 const themed=themeBridge(source,c.id);
 if(JSON.stringify(themed.hooks)!==JSON.stringify(themeContracts[c.id]))throw Error('Theme hook contract changed: '+c.id);
 return themed.source;
}
export function build(){
 buildThemes();
 const notices=['LICENSE','licenses/lit-LICENSE','licenses/lit-html-LICENSE','licenses/lit-element-LICENSE','licenses/@lit-reactive-element-LICENSE','licenses/custom-card-helpers-LICENSE'].map(file=>file+NL+readFileSync(resolve(root,file),'utf8')).join(NL+NL);
 const lines=['/* Orbit Lovelace v'+manifest.version+' — MIT. */','/*'+NL+notices+NL+'*/','(() => {','const suite = window.orbitLovelace ||= {version:'+JSON.stringify(manifest.version)+',components:{},skipped:{},errors:[]};'];
 for(const c of manifest.components){
  const types=[...c.types,...c.aliases];
  lines.push('/* '+c.id+' @ '+c.version+' ('+c.upstreamCommit+') */','try { (() => {','const knownTypes='+JSON.stringify(types)+';','if(knownTypes.some(type=>customElements.get(type))){suite.skipped['+JSON.stringify(c.id)+']="Already registered; remove old resources and reload to use the suite version.";return;}',componentSource(c),'window.customCards ||= [];','for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}');
  for(const type of c.types)lines.push('if(!window.customCards.some(card=>card.type==='+JSON.stringify(type)+'))window.customCards.push({type:'+JSON.stringify(type)+',name:'+JSON.stringify(c.name)+',description:"Included in Orbit Lovelace",preview:false});');
  lines.push('suite.components['+JSON.stringify(c.id)+']={version:'+JSON.stringify(c.version)+',types:'+JSON.stringify(c.types)+'};','})() } catch(error){suite.errors.push({component:'+JSON.stringify(c.id)+',message:String(error?.message||error)});console.error("Orbit Lovelace: component failed",'+JSON.stringify(c.id)+',error);}');
 }
 lines.push('})();','');const source=lines.join(NL);mkdirSync(resolve(root,'dist'),{recursive:true});writeFileSync(resolve(root,'dist/orbit-lovelace.js'),source);
 const info={version:manifest.version,packages:manifest.components.length,cards:manifest.components.flatMap(c=>c.types).length,themeBridgeVersion:bridgeVersion,themesVersion:palettes.version,themeSha256:createHash('sha256').update(readFileSync(resolve(root,'themes/orbit-themes.yaml'))).digest('hex'),bytes:Buffer.byteLength(source),sha256:createHash('sha256').update(source).digest('hex')};writeFileSync(resolve(root,'bundle-lock.json'),JSON.stringify(info,null,2)+NL);console.log(JSON.stringify(info));return source;
}
if(process.argv[1]===fileURLToPath(import.meta.url))build();
