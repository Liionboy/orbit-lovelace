import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../ha-fan-orbit-card.js', import.meta.url), 'utf8');
const plain = (v) => JSON.parse(JSON.stringify(v));
const attrs = { friendly_name: 'Airflow', supported_features: 63, percentage: 50, percentage_step: 25, preset_modes: ['auto', 'sleep'], preset_mode: 'auto', oscillating: false, direction: 'forward' };
const services = Object.fromEntries(['turn_on','turn_off','set_percentage','set_preset_mode','oscillate','set_direction'].map((s) => [s, {}]));
function setup(config = { entity: 'fan.example' }, state = 'on', attributes = attrs, overrides = {}) {
 const registry = new Map(), calls = [], events = [];
 class Element {
  attachShadow() { this.shadowRoot = { html: '', writes: 0, listeners: {}, addEventListener(t,f) { this.listeners[t] = f; }, querySelectorAll() { return []; }, querySelector() { return null; }, get innerHTML() { return this.html; }, set innerHTML(v) { this.html = v; this.writes++; } }; }
  dispatchEvent(e) { events.push(e); }
 }
 const context = vm.createContext({ HTMLElement: Element, window: {}, customElements: { get: (n) => registry.get(n), define: (n,c) => registry.set(n,c) }, CustomEvent: class { constructor(type, opts) { this.type = type; Object.assign(this, opts); } } });
 vm.runInContext(source, context);
 const Card = registry.get('ha-fan-orbit-card'), card = new Card(); card.setConfig(config);
 card.hass = { states: state === null ? {} : { 'fan.example': { state, attributes: { ...attributes } } }, services: { fan: { ...services } }, callService: async (...args) => calls.push(plain(args)), ...overrides };
 return { Card, card, context, calls, events, html: () => card.shadowRoot.innerHTML };
}
test('empty defaults, optional form and packaging agree', async () => {
 const { Card, card, calls, html } = setup({});
 assert.equal(Card.getStubConfig().entity, ''); assert.match(html(), /Select a fan in the visual editor/);
 assert.doesNotMatch(html(), /data-action="power"|data-action="speed"/);
 for (const action of ['power','speed','preset','oscillate','direction','info']) await card._activate(action, 50);
 assert.equal(calls.length, 0);
 const form = Card.getConfigForm(); assert.deepEqual(plain(form.schema.map((s) => s.name)), ['entity','name','icon','palette','read_only']);
 for (const field of form.schema) { assert.notEqual(field.required, true); assert.ok(form.computeLabel(field)); }
 assert.equal(form.schema[0].selector.entity.domain, 'fan'); assert.equal(form.schema[3].default, 'aurora'); assert.equal(form.schema[4].default, false);
 assert.equal(JSON.parse(readFileSync(new URL('../hacs.json', import.meta.url))).homeassistant, '2026.6.0');
 assert.equal(JSON.parse(readFileSync(new URL('../package.json', import.meta.url))).version, '1.0.0');
});
test('configuration validates types and entity domain; palette fallback', () => {
 const { card } = setup();
 for (const invalid of [null, [], {entity:'light.example'}, {entity:'fan.bad"'}, {name:3}, {icon:4}, {palette:4}, {read_only:'false'}]) assert.throws(() => card.setConfig(invalid));
 card.setConfig({ entity:'', palette:'invalid' }); assert.match(card.shadowRoot.innerHTML,/data-palette="aurora"/);
 for (const palette of ['aurora','ocean','sunset','lavender']) { card.setConfig({palette}); assert.match(card.shadowRoot.innerHTML,new RegExp('data-palette="'+palette+'"')); }
});
test('each control dispatches exact allowlisted service and explicit target', async () => {
 const { card, calls } = setup();
 await card._activate('power'); await card._activate('speed','64'); await card._activate('preset','sleep'); await card._activate('oscillate'); await card._activate('direction','reverse');
 assert.deepEqual(calls, [
  ['fan','turn_off',{}, {entity_id:'fan.example'}], ['fan','set_percentage',{percentage:75},{entity_id:'fan.example'}],
  ['fan','set_preset_mode',{preset_mode:'sleep'},{entity_id:'fan.example'}], ['fan','oscillate',{oscillating:true},{entity_id:'fan.example'}], ['fan','set_direction',{direction:'reverse'},{entity_id:'fan.example'}],
 ]);
 const off = setup(undefined,'off'); await off.card._activate('power'); assert.deepEqual(off.calls,[['fan','turn_on',{}, {entity_id:'fan.example'}]]);
 await off.card._activate('speed',25); assert.equal(off.calls[1][1],'set_percentage');
});
for (const state of [null,'unknown','unavailable','invalid','']) test('action gates state ' + state, async () => {
 const {card,calls} = setup(undefined,state);
 for (const [action,value] of [['power'],['speed',25],['preset','sleep'],['oscillate'],['direction','reverse']]) await card._activate(action,value);
 assert.equal(calls.length,0);
});
test('read-only, absent service registry and callService block every command', async () => {
 for (const [config,overrides] of [[{entity:'fan.example',read_only:true},{}],[{entity:'fan.example'},{services:{}}],[{entity:'fan.example'},{callService:null}]]) {
  const {card,calls} = setup(config,'on',attrs,overrides);
  for (const [a,v] of [['power'],['speed',25],['preset','sleep'],['oscillate'],['direction','reverse']]) await card._activate(a,v);
  assert.equal(calls.length,0);
 }
});
test('none or malformed feature flags never assume power or other capabilities', async () => {
 for (const f of [0,undefined,null,-1,1.5,NaN,Infinity,'bad']) {
  const {card,calls,html}=setup(undefined,'on',{...attrs,supported_features:f});
  assert.doesNotMatch(html(),/data-action="(?:power|speed|preset|oscillate|direction)"/);
  await card._activate('power'); await card._activate('speed',25); assert.equal(calls.length,0);
 }
});
test('each feature shows only its own valid control; power flags are state specific', async () => {
 for (const [feature,action] of [[1,'speed'],[2,'oscillate'],[4,'direction'],[8,'preset'],[16,'power']]) {
  const {html}=setup(undefined,'on',{...attrs,supported_features:feature});
  for (const other of ['speed','oscillate','direction','preset','power']) assert.equal(html().includes('data-action="'+other+'"'),other===action);
 }
 assert.doesNotMatch(setup(undefined,'on',{...attrs,supported_features:32}).html(),/data-action="power"/);
 assert.doesNotMatch(setup(undefined,'off',{...attrs,supported_features:16}).html(),/data-action="power"/);
 assert.match(setup(undefined,'off',{...attrs,supported_features:32}).html(),/Turn on/);
});
test('invalid percentages/attributes hide corresponding controls', () => {
 for (const percentage of [NaN,Infinity,-1,101,'',null,true,'bad']) assert.equal(setup(undefined,'on',{...attrs,percentage}).card._model().speed,false);
 for (const oscillating of [null,'true',1]) assert.equal(setup(undefined,'on',{...attrs,oscillating}).card._model().oscillate,false);
 for (const direction of [null,'clockwise','']) assert.equal(setup(undefined,'on',{...attrs,direction}).card._model().direction,false);
 for (const preset_modes of [null,[],['',null,3], 'auto']) assert.equal(!!setup(undefined,'on',{...attrs,preset_modes}).card._model().preset,false);
 assert.equal(setup(undefined,'on',{...attrs,percentage:'0'}).card._model().speed,true);
 assert.equal(setup(undefined,'on',{...attrs,percentage:100}).card._model().speed,true);
});
test('clamp/snap uses safe default, fractional steps and integer service schema', async () => {
 for (const [step,input,expected] of [[25,-10,0],[25,150,100],[25,62.5,75],[100/3,70,67],[undefined,31.4,31],[0,31.7,32],[-1,40,40],[Infinity,40,40],['bad',40,40],[101,40,40]]) {
  const {card,calls}=setup(undefined,'on',{...attrs,percentage_step:step}); await card._activate('speed',input); assert.equal(calls[0][2].percentage,expected);
 }
 const {card,calls}=setup(); for (const bad of [NaN,Infinity,'',null,false,'bad']) await card._activate('speed',bad); assert.equal(calls.length,0);
});
test('invalid options, arbitrary action and unavailable specific service cannot execute', async () => {
 const {card,calls}=setup();
 for (const [a,v] of [['preset','invalid'],['direction','clockwise'],['turn_on'],['service','fan.turn_on'],['toggle']]) await card._activate(a,v);
 delete card.hass.services.fan.set_percentage; await card._activate('speed',50); assert.equal(calls.length,0);
});
test('More Info uses exact payload and never sends a service, including read-only', async () => {
 const {card,events,calls}=setup({entity:'fan.example',read_only:true},'unavailable'); await card._activate('info');
 assert.equal(events[0].type,'hass-more-info'); assert.deepEqual(plain(events[0].detail),{entityId:'fan.example'}); assert.equal(events[0].bubbles,true); assert.equal(events[0].composed,true); assert.equal(calls.length,0);
});
test('busy suppresses duplicate and cross-control requests; failure is generic and retryable', async () => {
 let reject; const {card,calls}=setup(undefined,'on',attrs,{callService:(...args)=>{calls.push(plain(args)); return new Promise((_,r)=>{reject=r;});}});
 const pending=card._activate('power'); await card._activate('power'); await card._activate('speed',75); assert.equal(calls.length,1);
 reject(new Error('<script>secret</script>')); await pending; assert.equal(card._busy,false); assert.equal(card._message,'Request failed. Try again.');
 card.hass={...card.hass,callService:async (...args)=>calls.push(plain(args))}; await card._activate('power'); assert.equal(calls.length,2); assert.equal(card._message,'Request sent');
});
test('unrelated updates preserve DOM; relevant attributes and service availability rerender', () => {
 const {card}=setup(); const writes=card.shadowRoot.writes;
 card.hass={...card.hass,states:{...card.hass.states,'sensor.other':{state:'2'}}}; assert.equal(card.shadowRoot.writes,writes);
 for (const [key,value] of [['percentage',75],['percentage_step',10],['preset_modes',['new']],['preset_mode','new'],['oscillating',true],['direction','reverse'],['supported_features',0],['friendly_name','Changed'],['icon','mdi:air-filter']]) {
  const before=card.shadowRoot.writes; const s=card.hass.states['fan.example']; card.hass={...card.hass,states:{'fan.example':{...s,attributes:{...s.attributes,[key]:value}}}}; assert.equal(card.shadowRoot.writes,before+1,key);
 }
 const before=card.shadowRoot.writes; card.hass={...card.hass,services:{}}; assert.equal(card.shadowRoot.writes,before+1);
});
test('hostile text, icon attributes and preset options are escaped', async () => {
 const hostile='"><img src=x onerror=alert(1)>';
 const {card,html}=setup({entity:'fan.example',name:hostile,icon:hostile},'on',{...attrs,preset_modes:[hostile,'auto',hostile]});
 assert.doesNotMatch(html(),/<img/); assert.match(html(),/&quot;&gt;&lt;img/); assert.equal(card._model().modes.length,2);
});
test('delegated handlers survive updates and dispatch only appropriate event types', async () => {
 const {card,calls}=setup(); const click=card.shadowRoot.listeners.click, change=card.shadowRoot.listeners.change;
 card.hass={...card.hass}; assert.equal(card.shadowRoot.listeners.click,click);
 const event=(action,value)=>({composedPath:()=>[{}, {dataset:{action},value}]});
 click(event('speed',75)); change(event('power')); assert.equal(calls.length,0);
 click(event('power')); await new Promise(setImmediate); assert.equal(calls.length,1);
 change(event('speed','75')); await new Promise(setImmediate); assert.equal(calls.length,2);
});
