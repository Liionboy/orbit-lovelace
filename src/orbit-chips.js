// Orbit Chips 1.1.2 — suite-owned, MIT. No external dependencies or automatic queries.
const CHIP_ALARM_STATES={
 disarmed:['neutral','mdi:shield-off-outline','Disarmed'],
 armed_home:['armed','mdi:shield-home','Armed home'],
 armed_away:['armed','mdi:shield-lock','Armed away'],
 armed_night:['armed','mdi:shield-moon','Armed night'],
 armed_vacation:['armed','mdi:shield-airplane','Armed vacation'],
 armed_custom_bypass:['armed','mdi:shield-check','Armed custom bypass'],
 arming:['transition','mdi:shield-sync','Arming'],
 disarming:['transition','mdi:shield-sync','Disarming'],
 pending:['transition','mdi:shield-alert-outline','Entry delay'],
 triggered:['triggered','mdi:shield-alert','Alarm triggered']
};
const CHIP_ALARM_CSS='.chip[data-alarm-kind=armed]{--chip-accent:var(--info-color,#1477c9)}.chip[data-alarm-kind=transition]{--chip-accent:var(--warning-color,#b87900)}.chip[data-alarm-kind=triggered]{--chip-accent:var(--error-color,#b33444)}.chip[data-alarm-kind=neutral]{--chip-accent:var(--secondary-text-color,#637080);background:var(--card-background-color,#fff);border-color:var(--divider-color,#dfe5eb)}.chip[data-alarm-kind=triggered] .chip-icon{animation:orbit-alarm-pulse 1.5s ease-in-out infinite}.chip[data-alarm-kind=triggered] .chip-state{color:var(--error-color,#b33444)}@keyframes orbit-alarm-pulse{50%{box-shadow:0 0 0 4px color-mix(in srgb,var(--chip-accent) 16%,transparent)}}@media(prefers-reduced-motion:reduce){.chip .chip-icon{animation:none!important}}';
const CHIP_PALETTES=['aurora','ocean','sunset','lavender'];
const CHIP_ACTIONS=['more-info','toggle','navigate','none'];
const CHIP_TOGGLE_DOMAINS=['light','switch','input_boolean'];
const chipIcon=v=>typeof v==='string'&&/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(v.trim())?v.trim():'';
function chipPath(value){
 const valid=p=>p.startsWith('/')&&!p.startsWith('//')&&!Array.from(p).some(c=>c.charCodeAt(0)<=32||c.charCodeAt(0)===92);
 if(typeof value!=='string'||!valid(value))return false;
 try{return valid(decodeURIComponent(value));}catch{return false;}
}
function chipConfig(config){
 if(!config||typeof config!=='object'||Array.isArray(config))throw Error('Chips requires an object configuration.');
 for(const key of ['title','palette','alignment'])if(config[key]!=null&&typeof config[key]!=='string')throw Error('Invalid '+key+'.');
 if(config.read_only!=null&&typeof config.read_only!=='boolean')throw Error('read_only must be boolean.');
 if(config.palette!=null&&!CHIP_PALETTES.includes(config.palette))throw Error('Invalid Orbit palette.');
 if(config.alignment!=null&&!['start','center','end'].includes(config.alignment))throw Error('Invalid alignment.');
 if(config.chips!=null&&(!Array.isArray(config.chips)||config.chips.length>24))throw Error('Configure up to 24 chips.');
 const chips=(config.chips||[]).map(c=>{
  if(!c||typeof c!=='object'||Array.isArray(c))throw Error('Each chip must be an object.');
  if(c.type!=null&&!['entity','alarm'].includes(c.type))throw Error('Chip type must be entity or alarm.');
  if(c.type==='alarm'&&c.entity&&!c.entity.startsWith?.('alarm_control_panel.'))throw Error('Alarm chips require alarm_control_panel entities.');
  for(const key of ['entity','name','icon','palette'])if(c[key]!=null&&typeof c[key]!=='string')throw Error('Invalid chip '+key+'.');
  for(const key of ['show_name','show_state'])if(c[key]!=null&&typeof c[key]!=='boolean')throw Error('Invalid '+key+'.');
  if(c.entity&&!/^[a-z_][a-z0-9_]*[.][a-z0-9_]+$/.test(c.entity))throw Error('Invalid chip entity.');
  if(c.palette!=null&&!CHIP_PALETTES.includes(c.palette))throw Error('Invalid chip palette.');
  const a=c.tap_action??{action:'more-info'};
  if(!a||typeof a!=='object'||Array.isArray(a)||!CHIP_ACTIONS.includes(a.action)||Object.keys(a).some(k=>!['action','navigation_path'].includes(k)))throw Error('Unsupported chip tap_action.');
  if(a.action==='navigate'&&!chipPath(a.navigation_path))throw Error('Navigation requires a local absolute path.');
  if(a.action!=='navigate'&&a.navigation_path!=null)throw Error('navigation_path requires navigate.');
  if(a.action==='toggle'&&c.entity&&!CHIP_TOGGLE_DOMAINS.includes(c.entity.split('.')[0]))throw Error('Toggle supports light, switch and input_boolean only.');
  if(c.type==='alarm'&&a.action==='toggle')throw Error('Alarm chips use native More Info, not direct power actions.');
  return {type:c.type||'entity',entity:c.entity||'',name:c.name||'',icon:chipIcon(c.icon),palette:c.palette||config.palette||'aurora',show_name:c.show_name??true,show_state:c.show_state??true,tap_action:{...a}};
 });
 return {title:config.title||'',palette:config.palette||'aurora',alignment:config.alignment||'start',read_only:config.read_only??false,chips};
}
const CHIP_CSS=":host{display:block;min-width:0}*{box-sizing:border-box}ha-card{display:block;min-width:0;background:transparent!important;border:0!important;box-shadow:none!important;--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}.shell{padding:8px 4px}.collection-title{font-size:14px;font-weight:650;line-height:20px;color:var(--primary-text-color,#202b3c);margin:0 0 10px}.chips{display:flex;flex-wrap:wrap;align-items:flex-start;gap:8px;min-width:0}.chips[data-alignment=center]{justify-content:center}.chips[data-alignment=end]{justify-content:flex-end}.chip{--chip-accent:var(--accent);display:inline-flex;align-items:center;gap:9px;position:relative;min-width:44px;min-height:48px;max-width:100%;padding:9px 14px 9px 10px;border-radius:26px;border:1px solid color-mix(in srgb,var(--chip-accent) 28%,var(--divider-color,#dfe5eb));background:linear-gradient(125deg,color-mix(in srgb,var(--chip-accent) 9%,transparent),transparent),var(--card-background-color,#fff);box-shadow:0 2px 6px #101c2f0a;color:var(--primary-text-color,#202b3c);font:inherit;text-align:start;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}.chip[data-palette=ocean]{--chip-accent:#1477c9}.chip[data-palette=sunset]{--chip-accent:#c54c30}.chip[data-palette=lavender]{--chip-accent:#8552c7}.chip[data-active=false]{--chip-accent:var(--secondary-text-color,#637080);background:var(--card-background-color,#fff);border-color:var(--divider-color,#dfe5eb)}.chip[data-alarm=true]{--chip-accent:var(--error-color,#b33444)}.chip[data-availability=unavailable],.chip[data-availability=offline]{--chip-accent:var(--secondary-text-color,#637080)}.chip:disabled{opacity:1;cursor:default}.chip:focus-visible{outline:2px solid var(--primary-color,#078f72);outline-offset:3px}.chip:not(:disabled):hover{border-color:var(--chip-accent)}div.chip{cursor:default}.chip-icon{display:inline-flex;align-items:center;justify-content:center;flex:none;--mdc-icon-size:19px;width:28px;height:28px;border-radius:50%;color:var(--chip-accent);background:color-mix(in srgb,var(--chip-accent) 12%,transparent)}.chip-copy{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 6px;min-width:0}.chip-name{font-size:12px;line-height:17px;font-weight:550;overflow-wrap:anywhere;color:var(--secondary-text-color,#637080);min-width:0}.chip-state{font-size:13px;line-height:18px;font-weight:700;overflow-wrap:anywhere;font-variant-numeric:tabular-nums;min-width:0}.chip-feedback{flex-basis:100%;font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere;min-width:0}.chip-feedback[data-kind=error]{color:var(--error-color,#b33444)}.chip-feedback[data-kind=success]{color:var(--success-color,#13765c)}.icon-only{width:48px;padding:0;justify-content:center}.icon-only .chip-copy:has(.chip-feedback[hidden]){display:none}.icon-only:has(.chip-feedback:not([hidden])){width:auto;padding:9px 12px}.setup{font-size:12px;line-height:18px;color:var(--secondary-text-color,#637080);padding:12px;border:1px dashed var(--divider-color,#dfe5eb);border-radius:14px}[hidden]{display:none!important}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}";
// A slim painted capsule inside a full-size touch target; never shrink the writing.
const CHIP_LAYOUT_CSS=`
:host{container-type:inline-size}
:host .shell.shell,:host([data-orbit-layout=compact]) .shell.shell{padding:2px 0}
:host .chips.chips{gap:6px}
:host .chip.chip{isolation:isolate;flex:0 0 auto;position:relative;min-width:min(76px,100%);min-height:48px;padding:8px 10px;gap:6px;border:0;background:transparent;box-shadow:none;border-radius:24px}
:host .chip.chip::before{content:'';position:absolute;inset:4px 0;z-index:-1;pointer-events:none;border-radius:999px;border:1px solid color-mix(in srgb,var(--primary-color,#6575dc) 18%,var(--divider-color,#dfe5eb));background:var(--card-background-color,#fff);box-shadow:0 1px 3px #17213a08}
:host([data-orbit-layout=compact]) .chip.chip{min-height:44px;min-width:min(68px,100%);padding:6px 8px}
:host .chip.chip .chip-icon{width:18px;height:18px;--mdc-icon-size:18px;border-radius:0;background:transparent}
:host([data-orbit-layout=compact]) .chip.chip .chip-icon{width:16px;height:16px;--mdc-icon-size:16px}
:host .chip.chip .chip-name,:host .chip.chip .chip-state{font-size:12px;line-height:18px;font-weight:500;color:var(--primary-text-color,#202b3c)}
:host .chip.chip[data-alarm-kind=triggered] .chip-state{color:var(--error-color,#b33444)}
.chip-copy{display:grid;grid-template-columns:minmax(0,auto) minmax(0,auto);gap:0 5px}
.chip-copy:has(.chip-name[hidden]),.chip-copy:has(.chip-state[hidden]){grid-template-columns:minmax(0,1fr);column-gap:0}
.chip-name,.chip-state{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal;word-break:normal}
.chip-feedback{grid-column:1/-1;white-space:normal;overflow-wrap:anywhere}
:host .chip.chip.icon-only{min-width:44px;width:44px;padding:0;justify-content:center}
:host .chip.chip.icon-only:has(.chip-feedback:not([hidden])){min-width:44px;width:auto;padding:6px 10px}
@container (max-width:130px){
 :host .chip.chip,:host([data-orbit-layout=compact]) .chip.chip{width:100%;min-width:min(72px,100%);padding-inline:2px;gap:3px}
 :host .chip.chip .chip-icon,:host([data-orbit-layout=compact]) .chip.chip .chip-icon{width:14px;height:14px;--mdc-icon-size:14px}
 :host .chip.chip.icon-only{width:44px;min-width:44px;padding:0}
 :host .chip.chip.icon-only:has(.chip-feedback:not([hidden])){width:auto;padding:6px 2px}
}`;
class OrbitChipsCard extends HTMLElement{
 constructor(){super();this.attachShadow({mode:'open'});this._epoch=0;this._detached=false;this._ack=new Map();this._states=new Map();this._feedback=new Map();this._nodes=[];}
 static getStubConfig(){return{chips:[]};}
 static getConfigElement(){return document.createElement('ha-orbit-chips-editor');}
 setConfig(config){const c=chipConfig(config),signature=JSON.stringify(c);if(signature===this._signature)return;this._invalidate();this._config=c;this._signature=signature;this._ack.clear();this._states.clear();this._feedback.clear();this._build();this._sync();}
 set hass(value){this._hass=value;this._sync();}get hass(){return this._hass;}
 connectedCallback(){this._detached=false;this._sync();}
 disconnectedCallback(){this._detached=true;this._invalidate();}
 getCardSize(){return Math.max(1,Math.ceil((this._config?.chips.length||1)/4));}
 getGridOptions(){return{columns:12,min_columns:3};}
 _invalidate(){this._epoch++;clearTimeout(this._timer);this._timer=null;if(this._pending)this._feedback.set(this._pending.index,{text:'Request no longer tracked. Check the reported state.',kind:'info'});this._pending=null;}
 _model(index){
  const c=this._config.chips[index],s=this._hass?.states?.[c.entity],a=s?.attributes||{},domain=c.entity.split('.')[0],known=!!s&&!['unknown','unavailable',''].includes(s.state)&&s.state!=null,online=this._hass?.connection?.connected!==false;
  const isAlarm=domain==='alarm_control_panel'||c.type==='alarm',alarmInfo=Object.prototype.hasOwnProperty.call(CHIP_ALARM_STATES,s?.state)?CHIP_ALARM_STATES[s.state]:null,alarmKind=isAlarm?(known&&online&&alarmInfo?alarmInfo[0]:'neutral'):'';
  let name=c.name||a.friendly_name||c.entity||(c.tap_action.action==='navigate'?'Navigation':'Choose an entity');
  let state=!c.entity?'':!s?'Entity not found':s.state==='unavailable'?'Unavailable':s.state==='unknown'||s.state==null||s.state===''?'Unknown':String(s.state);
  if(known){const fallback=isAlarm&&alarmInfo?alarmInfo[2]:String(s.state)+(a.unit_of_measurement?' '+a.unit_of_measurement:'');try{const native=this._hass?.formatEntityState?.(s);state=typeof native==='string'&&native.trim()?native:fallback;}catch{state=fallback;}}
  if(!online&&c.entity)state+=' · Offline';
  const on=s?.state==='on',binary=['light','switch','input_boolean','binary_sensor'].includes(domain),active=isAlarm?alarmKind!=='neutral':c.tap_action.action==='navigate'||known&&online&&(binary?on:domain==='person'?s.state==='home':true);
  const alarm=known&&on&&domain==='binary_sensor'&&['smoke','gas','carbon_monoxide','moisture','problem','safety'].includes(a.device_class);
  const fallback=domain==='light'?(on?'mdi:lightbulb':'mdi:lightbulb-outline'):domain==='switch'?'mdi:power-plug':domain==='input_boolean'?'mdi:toggle-switch':domain==='binary_sensor'?(on?'mdi:checkbox-marked-circle':'mdi:checkbox-blank-circle-outline'):domain==='person'?'mdi:account':a.device_class==='temperature'?'mdi:thermometer':a.device_class==='humidity'?'mdi:water-percent':c.tap_action.action==='navigate'?'mdi:arrow-right':'mdi:information-outline';
  const service=on?'turn_off':'turn_on',registered=!!this._hass?.services?.[domain]&&Object.prototype.hasOwnProperty.call(this._hass.services[domain],service)&&typeof this._hass?.callService==='function';
  const toggle=CHIP_TOGGLE_DOMAINS.includes(domain)&&['on','off'].includes(s?.state),duplicate=this._ack.get(c.entity)===s?.state;
  const enabled=c.tap_action.action==='navigate'?true:c.tap_action.action==='more-info'?!!s:c.tap_action.action==='toggle'?toggle&&known&&online&&registered&&!this._config.read_only&&!this._pending&&!duplicate&&!this._detached:false;
 const reason=c.tap_action.action!=='toggle'?'':!online?'Offline':this._config.read_only?'Read only':!toggle?'Toggle unavailable':!registered?'Service unavailable':duplicate?'Command sent. Waiting for reported state.':'';
  return {c,s,name,state,icon:c.icon||chipIcon(a.icon)||(isAlarm?(known&&online&&alarmInfo?alarmInfo[1]:'mdi:shield-off-outline'):fallback),active,alarm,alarmKind,known,online,domain,service,enabled,reason};
 }
 _build(){
  const root=this.shadowRoot;root.replaceChildren();const style=document.createElement('style');style.textContent=CHIP_CSS+CHIP_LAYOUT_CSS+CHIP_ALARM_CSS;root.append(style);
  const card=document.createElement('ha-card'),shell=document.createElement('div');shell.className='shell';card.append(shell);root.append(card);
  const title=document.createElement('div');title.className='collection-title';title.textContent=this._config.title;title.hidden=!this._config.title;shell.append(title);
  const list=document.createElement('div');list.className='chips';list.setAttribute('role','group');list.setAttribute('aria-label',this._config.title||'Orbit chips');list.dataset.alignment=this._config.alignment;shell.append(list);this._nodes=[];
  if(!this._config.chips.length){const hint=document.createElement('div');hint.className='setup';hint.textContent='Add chips in the visual editor. No entity is selected automatically.';list.append(hint);}
  this._config.chips.forEach((c,index)=>{
   const action=c.tap_action.action,node=document.createElement(action==='navigate'?'a':action==='none'?'div':'button');node.className='chip';node.dataset.palette=c.palette;if(node.localName==='button')node.type='button';if(action==='navigate')node.setAttribute('href',c.tap_action.navigation_path);
   const icon=document.createElement('ha-icon');icon.className='chip-icon';icon.setAttribute('aria-hidden','true');const copy=document.createElement('span');copy.className='chip-copy';const name=document.createElement('span');name.className='chip-name';const state=document.createElement('span');state.className='chip-state';const feedback=document.createElement('span');feedback.className='chip-feedback';feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');copy.append(name,state,feedback);node.append(icon,copy);list.append(node);node.addEventListener('click',e=>this._activate(index,e));this._nodes.push({node,icon,name,state,feedback});
  });
 }
 _sync(){
  if(!this._config)return;
  for(const [i,n]of this._nodes.entries()){
   const m=this._model(i),previous=this._states.get(m.c.entity);if(previous!==m.s?.state){this._ack.delete(m.c.entity);this._states.set(m.c.entity,m.s?.state);}
   const fresh=this._model(i),f=this._feedback.get(i);n.icon.setAttribute('icon',m.icon);n.node.dataset.active=String(m.active);n.node.dataset.alarm=String(m.alarm);n.node.dataset.availability=!m.online?'offline':!m.known&&m.c.entity?'unavailable':'known';
   n.node.dataset.alarmKind=m.alarmKind;
   const set=(node,text)=>{if(node.textContent!==text)node.textContent=text;};set(n.name,m.name);n.name.hidden=!m.c.show_name;set(n.state,m.state);n.state.hidden=!m.c.show_state||!m.state;set(n.feedback,f?.text||'');n.feedback.hidden=!f?.text;n.feedback.dataset.kind=f?.kind||'';
   n.icon.hidden=false;if(!m.c.show_name&&!m.c.show_state)n.node.classList.add('icon-only');else n.node.classList.remove('icon-only');
   const action=m.c.tap_action.action;n.node.setAttribute('aria-label',[m.name,m.state,action==='toggle'?'Power control':action==='navigate'?'Navigate':'',fresh.reason].filter(Boolean).join(' · '));n.node.title=[m.name,m.state,f?.text,fresh.reason].filter(Boolean).join(' · ');
   if(n.node.localName==='button')n.node.disabled=!fresh.enabled;n.node.setAttribute('aria-busy',String(this._pending?.index===i));
  }
 }
 _activate(index,event){
  const m=this._model(index);if(this._detached||m.c.tap_action.action==='none')return;
  if(m.c.tap_action.action==='navigate'){
   if(event&&(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button>0))return;event?.preventDefault();if(!chipPath(m.c.tap_action.navigation_path))return;
   history.pushState(null,'',m.c.tap_action.navigation_path);window.dispatchEvent(new CustomEvent('location-changed',{detail:{replace:false}}));return;
  }
  if(!m.enabled)return;
  if(m.c.tap_action.action==='more-info'){this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId:m.c.entity},bubbles:true,composed:true}));return;}
  this._send(index,m);
 }
 _send(index,m){
  if(!this._model(index).enabled)return;
  const request={index,epoch:this._epoch,entity:m.c.entity,state:m.s.state};this._pending=request;this._feedback.set(index,{text:'Sending…',kind:'info'});this._sync();
  const settle=(text,kind,ack=false)=>{if(this._pending!==request||this._epoch!==request.epoch||this._detached)return;clearTimeout(this._timer);this._timer=null;this._pending=null;if(ack&&this._hass?.states?.[request.entity]?.state===request.state)this._ack.set(request.entity,request.state);this._feedback.set(index,{text,kind});this._sync();};
  this._timer=setTimeout(()=>settle('Result unknown. Check the reported state.','info'),15000);
  try{Promise.resolve(this._hass.callService(m.domain,m.service,{entity_id:m.c.entity})).then(()=>settle('Command sent','success',true),()=>settle('Command failed. Check the reported state.','error'));}catch{settle('Command failed. Check the reported state.','error');}
 }
}
const CHIP_LABELS={title:'Collection title (optional)',palette:'Orbit palette',alignment:'Alignment',read_only:'Read only',entity:'Entity',name:'Name override',icon:'Icon override',show_name:'Show name',show_state:'Show reported state',action:'Tap action',navigation_path:'Local navigation path'};
class OrbitChipsEditor extends HTMLElement{
 constructor(){super();this.attachShadow({mode:'open'});this._forms=[];}
 setConfig(config){const next={...config,chips:(config.chips||[]).map(c=>({...c,tap_action:c.tap_action?{...c.tap_action}:undefined}))};if(JSON.stringify(next)===JSON.stringify(this._config))return;this._config=next;this._render();}
 set hass(hass){this._hass=hass;this._syncForms();}get hass(){return this._hass;}
 _form(schema,data,change){const f=document.createElement('ha-form');f.schema=schema;f.data=data;f.hass=this._hass;f.computeLabel=({name})=>CHIP_LABELS[name]||name;f.addEventListener('value-changed',e=>{e.stopPropagation();if(f.isConnected&&e.detail?.value)change(e.detail.value);});return f;}
 _emit(config,rebuild=false){this._config=config;if(rebuild)this._render();else this._syncForms();this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:{...config,chips:config.chips.map(c=>({...c,tap_action:c.tap_action?{...c.tap_action}:undefined}))}},bubbles:true,composed:true}));}
 _syncForms(){for(const f of this._forms){f.hass=this._hass;const c=this._config?.chips?.[f._chipIndex];const data=c?{show_name:true,show_state:true,palette:this._config.palette||'aurora',...c,action:c.tap_action?.action||'more-info',navigation_path:c.tap_action?.navigation_path||''}:{palette:'aurora',alignment:'start',read_only:false,...this._config};if(JSON.stringify(f.data)!==JSON.stringify(data))f.data=data;}}
 _render(){
  if(!this._config)return;const root=this.shadowRoot;root.replaceChildren();this._forms=[];
  const style=document.createElement('style');style.textContent=':host{display:block}*{box-sizing:border-box}.row{border:1px solid var(--divider-color,#ccd4df);border-radius:12px;padding:12px;margin:12px 0}.tools{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:10px}.tools strong{margin-inline-end:auto}button{font:inherit;min-width:44px;min-height:44px;border:1px solid var(--divider-color,#ccd4df);border-radius:10px;background:var(--card-background-color,#fff);color:var(--primary-text-color,#202b3c)}button:focus-visible{outline:2px solid var(--primary-color,#6344c9);outline-offset:2px}p{font-size:12px;color:var(--secondary-text-color,#637080)}';root.append(style);
  const option=(name,values)=>({name,selector:{select:{options:values,mode:'dropdown'}}});
  const top=this._form([{name:'title',selector:{text:{}}},option('palette',CHIP_PALETTES),option('alignment',['start','center','end']),{name:'read_only',selector:{boolean:{}}}],{palette:'aurora',alignment:'start',read_only:false,...this._config},v=>this._emit({...this._config,...v,chips:this._config.chips}));root.append(top);this._forms.push(top);
  const help=document.createElement('p');help.textContent='Up to 24 chips. More Info is the default. Toggle is limited to light, switch and input_boolean. Navigation uses a local /path. No arbitrary services or templates.';root.append(help);
  this._config.chips.forEach((chip,index)=>{
   const row=document.createElement('section');row.className='row';const tools=document.createElement('div');tools.className='tools';const name=document.createElement('strong');name.textContent=(chip.type==='alarm'?'Alarm chip ':'Chip ')+(index+1);tools.append(name);
   for(const[label,operation,disabled]of [['Move up',()=>{const a=[...this._config.chips];[a[index-1],a[index]]=[a[index],a[index-1]];this._emit({...this._config,chips:a},true);},index===0],['Move down',()=>{const a=[...this._config.chips];[a[index+1],a[index]]=[a[index],a[index+1]];this._emit({...this._config,chips:a},true);},index===this._config.chips.length-1],['Remove',()=>this._emit({...this._config,chips:this._config.chips.filter((_,i)=>i!==index)},true),false]]){const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-label',label+' chip '+(index+1));b.disabled=disabled;b.addEventListener('click',operation);tools.append(b);}
   const data={show_name:true,show_state:true,palette:this._config.palette||'aurora',...chip,action:chip.tap_action?.action||'more-info',navigation_path:chip.tap_action?.navigation_path||''};
   const schema=[{name:'entity',selector:{entity:chip.type==='alarm'?{domain:'alarm_control_panel'}:{}}},{name:'name',selector:{text:{}}},{name:'icon',selector:{icon:{}}},option('palette',CHIP_PALETTES),{name:'show_name',selector:{boolean:{}}},{name:'show_state',selector:{boolean:{}}},option('action',chip.type==='alarm'?CHIP_ACTIONS.filter(a=>a!=='toggle'):CHIP_ACTIONS),{name:'navigation_path',selector:{text:{}}}];
   const form=this._form(schema,data,v=>{const {action,navigation_path,...fields}=v;delete fields.tap_action;const chips=[...this._config.chips];chips[index]={...fields,tap_action:{action:action||'more-info',...(action==='navigate'?{navigation_path:navigation_path||''}:{})}};this._emit({...this._config,chips});});form._chipIndex=index;this._forms.push(form);row.append(tools,form);root.append(row);
  });
  const add=document.createElement('button');add.type='button';add.textContent='Add chip';add.disabled=this._config.chips.length>=24;add.addEventListener('click',()=>this._emit({...this._config,chips:[...this._config.chips,{entity:'',tap_action:{action:'more-info'}}]},true));root.append(add);
  const addAlarm=document.createElement('button');addAlarm.type='button';addAlarm.textContent='Add alarm chip';addAlarm.disabled=this._config.chips.length>=24;addAlarm.addEventListener('click',()=>this._emit({...this._config,chips:[...this._config.chips,{type:'alarm',entity:'',tap_action:{action:'more-info'}}]},true));root.append(addAlarm);
  const alarmHelp=document.createElement('p');alarmHelp.textContent='Alarm chips show reported disarmed/armed/delay/triggered states. Tap for native HA modes and any required code. No direct arm/disarm, stored PIN, countdown or alarm service calls.';root.append(alarmHelp);
 }
}
if(!customElements.get('ha-orbit-chips-editor'))customElements.define('ha-orbit-chips-editor',OrbitChipsEditor);
if(!customElements.get('ha-chips-orbit-card'))customElements.define('ha-chips-orbit-card',OrbitChipsCard);
window.customCards=window.customCards||[];window.customCards.push({type:'ha-chips-orbit-card',name:'Chips Orbit Card',description:'Orbit entity pills, explicit power controls and local navigation.',preview:true});
