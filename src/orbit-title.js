// Title Orbit 1.0.0 — suite-owned, MIT. Static section heading; no entities or actions.
const TITLE_DEFAULTS={title:'Rooms',subtitle:'',icon:'',palette:'aurora',alignment:'start',separator:false,heading_level:2};
function titleConfig(config){
 if(!config||typeof config!=='object'||Array.isArray(config))throw Error('Title Orbit requires an object configuration.');
 const c={...TITLE_DEFAULTS};for(const key of Object.keys(c))if(config[key]!=null)c[key]=config[key];
 for(const key of ['title','subtitle','icon'])if(typeof c[key]!=='string')throw Error(key+' must be text.');
 if(!c.title.trim())throw Error('Set a section title.');
 if(c.icon&&!/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(c.icon.trim()))throw Error('Choose a valid icon or leave it empty.');
 c.icon=c.icon.trim();if(!c.subtitle.trim())c.subtitle='';
 if(!['aurora','ocean','sunset','lavender'].includes(c.palette))throw Error('Invalid Orbit palette.');
 if(!['start','center','end'].includes(c.alignment))throw Error('Invalid title alignment.');
 if(typeof c.separator!=='boolean')throw Error('separator must be boolean.');
 if(!Number.isInteger(c.heading_level)||c.heading_level<1||c.heading_level>6)throw Error('Heading level must be an integer from1 to6.');
 return c;
}
const TITLE_CSS=`
:host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}[hidden]{display:none!important}
ha-card{display:block;min-width:0;background:transparent!important;border:0!important;box-shadow:none!important;--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}
ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#d65c42;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}
.shell{padding:12px 4px;min-width:0}.heading{display:flex;align-items:center;gap:10px;min-width:0}.title-icon{display:inline-flex;align-items:center;justify-content:center;flex:none;width:24px;height:24px;--mdc-icon-size:24px;color:var(--accent);background:none}.copy{min-width:0}.title{margin:0;font-family:var(--primary-font-family,inherit);font-size:22px;line-height:28px;font-weight:700;letter-spacing:-.02em;color:var(--primary-text-color,#202b3c);overflow-wrap:anywhere}.subtitle{margin:3px 0 0;font-size:13px;line-height:19px;font-weight:400;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere;white-space:pre-line}.separator{height:1px;margin-top:10px;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 55%,transparent),color-mix(in srgb,var(--accent2) 15%,transparent),transparent);border:0}
ha-card[data-alignment=center] .heading{justify-content:center}ha-card[data-alignment=end] .heading{justify-content:flex-end}ha-card[data-alignment=center] .copy{text-align:center}ha-card[data-alignment=end] .copy{text-align:end}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}`;
class TitleOrbitCard extends HTMLElement{
 constructor(){super();this.attachShadow({mode:'open'});}
 static getStubConfig(){return{title:'Rooms'};}
 static getConfigForm(){return{schema:[
  {name:'title',required:true,selector:{text:{}}},{name:'subtitle',selector:{text:{multiline:true}}},{name:'icon',selector:{icon:{}}},
  {name:'palette',selector:{select:{options:['aurora','ocean','sunset','lavender'],mode:'dropdown'}}},
  {name:'alignment',selector:{select:{options:['start','center','end'],mode:'dropdown'}}},
  {name:'separator',selector:{boolean:{}}},{name:'heading_level',selector:{number:{min:1,max:6,step:1,mode:'box'}}}
 ],computeLabel:({name})=>({title:'Section title',subtitle:'Subtitle (optional)',icon:'Icon (optional)',palette:'Orbit palette',alignment:'Text alignment',separator:'Show subtle separator',heading_level:'Heading level'})[name],computeHelper:({name})=>({title:'Plain text section heading. No templates, entities or device actions.',heading_level:'Semantic level1–6; default2. Visual size is controlled by Normal/Compact.'})[name]};}
 setConfig(config){const c=titleConfig(config);if(JSON.stringify(c)===this._signature)return;this._config=c;this._signature=JSON.stringify(c);if(!this._els)this._build();this._sync();}
 set hass(value){this._hass=value;}get hass(){return this._hass;}
 getCardSize(){return this._config?.subtitle?2:1;}
 getGridOptions(){return{columns:12,min_columns:3};}
 _build(){
  const style=document.createElement('style');style.textContent=TITLE_CSS;
  const card=document.createElement('ha-card'),shell=document.createElement('div'),heading=document.createElement('div'),icon=document.createElement('ha-icon'),copy=document.createElement('div'),title=document.createElement('h2'),subtitle=document.createElement('p'),separator=document.createElement('div');
  shell.className='shell';heading.className='heading';icon.className='title-icon';icon.setAttribute('aria-hidden','true');copy.className='copy';title.className='title';title.dir='auto';subtitle.className='subtitle';subtitle.dir='auto';separator.className='separator';separator.setAttribute('aria-hidden','true');
  copy.append(title,subtitle);heading.append(icon,copy);shell.append(heading,separator);card.append(shell);this.shadowRoot.append(style,card);this._els={card,copy,icon,title,subtitle,separator};
 }
 _sync(){
  const c=this._config,e=this._els;
  if(e.title.localName!=='h'+c.heading_level){const next=document.createElement('h'+c.heading_level);next.className='title';next.dir='auto';e.title.replaceWith(next);e.title=next;}
  e.title.textContent=c.title;e.subtitle.textContent=c.subtitle;e.subtitle.hidden=!c.subtitle.trim();e.icon.hidden=!c.icon;if(c.icon)e.icon.setAttribute('icon',c.icon);else e.icon.removeAttribute('icon');e.card.dataset.palette=c.palette;e.card.dataset.alignment=c.alignment;e.separator.hidden=!c.separator;
 }
}
if(!customElements.get('ha-title-orbit-card'))customElements.define('ha-title-orbit-card',TitleOrbitCard);
window.customCards ||= [];
if(!window.customCards.some(c=>c.type==='ha-title-orbit-card'))window.customCards.push({type:'ha-title-orbit-card',name:'Title Orbit Card',description:'Lightweight Orbit section heading with optional subtitle, icon and separator. No entities or actions.',preview:true});
