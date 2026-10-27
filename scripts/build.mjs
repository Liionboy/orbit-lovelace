import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import {themeBridge,bridgeVersion} from './theme-bridge.mjs';
import {buildThemes,palettes} from './themes.mjs';
import {welcomeNormalToolbar} from './welcome-normal-toolbar.mjs';
import {lumaAppearance} from './luma-appearance.mjs';
export const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export const manifest=JSON.parse(readFileSync(resolve(root,'components.json'),'utf8'));
export const components=[...manifest.components,...(manifest.nativeComponents||[])];
const NL=String.fromCharCode(10);
const themeContracts=JSON.parse(readFileSync(resolve(root,'themes/bridge-contracts.json'),'utf8'));
export function compactFeature(){
 const feature=manifest.suiteFeatures?.find(f=>f.id==='compact-layouts');
 if(!feature)throw Error('Missing compact feature provenance');
 const runtime=readFileSync(resolve(root,feature.source),'utf8'),profilesSource=readFileSync(resolve(root,feature.profiles),'utf8');
 for(const [source,hash]of [[runtime,feature.sha256],[profilesSource,feature.profilesSha256]])if(createHash('sha256').update(source).digest('hex')!==hash)throw Error('Compact source digest mismatch');
 const {profiles,version}=JSON.parse(profilesSource),types=components.flatMap(c=>c.types).sort();
 if(JSON.stringify(Object.keys(profiles).sort())!==JSON.stringify(types))throw Error('Compact type coverage mismatch');
 if(version!==feature.version)throw Error('Compact version mismatch');
 for(const c of components){const original=readFileSync(resolve(root,c.source),'utf8');for(const type of c.types)for(const selector of profiles[type].details)if(!original.includes(selector.match(/[.#]([a-zA-Z_-]+)/)?.[1]||selector))throw Error('Compact detail contract changed: '+type+' '+selector);}
 const adaptation=readFileSync(resolve(root,feature.adaptation),'utf8');
 if(createHash('sha256').update(adaptation).digest('hex')!==feature.adaptationSha256)throw Error('Compact adaptation digest mismatch');
 return{runtime,profiles,version,sha256:createHash('sha256').update(runtime+profilesSource+adaptation).digest('hex')};
}
export function componentSource(c){
 let source=readFileSync(resolve(root,c.source),'utf8');
 if(createHash('sha256').update(source).digest('hex')!==c.sha256)throw Error('Source digest mismatch: '+c.id);
 if(c.origin==='suite'){if(!c.source.startsWith('src/'))throw Error('Invalid native source: '+c.id);return source;}
 const replaceOnce=(old,replacement)=>{if(!source.includes(old)||source.indexOf(old)!==source.lastIndexOf(old))throw Error('Patch contract changed: '+c.id);source=source.replace(old,replacement);};
 if(c.id==='ha-unifi-orbit-card')replaceOnce('export { UnifiOrbitCard, UnifiCommandCenterCard };','');
 if(c.id==='ha-vacuum-commander-card')replaceOnce('export{gt as VacuumCommanderCard};','');
 if(c.id==='temperature-humidity-card'){
  replaceOnce('customElements.define(LEGACY_CARD_TYPE, TemperatureHumidityCard);','customElements.define(LEGACY_CARD_TYPE, class extends TemperatureHumidityCard {});');
  replaceOnce('const VERSION = "1.2.5";','const VERSION = "1.2.6";');
 }
 if(source.split(NL).some(line=>line.startsWith('import ')||line.startsWith('export ')))throw Error('Unexpected module dependency: '+c.id);
 if(c.id==='ha-welcome-orbit-card')source=welcomeNormalToolbar(source);
 const themed=themeBridge(source,c.id);
 if(JSON.stringify(themed.hooks)!==JSON.stringify(themeContracts[c.id]))throw Error('Theme hook contract changed: '+c.id);
 if(c.id==='lovelace-luma-control-card'){
  const feature=manifest.suiteFeatures.find(f=>f.id==='luma-appearance');
  if(!feature||createHash('sha256').update(readFileSync(resolve(root,feature.source))).digest('hex')!==feature.sha256)throw Error('Luma appearance provenance mismatch');
  return lumaAppearance(themed.source);
 }
 return themed.source;
}
export function build(){
 buildThemes();
 const compact=compactFeature();
 const notices=['LICENSE','licenses/lit-LICENSE','licenses/lit-html-LICENSE','licenses/lit-element-LICENSE','licenses/@lit-reactive-element-LICENSE','licenses/custom-card-helpers-LICENSE'].map(file=>file+NL+readFileSync(resolve(root,file),'utf8')).join(NL+NL);
 const lines=['/* Orbit Lovelace v'+manifest.version+' — MIT. */','/*'+NL+notices+NL+'*/','(() => {','const suite = window.orbitLovelace ||= {version:'+JSON.stringify(manifest.version)+',components:{},skipped:{},errors:[]};'];
 lines.push(compact.runtime);
 for(const c of components){
  const types=[...c.types,...c.aliases];
  const profiles=Object.fromEntries(c.types.map(t=>[t,compact.profiles[t]]));
  lines.push('/* '+c.id+' @ '+c.version+' ('+(c.origin==='suite'?'suite-owned source':c.upstreamCommit)+') */','try { (() => {','const compactProfiles='+JSON.stringify(profiles)+';','const customElements={get:name=>window.customElements.get(name),define:(name,C,options)=>window.customElements.define(name,compactProfiles[name]?orbitCompact.prepare(name,C,compactProfiles[name]):C,options)};','const knownTypes='+JSON.stringify(types)+';','if(knownTypes.some(type=>customElements.get(type))){suite.skipped['+JSON.stringify(c.id)+']="Already registered; remove old resources and reload to use the suite version.";return;}',componentSource(c),'window.customCards ||= [];','for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}');
  for(const type of c.types)lines.push('if(!window.customCards.some(card=>card.type==='+JSON.stringify(type)+'))window.customCards.push({type:'+JSON.stringify(type)+',name:'+JSON.stringify(c.name)+',description:"Included in Orbit Lovelace",preview:false});');
  lines.push('suite.components['+JSON.stringify(c.id)+']={version:'+JSON.stringify(c.version)+',types:'+JSON.stringify(c.types)+'};','})() } catch(error){suite.errors.push({component:'+JSON.stringify(c.id)+',message:String(error?.message||error)});console.error("Orbit Lovelace: component failed",'+JSON.stringify(c.id)+',error);}');
 }
 lines.push('suite.compact={version:'+JSON.stringify(compact.version)+',types:[...new Set([...(suite.compact?.types||[]),...orbitCompact.installed])]};','})();','');const source=lines.join(NL);mkdirSync(resolve(root,'dist'),{recursive:true});writeFileSync(resolve(root,'dist/orbit-lovelace.js'),source);
 const info={version:manifest.version,packages:components.length,upstreamPackages:manifest.components.length,nativePackages:(manifest.nativeComponents||[]).length,cards:components.flatMap(c=>c.types).length,compactVersion:compact.version,compactSha256:compact.sha256,lumaAppearanceVersion:manifest.suiteFeatures.find(f=>f.id==='luma-appearance').version,lumaAppearanceSha256:manifest.suiteFeatures.find(f=>f.id==='luma-appearance').sha256,themeBridgeVersion:bridgeVersion,themesVersion:palettes.version,themeSha256:createHash('sha256').update(readFileSync(resolve(root,'themes/orbit-themes.yaml'))).digest('hex'),bytes:Buffer.byteLength(source),sha256:createHash('sha256').update(source).digest('hex')};writeFileSync(resolve(root,'bundle-lock.json'),JSON.stringify(info,null,2)+NL);console.log(JSON.stringify(info));return source;
}
if(process.argv[1]===fileURLToPath(import.meta.url))build();
