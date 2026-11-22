// Suite-owned guarded build expansion. Immutable imported/native files are retained.
import {readFileSync} from 'node:fs';
export const paletteCatalog=JSON.parse(readFileSync(new URL('../src/card-palettes.json',import.meta.url)));
const manifest=JSON.parse(readFileSync(new URL('../components.json',import.meta.url)));
export const paletteTypes=[...manifest.components,...manifest.nativeComponents].flatMap(c=>c.types);
export const fallbackPaletteTypes=['unifi-orbit-card','unifi-command-center-card','action-button-card','animated-gate-card','climate-control-card','home-connect-washer-card','hp-printer-card','media-player-card','temperature-humidity-card'];
const names=Object.keys(paletteCatalog.palettes),accent=c=>'color-mix(in srgb,'+c+' 76%,var(--primary-text-color,#202b3c))';
export function applyCardPalettes(source,id){
 const c=[...manifest.components,...manifest.nativeComponents].find(c=>c.id===id);if(!c)throw Error('Unknown palette component: '+id);
 if(c.types.every(t=>fallbackPaletteTypes.includes(t)))return source;
 if(id==='lovelace-luma-control-card'){
  const marker="lavender:'#8059c7'}";if(source.split(marker).length!==2)throw Error('Luma palette contract changed');
  return source.replace(marker,"lavender:'#8059c7',"+names.map(n=>n+':'+JSON.stringify(accent(paletteCatalog.palettes[n].colors[0]))).join(',')+'}').replace('Choose auto, aurora, ocean, sunset or lavender.','Choose Auto or a listed Orbit palette.');
 }
 let lists=0;source=source.replace(/\[(?:'aurora'|"aurora")\s*,\s*(?:'ocean'|"ocean")\s*,\s*(?:'sunset'|"sunset")\s*,\s*(?:'lavender'|"lavender")(?:\s*,\s*"rainbow")?\]/g,s=>{lists++;const old=JSON.parse(s.replaceAll("'",'"'));return JSON.stringify([...old,...names]);});
 if(!lists)throw Error('Palette list contract changed: '+id);
 if(id==='lovelace-sensor-meter-card')source=source.replace('teal: "aurora", ','');
 const selector=id==='orbit-chips'?'.chip[data-palette=ocean]':(/ha-card\[data-palette=["']?ocean/.test(source)?source.match(/ha-card\[data-palette=["']?ocean["']?\]/)[0]:'[data-palette=ocean]');
 if(source.split(selector).length!==2)throw Error('Palette CSS contract changed: '+id);
 const css=names.map(name=>{const colors=paletteCatalog.palettes[name].colors;if(id==='orbit-chips')return'.chip[data-palette='+name+']{--chip-accent:'+accent(colors[0])+'}';const target=selector.startsWith('ha-card')?'ha-card':'';return target+'[data-palette='+name+']{'+colors.map((v,i)=>(id==='ha-vacuum-commander-card'?['--vac-a','--vac-b','--vac-c'][i]:'--accent'+(i?i+1:''))+':'+accent(v)).join(';')+'}'+(id==='lovelace-frigate-control-card'?'ha-card[data-palette='+name+'] .icon-wrap{color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff));box-shadow:none}':'');}).join('');
 return source.replace(selector,css+selector);
}
