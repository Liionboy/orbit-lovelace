import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const source = readFileSync(new URL('../ha-weather-orbit-card.js', import.meta.url), 'utf8');
const plain = (v) => JSON.parse(JSON.stringify(v));
const flush = () => new Promise((r) => setImmediate(r));
const weather = (attrs = {}, state = 'sunny') => ({ state, attributes: { friendly_name: 'Example weather', supported_features: 7, temperature: 21.7, temperature_unit: '°C', humidity: 57, wind_speed: 12.3, wind_speed_unit: 'km/h', precipitation_unit: 'mm', ...attrs } });
const forecasts = (count = 8) => Array.from({ length: count }, (_, i) => ({ datetime: '2026-10-' + (22 + i) + 'T00:00:00Z', temperature: 20 + i, templow: i, condition: 'sunny', precipitation: 0 }));
function connection() {
 const listeners = new Map(), requests = [];
 return { connected: true, requests, listeners,
  addEventListener(name, cb) { const list = listeners.get(name) || new Set(); list.add(cb); listeners.set(name, list); },
  removeEventListener(name, cb) { listeners.get(name)?.delete(cb); },
  emit(name) { this.connected = name === 'ready'; for (const cb of [...listeners.get(name) || []]) cb(); },
  subscribeMessage(cb, payload, options) { assert.equal(options?.resubscribe, false); let resolve, reject; const promise = new Promise((a, b) => { resolve = a; reject = b; }); const request = { cb, payload: plain(payload), resolve, reject, disposed: 0 }; requests.push(request); request.done = () => resolve(() => { request.disposed++; }); return promise; },
 };
}
function setup(config = { entity: 'weather.example' }, overrides = {}) {
 const registry = new Map(), events = [], calls = [], timers = new Map(); let nextTimer = 0;
 class Element {
  attachShadow() { this.shadowRoot = { html: '', writes: 0, listeners: {}, nodes: {}, querySelector(selector) { return this.nodes[selector] ||= { textContent: '', setAttribute(k, v) { this[k] = v; } }; }, addEventListener(name, cb) { this.listeners[name] = cb; }, get innerHTML() { return this.html; }, set innerHTML(v) { this.html = v; this.writes++; } }; }
  dispatchEvent(e) { events.push(e); return true; }
 }
 const context = vm.createContext({ HTMLElement: Element, Intl, setTimeout: (cb, delay) => { const id = ++nextTimer; timers.set(id, { cb, delay }); return id; }, clearTimeout: (id) => timers.delete(id), window: {}, customElements: { get: (n) => registry.get(n), define: (n, c) => { assert.ok(!registry.has(n)); registry.set(n, c); } }, CustomEvent: class { constructor(type, options) { this.type = type; Object.assign(this, options); } } });
 vm.runInContext(source, context);
 const Card = registry.get('ha-weather-orbit-card'), card = new Card(), conn = connection();
 card.setConfig(config); card.hass = { states: { 'weather.example': weather(), 'weather.other': weather({ temperature: -3 }) }, connection: conn, config: { time_zone: 'UTC' }, locale: { language: 'en-GB', time_format: '24' }, callService: (...args) => calls.push(args), ...overrides }; card.connectedCallback();
 return { Card, card, conn, calls, context, events, timers, html: () => card.shadowRoot.innerHTML, click(action, disabled = false) { card.shadowRoot.listeners.click({ composedPath: () => [{ dataset: { action }, disabled }] }); } };
}
test('empty useful card, no guessed entities or services', () => { const e = setup({}); assert.match(e.html(), /Choose a weather entity/); assert.equal(e.conn.requests.length, 0); e.click('info'); e.click('retry'); assert.deepEqual(e.calls, []); assert.deepEqual(e.events, []); });
test('metadata root asset version and minimum', () => { const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url))); const hacs = JSON.parse(readFileSync(new URL('../hacs.json', import.meta.url))); assert.equal(pkg.version, '1.2.0'); assert.equal(hacs.homeassistant, '2026.6.0'); assert.equal(hacs.filename, pkg.name + '.js'); assert.doesNotMatch(source, /callService|attributes\.forecast/); });
test('native form all optional defaults consistent and complete', () => { const e = setup({}), stub = e.Card.getStubConfig(), f = e.Card.getConfigForm(); assert.deepEqual(plain(f.schema.map((x) => x.name).sort()), Object.keys(stub).sort()); assert.equal(stub.entity, ''); for (const s of f.schema) { assert.notEqual(s.required, true); assert.ok(f.computeLabel(s)); if (s.default !== undefined) assert.equal(s.default, stub[s.name]); } assert.equal(f.schema[0].selector.entity.domain, 'weather'); });
for (const config of [null, [], 1, { entity: 'sensor.foo' }, { entity: 'weather.x" onmouseover="bad' }, { title: 3 }, { palette: '__proto__' }, { forecast_type: 'constructor' }, { show_forecast: 'false' }, ...[0, 8, -1, 1.2, '3', Infinity].map((forecast_count) => ({ forecast_count }))]) test('reject bad config ' + JSON.stringify(config), () => { assert.throws(() => setup(config)); });
for (const palette of ['aurora', 'ocean', 'sunset', 'lavender']) test('palette ' + palette, () => { assert.match(setup({ palette }).html(), new RegExp('data-palette="' + palette + '"')); });
test('zero negative decimals and reported units, no guessed unit', () => { const e = setup({}, { states: { 'weather.example': weather({ temperature: -0.7, humidity: 0, wind_speed: 0, temperature_unit: '°F', wind_speed_unit: undefined }) } }); e.card.setConfig({ entity: 'weather.example' }); assert.match(e.html(), /-0.7<small>°F/); assert.match(e.html(), /Humidity <strong>0 %/); assert.match(e.html(), /Wind <strong>0<\/strong>/); });
for (const bad of [undefined, null, '', ' ', NaN, Infinity, false, {}, 'no']) test('invalid readings omitted ' + String(bad), () => { const e = setup(undefined, { states: { 'weather.example': weather({ temperature: bad, wind_speed: bad, humidity: bad }) } }); assert.doesNotMatch(e.html(), /class="temperature"|class="stats"/); });
for (const state of ['unknown', 'unavailable', '']) test('unavailable no stale data ' + state, async () => { const e = setup(); e.conn.requests[0].cb({ type: 'daily', forecast: forecasts() }); e.conn.requests[0].done(); await flush(); e.card.hass.states['weather.example'].state = state; e.card.hass = { ...e.card.hass }; assert.doesNotMatch(e.html(), /class="temperature"|class="entry"|class="stats"/); assert.match(e.html(), /Current weather unavailable/); assert.equal(e.conn.requests[0].disposed, 1); });
test('missing entity disables info and forecast', () => { const e = setup(undefined, { states: {} }); e.click('info'); assert.equal(e.events.length, 0); assert.match(e.html(), / disabled/); assert.equal(e.conn.requests.length, 0); });
for (const [type, flag] of [['daily', 1], ['hourly', 2], ['twice_daily', 4]]) test('exact subscribe contract and feature gate ' + type, () => { const e = setup({ entity: 'weather.example', forecast_type: type }, { states: { 'weather.example': weather({ supported_features: flag }) } }); assert.deepEqual(e.conn.requests[0].payload, { type: 'weather/subscribe_forecast', entity_id: 'weather.example', forecast_type: type }); e.card.hass.states['weather.example'].attributes.supported_features = 0; e.card.hass = { ...e.card.hass }; assert.match(e.html(), /does not support/); assert.equal(e.card._forecast.length, 0); });
test('unsupported query absent and capability recovery', () => { const e = setup(undefined, { states: { 'weather.example': weather({ supported_features: 0 }) } }); assert.equal(e.conn.requests.length, 0); assert.match(e.html(), /does not support/); e.card.hass.states['weather.example'].attributes.supported_features = 1; e.card.hass = { ...e.card.hass }; assert.equal(e.conn.requests.length, 1); });
test('display count boundaries and update/null/invalid forecast', () => { const e = setup(); const r = e.conn.requests[0]; r.cb({ type: 'hourly', forecast: forecasts() }); assert.equal(e.card._forecast.length, 0); r.cb({ type: 'daily', forecast: forecasts() }); assert.equal((e.html().match(/class="entry"/g) || []).length, 3); e.card.setConfig({ entity: 'weather.example', forecast_count: 7 }); assert.equal((e.html().match(/class="entry"/g) || []).length, 7); e.card.setConfig({ entity: 'weather.example', forecast_count: 1 }); assert.equal((e.html().match(/class="entry"/g) || []).length, 1); assert.equal(e.conn.requests.length, 1); for (const forecast of [null, [], {}, [null, { datetime: 'bad' }, { datetime: 2 }]]) { r.cb({ type: 'daily', forecast }); assert.match(e.html(), /No forecast data/); } });
test('optional forecast fields, low zero, no invented precipitation/day', () => { const e = setup(); e.conn.requests[0].cb({ type: 'daily', forecast: [{ datetime: '2026-10-22T00:00:00Z', temperature: 0, templow: 0 }, { datetime: '2026-10-23T00:00:00Z', is_daytime: false }] }); assert.match(e.html(), /Low 0 °C/); assert.match(e.html(), /Night/); assert.doesNotMatch(e.html(), /class="rain"/); });
test('HA locale timezone and hourly time preferences', () => { const e = setup({ entity: 'weather.example', forecast_type: 'hourly' }); e.card.hass = { ...e.card.hass, locale: { language: 'en-GB', time_format: '24' }, config: { time_zone: 'Asia/Tokyo' } }; assert.match(e.card._date('2026-10-21T23:00:00Z'), /Thu.*08:00/); e.card.hass = { ...e.card.hass, locale: { language: 'invalid_@', time_format: '12' }, config: { time_zone: 'invalid' } }; assert.doesNotThrow(() => e.card._date('2026-10-21T23:00:00Z')); });
test('hostile text/attributes/prototype state safely escaped', () => { const hostile = '\"><img src=x onerror=alert(1)>'; const e = setup({ entity: 'weather.example', title: hostile }, { states: { 'weather.example': weather({ friendly_name: hostile, temperature_unit: hostile, wind_speed_unit: hostile }, hostile) } }); e.conn.requests[0].cb({ type: 'daily', forecast: [{ datetime: '2026-10-22T00:00:00Z', temperature: 2, condition: hostile }] }); assert.doesNotMatch(e.html(), /<img|<script|aria-label="[^"]*" on/); assert.match(e.html(), /&quot;&gt;&lt;img/); e.card.hass.states['weather.example'].state = 'constructor'; e.card.hass = { ...e.card.hass }; assert.match(e.html(), />constructor</); });
test('stable DOM and actual delegated info after unrelated hass update', () => { const e = setup(); const writes = e.card.shadowRoot.writes; const listener = e.card.shadowRoot.listeners.click; e.card.hass = { ...e.card.hass, states: { ...e.card.hass.states, 'sensor.other': { state: 'new' } } }; assert.equal(e.card.shadowRoot.writes, writes); assert.equal(e.card.shadowRoot.listeners.click, listener); e.click('info'); assert.deepEqual(plain(e.events[0].detail), { entityId: 'weather.example' }); assert.equal(e.events[0].bubbles, true); assert.equal(e.events[0].composed, true); e.click('turn_on'); e.click('retry'); e.click('info', true); assert.equal(e.events.length, 1); assert.equal(e.calls.length, 0); e.card.hass.states['weather.example'].attributes.temperature = 22.9; e.card.hass = { ...e.card.hass }; assert.match(e.html(), /22.9<small>/); });
test('duplicate registration and mounted callbacks do not duplicate subscriptions', () => { const e = setup(); vm.runInContext(source, e.context); assert.equal(e.context.window.customCards.length, 1); e.card.connectedCallback(); e.card.connectedCallback(); e.card.hass = { ...e.card.hass }; assert.equal(e.conn.requests.length, 1); assert.equal(e.conn.listeners.get('ready').size, 1); });
test('async config race discards stale events and late unsubscriber', async () => { const e = setup(); const old = e.conn.requests[0]; e.card.setConfig({ entity: 'weather.other', forecast_type: 'hourly' }); const fresh = e.conn.requests[1]; old.cb({ type: 'daily', forecast: forecasts() }); old.done(); await flush(); assert.equal(old.disposed, 1); assert.equal(e.card._forecast.length, 0); fresh.cb({ type: 'hourly', forecast: forecasts(1) }); fresh.done(); await flush(); assert.equal(e.card._forecast.length, 1); e.card.disconnectedCallback(); assert.equal(fresh.disposed, 1); assert.equal(e.conn.listeners.get('ready').size, 0); });
test('config type change, disabled forecast and remount lifecycle', async () => { const e = setup(); e.conn.requests[0].done(); await flush(); e.card.setConfig({ entity: 'weather.example', forecast_type: 'twice_daily' }); assert.equal(e.conn.requests[0].disposed, 1); e.card.setConfig({ entity: 'weather.example', show_forecast: false }); e.conn.requests[1].done(); await flush(); assert.equal(e.conn.requests[1].disposed, 1); assert.doesNotMatch(e.html(), /section class="forecast"/); e.card.setConfig({ entity: 'weather.example' }); assert.equal(e.conn.requests.length, 3); e.card.disconnectedCallback(); e.conn.requests[2].done(); await flush(); assert.equal(e.conn.requests[2].disposed, 1); e.card.connectedCallback(); assert.equal(e.conn.requests.length, 4); });
test('network disconnect invalidates stale data and reconnect subscribes once', async () => { const e = setup(); const r = e.conn.requests[0]; r.done(); r.cb({ type: 'daily', forecast: forecasts() }); await flush(); e.conn.emit('disconnected'); assert.match(e.html(), /Forecast offline/); assert.equal(e.card._forecast.length, 0); assert.equal(r.disposed, 1); r.cb({ type: 'daily', forecast: forecasts() }); assert.equal(e.card._forecast.length, 0); e.card.hass = { ...e.card.hass }; assert.equal(e.conn.requests.length, 1); e.conn.emit('ready'); assert.equal(e.conn.requests.length, 2); e.card.hass = { ...e.card.hass }; assert.equal(e.conn.requests.length, 2); });
test('connection replacement detaches listeners and disposes old request', async () => { const e = setup(), other = connection(); e.card.hass = { ...e.card.hass, connection: other }; e.conn.requests[0].done(); await flush(); assert.equal(e.conn.requests[0].disposed, 1); assert.equal(e.conn.listeners.get('ready').size, 0); assert.equal(other.requests.length, 1); });
test('permission/network failure independent of current weather; retry duplicate gate', async () => { const e = setup(); e.conn.requests[0].reject({ code: 'unauthorized', message: '<secret details>' }); await flush(); assert.match(e.html(), /Forecast unavailable. Try again/); assert.match(e.html(), /21.7<small>/); assert.doesNotMatch(e.html(), /secret/); e.card.hass = { ...e.card.hass }; assert.equal(e.conn.requests.length, 1); e.click('retry'); e.click('retry'); assert.equal(e.conn.requests.length, 2); assert.match(e.html(), /Loading forecast/); e.conn.requests[1].done(); e.conn.requests[1].cb({ type: 'daily', forecast: forecasts(1) }); await flush(); assert.equal(e.card._forecast.length, 1); assert.equal(e.calls.length, 0); });
test('late rejection cannot replace new forecast', async () => { const e = setup(); const old = e.conn.requests[0]; e.card.setConfig({ entity: 'weather.other' }); e.conn.requests[1].cb({ type: 'daily', forecast: forecasts(1) }); old.reject(new Error('late')); await flush(); assert.doesNotMatch(e.html(), /Try again/); assert.equal(e.card._forecast.length, 1); });
test('missing connector and sync subscribe/unsubscribe errors are contained', async () => { const e = setup(undefined, { connection: undefined }); assert.match(e.html(), /connection unavailable/); const conn = connection(); conn.subscribeMessage = () => { throw new Error('offline'); }; e.card.hass = { ...e.card.hass, connection: conn }; assert.match(e.html(), /Try again/); e.card._dispose(() => { throw Error('closed'); }); e.card._dispose(() => Promise.reject(Error('closed'))); await flush(); });

for (const config of [{ show_time: 'true' }, { show_date: 1 }, { time_zone: 42 }, { time_zone: 'Not/AZone' }]) test('reject invalid clock config ' + JSON.stringify(config), () => assert.throws(() => setup(config)));
test('clock and full date default on, optional and work without weather', () => {
 const e = setup({}); assert.match(e.html(), /class="clock"/); assert.match(e.html(), /class="calendar"/); assert.equal(e.timers.size, 1);
 e.card.setConfig({ show_time: false }); assert.doesNotMatch(e.html(), /class="clock"/); assert.match(e.html(), /class="calendar"/);
 e.card.setConfig({ show_time: false, show_date: false }); assert.doesNotMatch(e.html(), /class="datetime"/); assert.equal(e.timers.size, 0);
 e.card.setConfig({ show_date: false }); assert.match(e.html(), /class="clock"/); assert.doesNotMatch(e.html(), /class="calendar"/); assert.equal(e.timers.size, 1);
});
test('clock follows HA zone, 12/24 format, locale and explicit override', () => {
 const e = setup({}); e.card._now = () => new Date('2026-10-22T21:30:00Z');
 e.card.hass = { ...e.card.hass, config: { time_zone: 'Europe/Bucharest' }, locale: { language: 'ro', time_format: '24' } };
 const node = (name) => e.card.shadowRoot.querySelector(name);
 assert.equal(node('.clock').textContent, '00:30'); assert.match(node('.calendar').textContent, /23 octombrie 2026/);
 e.card.setConfig({ time_zone: 'America/New_York' }); assert.equal(node('.clock').textContent, '17:30'); assert.match(node('.calendar').textContent, /22 octombrie/);
 e.card.hass = { ...e.card.hass, locale: { language: 'en-US', time_format: '12' } }; assert.match(node('.clock').textContent, /05:30 PM/);
 e.card.setConfig({}); e.card.hass = { ...e.card.hass, config: { time_zone: 'invalid' }, locale: { language: 'invalid_@', time_format: '24' } }; assert.doesNotThrow(() => e.card._updateClock()); assert.ok(node('.calendar').textContent);
 e.card.hass = { ...e.card.hass, config: { time_zone: 'Asia/Tokyo' }, locale: { time_zone: 'local' } }; assert.equal(e.card._zone(), undefined);
 e.card.setConfig({ time_zone: 'UTC' }); assert.equal(e.card._zone(), 'UTC');
});
test('minute-aligned timer advances date at midnight without hass or forecast queries, then cleans up', () => {
 const e = setup(); let now = new Date('2026-12-31T23:59:59.500Z'); e.card._now = () => now; e.card._updateClock(); e.card._startClock();
 assert.equal(e.timers.size, 1); const [id, timer] = [...e.timers][0]; assert.equal(timer.delay, 500);
 const writes = e.card.shadowRoot.writes, requests = e.conn.requests.length;
 now = new Date('2027-01-01T00:00:00Z'); e.timers.delete(id); timer.cb();
 assert.equal(e.card.shadowRoot.querySelector('.clock').textContent, '00:00'); assert.match(e.card.shadowRoot.querySelector('.calendar').textContent, /1 January 2027/);
 assert.equal(e.card.shadowRoot.querySelector('.clock').datetime, now.toISOString());
 assert.equal(e.card.shadowRoot.writes, writes); assert.equal(e.conn.requests.length, requests); assert.equal(e.calls.length, 0); assert.equal(e.timers.size, 1);
 e.card.connectedCallback(); e.card.connectedCallback(); assert.equal(e.timers.size, 1);
 e.card.disconnectedCallback(); assert.equal(e.timers.size, 0); e.card.connectedCallback(); assert.equal(e.timers.size, 1);
 e.card.setConfig({ show_time: false, show_date: false }); assert.equal(e.timers.size, 0);
});
test('DST jump uses the same resolved zone for calendar and clock', () => {
 const e = setup({ time_zone: 'Europe/Bucharest' }); e.card._now = () => new Date('2026-10-25T00:59:00Z'); e.card._updateClock(); assert.equal(e.card.shadowRoot.querySelector('.clock').textContent, '03:59');
 e.card._now = () => new Date('2026-10-25T01:00:00Z'); e.card._updateClock(); assert.equal(e.card.shadowRoot.querySelector('.clock').textContent, '03:00'); assert.match(e.card.shadowRoot.querySelector('.calendar').textContent, /25 October 2026/);
});

const outdoorConfig = { entity: 'weather.example', outdoor_temperature_entity: 'sensor.outdoor' };
const outdoorState = (state = '6.4', unit = '°C', name = 'Outdoor thermometer') => ({ state, attributes: { unit_of_measurement: unit, friendly_name: name } });
const outdoorSetup = (state = outdoorState()) => setup(outdoorConfig, { states: { 'weather.example': weather(), ...(state ? { 'sensor.outdoor': state } : {}) } });
for (const value of [5, 'weather.example', 'binary_sensor.outdoor', 'sensor.x" onclick=bad']) test('invalid outdoor entity ' + value, () => assert.throws(() => setup({ outdoor_temperature_entity: value })));
test('outdoor entity is optional, not auto-selected and exposed as a sensor selector', () => {
 const e = setup({}), schema = e.Card.getConfigForm().schema.find(s => s.name === 'outdoor_temperature_entity');
 assert.equal(e.Card.getStubConfig().outdoor_temperature_entity, ''); assert.equal(schema.selector.entity.domain, 'sensor'); assert.notEqual(schema.required, true); assert.doesNotMatch(e.html(), /class="outdoor"/);
});
for (const [state, unit, rendered] of [['0', '°C', '0 °C'], ['-2.7', '°C', '-2.7 °C'], ['43.5', '°F', '43.5 °F'], ['273.15', 'K', '273.15 K']]) test('measured sensor preserves units and finite readings ' + state + unit, () => {
 const e = outdoorSetup(outdoorState(state, unit)); assert.ok(e.html().includes('class="outdoor-value">' + rendered)); assert.match(e.html(), /Outdoor sensor/); assert.match(e.html(), /Weather provider/); assert.match(e.html(), /21.7<small>°C/); assert.equal(e.conn.requests.length, 1); assert.equal(e.calls.length, 0);
});
test('invalid/missing sensor data never substitutes weather or stale measured values', () => {
 const e = outdoorSetup(); for (const sensor of [undefined, outdoorState('unknown'), outdoorState('unavailable'), outdoorState('bad'), outdoorState(''), outdoorState(' '), outdoorState('Infinity'), outdoorState(null), outdoorState(false), { state: '6', attributes: {} }, outdoorState('6', '%'), outdoorState('6', '<img>')]) {
  e.card.hass = { ...e.card.hass, states: { 'weather.example': weather(), ...(sensor ? { 'sensor.outdoor': sensor } : {}) } };
  assert.match(e.html(), /class="outdoor-value unavailable">Unavailable/); assert.doesNotMatch(e.html(), /class="outdoor-value">6.4/); assert.match(e.html(), /21.7<small>°C/);
 }
});
test('outdoor remains independent when weather is unavailable, omitted or forecast fails', async () => {
 const e = outdoorSetup(); e.conn.requests[0].reject(new Error('permission')); await flush(); assert.match(e.html(), /class="outdoor-value">6.4 °C/);
 e.card.hass = { ...e.card.hass, states: { ...e.card.hass.states, 'weather.example': weather({}, 'unavailable') } }; assert.match(e.html(), /class="outdoor-value">6.4 °C/); assert.doesNotMatch(e.html(), /class="temperature"/);
 e.card.setConfig({ outdoor_temperature_entity: 'sensor.outdoor' }); assert.match(e.html(), /class="outdoor-value">6.4 °C/); assert.doesNotMatch(e.html(), /Choose a weather entity|class="current"|class="forecast"/);
});
test('sensor updates, unit-only changes and exact independent More Info, no extra queries', () => {
 const e = outdoorSetup(); const writes = e.card.shadowRoot.writes;
 e.card.hass = { ...e.card.hass, states: { ...e.card.hass.states, 'sensor.unrelated': { state: 'new' } } }; assert.equal(e.card.shadowRoot.writes, writes);
 e.click('outdoor-info'); e.click('info'); assert.deepEqual(plain(e.events.map(event => event.detail)), [{ entityId: 'sensor.outdoor' }, { entityId: 'weather.example' }]);
 e.card.hass.states['sensor.outdoor'].state = '-0.7'; e.card.hass = { ...e.card.hass }; assert.match(e.html(), /class="outdoor-value">-0.7 °C/);
 e.card.hass.states['sensor.outdoor'].attributes.unit_of_measurement = '°F'; e.card.hass = { ...e.card.hass }; assert.match(e.html(), /class="outdoor-value">-0.7 °F/);
 assert.equal(e.conn.requests.length, 1); assert.equal(e.calls.length, 0);
});
test('missing outdoor entity cannot open More Info; existing unavailable can', () => {
 const e = outdoorSetup(null); e.click('outdoor-info'); assert.equal(e.events.length, 0); assert.match(e.html(), /class="outdoor"[^>]* disabled/);
 e.card.hass = { ...e.card.hass, states: { ...e.card.hass.states, 'sensor.outdoor': outdoorState('unavailable') } }; e.click('outdoor-info'); assert.equal(e.events[0].detail.entityId, 'sensor.outdoor'); e.click('outdoor-info', true); assert.equal(e.events.length, 1);
});
test('outdoor hostile name is escaped and switching/removing sensor preserves weather subscription', () => {
 const e = outdoorSetup(outdoorState('6', '°C', '"><img src=x onerror=alert(1)>')); assert.doesNotMatch(e.html(), /<img|aria-label="[^"]*" on/); assert.match(e.html(), /&lt;img/);
 e.card.hass = { ...e.card.hass, states: { ...e.card.hass.states, 'sensor.second': outdoorState('-3') } }; e.card.setConfig({ ...outdoorConfig, outdoor_temperature_entity: 'sensor.second' }); e.click('outdoor-info'); assert.equal(e.events[0].detail.entityId, 'sensor.second'); assert.match(e.html(), /class="outdoor-value">-3 °C/);
 e.card.setConfig({ entity: 'weather.example' }); assert.doesNotMatch(e.html(), /class="outdoor"|Weather provider/); assert.equal(e.conn.requests.length, 1); assert.equal(e.calls.length, 0);
});
