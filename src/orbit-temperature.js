/* Temperature Orbit v1.0.0 — MIT. Suite-owned, read-only temperature sensor card. */
const TEMP_DEFAULTS = {entity:'',name:'',icon:'',palette:'aurora',show_graph:true,hours:24};
const TEMP_UNITS = ['°C','°F','K'];
const tempNumber = value => (typeof value === 'number' || typeof value === 'string' && /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim())) && Number.isFinite(Number(value)) ? Number(value) : null;
const tempEscape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tempIcon = value => typeof value === 'string' && /^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(value) ? value : '';
const TEMP_STYLE = `
:host{display:block;min-width:0;max-width:100%;color:var(--primary-text-color,#202b3c)}*{box-sizing:border-box}[hidden]{display:none!important}
ha-card{display:block;container:temperature/inline-size;overflow:hidden;min-width:0;border:1px solid var(--divider-color,#dfe5eb);border-radius:var(--orbit-theme-card-radius,20px);background:var(--ha-card-background,var(--card-background-color,#fff));box-shadow:var(--orbit-theme-shadow,var(--ha-card-box-shadow,0 2px 5px #14233716));--accent:var(--orbit-theme-accent,#078f72);--accent2:var(--orbit-theme-accent-2,#27b7b0)}
ha-card[data-palette=ocean]{--accent:#1477c9;--accent2:#22a7c7}ha-card[data-palette=sunset]{--accent:#d65c42;--accent2:#ee973f}ha-card[data-palette=lavender]{--accent:#8059c7;--accent2:#b56cc8}
.shell{position:relative;padding:18px;background:var(--orbit-theme-shell-background,radial-gradient(ellipse at 100% 0,color-mix(in srgb,var(--accent2) 9%,transparent),transparent 70%))}.shell:before{content:'';position:absolute;left:20px;right:20px;top:0;height:2px;background:var(--orbit-theme-strip-background,linear-gradient(90deg,var(--accent),var(--accent2)));pointer-events:none}
button{font:inherit;color:inherit;cursor:pointer;border:0}button:focus-visible{outline:2px solid var(--accent);outline-offset:3px}button:disabled{cursor:default;opacity:.6}.head{display:flex;align-items:center;gap:12px}.info{display:flex;align-items:center;gap:12px;min-width:0;flex:1;min-height:44px;padding:0;background:transparent;text-align:left;border-radius:12px}.orbit{display:grid;place-items:center;flex:none;width:42px;height:42px;border-radius:50%;color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent);outline:1px solid color-mix(in srgb,var(--accent) 25%,transparent);outline-offset:3px}.orbit ha-icon{--mdc-icon-size:23px}.copy{min-width:0}.eyebrow{display:block;font-size:9px;line-height:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--secondary-text-color,#637080);font-weight:750}.name{display:block;font-size:15px;line-height:21px;font-weight:700;overflow-wrap:anywhere}
.readout{display:flex;align-items:baseline;flex-wrap:wrap;gap:5px;margin-top:18px}.reading{font-size:42px;line-height:1.15;font-weight:730;letter-spacing:-.04em;font-variant-numeric:tabular-nums;overflow-wrap:anywhere;min-width:0;max-width:100%}.unit{font-size:20px;font-weight:500;color:var(--secondary-text-color,#637080)}.state{margin-top:7px;min-height:16px;font-size:11px;line-height:16px;color:var(--secondary-text-color,#637080);overflow-wrap:anywhere}
.history{margin-top:18px;border-top:1px solid var(--divider-color,#dfe5eb);padding-top:12px}.history-head{display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;font-size:10px;line-height:16px;color:var(--secondary-text-color,#637080)}.period{font-weight:650;letter-spacing:.04em;text-transform:uppercase}.trend{font-variant-numeric:tabular-nums}.graph{display:block;width:100%;height:74px;margin-top:10px;overflow:visible}.grid{stroke:var(--divider-color,#dfe5eb);stroke-width:.7;stroke-dasharray:3 5}.trace{fill:none;stroke:var(--accent);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}.dot{fill:var(--accent)}.axis{display:flex;justify-content:space-between;margin-top:5px;font-size:9px;line-height:14px;color:var(--secondary-text-color,#637080)}.stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.metric{padding:9px 10px;border-radius:11px;background:var(--orbit-theme-metric-background,color-mix(in srgb,var(--accent) 5%,transparent));min-width:0}.metric span{display:block;font-size:9px;line-height:14px;color:var(--secondary-text-color,#637080)}.metric strong{display:block;font-size:14px;line-height:21px;font-weight:650;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}.history-message{font-size:11px;line-height:17px;color:var(--secondary-text-color,#637080);margin:12px 0 0;overflow-wrap:anywhere}.retry{margin-top:8px;min-height:44px;padding:6px 12px;border:1px solid var(--divider-color,#dfe5eb);border-radius:9px;background:transparent;font-size:11px}
.state:empty{display:none}
@container temperature (max-width:210px){.shell{padding:12px}.info{gap:9px}.orbit{width:32px;height:32px}.orbit ha-icon{--mdc-icon-size:19px}.name{font-size:13px;line-height:18px}.reading{font-size:32px}.unit{font-size:16px}.readout{margin-top:15px}.stats{gap:6px}.metric{padding:7px 5px}.metric strong{font-size:11px}.history{margin-top:14px}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}`;
class TemperatureOrbitCard extends HTMLElement {
 constructor(){super();this.attachShadow({mode:'open'});this._config={...TEMP_DEFAULTS};this._rows=[];this._historyState='idle';this._generation=0;this._loadedAt=0;this._key='';this._visibility=()=>{if(document.hidden)this._stop();else this._ensureHistory();};this.shadowRoot.addEventListener('click',e=>{if(e.target.closest?.('.info'))this._moreInfo();if(e.target.closest?.('.retry'))this._ensureHistory(true);});}
 static getStubConfig(){return {...TEMP_DEFAULTS};}
 static getConfigForm(){return {schema:[
  {name:'entity',selector:{entity:{filter:{domain:'sensor',device_class:'temperature'}}}},
  {name:'name',selector:{text:{}}},{name:'icon',selector:{icon:{}}},
  {name:'palette',default:'aurora',selector:{select:{options:['aurora','ocean','sunset','lavender'],mode:'dropdown'}}},
  {name:'show_graph',default:true,selector:{boolean:{}}},
  {name:'hours',default:24,selector:{number:{min:1,max:168,step:1,mode:'box'}}}
 ],computeLabel:({name})=>({entity:'Temperature sensor',name:'Name (optional)',icon:'Icon (optional)',palette:'Orbit palette',show_graph:'Show history and min/max',hours:'History period'})[name],computeHelper:({name})=>({entity:'Temperature sensors only. YAML also accepts a sensor reporting °C, °F or K.',hours:'Min/max refer to available recorded samples, not a forecast. History refreshes at most every five minutes.'})[name]};}
 setConfig(config){
  if(!config||typeof config!=='object'||Array.isArray(config))throw Error('Invalid Temperature Orbit configuration.');
  const next={...TEMP_DEFAULTS};for(const key of Object.keys(next))if(config[key]!=null)next[key]=config[key];
  if(typeof next.entity!=='string'||next.entity&&!/^sensor\.[a-z0-9_]+$/.test(next.entity))throw Error('Choose a temperature sensor entity.');
  for(const key of ['name','icon'])if(typeof next[key]!=='string')throw Error(key+' must be text.');
  if(!['aurora','ocean','sunset','lavender'].includes(next.palette))throw Error('Invalid Orbit palette.');
  if(typeof next.show_graph!=='boolean')throw Error('show_graph must be true or false.');
  if(!Number.isInteger(next.hours)||next.hours<1||next.hours>168)throw Error('hours must be an integer from 1 to 168.');
  const changed=next.entity!==this._config.entity||next.hours!==this._config.hours||next.show_graph!==this._config.show_graph;
  this._config=next;if(changed){this._invalidate();this._key=this._sourceKey();}this._render();this._ensureHistory();
 }
 set hass(value){this._hass=value;const key=this._sourceKey();if(key!==this._key){this._invalidate();this._key=key;}this._render();this._ensureHistory();}
 get hass(){return this._hass;}
 connectedCallback(){document.addEventListener('visibilitychange',this._visibility);this._render();this._ensureHistory();}
 disconnectedCallback(){document.removeEventListener('visibilitychange',this._visibility);this._invalidate();}
 getCardSize(){return this._config.show_graph?6:3;}
 getGridOptions(){return {columns:6,min_columns:3};}
 _entity(){return this._hass?.states?.[this._config.entity];}
 _sourceKey(){return JSON.stringify([this._config.entity,this._config.hours,this._config.show_graph,this._entity()?.attributes?.unit_of_measurement??'',this._entity()?.attributes?.device_class??'']);}
 _model(){const e=this._entity(),unit=e?.attributes?.unit_of_measurement,temperature=TEMP_UNITS.includes(unit)||e?.attributes?.device_class==='temperature';const value=tempNumber(e?.state);let status='';if(!this._config.entity)status='Choose a temperature sensor';else if(!e)status='Entity not found';else if(!temperature)status='Not a temperature sensor';else if(e.state==='unavailable')status='Unavailable';else if(e.state==='unknown')status='Unknown';else if(value===null)status='Invalid temperature';else if(!TEMP_UNITS.includes(unit))status='Unit unavailable';else if(this._hass?.connection?.connected===false)status='Disconnected · last reported value';return {entity:e,name:this._config.name||e?.attributes?.friendly_name||'Temperature',unit:TEMP_UNITS.includes(unit)?unit:'',value:temperature?value:null,status};}
 _format(value){if(value===null)return '—';try{return new Intl.NumberFormat(this._hass?.locale?.language||this._hass?.language||'en',{maximumFractionDigits:6}).format(value);}catch{return String(value);}}
 _moreInfo(){if(this._entity())this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId:this._config.entity},bubbles:true,composed:true}));}
 _stop(){clearTimeout(this._timer);this._timer=undefined;}
 _invalidate(){this._stop();clearTimeout(this._timeout);this._generation++;this._pending=null;this._rows=[];this._historyState='idle';this._loadedAt=0;}
 _eligible(){const m=this._model();return this.isConnected&&!document.hidden&&this._config.show_graph&&!!m.unit&&m.value!==null&&this._hass?.connection?.connected!==false&&typeof this._hass?.callApi==='function';}
 _schedule(){this._stop();if(this._eligible()&&!this._pending)this._timer=setTimeout(()=>{this._timer=undefined;this._ensureHistory();},Math.max(1000,300000-(Date.now()-this._loadedAt)));}
 async _ensureHistory(force=false){
  if(!this._eligible()){this._stop();return;}if(this._pending)return;
  if(!force&&this._loadedAt&&Date.now()-this._loadedAt<300000){this._schedule();return;}
  this._stop();const token={generation:this._generation};this._pending=token;this._historyState='loading';this._render();
  const end=Date.now(),start=end-this._config.hours*3600000,unit=this._model().unit;
  const path='history/period/'+new Date(start).toISOString()+'?filter_entity_id='+encodeURIComponent(this._config.entity)+'&end_time='+encodeURIComponent(new Date(end).toISOString())+'&significant_changes_only=0';
  this._timeout=setTimeout(()=>{if(this._pending===token){token.timedOut=true;this._historyState='timeout';this._rows=[];this._render();}},15000);
  try{const response=await this._hass.callApi('GET',path);if(this._pending!==token||token.generation!==this._generation||token.timedOut)return;this._rows=this._parseHistory(response,start,end,unit);this._range={start,end};this._historyState=this._rows.some(r=>r.value!==null)?'ready':'empty';}
  catch{if(this._pending===token&&!token.timedOut){this._rows=[];this._historyState='error';}}
  finally{if(this._pending===token){clearTimeout(this._timeout);this._pending=null;this._loadedAt=Date.now();this._render();this._schedule();}}
 }
 _parseHistory(response,start,end,unit){
  if(!Array.isArray(response))throw Error('Invalid history response.');
  const list=response.find(rows=>Array.isArray(rows)&&rows.some(r=>r?.entity_id===this._config.entity));if(!list)return [];
  let carriedUnit='';const rows=[];for(const r of [...list].sort((a,b)=>Date.parse(a?.last_changed)-Date.parse(b?.last_changed))){
   if(!r||r.entity_id&&r.entity_id!==this._config.entity)continue;
   if(r.attributes&&'unit_of_measurement'in r.attributes)carriedUnit=r.attributes.unit_of_measurement;
   const time=Date.parse(r.last_changed);if(!Number.isFinite(time)||time>end)continue;
   rows.push({time:Math.max(start,time),value:carriedUnit===unit?tempNumber(r.state):null});
  }return rows;
 }
 _historyMarkup(unit){
  const labels={idle:'History is not available yet.',loading:'Loading recorded temperatures…',empty:'No recorded temperatures in this period.',error:'History could not be loaded. Current temperature remains available.',timeout:'History request timed out. Current temperature remains available.'};
  const values=this._rows.filter(r=>r.value!==null),ready=this._historyState==='ready'&&values.length>0;let chart='',stats='',trend='';
  if(ready){let min=Infinity,max=-Infinity;for(const r of values){min=Math.min(min,r.value);max=Math.max(max,r.value);}const range=max-min||1,span=this._range.end-this._range.start;const point=r=>[6+288*(r.time-this._range.start)/span,62-48*(r.value-min)/range];
   // Bound visual work; preserve gaps and each bucket's extrema rather than inventing a smooth curve.
   const sampled=[];let bucket=[];const flush=()=>{if(!bucket.length)return;const picks=[bucket[0],bucket.reduce((a,b)=>a.value<b.value?a:b),bucket.reduce((a,b)=>a.value>b.value?a:b),bucket.at(-1)];sampled.push(...[...new Set(picks)].sort((a,b)=>a.time-b.time));bucket=[];};let previous=-1;for(const r of this._rows){if(r.value===null){flush();sampled.push(r);previous=-1;continue;}const b=Math.floor((r.time-this._range.start)/span*60);if(b!==previous){flush();previous=b;}bucket.push(r);}flush();
   let draw=false;const path=sampled.map(r=>{if(r.value===null){draw=false;return '';}const [x,y]=point(r),command=draw?'L':'M';draw=true;return command+x.toFixed(2)+','+y.toFixed(2);}).join(' '),last=values.at(-1),p=point(last);
   chart='<svg class="graph" viewBox="0 0 300 74" preserveAspectRatio="none" role="img" aria-label="Recorded temperature history; gaps indicate unavailable or incompatible readings"><path class="grid" d="M6 14H294 M6 38H294 M6 62H294"/><path class="trace" d="'+path+'"/><circle class="dot" cx="'+p[0]+'" cy="'+p[1]+'" r="2.4"/></svg><div class="axis"><span>'+this._config.hours+'h ago</span><span>Now</span></div>';
   const text=v=>tempEscape(this._format(v)+(unit?' '+unit:''));stats='<div class="stats"><div class="metric"><span>Recorded min</span><strong>'+text(min)+'</strong></div><div class="metric"><span>Recorded max</span><strong>'+text(max)+'</strong></div></div>';
   if(values.length>1&&!this._rows.some(r=>r.value===null)){const delta=last.value-values[0].value;trend=(delta>0?'↗ Rising':delta<0?'↘ Falling':'→ Stable');}
  }
  return '<div class="history"><div class="history-head"><span class="period">Last '+this._config.hours+' hours</span><span class="trend">'+trend+'</span></div>'+chart+stats+(!ready?'<p class="history-message" role="status">'+labels[this._historyState]+'</p>':'')+(['error','timeout'].includes(this._historyState)?'<button class="retry" type="button" '+(this._pending?'disabled':'')+'>Retry history</button>':'')+'</div>';
 }
 _render(){
  if(!this.shadowRoot)return;const m=this._model(),icon=tempIcon(this._config.icon)||tempIcon(m.entity?.attributes?.icon)||'mdi:thermometer';
  if(!this.shadowRoot.querySelector('ha-card'))this.shadowRoot.innerHTML='<style>'+TEMP_STYLE+'</style><ha-card><div class="shell"><div class="head"><button class="info" type="button"><span class="orbit"><ha-icon></ha-icon></span><span class="copy"><span class="eyebrow">Temperature</span><span class="name"></span></span></button></div><div class="readout"><span class="reading"></span><span class="unit"></span></div><div class="state" role="status"></div><div class="history-slot"></div></div></ha-card>';
  const root=this.shadowRoot,set=(selector,value)=>{const n=root.querySelector(selector);if(n.textContent!==value)n.textContent=value;};root.querySelector('ha-card').setAttribute('data-palette',this._config.palette);
  root.querySelector('.info').disabled=!m.entity;root.querySelector('.info').setAttribute('aria-label','More information: '+m.name);root.querySelector('ha-icon').setAttribute('icon',icon);set('.name',m.name);set('.reading',this._format(m.value));set('.unit',m.value===null?'':m.unit);set('.state',m.status);
  const html=this._config.show_graph?this._historyMarkup(m.unit):'',slot=root.querySelector('.history-slot');if(this._historyHTML!==html){this._historyHTML=html;slot.innerHTML=html;}
 }
}
if(!customElements.get('ha-temperature-orbit-card'))customElements.define('ha-temperature-orbit-card',TemperatureOrbitCard);
window.customCards ||= [];
if(!window.customCards.some(c=>c.type==='ha-temperature-orbit-card'))window.customCards.push({type:'ha-temperature-orbit-card',name:'Temperature Orbit Card',description:'Temperature only: reported reading, recorded history and min/max in the Orbit design.',preview:true});
