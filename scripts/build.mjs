import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import {themeBridge,bridgeVersion} from './theme-bridge.mjs';
import {buildThemes,palettes} from './themes.mjs';
import {welcomeNormalToolbar} from './welcome-normal-toolbar.mjs';
import {lumaAppearance} from './luma-appearance.mjs';
import {stableControlRender,stableControlTypes} from './stable-control-render.mjs';
import {switchStateIcon} from './switch-state-icon.mjs';
import {frigateLive} from './frigate-live.mjs';
import {applyCardPalettes,fallbackPaletteTypes,paletteCatalog} from './card-palettes.mjs';
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
 const paletteFeature=manifest.suiteFeatures.find(f=>f.id==='card-palettes');
 if(!paletteFeature)throw Error('Missing card palettes provenance');
 for(const [path,hash]of [[paletteFeature.source,paletteFeature.sha256],[paletteFeature.catalog,paletteFeature.catalogSha256]])if(createHash('sha256').update(readFileSync(resolve(root,path))).digest('hex')!==hash)throw Error('Card palettes provenance mismatch');
 if(c.origin==='suite'){if(!c.source.startsWith('src/'))throw Error('Invalid native source: '+c.id);return applyCardPalettes(source,c.id);}
 const replaceOnce=(old,replacement)=>{if(!source.includes(old)||source.indexOf(old)!==source.lastIndexOf(old))throw Error('Patch contract changed: '+c.id);source=source.replace(old,replacement);};
 if(c.id==='ha-unifi-orbit-card')replaceOnce('export { UnifiOrbitCard, UnifiCommandCenterCard };','');
 if(c.id==='ha-vacuum-commander-card')replaceOnce('export{gt as VacuumCommanderCard};','');
 if(c.id==='temperature-humidity-card'){
  replaceOnce('customElements.define(LEGACY_CARD_TYPE, TemperatureHumidityCard);','customElements.define(LEGACY_CARD_TYPE, class extends TemperatureHumidityCard {});');
  replaceOnce('const VERSION = "1.2.5";','const VERSION = "1.2.6";');
 }
 if(source.split(NL).some(line=>line.startsWith('import ')||line.startsWith('export ')))throw Error('Unexpected module dependency: '+c.id);
 if(stableControlTypes.includes(c.id)){
  const feature=manifest.suiteFeatures.find(f=>f.id==='stable-control-render');
  if(!feature||createHash('sha256').update(readFileSync(resolve(root,feature.source))).digest('hex')!==feature.sha256)throw Error('Stable control render provenance mismatch');
 }
 if(c.id==='ha-welcome-orbit-card')source=welcomeNormalToolbar(source);
 const themed=themeBridge(source,c.id);
 if(JSON.stringify(themed.hooks)!==JSON.stringify(themeContracts[c.id]))throw Error('Theme hook contract changed: '+c.id);
 if(c.id==='lovelace-luma-control-card'){
  const feature=manifest.suiteFeatures.find(f=>f.id==='luma-appearance');
  if(!feature||createHash('sha256').update(readFileSync(resolve(root,feature.source))).digest('hex')!==feature.sha256)throw Error('Luma appearance provenance mismatch');
  return applyCardPalettes(stableControlRender(lumaAppearance(themed.source),c.id),c.id);
 }
 if(c.id==='lovelace-switch-control-card'){
  const feature=manifest.suiteFeatures.find(f=>f.id==='switch-state-icon');
  if(!feature||createHash('sha256').update(readFileSync(resolve(root,feature.source))).digest('hex')!==feature.sha256)throw Error('Switch state icon provenance mismatch');
  return applyCardPalettes(stableControlRender(switchStateIcon(themed.source),c.id),c.id);
 }
 if(c.id==='lovelace-frigate-control-card'){
  const f=manifest.suiteFeatures.find(f=>f.id==='frigate-live');
  for(const [path,hash] of [[f.source,f.sha256],[f.adaptation,f.adaptationSha256]])if(createHash('sha256').update(readFileSync(resolve(root,path))).digest('hex')!==hash)throw Error('Frigate live provenance mismatch');
  return applyCardPalettes(frigateLive(themed.source,readFileSync(resolve(root,f.source),'utf8')),c.id);
 }
 return applyCardPalettes(stableControlTypes.includes(c.id)?stableControlRender(themed.source,c.id):themed.source,c.id);
}
export function build(){
 buildThemes();
 const compact=compactFeature();
 const modern=manifest.suiteFeatures.find(f=>f.id==='modern-design');
 if(!modern)throw Error('Missing modern design provenance');
 const modernRuntime=readFileSync(resolve(root,modern.source),'utf8');
 if(createHash('sha256').update(modernRuntime).digest('hex')!==modern.sha256)throw Error('Modern design source digest mismatch');
 const modernProfilesSource=readFileSync(resolve(root,modern.profiles),'utf8'),modernProfiles=JSON.parse(modernProfilesSource);
 if(createHash('sha256').update(modernProfilesSource).digest('hex')!==modern.profilesSha256)throw Error('Modern profiles digest mismatch');
 if(modernProfiles.version!==modern.version||JSON.stringify(Object.keys(modernProfiles.profiles).sort())!==JSON.stringify(components.flatMap(c=>c.types).sort()))throw Error('Modern profile version/coverage mismatch');
 for(const c of components)for(const type of c.types){const container=modernProfiles.profiles[type].narrowContainer;if(container&&!readFileSync(resolve(root,c.source),'utf8').includes('@container '+container+' '))throw Error('Modern narrow container contract changed: '+type);}
 for(const c of components){const original=readFileSync(resolve(root,c.source),'utf8');for(const type of c.types)for(const key of ['heading','icon','surface']){const selector=modernProfiles.profiles[type][key];if(selector&&!original.includes(selector.replace(/^\./,'')))throw Error('Modern selector contract changed: '+type+' '+selector);}}
 const notices=['LICENSE','licenses/lit-LICENSE','licenses/lit-html-LICENSE','licenses/lit-element-LICENSE','licenses/@lit-reactive-element-LICENSE','licenses/custom-card-helpers-LICENSE'].map(file=>file+NL+readFileSync(resolve(root,file),'utf8')).join(NL+NL);
 const lines=['/* Orbit Lovelace v'+manifest.version+' — MIT. */','/*'+NL+notices+NL+'*/','(() => {','const suite = window.orbitLovelace ||= {version:'+JSON.stringify(manifest.version)+',components:{},skipped:{},errors:[]};'];
 lines.push(compact.runtime);
 lines.push('const orbitPaletteCatalog='+JSON.stringify(paletteCatalog.palettes)+';const orbitFallbackPaletteTypes='+JSON.stringify(fallbackPaletteTypes)+';');
 lines.push('const orbitModernProfiles='+JSON.stringify(modernProfiles.profiles)+';',modernRuntime);
 for(const c of components){
  const types=[...c.types,...c.aliases];
  const profiles=Object.fromEntries(c.types.map(t=>[t,compact.profiles[t]]));
  lines.push('/* '+c.id+' @ '+c.version+' ('+(c.origin==='suite'?'suite-owned source':c.upstreamCommit)+') */','try { (() => {','const compactProfiles='+JSON.stringify(profiles)+';','const customElements={get:name=>window.customElements.get(name),define:(name,C,options)=>window.customElements.define(name,orbitModern.prepare(name,compactProfiles[name]?orbitCompact.prepare(name,orbitModern.beforeCompact(C),compactProfiles[name]):C),options)};','const knownTypes='+JSON.stringify(types)+';','if(knownTypes.some(type=>customElements.get(type))){suite.skipped['+JSON.stringify(c.id)+']="Already registered; remove old resources and reload to use the suite version.";return;}',componentSource(c),'window.customCards ||= [];','for(const entry of window.customCards){const type=String(entry.type).startsWith("custom:")?entry.type.slice(7):entry.type;if(knownTypes.includes(type))entry.type=type;}');
  for(const type of c.types)lines.push('if(!window.customCards.some(card=>card.type==='+JSON.stringify(type)+'))window.customCards.push({type:'+JSON.stringify(type)+',name:'+JSON.stringify(c.name)+',description:"Included in Orbit Lovelace",preview:false});');
  lines.push('suite.components['+JSON.stringify(c.id)+']={version:'+JSON.stringify(c.version)+',types:'+JSON.stringify(c.types)+'};','})() } catch(error){suite.errors.push({component:'+JSON.stringify(c.id)+',message:String(error?.message||error)});console.error("Orbit Lovelace: component failed",'+JSON.stringify(c.id)+',error);}');
 }
 lines.push('suite.compact={version:'+JSON.stringify(compact.version)+',types:[...new Set([...(suite.compact?.types||[]),...orbitCompact.installed])]};','})();','');const source=lines.join(NL);mkdirSync(resolve(root,'dist'),{recursive:true});writeFileSync(resolve(root,'dist/orbit-lovelace.js'),source);
 const paletteFeature=manifest.suiteFeatures.find(f=>f.id==='card-palettes');
 const info={version:manifest.version,packages:components.length,upstreamPackages:manifest.components.length,nativePackages:(manifest.nativeComponents||[]).length,cards:components.flatMap(c=>c.types).length,compactVersion:compact.version,compactSha256:compact.sha256,lumaAppearanceVersion:manifest.suiteFeatures.find(f=>f.id==='luma-appearance').version,lumaAppearanceSha256:manifest.suiteFeatures.find(f=>f.id==='luma-appearance').sha256,switchStateIconVersion:manifest.suiteFeatures.find(f=>f.id==='switch-state-icon').version,switchStateIconSha256:manifest.suiteFeatures.find(f=>f.id==='switch-state-icon').sha256,frigateLiveVersion:manifest.suiteFeatures.find(f=>f.id==='frigate-live').version,frigateLiveSha256:manifest.suiteFeatures.find(f=>f.id==='frigate-live').sha256,frigateLiveAdaptationSha256:manifest.suiteFeatures.find(f=>f.id==='frigate-live').adaptationSha256,modernDesignVersion:modern.version,modernDesignSha256:modern.sha256,modernProfilesSha256:modern.profilesSha256,cardPalettesVersion:paletteFeature.version,cardPalettesSha256:paletteFeature.sha256,cardPalettesCatalogSha256:paletteFeature.catalogSha256,stableControlRenderSha256:manifest.suiteFeatures.find(f=>f.id==='stable-control-render').sha256,themeBridgeVersion:bridgeVersion,themesVersion:palettes.version,themeSha256:createHash('sha256').update(readFileSync(resolve(root,'themes/orbit-themes.yaml'))).digest('hex'),bytes:Buffer.byteLength(source),sha256:createHash('sha256').update(source).digest('hex')};writeFileSync(resolve(root,'bundle-lock.json'),JSON.stringify(info,null,2)+NL);console.log(JSON.stringify(info));return source;
}
if(process.argv[1]===fileURLToPath(import.meta.url))build();
