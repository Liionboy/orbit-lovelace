// Build-only opt-in CSS hooks. Pinned upstream files are never rewritten.
export const bridgeVersion=1;
const accents={accent:'accent',accent2:'accent-2',accent3:'accent-3','vac-a':'accent','vac-b':'accent-2','vac-c':'accent-3'};
export function themeBridge(source,id){
 const hooks=[];
 // Only the first/base palette declaration is adapted. Explicit alternate palettes
 // and later state-derived temperature/activity overrides retain precedence.
 for(const [name,token]of Object.entries(accents)){
  const re=new RegExp('--'+name+':(#[a-fA-F0-9]{3,8}|var\\([^;{}]+\\))(?=;|})');
  source=source.replace(re,(all,value)=>{hooks.push(name);return '--'+name+':var(--orbit-theme-'+token+','+value+')';});
 }
 const tokenFor=(selector,property,body)=>{
  if(id==='temperature-humidity-card'){
   if(['.temperature','.humidity','.metric-badge','.humidity-ring:before'].includes(selector))return property==='background'?'metric-background':property==='border-color'?'line':null;
   if(selector.startsWith('.temperature .metric-'))return property==='color'?'temperature-color':null;
   if(selector.startsWith('.humidity .metric-'))return property==='color'?'humidity-color':null;
   if(selector==='.scale-labels')return property==='color'?'muted':null;
  }
  if(selector==='ha-card')return property==='border-radius'?'card-radius':property==='box-shadow'?'shadow':null;
  if(selector==='.shell')return ['background','background-color'].includes(property)?'shell-background':null;
  if(selector==='.shell:before'||selector==='.shell::before')return property==='background'?(/inset:\s*0/.test(body)?'overlay-background':'strip-background'):null;
  if(selector==='.brand-icon')return property==='background'?'brand-background':property==='color'?'on-accent':null;
  if(selector==='.eyebrow')return property==='color'?'accent':null;
  if(selector==='.control.primary'||selector==='.turn-on')return property==='background'?'control-background':property==='color'?'on-accent':null;
  return null;
 };
 // Match exact decorative selectors only; never replace state-specific colors,
 // user RGB data, graph gradients, heating/cooling, alarms or metric semantics.
 const blocks=/(?<![^}\n'"\x60{])\s*(ha-card|\.shell(?:::?before)?|\.brand-icon|\.eyebrow|\.control\.primary|\.turn-on|\.temperature(?: \.metric-(?:label|value|badge))?|\.humidity(?: \.metric-(?:label|value|badge))?|\.metric-badge|\.humidity-ring:before|\.scale-labels)\s*\{([^{}]*)\}/g;
 source=source.replace(blocks,(all,selector,body)=>{
  const updated=body.replace(/(^|;)(\s*)(background(?:-color)?|border-color|color|border-radius|box-shadow):\s*([^;]+)(?=;|$)/g,(declaration,prefix,space,property,value)=>{
   const token=tokenFor(selector,property,body);if(!token||value.includes('--orbit-theme-'))return declaration;
   hooks.push(selector+':'+property);return prefix+space+property+':var(--orbit-theme-'+token+','+value+')';
  });return all.replace(body,updated);
 });
 return {source,hooks,id};
}
