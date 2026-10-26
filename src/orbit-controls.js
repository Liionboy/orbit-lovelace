/* Orbit Select / Number controls v1.0.0 — MIT. First-party Orbit Lovelace source. */
const CONTROL_PALETTES = ['aurora', 'ocean', 'sunset', 'lavender'];
const controlIcon = value => typeof value === 'string' && /^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(value) ? value : '';
const controlDefaults = { entity: '', name: '', icon: '', palette: 'aurora', read_only: false };
const CONTROL_STYLE = `
:host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}
ha-card{display:block;container:orbit-control/inline-size;min-width:0;max-width:100%;overflow:hidden;border:1px solid var(--divider-color,#dfe5eb);border-radius:var(--orbit-theme-card-radius,20px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233716));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0);--control-fill:var(--orbit-theme-control-background,#13765c);--control-text:var(--orbit-theme-on-accent,#fff)}
ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7;--control-fill:#1468ac;--control-text:#fff}ha-card[data-palette=sunset]{--accent:#d65c42;--accent2:#ee973f;--control-fill:#b74732;--control-text:#fff}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8;--control-fill:#7350b1;--control-text:#fff}
.shell{position:relative;padding:16px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 70%))}.shell:before{content:"";position:absolute;left:20px;right:20px;top:0;height:2px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2)));pointer-events:none}
button,input,select{font:inherit;color:inherit;min-width:0}button,select{cursor:pointer}button{border:0}button:disabled,input:disabled,select:disabled{opacity:.55;cursor:not-allowed}button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.head{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.info{display:flex;align-items:center;gap:12px;min-width:0;flex:1;padding:0;background:transparent;text-align:left;border-radius:12px;min-height:44px}.orbit{display:grid;place-items:center;flex:none;width:44px;height:44px;border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent);outline:1px solid color-mix(in srgb,var(--accent) 25%,transparent);outline-offset:3px}.orbit ha-icon{--mdc-icon-size:24px}.copy{min-width:0}.eyebrow{display:block;font-size:9px;line-height:14px;font-weight:750;letter-spacing:.12em;text-transform:uppercase;color:var(--secondary-text-color,#637080)}.name{display:block;font-size:15px;line-height:21px;font-weight:750;overflow-wrap:anywhere}.badge{font-size:10px;line-height:16px;border-radius:20px;padding:3px 8px;color:var(--secondary-text-color,#637080);background:color-mix(in srgb,var(--accent) 8%,transparent);overflow-wrap:anywhere}
.readout{margin-top:16px;padding:12px;border:1px solid var(--divider-color,#dfe5eb);border-radius:12px;background:var(--orbit-theme-metric-background,color-mix(in srgb,var(--accent) 5%,transparent))}.caption{display:block;font-size:10px;line-height:15px;color:var(--secondary-text-color,#637080)}.value{display:block;font-size:24px;line-height:1.3;font-weight:720;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}.controls{margin-top:12px}.field{display:block;width:100%;min-height:44px;border:1px solid var(--divider-color,#dfe5eb);border-radius:11px;padding:10px;background:var(--input-fill-color,var(--card-background-color,#fff));font-size:14px}.field option{background:var(--card-background-color,#fff);color:var(--primary-text-color,#202b3c)}.meta{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-top:8px;font-size:10px;line-height:16px;color:var(--secondary-text-color,#637080)}.meta span{overflow-wrap:anywhere;min-width:0}.feedback,.draft{min-height:18px;margin-top:8px;font-size:11px;line-height:18px;overflow-wrap:anywhere;color:var(--secondary-text-color,#637080)}.feedback[data-kind=error]{color:var(--error-color,#b33444)}.feedback[data-kind=success]{color:var(--success-color,#13765c)}.draft:empty{display:none}.hint{font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}.hint:empty{display:none}[hidden]{display:none!important}
.range-row,.box-row{display:flex;align-items:center;gap:8px}.stepper{flex:none;min-width:44px;min-height:44px;border-radius:11px;background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--accent);font-size:22px}.slider{min-width:0;width:100%;flex:1;min-height:44px;accent-color:var(--accent);margin:0}.box{flex:1;width:100%}.apply{min-height:44px;width:100%;margin-top:8px;border-radius:11px;background:var(--control-fill);color:var(--control-text);font-weight:650}
@container orbit-control (max-width:240px){.shell{padding:12px}.range-row,.box-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.slider,.box{grid-column:1/-1;grid-row:1}.stepper{grid-row:2}.value{font-size:22px}.badge{width:100%;text-align:center}}
@container orbit-control (max-width:180px){.info{gap:8px}.orbit{width:36px;height:36px}.orbit ha-icon{--mdc-icon-size:21px}.name{font-size:14px}.readout{padding:9px}.field{font-size:12px}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
`;

class OrbitControlBase extends HTMLElement {
 constructor(){
  super();this.attachShadow({mode:'open'});this._epoch=0;this._pending=null;this._feedback='';this._feedbackKind='';this._detached=false;
  this.shadowRoot.addEventListener('click',e=>{const b=e.composedPath().find(n=>n?.dataset?.cmd);if(b&&!b.disabled&&this.shadowRoot.contains(b)){if(b.dataset.cmd==='info')this._moreInfo();else this._click(b.dataset.cmd);}});
  this.shadowRoot.addEventListener('focusin',e=>{if(e.target.matches?.('input,select'))this._editing=true;});
  this.shadowRoot.addEventListener('focusout',()=>{this._editing=false;this._sync();});
  this.shadowRoot.addEventListener('input',e=>this._input(e));
  this.shadowRoot.addEventListener('change',e=>this._change(e));
  this.shadowRoot.addEventListener('keydown',e=>this._key(e));
  this.shadowRoot.addEventListener('pointercancel',e=>{if(e.target.type==='range'){this._dirty=false;this._draft='';this._sync(true);}});
 }
 connectedCallback(){this._detached=false;this._sync();}
 disconnectedCallback(){this._detached=true;this._invalidate();}
 static getStubConfig(){return{...controlDefaults};}
 static _form(domains,number=false){return{schema:[
  {name:'entity',selector:{entity:{filter:{domain:domains}}}},
  {name:'name',selector:{text:{}}},{name:'icon',selector:{icon:{}}},
  {name:'palette',default:'aurora',selector:{select:{options:CONTROL_PALETTES,mode:'dropdown'}}},
  {name:'read_only',default:false,selector:{boolean:{}}},
  ...(number?[{name:'control',default:'auto',selector:{select:{options:['auto','slider','box'],mode:'dropdown'}}}]:[])
 ],computeLabel:({name})=>({entity:'Entity (optional)',name:'Name override (optional)',icon:'Icon override (optional)',palette:'Orbit palette',read_only:'Read only',control:'Number control'})[name],computeHelper:({name})=>({entity:'Choose an existing entity. No entity is selected automatically.',read_only:'Disables commands, not native More Info.',control:'Auto follows the entity box/slider mode. Limits, step and unit always come from the entity.'})[name]};}
 setConfig(config){
  if(!config||typeof config!=='object'||Array.isArray(config))throw Error('Orbit control requires an object configuration.');
  const defaults=this.constructor.getStubConfig();
  for(const k of Object.keys(defaults))if(config[k]!=null&&typeof config[k]!==typeof defaults[k])throw Error(k+' has an invalid type.');
  if(config.entity&&!this.constructor.domains.some(d=>new RegExp('^'+d+'[.][a-z0-9_]+$').test(config.entity)))throw Error('Unsupported entity domain.');
  if(config.palette!=null&&!CONTROL_PALETTES.includes(config.palette))throw Error('Invalid Orbit palette.');
  if(config.control!=null&&!['auto','slider','box'].includes(config.control))throw Error('Invalid number control.');
  this._invalidate();this._config=Object.fromEntries(Object.entries(defaults).map(([k,v])=>[k,config[k]??v]));this._dirty=false;this._editing=false;this._lastIntent=null;this._feedback='';this._build();this._sync(true);
 }
 set hass(value){this._hass=value;this._sync();}
 get hass(){return this._hass;}
 getCardSize(){return 4;}
 getGridOptions(){return{columns:6,min_columns:3};}
 _invalidate(){if(this._pending){this._feedback='Request no longer tracked. Check the reported state.';this._feedbackKind='info';}this._epoch++;if(this._timer)clearTimeout(this._timer);this._timer=null;this._pending=null;this._dirty=false;this._editing=false;}
 _state(){return this._hass?.states?.[this._config?.entity];}
 _base(){
  const c=this._config||controlDefaults,s=this._state(),a=s?.attributes||{},domain=c.entity.split('.')[0];
  const availability=!c.entity?'empty':!s?'missing':s.state==='unavailable'?'unavailable':s.state==='unknown'||s.state==null||s.state===''?'unknown':'known';
  const service=this.constructor.service,registry=this._hass?.services?.[domain];
  const registered=!!registry&&Object.prototype.hasOwnProperty.call(registry,service)&&typeof this._hass?.callService==='function';
  const online=this._hass?.connection?.connected!==false;
  return{s,a,domain,availability,registered,online,name:c.name||a.friendly_name||this.constructor.label,icon:controlIcon(c.icon)||controlIcon(a.icon)||this.constructor.icon,enabled:availability==='known'&&registered&&online&&!c.read_only&&!this._detached};
 }
 _status(m){return m.availability==='empty'?'Choose an entity':m.availability==='missing'?'Entity not found':m.availability==='unknown'?'Unknown':m.availability==='unavailable'?'Unavailable':!m.online?'Offline':this._config.read_only?'Read only':!m.registered?'Service unavailable':m.problem||'Ready';}
 _build(){this.shadowRoot.innerHTML='<style>'+CONTROL_STYLE+'</style><ha-card><div class="shell"><div class="head"><button class="info" data-cmd="info"><span class="orbit"><ha-icon></ha-icon></span><span class="copy"><span class="eyebrow">'+this.constructor.label+'</span><span class="name"></span></span></button><span class="badge"></span></div><div class="readout"><span class="caption">Reported state</span><span class="value"></span></div><p class="hint"></p><div class="controls">'+this._controls()+'</div><div class="meta"><span class="detail"></span><span class="domain"></span></div><div class="draft" aria-live="polite"></div><div class="feedback" role="status" aria-live="polite" aria-atomic="true"></div></div></ha-card>';}
 _text(selector,value){const n=this.shadowRoot.querySelector(selector);if(n&&n.textContent!==String(value))n.textContent=String(value);}
 _sync(force=false){
  if(!this._config||!this.shadowRoot.querySelector('.name'))return;
  const m=this._model(),status=this._status(m);this._modelNow=m;
  if(this._lastIntent&&this._lastIntent.stamp!==this._stamp(m))this._lastIntent=null;
  this.shadowRoot.querySelector('ha-card').dataset.palette=this._config.palette;
  this._text('.name',m.name);this._text('.badge',this._pending?'Sending…':status);this._text('.value',m.availability==='known'?m.text:status);
  this._text('.hint',m.availability==='empty'?'Choose an entity in the visual editor. No entity is selected automatically.':m.problem||'');
  this._text('.detail',m.detail||'');this._text('.domain',m.domain);
  const info=this.shadowRoot.querySelector('.info');info.disabled=!m.s;info.setAttribute('aria-label','More information: '+m.name);
  this.shadowRoot.querySelector('ha-icon').setAttribute('icon',m.icon);
  this.shadowRoot.querySelector('.controls').hidden=m.availability==='empty';
  this.shadowRoot.querySelector('.controls').setAttribute('aria-busy',String(!!this._pending));
  this._syncControls(m,force);this._text('.feedback',this._feedback);this.shadowRoot.querySelector('.feedback').dataset.kind=this._feedbackKind;
 }
 _stamp(m){return JSON.stringify([this._config.entity,m.s?.state,m.options,m.min,m.max,m.step,m.mode]);}
 _notice(message,kind='error'){this._feedback=message;this._feedbackKind=kind;this._sync(true);}
 async _send(value){
  if(this._pending||this._detached)return false;
  const m=this._model(),plan=this._plan(value,m);if(!plan){this._notice('Not sent. Check the entity, options or limits.');return false;}
  const intent=JSON.stringify(plan),stamp=this._stamp(m);if(this._lastIntent?.key===intent&&this._lastIntent.stamp===stamp){this._notice('Already requested; waiting for a Home Assistant state update.','info');return false;}
  const token={epoch:this._epoch};this._pending=token;this._dirty=false;this._feedback='Sending…';this._feedbackKind='info';this._sync();
  const current=()=>this._pending===token&&this._epoch===token.epoch&&!this._detached;
  this._timer=setTimeout(()=>{if(!current())return;this._pending=null;this._timer=null;this._lastIntent=null;this._notice('Result unknown after 15 seconds. Check the entity before retrying.','error');},15000);
  try{await this._hass.callService(plan.domain,plan.service,plan.data);if(!current())return false;clearTimeout(this._timer);this._timer=null;this._pending=null;this._lastIntent={key:intent,stamp};this._notice('Command sent. Reported state updates from Home Assistant.','success');return true;}
  catch{if(!current())return false;clearTimeout(this._timer);this._timer=null;this._pending=null;this._lastIntent=null;this._notice('Command failed. Check Home Assistant permissions and the entity.');return false;}
 }
 _moreInfo(){if(this._state())this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId:this._config.entity},bubbles:true,composed:true}));}
 _click(){} _input(){} _change(){} _key(){}
}

class SelectOrbitCard extends OrbitControlBase {
 static domains=['select','input_select'];static label='Select Orbit';static icon='mdi:format-list-bulleted';static service='select_option';
 static getConfigForm(){return this._form(this.domains);}
 _model(){const m=this._base(),options=Array.isArray(m.a.options)?[...new Set(m.a.options.filter(v=>typeof v==='string'))]:[];return{...m,options,text:String(m.s?.state??''),problem:m.availability==='known'&&!options.length?'No options available':'',detail:options.length+' options'};}
 _controls(){return'<label class="caption" for="selection">Choose an option</label><select id="selection" class="field"></select>';}
 _syncControls(m,force){
  const select=this.shadowRoot.querySelector('select');select.disabled=!m.enabled||!m.options.length||!!this._pending;select.setAttribute('aria-label','Choose option: '+m.name);
  if(!force&&this._editing)return;
  const stamp=JSON.stringify([m.options,m.s?.state,m.availability]);if(force||stamp!==this._selectStamp){
   this._selectStamp=stamp;this._renderedOptions=m.options.slice();select.replaceChildren();
   const hint=document.createElement('option');hint.value='placeholder';hint.textContent=m.availability==='known'?'Choose an option':this._status(m);hint.disabled=true;select.append(hint);
   for(const[value,i]of m.options.map((value,i)=>[value,i])){const opt=document.createElement('option');opt.value=String(i);opt.textContent=value;select.append(opt);}
   const i=m.options.indexOf(m.s?.state);select.value=i<0?'placeholder':String(i);
  }
 }
 _plan(value,m){return m.enabled&&typeof value==='string'&&m.options.includes(value)?{domain:m.domain,service:'select_option',data:{entity_id:this._config.entity,option:value}}:null;}
 _change(e){if(e.target.localName!=='select')return;const index=e.target.value;if(!/^\d+$/.test(index))return;const value=this._renderedOptions?.[Number(index)];if(value!==this._state()?.state)this._send(value);else this._sync(true);}
}

// Exact decimal grid math uses the finite JSON number representations, not
// floating-point addition (e.g. 0.2 + 0.1). No rounding of reported display values.
function controlNumber(value){if(typeof value!=='number'&&typeof value!=='string')return null;if(typeof value==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim()))return null;const n=Number(value);return Number.isFinite(n)?n:null;}
function decimalParts(value){
 const [mantissa,exp='0']=String(value).toLowerCase().split('e'),negative=mantissa.startsWith('-'),unsigned=mantissa.replace(/^[+-]/,''),fraction=(unsigned.split('.')[1]||'').length;
 let coefficient=BigInt(unsigned.replace('.',''))*(negative?-1n:1n),scale=fraction-Number(exp);
 if(scale<0){coefficient*=10n**BigInt(-scale);scale=0;}return{coefficient,scale};
}
const scaledDecimal=(part,scale)=>part.coefficient*10n**BigInt(scale-part.scale);
function decimalNumber(value,scale){const negative=value<0n,digits=(negative?-value:value).toString().padStart(scale+1,'0');return Number((negative?'-':'')+(scale?digits.slice(0,-scale)+'.'+digits.slice(-scale):digits));}

class NumberOrbitCard extends OrbitControlBase {
 static domains=['number','input_number'];static label='Number Orbit';static icon='mdi:tune-vertical';static service='set_value';
 static getStubConfig(){return{...controlDefaults,control:'auto'};}
 static getConfigForm(){return this._form(this.domains,true);}
 _model(){
  const m=this._base(),value=controlNumber(m.s?.state),{min,max,step}=m.a;
  const metadata=[min,max,step].every(n=>typeof n==='number'&&Number.isFinite(n))&&min<max&&step>0;
  const valid=metadata&&value!==null&&value>=min&&value<=max;
  const unit=typeof m.a.unit_of_measurement==='string'?m.a.unit_of_measurement:'';
  let grid=null;if(valid){const parts=[min,max,step,value].map(decimalParts),scale=Math.max(...parts.map(p=>p.scale));grid={scale,min:scaledDecimal(parts[0],scale),max:scaledDecimal(parts[1],scale),step:scaledDecimal(parts[2],scale),value:scaledDecimal(parts[3],scale)};}
  return{...m,value,min,max,step,unit,valid,grid,mode:this._config.control==='auto'?(m.a.mode==='box'?'box':'slider'):this._config.control,text:String(m.s?.state??'')+(unit?' '+unit:''),problem:m.availability!=='known'?'':!metadata?'Valid min, max and positive step are required.':value===null?'Reported value is not numeric.':!valid?'Reported value is outside the configured limits.':'',detail:metadata?'Min '+min+' · Max '+max+' · Step '+step:'No valid range reported'};
 }
 _controls(){return'<div class="range-row"><button class="stepper" data-cmd="down" aria-label="Decrease value">−</button><input class="slider" type="range"><button class="stepper" data-cmd="up" aria-label="Increase value">+</button></div><div class="box-row"><button class="stepper" data-cmd="down" aria-label="Decrease value">−</button><input class="field box" type="number" inputmode="decimal"><button class="stepper" data-cmd="up" aria-label="Increase value">+</button></div><button class="apply" data-cmd="apply">Apply value</button>';}
 _gridAccepts(value,m){if(!m.valid)return false;const part=decimalParts(value),scale=Math.max(part.scale,m.grid.scale),factor=10n**BigInt(scale-m.grid.scale),n=scaledDecimal(part,scale),low=m.grid.min*factor,high=m.grid.max*factor,step=m.grid.step*factor;return n>=low&&n<=high&&(n-low)%step===0n;}
 _stepTarget(m,delta){
  if(!m.valid)return null;const g=m.grid,diff=g.value-g.min,index=diff/g.step,remainder=diff%g.step;
  const next=g.min+(delta>0?index+1n:remainder===0n?index-1n:index)*g.step;
  if(next<g.min||next>g.max)return null;const result=decimalNumber(next,g.scale);
  if(!Number.isFinite(result))return null;const part=decimalParts(result),scale=Math.max(g.scale,part.scale);
  if(scaledDecimal(part,scale)!==next*10n**BigInt(scale-g.scale))return null;
  return result;
 }
 _syncControls(m,force){
  const disabled=!m.enabled||!m.valid||!!this._pending,range=this.shadowRoot.querySelector('.slider'),box=this.shadowRoot.querySelector('.box');
  this.shadowRoot.querySelector('.range-row').hidden=m.mode!=='slider';this.shadowRoot.querySelector('.box-row').hidden=m.mode!=='box';this.shadowRoot.querySelector('.apply').hidden=m.mode!=='box';
  for(const input of [range,box]){input.disabled=disabled;input.setAttribute('aria-label','Value: '+m.name+(m.unit?' ('+m.unit+')':''));}
  if(force||!this._editing&&!this._dirty){
   for(const input of [range,box]){if(m.valid){input.min=String(m.min);input.max=String(m.max);input.step=String(m.step);input.value=String(m.value);}else{input.removeAttribute('min');input.removeAttribute('max');input.removeAttribute('step');input.value='';}}
   this._dirty=false;this._draft='';
  }
  for(const button of this.shadowRoot.querySelectorAll('[data-cmd=down]')){button.disabled=disabled||this._stepTarget(m,-1)===null;button.setAttribute('aria-label','Decrease: '+m.name);}
  for(const button of this.shadowRoot.querySelectorAll('[data-cmd=up]')){button.disabled=disabled||this._stepTarget(m,1)===null;button.setAttribute('aria-label','Increase: '+m.name);}
  this.shadowRoot.querySelector('.apply').disabled=disabled||!this._dirty;
  this._text('.draft',this._dirty?'Draft: '+this._draft+(m.unit?' '+m.unit:'')+' (not sent)':'');
 }
 _plan(raw,m){const value=controlNumber(raw);return m.enabled&&value!==null&&value!==m.value&&this._gridAccepts(value,m)?{domain:m.domain,service:'set_value',data:{entity_id:this._config.entity,value}}:null;}
 _rangeStamp(m){return JSON.stringify([this._config.entity,m.min,m.max,m.step,m.unit,m.mode]);}
 _input(e){if(e.target.localName!=='input')return;if(!this._dirty)this._draftRangeStamp=this._rangeStamp(this._model());this._dirty=true;this._draft=e.target.value;this._sync();}
 _commit(){if(!this._dirty)return;const value=this._draft,m=this._model();this._dirty=false;if(this._draftRangeStamp!==this._rangeStamp(m)){this._notice('Not sent. Limits, step or unit changed; review the new range.');return;}if(controlNumber(value)===m.value){this._notice('Already at the reported value.','info');return;}this._send(value);}
 _change(e){if(e.target.type==='range')this._commit();}
 _key(e){if(e.target.localName!=='input')return;if(e.key==='Enter'){e.preventDefault();this._commit();}if(e.key==='Escape'){e.preventDefault();this._dirty=false;this._draft='';this._sync(true);}}
 _click(command){if(command==='apply')this._commit();else if(command==='up'||command==='down'){const target=this._stepTarget(this._model(),command==='up'?1:-1);if(target!==null)this._send(target);}}
}

if(!customElements.get('ha-select-orbit-card'))customElements.define('ha-select-orbit-card',SelectOrbitCard);
if(!customElements.get('ha-number-orbit-card'))customElements.define('ha-number-orbit-card',NumberOrbitCard);
window.customCards ||= [];
if(!window.customCards.some(c=>c.type==='ha-select-orbit-card'))window.customCards.push({type:'ha-select-orbit-card',name:'Select Orbit Card',description:'Select or input_select options with Orbit styling and guarded service feedback.',preview:true});
if(!window.customCards.some(c=>c.type==='ha-number-orbit-card'))window.customCards.push({type:'ha-number-orbit-card',name:'Number Orbit Card',description:'Number or input_number controls respecting entity limits, steps and units.',preview:true});
