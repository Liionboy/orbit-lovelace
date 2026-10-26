/* Suite-owned compact presentation adapter v0.2.0 — MIT. */
const orbitCompact = (() => {
 let sequence = 0;
 const installed = new Set(),wrappedEditors=new WeakSet();
 const field = {name:"layout",default:"normal",selector:{select:{options:[{value:"normal",label:"Normal"},{value:"compact",label:"Compact"}],mode:"dropdown"}}};
 const baseCSS = `:host([data-orbit-layout="compact"]){display:block;min-width:0;max-width:100%;container:orbit-compact/inline-size}
 :host([data-orbit-layout="compact"]) .orbit-compact-disclosure{display:block;min-height:44px;width:100%;margin:8px 0 0;padding:8px;border:1px solid var(--divider-color,#dfe5eb);border-radius:10px;background:var(--card-background-color,#fff);color:var(--primary-text-color,#202b3c);font:inherit;font-size:12px;cursor:pointer}
 :host([data-orbit-layout="compact"]) .orbit-compact-disclosure:focus-visible{outline:2px solid var(--primary-color,#5565da);outline-offset:2px}
 :host([data-orbit-layout="compact"]:not([data-orbit-details-open])) [data-orbit-detail]{display:none!important}
 :host([data-orbit-layout="compact"]) :is(.power,.toggle,.step-button,.stepper,.confirm-button,.controls-toggle,.control-btn,.ctrl-btn,.action-btn){min-height:44px;min-width:44px}
 :host([data-orbit-layout="compact"]) :is(.title,.header-title,.metric-value,.reading-value,.info-value,.capacity,.state-value){white-space:normal;text-overflow:clip;overflow-wrap:anywhere;max-width:100%}
 @media(prefers-reduced-motion:reduce){:host([data-orbit-layout="compact"]) *{animation:none!important;transition:none!important}}`;
 function cssFor(profile){const scope=css=>css.replace(/(^|})([^{}]+){/g,(_,start,selectors)=>start+selectors.split(",").map(s=>":host([data-orbit-layout=compact]) "+s.trim()).join(",")+"{");return baseCSS+scope(profile.css)+(profile.narrowCSS?"@container orbit-compact (max-width:210px){"+scope(profile.narrowCSS)+"}":"")+scope(profile.densityCSS||"");}
 function attachStyle(card,profile){
  const root=card.shadowRoot;if(!root||!card._orbitCompact)return;
  if(typeof CSSStyleSheet!=="undefined"&&CSSStyleSheet.prototype.replaceSync&&"adoptedStyleSheets" in root){
   if(!card._orbitSheet){card._orbitSheet=new CSSStyleSheet();card._orbitSheet.replaceSync(cssFor(profile));}
   if(!root.adoptedStyleSheets.includes(card._orbitSheet))root.adoptedStyleSheets=[...root.adoptedStyleSheets,card._orbitSheet];
  }else if(!root.querySelector("style[data-orbit-compact]")){const style=document.createElement("style");style.dataset.orbitCompact="";style.textContent=cssFor(profile);root.append(style);}
 }
 function synchronize(card,profile){
  profile=card._orbitProfile||profile;
  if(!card._orbitCompact||!card.isConnected)return;attachStyle(card,profile);
  if(!profile.details?.length)return;const root=card.shadowRoot;if(!root)return;
  const targets=profile.details.flatMap(s=>[...root.querySelectorAll(s)]);
  for(let i=0;i<targets.length;i++){const target=targets[i];if(!target.hasAttribute("data-orbit-detail"))target.setAttribute("data-orbit-detail","");if(!target.id)target.id=card._orbitDetailId+"-"+i;}
  let button=root.querySelector(".orbit-compact-disclosure");if(!targets.length){button?.remove();return;}
  if(!button){button=document.createElement("button");button.type="button";button.className="orbit-compact-disclosure";button.addEventListener("click",event=>{event.stopPropagation();card.toggleAttribute("data-orbit-details-open");synchronize(card,profile);});(root.querySelector(profile.footer||".shell")||root.querySelector("ha-card")||root).append(button);}
  const expanded=card.hasAttribute("data-orbit-details-open"),text=expanded?"Hide details":"Show details";
  if(button.textContent!==text)button.textContent=text;
  if(button.getAttribute("aria-expanded")!==String(expanded))button.setAttribute("aria-expanded",String(expanded));
  const ids=targets.map(n=>n.id).join(" ");if(button.getAttribute("aria-controls")!==ids)button.setAttribute("aria-controls",ids);
 }
 function watch(card,profile){
  profile=card._orbitProfile||profile;
  if(!card._orbitCompact||!card.shadowRoot)return;synchronize(card,profile);
  if(!card._orbitObserver){card._orbitObserver=new MutationObserver(()=>synchronize(card,profile));card._orbitObserver.observe(card.shadowRoot,{childList:true,subtree:true});}
 }
 function stop(card){card._orbitObserver?.disconnect();card._orbitObserver=null;}
 class CompactEditor extends HTMLElement{
  constructor(){super();this.attachShadow({mode:"open"});this.shadowRoot.innerHTML=`<style>:host{display:block}label{display:grid;gap:6px;margin:0 0 16px;font:inherit;color:var(--primary-text-color)}select{min-height:44px;width:100%;padding:8px;border:1px solid var(--divider-color,#aaa);border-radius:8px;background:var(--card-background-color,#fff);color:inherit;font:inherit}</style><label>Card layout<select aria-label="Card layout"><option value="normal">Normal</option><option value="compact">Compact</option></select></label><div id="original"></div>`;this._select=this.shadowRoot.querySelector("select");this._select.addEventListener("change",()=>{this._config={...this._config,layout:this._select.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:{...this._config}},bubbles:true,composed:true}));});}
  async initialize(factory){const token={};this._loadToken=token;const child=await factory();if(this._loadToken!==token||!child)return;this._child=child;child.addEventListener("config-changed",event=>{event.stopPropagation();if(!event.detail?.config)return;this._config={...event.detail.config,...(this._config?.layout!=null?{layout:this._config.layout}:{})};this.dispatchEvent(new CustomEvent("config-changed",{detail:{...event.detail,config:{...this._config}},bubbles:true,composed:true}));});this.shadowRoot.querySelector("#original").replaceChildren(child);this._sync();}
  setConfig(config){this._config={...config};this._sync();}
  set hass(value){this._hass=value;if(this._child)this._child.hass=value;}
  get hass(){return this._hass;}
  _sync(){if(!this._config)return;this._select.value=this._config.layout==="compact"?"compact":"normal";if(this._child){const config={...this._config};delete config.layout;this._child.setConfig(config);if(this._hass)this._child.hass=this._hass;}}
 }
 if(!customElements.get("orbit-compact-config-editor"))customElements.define("orbit-compact-config-editor",CompactEditor);
 function prepare(type,C,profile){
  if(installed.has(type))return C;const p=C.prototype,original=p.setConfig;if(typeof original!=="function")throw Error("Missing compact config contract: "+type);
  const welcome=type==="ha-welcome-orbit-card",person=type==="ha-person-orbit-card";
  p.setConfig=function(config){
   if(Array.isArray(config))return original.call(this,config);
   if(config?.layout!=null&&!["normal","compact",...(welcome?["classic"]:[])].includes(config.layout))throw Error("layout must be normal or compact.");
   const compact=config?.layout==="compact",next=config&&typeof config==="object"?{...config}:config;
   if(next&&typeof next==="object"){if(welcome){if(next.layout==="normal")next.layout="classic";}else delete next.layout;if(person&&compact)next.metrics_layout="compact";}
   // Pure presentation switches preserve subscriptions, pressed controls and drafts.
   // A real config change still takes the original validation/invalidation path.
   let signature;try{signature=JSON.stringify(next);}catch{}
   const presentationOnly=signature!==undefined&&signature===this._orbitConfigSignature&&this._orbitCompact!==compact;
   const result=presentationOnly?undefined:original.call(this,next);this._orbitConfigSignature=signature;stop(this);this._orbitProfile=profile;this._orbitCompact=compact;this._orbitDetailId||="orbit-compact-"+(++sequence);this.toggleAttribute("data-orbit-layout",compact);if(compact)this.setAttribute("data-orbit-layout","compact");else this.shadowRoot?.querySelector(".orbit-compact-disclosure")?.remove();this.removeAttribute("data-orbit-details-open");watch(this,profile);return result;
  };
  const connect=p.connectedCallback,disconnect=p.disconnectedCallback;
  p.connectedCallback=function(){const result=connect?.call(this);watch(this,profile);return result;};
  p.disconnectedCallback=function(){stop(this);return disconnect?.call(this);};
  const size=p.getCardSize,grid=p.getGridOptions;
  if(size)p.getCardSize=function(){const height=this._orbitCompact&&this.isConnected?this.getBoundingClientRect().height:0;return height>0?Math.max(1,Math.ceil(height/50)):size.call(this);};
  if(grid)p.getGridOptions=function(){const options=grid.call(this);if(!this._orbitCompact)return options;const{rows,min_rows,max_rows,...rest}=options;return rest;};
  // These callbacks are cached by the custom-element registry at define time.
  // Build calls install before define through prepare(), not after registration.
  if(typeof C.getConfigForm==="function"){const form=C.getConfigForm;C.getConfigForm=function(...args){const current=form.apply(this,args),layout={...field,...(welcome?{default:"classic",selector:{select:{options:[{value:"classic",label:"Normal"},{value:"compact",label:"Compact"}],mode:"dropdown"}}}:{})};return{...current,schema:[layout,...current.schema.filter(s=>s.name!=="layout")],computeLabel:s=>s.name==="layout"?"Card layout":current.computeLabel?.(s),computeHelper:s=>s.name==="layout"?"Compact is optional. Existing cards keep their layout until selected.":current.computeHelper?.(s)};};}
  else if(typeof C.getConfigElement==="function"&&wrappedEditors.has(C.getConfigElement)){}
  else if(typeof C.getConfigElement==="function"||typeof p.getConfigElement==="function"){const factory=C.getConfigElement||p.getConfigElement;C.getConfigElement=function(...args){const editor=document.createElement("orbit-compact-config-editor");editor.initialize(()=>factory.apply(this,args));return editor;};wrappedEditors.add(C.getConfigElement);}
  else if(type==="ha-vacuum-commander-card")C.getConfigForm=()=>({schema:[field,{name:"entity",selector:{entity:{filter:{domain:"vacuum"}}}},{name:"title",selector:{text:{}}},{name:"palette",selector:{select:{options:["aurora","ocean","sunset","lavender"],mode:"dropdown"}}},{name:"battery_entity",selector:{entity:{filter:{domain:"sensor"}}}},{name:"map_entity",selector:{entity:{filter:{domain:"camera"}}}}],computeLabel:({name})=>({layout:"Card layout",entity:"Vacuum",title:"Title",palette:"Orbit palette",battery_entity:"Battery sensor (optional)",map_entity:"Map camera (optional)"})[name]});
  else throw Error("Missing compact editor contract: "+type);
  installed.add(type);return C;
 }
 return{prepare,installed};
})();
