// Suite-owned, guarded build-only palette expansion. Imported/native sources stay immutable.
import {readFileSync} from 'node:fs';
export const paletteCatalog=JSON.parse(readFileSync(new URL('../src/card-palettes.json',import.meta.url),'utf8'));
export const paletteTypes=['ha-room-orbit-card','ha-chips-orbit-card','ha-temperature-orbit-card','frigate-control-card'];
const ids=['ha-room-orbit-card','orbit-chips','orbit-temperature','lovelace-frigate-control-card'];
const existing=['aurora','ocean','sunset','lavender'];
export function applyCardPalettes(source,id){
 if(!ids.includes(id))return source;
 const names=Object.keys(paletteCatalog.palettes),all=JSON.stringify([...existing,...names]);
 for(const [name,p]of Object.entries(paletteCatalog.palettes))if(!/^[a-z]+$/.test(name)||!Array.isArray(p.colors)||p.colors.length!==3||!p.colors.every(c=>/^#[a-f\d]{6}$/i.test(c)))throw Error('Invalid palette catalog: '+name);
 const replace=(before,after,count=1)=>{if(source.split(before).length!==count+1)throw Error('Palette contract changed: '+id+' '+before);source=source.replaceAll(before,after);};
 const accent=c=>'color-mix(in srgb,'+c+' 76%,var(--primary-text-color,#202b3c))';
 // Insert before state/availability rules: semantic colors must keep precedence.
 const css=names.map(name=>{
  const colors=paletteCatalog.palettes[name].colors;
  return id==='orbit-chips'?'.chip[data-palette='+name+']{--chip-accent:'+accent(colors[0])+'}':'ha-card[data-palette='+name+']{'+colors.map((c,i)=>'--accent'+(i?i+1:'')+':'+accent(c)).join(';')+'}'+(id==='lovelace-frigate-control-card'?'ha-card[data-palette='+name+'] .icon-wrap{color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff));box-shadow:none}':'');
 }).join('');
 if(id==='ha-room-orbit-card'){
  replace("const PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];",'const PALETTES = '+all+';');
  replace('ha-card[data-palette=ocean]',css+'ha-card[data-palette=ocean]');
 }else if(id==='orbit-temperature'){
  replace("['aurora','ocean','sunset','lavender']",all,2);
  replace('ha-card[data-palette=ocean]',css+'ha-card[data-palette=ocean]');
 }else if(id==='orbit-chips'){
  replace("const CHIP_PALETTES=['aurora','ocean','sunset','lavender'];",'const CHIP_PALETTES='+all+';');
  replace('.chip[data-active=false]',css+'.chip[data-active=false]');
 }else{
  replace('["aurora", "ocean", "sunset", "lavender"]',all,2);
  replace('ha-card[data-palette="ocean"]',css+'ha-card[data-palette="ocean"]');
 }
 return source;
}
