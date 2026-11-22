/* Orbit Modern v0.1.0 — MIT. Optional, suite-owned presentation only. */
const orbitModern = (() => {
 const types = ['ha-room-orbit-card','ha-chips-orbit-card','ha-temperature-orbit-card','frigate-control-card'];
 const field = {name:'design',default:'classic',selector:{select:{options:[{value:'classic',label:'Classic'},{value:'modern',label:'Modern · beta'}],mode:'dropdown'}}};
 const common = `
 :host([data-orbit-design=modern]){font-family:var(--ha-font-family-body,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);-webkit-font-smoothing:antialiased}
 :host([data-orbit-design=modern]) ha-card{border-radius:18px;border:1px solid color-mix(in srgb,var(--primary-text-color,#182335) 9%,transparent);box-shadow:0 2px 8px #10182a06;background:var(--ha-card-background,var(--card-background-color,#fff))}
 :host([data-orbit-design=modern]) .shell.shell{padding:18px;background:none}
 :host([data-orbit-design=modern]) .shell.shell:before{display:none}
 :host([data-orbit-design=modern]) .orbit-tile-icon{border-radius:12px;box-shadow:none;outline:none}
 :host([data-orbit-design=modern]) .orbit-tile-name{font-weight:650;letter-spacing:-.015em}
 :host([data-orbit-design=modern]) .orbit-compact-disclosure{border-radius:10px;box-shadow:none}
 :host([data-orbit-design=modern]) button:focus-visible,:host([data-orbit-design=modern]) a:focus-visible{outline:2px solid var(--primary-color,#078f72);outline-offset:3px}
 :host([data-orbit-design=modern][data-orbit-layout=compact]) .shell.shell{padding:12px}
 @media(prefers-reduced-motion:reduce){:host([data-orbit-design=modern]) *{animation:none!important;transition:none!important}}
 `;
 const styles = {
 'ha-room-orbit-card':`
 :host([data-orbit-design=modern]) .summary{min-height:108px;gap:16px;grid-template-columns:minmax(0,1fr) 96px}
 :host([data-orbit-design=modern]) .summary.no-shortcuts{grid-template-columns:1fr}
 :host([data-orbit-design=modern]) .room-icon{width:44px;height:44px;border-radius:13px;background:color-mix(in srgb,var(--accent) 10%,transparent)}
 :host([data-orbit-design=modern]) h2{font-size:17px;line-height:23px;font-weight:650;margin:10px 0 5px;letter-spacing:-.025em}
 :host([data-orbit-design=modern]) .reading{font-size:12px;line-height:20px;min-height:28px}
 :host([data-orbit-design=modern]) .quick{height:44px;min-height:44px;border-radius:12px}
 :host([data-orbit-design=modern]) .shortcuts{gap:6px}
 :host([data-orbit-design=modern]) .action{width:44px;height:44px}
 @container room-orbit (max-width:260px){:host([data-orbit-design=modern]) .shell.shell{padding:12px}:host([data-orbit-design=modern]) .summary{grid-template-columns:1fr;padding-top:0;gap:12px}:host([data-orbit-design=modern]) h2{position:static;font-size:15px;line-height:21px;white-space:normal;overflow-wrap:anywhere}:host([data-orbit-design=modern]) .shortcuts{grid-template-columns:repeat(2,minmax(0,1fr))}:host([data-orbit-design=modern]) .humidity-status{position:static}}
 `,
 'ha-temperature-orbit-card':`
 :host([data-orbit-design=modern]) .orbit{width:40px;height:40px;border-radius:12px;outline:none;background:color-mix(in srgb,var(--accent) 10%,transparent)}
 :host([data-orbit-design=modern]) .eyebrow{font-weight:600;letter-spacing:.09em;font-size:10px}
 :host([data-orbit-design=modern]) .name{font-weight:600;font-size:15px}
 :host([data-orbit-design=modern]) .reading{font-weight:600;letter-spacing:-.055em}
 :host([data-orbit-design=modern]) .history{border-top:0;padding-top:0;margin-top:22px}
 :host([data-orbit-design=modern]) .graph{height:82px}
 :host([data-orbit-design=modern]) .grid{stroke-dasharray:2 6;opacity:.65}
 :host([data-orbit-design=modern]) .trace{stroke-width:2.5}
 :host([data-orbit-design=modern]) .metric{background:color-mix(in srgb,var(--primary-text-color,#182335) 4%,transparent);border-radius:10px;padding:10px}
 :host([data-orbit-design=modern]) .metric span{font-size:10px}
 @container temperature (max-width:210px){:host([data-orbit-design=modern]) .shell.shell{padding:12px}:host([data-orbit-design=modern]) .orbit{width:32px;height:32px}:host([data-orbit-design=modern]) .name{font-size:13px}:host([data-orbit-design=modern]) .metric{padding:7px 5px}}
 `,
 'frigate-control-card':`
 :host([data-orbit-design=modern]) .icon-wrap{width:36px;height:36px;border-radius:10px;background:color-mix(in srgb,var(--accent) 10%,transparent);color:var(--accent);border:0;box-shadow:none}
 :host([data-orbit-design=modern]) .icon-wrap ha-icon{--mdc-icon-size:21px}
 :host([data-orbit-design=modern]) .title{font-size:16px;font-weight:650;line-height:22px;margin:0}
 :host([data-orbit-design=modern]) .eyebrow{font-size:9px;font-weight:600;color:var(--secondary-text-color,#637080);letter-spacing:.08em;margin-bottom:2px}
 :host([data-orbit-design=modern]) .camera-frame{border-radius:12px;margin-top:14px;border:0}
 :host([data-orbit-design=modern]) .sensor-grid{gap:0;margin-top:14px}
 :host([data-orbit-design=modern]) .sensor{border:0;border-radius:0;background:none;padding:4px 8px;gap:7px}
 :host([data-orbit-design=modern]) .sensor+.sensor{border-inline-start:1px solid var(--divider-color,#dfe5eb)}
 :host([data-orbit-design=modern]) .sensor-value{font-size:15px;font-weight:650;line-height:21px}
 :host([data-orbit-design=modern]) .sensor-label{font-size:11px;line-height:16px}
 :host([data-orbit-design=modern]) .pill{font-weight:600;box-shadow:none}
 :host([data-orbit-design=modern]) .pill .dot{box-shadow:none}
 @container frigate-card (max-width:360px){:host([data-orbit-design=modern]) .shell.shell{padding:12px}:host([data-orbit-design=modern]) .header{flex-wrap:wrap}:host([data-orbit-design=modern]) .sensor-grid{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:8px}:host([data-orbit-design=modern]) .sensor{padding:4px}:host([data-orbit-design=modern]) .sensor:nth-child(3){border-inline-start:0}}
 `,
 'ha-chips-orbit-card':`
 :host([data-orbit-design=modern]) ha-card{border:0;background:transparent;box-shadow:none}
 :host([data-orbit-design=modern]) .shell.shell,:host([data-orbit-design=modern][data-orbit-layout=compact]) .shell.shell{padding:2px 0}
 :host([data-orbit-design=modern]) .chip.chip:before{border-radius:12px;box-shadow:none;border-color:color-mix(in srgb,var(--primary-text-color,#182335) 10%,transparent)}
 :host([data-orbit-design=modern]) .chip.chip[data-active=true]:before{background:color-mix(in srgb,var(--chip-accent) 7%,var(--card-background-color,#fff));border-color:color-mix(in srgb,var(--chip-accent) 22%,transparent)}
 :host([data-orbit-design=modern]) .chip.chip .chip-name,:host([data-orbit-design=modern]) .chip.chip .chip-state{font-weight:550}
 `
 };
 function attach(card,type){
  if(!card.shadowRoot||card.getAttribute('data-orbit-design')!=='modern')return;
  const root=card.shadowRoot;
  if(typeof CSSStyleSheet!=='undefined'&&CSSStyleSheet.prototype.replaceSync&&'adoptedStyleSheets' in root){
   if(!card._orbitModernSheet){card._orbitModernSheet=new CSSStyleSheet();card._orbitModernSheet.replaceSync(cssFor(type));}
   if(root.adoptedStyleSheets.at(-1)!==card._orbitModernSheet)root.adoptedStyleSheets=[...root.adoptedStyleSheets.filter(s=>s!==card._orbitModernSheet),card._orbitModernSheet];
  }else{let style=root.querySelector('style[data-orbit-modern]');if(!style){style=document.createElement('style');style.dataset.orbitModern='';style.textContent=cssFor(type);root.append(style);}else if(style.nextSibling)root.append(style);}
 }
 function cssFor(type){
  const specific=type==='ha-room-orbit-card'?styles[type].replaceAll(':host([data-orbit-design=modern])',':host([data-orbit-design=modern]:not([data-orbit-layout=compact]))'):styles[type];
  return common+specific+(type==='ha-room-orbit-card'?':host([data-orbit-design=modern]) .quick.quick,:host([data-orbit-design=modern]) .action.action{min-height:44px;height:44px}':'');
 }
 class ModernEditor extends HTMLElement{
  constructor(){super();this.attachShadow({mode:'open'});this.shadowRoot.innerHTML='<style>label{display:grid;gap:8px;margin-bottom:16px;color:var(--primary-text-color);font:inherit}select{min-height:44px;padding:8px;border:1px solid var(--divider-color);border-radius:10px;background:var(--card-background-color);color:inherit;font:inherit}</style><label>Card design<select aria-label="Card design"><option value="classic">Classic</option><option value="modern">Modern · beta</option></select></label><div id="editor"></div>';this._select=this.shadowRoot.querySelector('select');this._select.addEventListener('change',()=>{this._config={...this._config,design:this._select.value};this._emit();});}
  async initialize(factory){this._child=await factory();this._child.addEventListener('config-changed',e=>{e.stopPropagation();if(!e.detail?.config)return;this._config={...e.detail.config,...(this._config?.design!=null?{design:this._config.design}:{})};this._emit();});this.shadowRoot.querySelector('#editor').append(this._child);this._sync();}
  _emit(){this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:{...this._config}},bubbles:true,composed:true}));}
  setConfig(config){this._config={...config};this._sync();}
  set hass(value){this._hass=value;if(this._child)this._child.hass=value;}
  _sync(){if(!this._config)return;this._select.value=this._config.design||'classic';if(this._child){const next={...this._config};delete next.design;this._child.setConfig(next);if(this._hass)this._child.hass=this._hass;}}
 }
 // Installed before definition, so cached callbacks retain the original lifecycle.
 function prepare(type,C){
  if(!types.includes(type))return C;
  const p=C.prototype,original=p.setConfig;
  p.setConfig=function(config){
   if(!config||typeof config!=='object'||Array.isArray(config))return original.call(this,config);
   const design=config.design??'classic';if(!['classic','modern'].includes(design))throw Error('design must be classic or modern.');
   const next={...config};delete next.design;const signature=JSON.stringify(next);
   const result=signature===this._orbitModernSignature&&design!==this._orbitModernDesign?undefined:original.call(this,next);
   this._orbitModernSignature=signature;
   this._orbitModernDesign=design;
   if(design==='modern')this.setAttribute('data-orbit-design','modern');else this.removeAttribute('data-orbit-design');
   attach(this,type);return result;
  };
  for(const name of ['_render','_build','connectedCallback'])if(typeof p[name]==='function'){const method=p[name];p[name]=function(...args){const result=method.apply(this,args);attach(this,type);return result;};}
  if(typeof C.getConfigForm==='function'){const form=C.getConfigForm;C.getConfigForm=function(...args){const current=form.apply(this,args);return{...current,schema:[field,...current.schema],computeLabel:s=>s.name==='design'?'Card design':current.computeLabel?.(s),computeHelper:s=>s.name==='design'?'Modern beta changes appearance only. Classic preserves the stable design.':current.computeHelper?.(s)};};}
  else if(typeof C.getConfigElement==='function'){const factory=C.getConfigElement;C.getConfigElement=function(...args){if(!window.customElements.get('orbit-modern-config-editor'))window.customElements.define('orbit-modern-config-editor',ModernEditor);const editor=document.createElement('orbit-modern-config-editor');editor.initialize(()=>factory.apply(this,args));return editor;};}
  return C;
 }
 return{prepare,types};
})();
