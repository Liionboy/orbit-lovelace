import {readFileSync,writeFileSync} from 'node:fs';import {fileURLToPath} from 'node:url';
import {profiles,profileVariables} from './theme-profiles.mjs';
export const palettes=JSON.parse(readFileSync(new URL('../themes/palettes.json',import.meta.url),'utf8'));
const rgb=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)).join(', ');
export function modeVariables(p,dark){
 const good=dark?'#78d2b0':'#13765c',warn=dark?'#f3c57d':'#8b5b12',bad=dark?'#ffa6a6':'#b33444',info=dark?'#9ac5ff':'#315fa4';
 const v={
 'primary-color':p.accent,'accent-color':p.accent2,'primary-background-color':p.bg,'secondary-background-color':p.raised,'card-background-color':p.surface,'ha-card-background':p.surface,'clear-background-color':p.bg,'lovelace-background':p.bg,
 'primary-text-color':p.text,'secondary-text-color':p.muted,'text-primary-color':dark?p.bg:'#ffffff','disabled-text-color':dark?'#82909b':'#75808a','divider-color':p.line,
 'rgb-primary-color':rgb(p.accent),'rgb-accent-color':rgb(p.accent2),'rgb-primary-text-color':rgb(p.text),'rgb-secondary-text-color':rgb(p.muted),'rgb-text-primary-color':rgb(dark?p.bg:'#ffffff'),'rgb-card-background-color':rgb(p.surface),
 'success-color':good,'warning-color':warn,'error-color':bad,'info-color':info,'state-unavailable-color':dark?'#82909b':'#75808a',
 'sidebar-background-color':p.surface,'sidebar-text-color':p.muted,'sidebar-icon-color':p.muted,'sidebar-selected-text-color':p.accent,'sidebar-selected-icon-color':p.accent,
 'app-header-background-color':p.bg,'app-header-text-color':p.text,'app-header-border-bottom':'1px solid '+p.line,'app-theme-color':p.bg,
 'ha-card-border-radius':'18px','ha-card-border-width':'1px','ha-card-border-color':p.line,'ha-card-box-shadow':dark?'0 4px 18px rgba(0, 0, 0, 0.16)':'0 3px 14px rgba(24, 36, 55, 0.05)',
 'ha-font-family-body':'Roboto, Noto, system-ui, sans-serif','ha-font-family-heading':'Roboto, Noto, system-ui, sans-serif',
 'input-fill-color':p.raised,'input-disabled-fill-color':p.bg,'input-ink-color':p.text,'input-label-ink-color':p.muted,'input-dropdown-icon-color':p.muted,'input-idle-line-color':p.line,'input-hover-line-color':p.accent,'input-outlined-idle-border-color':p.line,'input-outlined-hover-border-color':p.accent,'input-disabled-ink-color':dark?'#82909b':'#75808a',
 'slider-color':p.accent,'slider-secondary-color':p.accent2,'slider-track-color':p.line,'scrollbar-thumb-color':p.line,
 'mdc-theme-primary':p.accent,'mdc-theme-secondary':p.accent2,'mdc-theme-background':p.bg,'mdc-theme-surface':p.surface,'mdc-theme-on-surface':p.text,'mdc-theme-on-primary':dark?p.bg:'#ffffff','mdc-theme-on-secondary':dark?p.bg:'#ffffff','mdc-theme-error':bad,'mdc-dialog-heading-ink-color':p.text,'mdc-dialog-content-ink-color':p.text,
 'ha-color-text-primary':p.text,'ha-color-text-secondary':p.muted,'ha-color-text-disabled':dark?'#82909b':'#75808a','ha-color-text-link':p.accent,'ha-color-focus':p.accent,
 'ha-color-surface-default':p.surface,'ha-color-surface-low':p.bg,'ha-color-surface-lower':p.raised,'ha-color-on-surface-default':p.text,'ha-color-form-background':p.raised,'ha-color-form-background-hover':p.line,'ha-color-form-background-disabled':p.bg,
 'ha-color-fill-primary-quiet-resting':p.raised,'ha-color-fill-primary-quiet-hover':p.line,'ha-color-fill-primary-quiet-active':p.raised,'ha-color-on-primary-quiet':p.accent,'ha-color-fill-primary-normal-resting':p.raised,'ha-color-fill-primary-normal-hover':p.line,'ha-color-fill-primary-normal-active':p.raised,'ha-color-on-primary-normal':p.accent,'ha-color-fill-primary-loud-resting':p.button,'ha-color-fill-primary-loud-hover':p.button,'ha-color-fill-primary-loud-active':p.button,'ha-color-on-primary-loud':'#ffffff',
 'ha-color-fill-neutral-quiet-resting':p.surface,'ha-color-fill-neutral-quiet-hover':p.raised,'ha-color-fill-neutral-quiet-active':p.raised,'ha-color-on-neutral-quiet':p.muted,'ha-color-fill-neutral-normal-resting':p.raised,'ha-color-fill-neutral-normal-hover':p.line,'ha-color-fill-neutral-normal-active':p.raised,'ha-color-on-neutral-normal':p.text,'ha-color-border-neutral-quiet':p.line,'ha-color-border-neutral-normal':p.muted,'ha-color-border-primary-loud':p.accent,
 'orbit-theme-accent':p.accent,'orbit-theme-accent-2':p.accent2,'orbit-theme-accent-3':p.accent2,'orbit-theme-card-radius':'18px','orbit-theme-shadow':dark?'0 4px 18px rgba(0, 0, 0, 0.16)':'0 3px 14px rgba(24, 36, 55, 0.05)',
 'orbit-theme-shell-background':'transparent','orbit-theme-overlay-background':'transparent','orbit-theme-strip-background':'linear-gradient(90deg, '+p.accent+', '+p.accent2+')','orbit-theme-brand-background':p.button,'orbit-theme-control-background':p.button,'orbit-theme-on-accent':'#ffffff',
 'orbit-theme-line':p.line,'orbit-theme-muted':p.muted,'orbit-theme-metric-background':p.raised,'orbit-theme-temperature-color':dark?'#efb58f':'#9b4b2e','orbit-theme-humidity-color':dark?'#8dd3d1':'#126c73',
 };
 return v;
}
function familyMode(f,dark){
 const v=modeVariables(f[dark?'dark':'light'],dark);
 // Omit neutralizers, so each card paints its own local palette gradients.
 // Theme-scope var(--accent) would resolve too early and flatten local palettes.
 if(f.decoration==='native'){
  for(const key of ['shell-background','overlay-background','strip-background'])delete v['orbit-theme-'+key];
  v['ha-card-box-shadow']=v['orbit-theme-shadow']=dark?'0 8px 28px rgba(0, 0, 0, 0.24)':'0 6px 22px rgba(48, 39, 104, 0.09)';
 }
 return v;
}
export function definitions(){return Object.fromEntries(palettes.families.flatMap(f=>{const modes={light:familyMode(f,false),dark:familyMode(f,true)};return [[f.name,{modes}],...profiles.map(profile=>{const name=f.name+' '+profile,vars=profileVariables(name,profile),fonts=Object.fromEntries(Object.entries(vars).filter(([k])=>k.startsWith('ha-font-')));return[name,{...vars,modes:Object.fromEntries(Object.entries(modes).map(([m,v])=>[m,{...v,...fonts}]))}];})];}));}
const NL=String.fromCharCode(10);
export function yaml(){let out='# Orbit Themes v'+palettes.version+' — generated by scripts/themes.mjs. MIT.'+NL+'# '+palettes.families.length+' families; existing names retained. Mobile/iOS Mobile header styling requires card-mod.'+NL;for(const [name,theme] of Object.entries(definitions())){out+=JSON.stringify(name)+':'+NL;for(const[key,value]of Object.entries(theme).filter(([key])=>key!=='modes'))out+='  '+key+': '+JSON.stringify(value)+NL;out+='  modes:'+NL;for(const [mode,vars] of Object.entries(theme.modes)){out+='    '+mode+':'+NL;for(const [key,value]of Object.entries(vars))out+='      '+key+': '+JSON.stringify(value)+NL;}}return out;}
export function buildThemes(){const themes=definitions();writeFileSync(new URL('../themes/orbit-themes.yaml',import.meta.url),yaml());writeFileSync(new URL('../themes/catalog.json',import.meta.url),JSON.stringify({version:palettes.version,themes},null,2)+NL);return themes;}
if(process.argv[1]===fileURLToPath(import.meta.url)){const themes=buildThemes();console.log('Built '+Object.keys(themes).length+' selectable Orbit names / '+Object.keys(themes).length*2+' native modes.');}
