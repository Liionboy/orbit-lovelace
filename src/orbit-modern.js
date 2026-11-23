/* Orbit Modern v0.4.1 — MIT. Optional, suite-owned presentation only. */
const orbitModern = (() => {
 const types = Object.keys(orbitModernProfiles),wrappedMethods=new WeakSet(),wrappedForms=new WeakSet(),wrappedFactories=new WeakSet(),originalFactories=new WeakMap();
 const field = {name:'design',default:'classic',selector:{select:{options:[{value:'classic',label:'Classic'},{value:'modern',label:'Modern · beta'}],mode:'dropdown'}}};
 const glowField = {name:'glow',default:false,selector:{boolean:{}}};
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
 :host([data-orbit-design=modern]) .shell.shell{padding:12px}
 :host([data-orbit-design=modern]) .summary{min-height:92px;gap:10px;padding-top:0;grid-template-columns:minmax(0,1fr) max-content}
 :host([data-orbit-design=modern]) .summary.no-shortcuts{grid-template-columns:1fr}
 :host([data-orbit-design=modern]) .room-icon{width:36px;height:36px;border-radius:11px;background:color-mix(in srgb,var(--accent) 10%,transparent)}
 :host([data-orbit-design=modern]) h2{position:static;overflow-wrap:anywhere;white-space:normal;font-size:15px;line-height:19px;font-weight:650;margin:6px 0 3px;letter-spacing:-.025em}
 :host([data-orbit-design=modern]) .reading{font-size:11px;line-height:16px;min-height:18px}
 :host([data-orbit-design=modern]) .quick{width:44px;height:44px;border-radius:12px}
 :host([data-orbit-design=modern]) .shortcuts{grid-template-columns:repeat(2,44px);gap:4px}
 :host([data-orbit-design=modern]) .shortcuts.count-1,
 :host([data-orbit-design=modern]) .shortcuts.count-2{grid-template-columns:44px}
 :host([data-orbit-design=modern]) .summary:has(.humidity-status){padding-bottom:0}
 :host([data-orbit-design=modern]) .humidity-status{position:relative}
 :host([data-orbit-design=modern]) .action{width:44px;height:44px}
 @container room-orbit (max-width:216px){
  :host([data-orbit-design=modern]) .summary{grid-template-columns:minmax(0,1fr);min-height:0;gap:8px}
  :host([data-orbit-design=modern]) .shortcuts:is(.count-1,.count-2,.count-3){grid-template-columns:repeat(auto-fit,44px)}
 }
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
 function attachPalette(card,type){
  if(!card.shadowRoot||!orbitFallbackPaletteTypes.includes(type))return;
  const palette=card._orbitPalette;if(!palette){if(card._orbitPaletteSheet)card.shadowRoot.adoptedStyleSheets=card.shadowRoot.adoptedStyleSheets.filter(s=>s!==card._orbitPaletteSheet);return;}
  const legacy={aurora:['#078f72','#27b7b0'],ocean:['#1477c9','#22a7c7'],sunset:['#cf573e','#e79a55'],lavender:['#8059c7','#ab88df']};
  const colors=orbitPaletteCatalog[palette]?.colors||legacy[palette],color='color-mix(in srgb,'+colors[0]+' 76%,var(--primary-text-color,#202b3c))';
  const heading=orbitModernProfiles[type].heading,scope=':host([data-orbit-palette][data-orbit-palette="'+palette+'"]) ';
  const css=scope+'ha-card{border-top:2px solid '+color+'}'+(heading?scope+heading+'{color:'+color+'}':'')+(type.startsWith('unifi')?':host([data-orbit-palette="'+palette+'"]) {--orbit-accent:'+color+';--orbit-accent-2:'+colors[1]+'}':'')+(type==='media-player-card'||type==='action-button-card'?scope+'.shell.shell{--accent:'+color+'}':'');
  card._orbitPaletteSheet||=new CSSStyleSheet();if(card._orbitPaletteLast!==palette){card._orbitPaletteSheet.replaceSync(css);card._orbitPaletteLast=palette;}if(!card.shadowRoot.adoptedStyleSheets.includes(card._orbitPaletteSheet))card.shadowRoot.adoptedStyleSheets=[...card.shadowRoot.adoptedStyleSheets,card._orbitPaletteSheet];
 }
 function paletteForm(form,type){const options=Object.keys(orbitPaletteCatalog);let found=false;const schema=form.schema.map(f=>{if(f.name!=='palette')return f;found=true;const select=f.selector.select,old=select.options;return{...f,selector:{select:{...select,options:[...old,...options.filter(n=>!old.some(o=>(o.value??o)===n))]}}};});if(!found&&orbitFallbackPaletteTypes.includes(type))schema.push({name:'palette',selector:{select:{options:['aurora','ocean','sunset','lavender',...options],mode:'dropdown'}}});return{...form,schema};}
 function attachGlow(card,type){
  const root=card.shadowRoot;if(!root)return;
  if(!card._orbitGlow){if(card._orbitGlowSheet&&root.adoptedStyleSheets)root.adoptedStyleSheets=root.adoptedStyleSheets.filter(s=>s!==card._orbitGlowSheet);root.querySelector?.('style[data-orbit-glow]')?.remove();return;}
  const legacy={aurora:'#078f72',ocean:'#1477c9',sunset:'#cf573e',lavender:'#8059c7'},base=orbitPaletteCatalog[card._orbitGlowPalette]?.colors[0]||legacy[card._orbitGlowPalette]||'var(--orbit-theme-accent,var(--primary-color,#078f72))';
  const color='color-mix(in srgb,'+base+' 80%,var(--primary-text-color,#202b3c))',scope=':host([data-orbit-glow][data-orbit-glow="true"]) ';
  const shadow='0 0 0 1px color-mix(in srgb,'+color+' 20%,transparent),0 0 18px 1px color-mix(in srgb,'+color+' 18%,transparent),0 6px 22px color-mix(in srgb,'+color+' 10%,transparent)';
  // Collections/headings remain unframed; Chips use their semantic/local accent.
  const css=type==='ha-title-orbit-card'?scope+'.title,'+scope+'.title-icon{text-shadow:0 0 16px color-mix(in srgb,'+color+' 35%,transparent);filter:drop-shadow(0 0 5px color-mix(in srgb,'+color+' 24%,transparent))}':type==='ha-chips-orbit-card'?scope+'.chip.chip::before{box-shadow:0 0 0 1px color-mix(in srgb,var(--chip-accent) 18%,transparent),0 0 12px color-mix(in srgb,var(--chip-accent) 22%,transparent)}':scope+'ha-card{box-shadow:'+shadow+'}';
  if(typeof CSSStyleSheet!=='undefined'&&CSSStyleSheet.prototype.replaceSync&&'adoptedStyleSheets' in root){card._orbitGlowSheet||=new CSSStyleSheet();if(card._orbitGlowCSS!==css){card._orbitGlowSheet.replaceSync(css);card._orbitGlowCSS=css;}if(!root.adoptedStyleSheets.includes(card._orbitGlowSheet))root.adoptedStyleSheets=[...root.adoptedStyleSheets,card._orbitGlowSheet];}
  else{let style=root.querySelector('style[data-orbit-glow]');if(!style){style=document.createElement('style');style.dataset.orbitGlow='';root.append(style);}if(style.textContent!==css)style.textContent=css;}
 }
 function attach(card,type){
  type=types.includes(card.localName)?card.localName:type;
  attachPalette(card,type);
  attachGlow(card,type);
  if(!card.shadowRoot||card.getAttribute('data-orbit-design')!=='modern')return;
  const root=card.shadowRoot;
  if(typeof CSSStyleSheet!=='undefined'&&CSSStyleSheet.prototype.replaceSync&&'adoptedStyleSheets' in root){
   if(!card._orbitModernSheet){card._orbitModernSheet=new CSSStyleSheet();card._orbitModernSheet.replaceSync(cssFor(type));}
   if(root.adoptedStyleSheets.at(-1)!==card._orbitModernSheet)root.adoptedStyleSheets=[...root.adoptedStyleSheets.filter(s=>s!==card._orbitModernSheet),card._orbitModernSheet];
  }else{let style=root.querySelector('style[data-orbit-modern]');if(!style){style=document.createElement('style');style.dataset.orbitModern='';style.textContent=cssFor(type);root.append(style);}else if(style.nextSibling)root.append(style);}
 }
 function cssFor(type){
  const profile=orbitModernProfiles[type],scope=':host([data-orbit-design=modern]:not([data-orbit-layout=compact])) ';
  const rule=(selector,body)=>selector?selector.split(',').map(s=>scope+s.trim()).join(',')+'{'+body+'}':'';
  const perCard=rule(profile.heading,'font-weight:650;letter-spacing:-.02em')+rule(profile.icon,'border-radius:12px;box-shadow:none;outline:none')+rule(profile.surface,'border-radius:12px;box-shadow:none')+(profile.css?profile.css.replace(/(^|})([^{}]+){/g,(_,start,selectors)=>start+selectors.split(',').map(s=>':host([data-orbit-design=modern]) '+s.trim()).join(',')+'{'):'');
  const specific=type==='ha-room-orbit-card'?styles[type].replaceAll(':host([data-orbit-design=modern])',scope.trim()):(styles[type]||'');
  const narrow=profile.narrowContainer?'@container '+profile.narrowContainer+' (max-width:240px){:host([data-orbit-design=modern]) .shell.shell{padding:12px}}':'';
  return common+perCard+specific+narrow+(type==='ha-room-orbit-card'?':host([data-orbit-design=modern]) .quick.quick,:host([data-orbit-design=modern]) .action.action{min-height:44px;height:44px}':'');
 }
 class ModernEditor extends HTMLElement{
  constructor(){super();this.attachShadow({mode:'open'});this.shadowRoot.innerHTML='<style>label{display:grid;gap:8px;margin-bottom:16px;color:var(--primary-text-color);font:inherit}select{min-height:44px;padding:8px;border:1px solid var(--divider-color);border-radius:10px;background:var(--card-background-color);color:inherit;font:inherit}.glow{display:flex;align-items:center;min-height:44px}input{width:22px;height:22px}</style><label>Card design<select aria-label="Card design"><option value="classic">Classic</option><option value="modern">Modern · beta</option></select></label><label class="glow"><input type="checkbox" aria-label="Glow">Glow</label><div id="editor"></div>';this._glow=this.shadowRoot.querySelector('input');this._glow.addEventListener('change',()=>{this._config={...this._config,glow:this._glow.checked};this._emit();});this._select=this.shadowRoot.querySelector('select');this._select.addEventListener('change',()=>{this._config={...this._config,design:this._select.value};this._emit();});}
  async initialize(factory,type){this._paletteEnabled=orbitFallbackPaletteTypes.includes(type);if(this._paletteEnabled){const label=document.createElement('label');label.textContent='Orbit palette';this._paletteSelect=document.createElement('select');this._paletteSelect.setAttribute('aria-label','Orbit palette');for(const value of ['', 'aurora','ocean','sunset','lavender',...Object.keys(orbitPaletteCatalog)])this._paletteSelect.add(new Option(value||'Existing behavior',value));label.append(this._paletteSelect);this.shadowRoot.querySelector('#editor').before(label);this._paletteSelect.addEventListener('change',()=>{this._config={...this._config,palette:this._paletteSelect.value};this._emit();});}this._child=await factory();this._child.addEventListener('config-changed',e=>{e.stopPropagation();if(!e.detail?.config)return;this._config={...e.detail.config,...(this._config?.design!=null?{design:this._config.design}:{}),...(this._paletteEnabled&&this._config?.palette!=null?{palette:this._config.palette}:{}),...(this._config?.glow!=null?{glow:this._config.glow}:{})};this._emit();});this.shadowRoot.querySelector('#editor').append(this._child);this._sync();}
  _emit(){this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:{...this._config}},bubbles:true,composed:true}));}
  setConfig(config){this._config={...config};this._sync();}
  set hass(value){this._hass=value;if(this._child)this._child.hass=value;}
  _sync(){if(!this._config)return;this._select.value=this._config.design||'classic';this._glow.checked=this._config.glow===true;if(this._child){const next={...this._config};delete next.design;delete next.glow;if(this._paletteEnabled){delete next.palette;this._paletteSelect.value=this._config.palette||'';}this._child.setConfig(next);if(this._hass)this._child.hass=this._hass;}}
 }
 // Installed before definition, so cached callbacks retain the original lifecycle.
 function prepare(type,C){
  if(!types.includes(type))return C;
  const p=C.prototype,original=p.setConfig;
  if(!wrappedMethods.has(original)){p.setConfig=function(config){
   if(!config||typeof config!=='object'||Array.isArray(config))return original.call(this,config);
   const glow=config.glow??false;if(typeof glow!=='boolean')throw Error('glow must be a boolean.');
   const design=config.design??'classic';if(!['classic','modern'].includes(design))throw Error('design must be classic or modern.');
   const palette=orbitFallbackPaletteTypes.includes(type)?config.palette:undefined;if(palette!=null&&palette!==''&&!['aurora','ocean','sunset','lavender',...Object.keys(orbitPaletteCatalog)].includes(palette))throw Error('Invalid Orbit palette.');const next={...config};delete next.design;delete next.glow;if(orbitFallbackPaletteTypes.includes(type))delete next.palette;const signature=JSON.stringify(next);
   const result=signature===this._orbitModernSignature&&(design!==this._orbitModernDesign||palette!==this._orbitPalette||glow!==this._orbitGlow)?undefined:original.call(this,next);
   this._orbitPalette=palette;if(palette)this.setAttribute('data-orbit-palette',palette);else this.removeAttribute('data-orbit-palette');this._orbitModernSignature=signature;
   this._orbitModernDesign=design;this._orbitGlow=glow;this._orbitGlowPalette=config.palette;if(glow)this.setAttribute('data-orbit-glow','true');else this.removeAttribute('data-orbit-glow');
   if(design==='modern')this.setAttribute('data-orbit-design','modern');else this.removeAttribute('data-orbit-design');
   attach(this,type);return result;
  };wrappedMethods.add(p.setConfig);}
  for(const name of ['_render','_build','_draw','_paint','draw','render','updated','connectedCallback'])if((typeof p[name]==='function'||name==='updated'&&typeof p.requestUpdate==='function')&&!wrappedMethods.has(p[name])){const method=p[name];p[name]=function(...args){const result=method?.apply(this,args);attach(this,type);return result;};wrappedMethods.add(p[name]);}
  if(typeof C.getConfigForm==='function'){if(!wrappedForms.has(C.getConfigForm)){const form=C.getConfigForm;C.getConfigForm=function(...args){const current=paletteForm(form.apply(this,args),type);return{...current,schema:[field,glowField,...current.schema.filter(s=>s.name!=='design'&&s.name!=='glow')],computeLabel:s=>s.name==='design'?'Card design':s.name==='glow'?'Glow':current.computeLabel?.(s),computeHelper:s=>s.name==='design'?'Modern beta changes appearance only. Classic preserves the stable design.':s.name==='glow'?'Optional decorative palette glow. Device state is unchanged.':current.computeHelper?.(s)};};wrappedForms.add(C.getConfigForm);}}
  else if(typeof C.getConfigElement==='function'&&!wrappedFactories.has(C.getConfigElement)){const factory=C.getConfigElement;C.getConfigElement=function(...args){if(!window.customElements.get('orbit-modern-config-editor'))window.customElements.define('orbit-modern-config-editor',ModernEditor);const child=factory.apply(this,args);if(child instanceof ModernEditor)return child;const editor=document.createElement('orbit-modern-config-editor');editor.initialize(()=>child,type);return editor;};wrappedFactories.add(C.getConfigElement);originalFactories.set(C.getConfigElement,factory);}
  return C;
 }
 // Let Compact recognize its own inherited factory before installing Modern.
 // Otherwise a subclass gains Modern > Compact > Modern > Compact editors.
 function beforeCompact(C){const factory=C.getConfigElement;if(!Object.hasOwn(C,'getConfigElement')&&originalFactories.has(factory))Object.defineProperty(C,'getConfigElement',{value:originalFactories.get(factory),writable:true,configurable:true});return C;}
 return{prepare,beforeCompact,types};
})();
