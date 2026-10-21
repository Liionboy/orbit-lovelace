import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import vm from 'node:vm';

// Deliberately synthetic: no browser, Home Assistant connection, or real timers.
const source = readFileSync(new URL('../ha-welcome-orbit-card.js', import.meta.url), 'utf8');
const state = (value, attributes = {}) => ({ state: value, attributes });
const plain = (value) => JSON.parse(JSON.stringify(value));
const flush = () => new Promise((resolve) => setImmediate(resolve));
function setup(config = {}, overrides = {}) {
 const registry = new Map(), timers = new Map(), calls = [], events = [], routes = [], routingEvents = [];
 let nextTimer = 0, now = Date.parse('2026-10-21T10:30:00Z');
 class Element {
  attachShadow() {
   const root = { html: '', writes: 0, listeners: {}, activeElement: null,
    addEventListener(type, listener) { this.listeners[type] = listener; }, querySelectorAll() { return []; },
    get innerHTML() { return this.html; }, set innerHTML(value) { this.html = value; this.writes++; } };
   this.shadowRoot = root;
  }
  dispatchEvent(event) { events.push(event); return true; }
 }
 const window = {
  location: { pathname: '/dashboard-home/overview', search: '', hash: '' },
  history: { pushState(data, title, path) {
   routes.push([plain(data), title, path]);
   const url = new URL(path, 'https://ha.invalid');
   Object.assign(window.location, { pathname: url.pathname, search: url.search, hash: url.hash });
  } }, dispatchEvent(event) { routingEvents.push(event); return true; },
 };
 const context = vm.createContext({ HTMLElement: Element, window, Intl,
  customElements: { get: (name) => registry.get(name), define: (name, value) => registry.set(name, value) },
  console: { info() {} }, CustomEvent: class { constructor(type, options = {}) { this.type = type; Object.assign(this, options); } },
  setInterval(fn, delay) { const id = ++nextTimer; timers.set(id, { fn, delay }); return id; },
  clearInterval(id) { timers.delete(id); },
 });
 vm.runInContext(source, context, { filename: 'ha-welcome-orbit-card.js' });
 const Card = registry.get('ha-welcome-orbit-card'), card = new Card();
 card._now = () => new Date(now);
 card.setConfig(config);
 card.hass = { user: { name: 'Ada' }, language: 'en', locale: { language: 'en-GB' },
  config: { time_zone: 'UTC' }, states: {}, services: { scene: { turn_on: {} } },
  callService: async (...args) => { calls.push(args); }, ...overrides };
 return { Card, card, context, calls, events, routes, routingEvents, timers,
  setNow(value) { now = Date.parse(value); },
  tick() { for (const { fn } of [...timers.values()]) fn(); },
  click(action, index, modifiers = {}) {
   let prevented = 0;
   card.shadowRoot.listeners.click({ button: 0, composedPath: () => [{}, { dataset: { action, index: String(index) } }],
    preventDefault() { prevented++; }, ...modifiers });
   return prevented;
  },
 };
}
const heading = (card) => card.shadowRoot.innerHTML.match(/<h1>(.*?)<\/h1>/)?.[1];
const shortcuts = (card) => [...card.shadowRoot.innerHTML.matchAll(/<(a|button) class="shortcut"[^>]*>/g)].map((match) => match[0]);

test('zero optional entities gives a useful greeting without controls or services', async () => {
 const { card, calls, events, routes } = setup();
 assert.equal(heading(card), 'Good morning, Ada');
 assert.match(card.shadowRoot.innerHTML, /Home overview/);
 assert.doesNotMatch(card.shadowRoot.innerHTML, /class="weather"|class="shortcuts"|class="shortcut"/);
 for (const action of ['weather', 'scene', 'navigate', 'toggle', 'turn_on']) await card._activate(action, 1);
 assert.deepEqual(calls, []); assert.deepEqual(events, []); assert.deepEqual(routes, []);
});

test('optional shortcuts accept label/icon-only slots, one path and sparse slots 1/8', () => {
 const empty = setup({ name_1: 'Not configured', icon_8: 'mdi:home' }).card;
 assert.equal(shortcuts(empty).length, 0);
 const single = setup({ path_8: '/dashboard-home/kitchen' }).card;
 assert.equal(shortcuts(single).length, 1); assert.match(shortcuts(single)[0], /data-index="8"/);
 assert.match(single.shadowRoot.innerHTML, /Room 8/);
 const sparse = setup({ path_1: '/dashboard-home/room', scene_8: 'scene.evening' }, {
  states: { 'scene.evening': state('unknown', { friendly_name: 'Evening' }) },
 }).card;
 assert.equal(shortcuts(sparse).length, 2);
 assert.match(shortcuts(sparse)[0], /data-index="1"/); assert.match(shortcuts(sparse)[1], /data-index="8"/);
 assert.match(sparse.shadowRoot.innerHTML, />Evening<|>Evening<\/span>/);
 assert.doesNotMatch(sparse.shadowRoot.innerHTML, /data-index="[2-7]"/);
});

test('all eight shortcut slots retain stable configured indices', () => {
 const config = Object.fromEntries(Array.from({ length: 8 }, (_, i) => ['path_' + (i + 1), '/room/' + (i + 1)]));
 const { card } = setup(config);
 assert.equal(shortcuts(card).length, 8);
 shortcuts(card).forEach((html, i) => assert.ok(html.includes('data-index="' + (i + 1) + '"')));
});

test('native config form exposes only optional fields including all nested selectors', () => {
 const { Card } = setup(); const form = Card.getConfigForm();
 const fields = [];
 function visit(schema) { for (const field of schema) { assert.notEqual(field.required, true, field.name); if (field.selector) fields.push(field); if (field.schema) visit(field.schema); } }
 visit(form.schema);
 const names = fields.map((field) => field.name);
 for (const name of ['title', 'name', 'show_name', 'show_date', 'show_time', 'weather_entity', 'time_zone', 'palette', 'animate', 'read_only']) assert.ok(names.includes(name), name);
 for (let i = 1; i <= 8; i++) for (const prefix of ['path_', 'scene_', 'name_', 'icon_']) assert.ok(names.includes(prefix + i), prefix + i);
 assert.equal(new Set(names).size, 42); assert.equal(fields.length, 42);
 for (const field of fields) { assert.equal(typeof form.computeLabel(field), 'string'); assert.ok(form.computeLabel(field).length); }
 assert.equal(fields.find((field) => field.name === 'weather_entity').selector.entity.domain, 'weather');
 assert.equal(fields.find((field) => field.name === 'scene_8').selector.entity.domain, 'scene');
 assert.ok(fields.find((field) => field.name === 'icon_8').selector.icon);
 const stub = Card.getStubConfig(); assert.equal(stub.weather_entity, '');
});

for (const [time, expected] of [
 ['00:00:00', 'Good night'], ['04:59:59', 'Good night'], ['05:00:00', 'Good morning'],
 ['11:59:59', 'Good morning'], ['12:00:00', 'Good afternoon'], ['17:59:59', 'Good afternoon'],
 ['18:00:00', 'Good evening'], ['21:59:59', 'Good evening'], ['22:00:00', 'Good night'], ['23:59:59', 'Good night'],
]) test('greeting boundary UTC ' + time, () => {
 const { card, setNow } = setup({ show_name: false }); setNow('2026-10-21T' + time + 'Z'); card._update();
 assert.equal(heading(card), expected);
});

test('HA timezone, explicit override and midnight use the local calendar and hour', () => {
 const env = setup({}, { config: { time_zone: 'Asia/Tokyo' } });
 env.setNow('2026-10-21T15:00:00Z'); env.card._update();
 assert.equal(heading(env.card), 'Good night, Ada');
 assert.match(env.card.shadowRoot.innerHTML, /Thursday, 22 October 2026/);
 assert.match(env.card.shadowRoot.innerHTML, /class="clock">00:00/);
 env.card.setConfig({ time_zone: 'America/New_York' });
 assert.equal(heading(env.card), 'Good morning, Ada');
 assert.match(env.card.shadowRoot.innerHTML, /Wednesday, 21 October 2026/);
 assert.match(env.card.shadowRoot.innerHTML, /class="clock">11:00/);
});

test('connected timer updates clock, date and greeting without hass changes; lifecycle cleanup is idempotent', () => {
 const env = setup(); env.setNow('2026-10-21T11:59:00Z'); env.card._update();
 const hass = env.card.hass;
 env.card.connectedCallback(); env.card.connectedCallback(); assert.equal(env.timers.size, 1);
 assert.ok([...env.timers.values()][0].delay > 0 && [...env.timers.values()][0].delay <= 60000);
 env.setNow('2026-10-21T12:00:00Z'); env.tick();
 assert.equal(env.card.hass, hass); assert.equal(heading(env.card), 'Good afternoon, Ada');
 assert.match(env.card.shadowRoot.innerHTML, /class="clock">12:00/);
 env.setNow('2026-10-22T00:00:00Z'); env.tick();
 assert.match(env.card.shadowRoot.innerHTML, /Thursday, 22 October 2026/);
 env.card.disconnectedCallback(); env.card.disconnectedCallback(); assert.equal(env.timers.size, 0);
 const writes = env.card.shadowRoot.writes; env.setNow('2026-10-22T06:00:00Z'); env.tick(); assert.equal(env.card.shadowRoot.writes, writes);
 env.card.connectedCallback(); assert.equal(env.timers.size, 1); assert.equal(heading(env.card), 'Good morning, Ada'); env.card.disconnectedCallback();
});

for (const show_date of [false, true]) for (const show_time of [false, true]) test('date/time flags ' + show_date + '/' + show_time, () => {
 const { card } = setup({ show_date, show_time }); const html = card.shadowRoot.innerHTML;
 assert.equal(html.includes('class="date"'), show_date); assert.equal(html.includes('class="clock"'), show_time);
 assert.equal(html.includes('class="meta"'), show_date || show_time);
});

test('name override, HA username updates and no-name greetings', () => {
 const { card } = setup({ name: 'Grace' }); assert.equal(heading(card), 'Good morning, Grace');
 card.setConfig({}); assert.equal(heading(card), 'Good morning, Ada');
 card.hass = { ...card.hass, user: { name: 'Lin' } }; assert.equal(heading(card), 'Good morning, Lin');
 card.setConfig({ show_name: false, name: 'Grace' }); assert.equal(heading(card), 'Good morning');
 card.setConfig({}); card.hass = { ...card.hass, user: undefined }; assert.equal(heading(card), 'Good morning');
});

for (const [temperature, unit] of [[21.5, '°C'], ['71.6', '°F'], [294.7, 'K'], [0, '°C'], [-4, '°C']]) test('weather uses temperature_unit without guessing/converting ' + temperature + unit, () => {
 const { card } = setup({ weather_entity: 'weather.home' }, {
  states: { 'weather.home': state('sunny', { temperature, temperature_unit: unit, unit_of_measurement: 'WRONG' }) },
 });
 assert.match(card.shadowRoot.innerHTML, /class="temperature"/);
 assert.ok(card.shadowRoot.innerHTML.includes('>' + temperature + '<small>' + unit + '</small>'));
 assert.doesNotMatch(card.shadowRoot.innerHTML, /WRONG/);
});

test('missing, unavailable and unknown weather never leaks stale temperatures', () => {
 const { card } = setup({ weather_entity: 'weather.home' });
 for (const value of [undefined, state('unavailable', { temperature: 20 }), state('unknown', { temperature: 20 }), state('', { temperature: 20 })]) {
  card.hass = { ...card.hass, states: value ? { 'weather.home': value } : {} };
  assert.match(card.shadowRoot.innerHTML, /Weather unavailable/); assert.doesNotMatch(card.shadowRoot.innerHTML, /class="temperature"/);
 }
});

test('nonfinite and nonnumeric weather attributes are omitted, not coerced to zero', () => {
 const { card } = setup({ weather_entity: 'weather.home' });
 for (const temperature of [NaN, Infinity, -Infinity, 'NaN', 'Infinity', '', ' ', null, undefined, false, true, [], {}, '<img src=x>']) {
  card.hass = { ...card.hass, states: { 'weather.home': state('sunny', { temperature }) } };
  assert.doesNotMatch(card.shadowRoot.innerHTML, /class="temperature"/, String(temperature));
 }
});

test('prototype-string weather conditions render safely as unknown text, not inherited lookups', () => {
 const { card } = setup({ weather_entity: 'weather.home' });
 for (const value of ['__proto__', 'constructor', 'toString', 'hasOwnProperty']) {
  card.hass = { ...card.hass, states: { 'weather.home': state(value) } };
  assert.ok(card.shadowRoot.innerHTML.includes('class="weather-label">' + value + '</div>'));
  assert.match(card.shadowRoot.innerHTML, /mdi:weather-cloudy-alert/);
 }
});

test('hostile config and entity strings are escaped in text, attributes, icons and paths', () => {
 const attack = '<img src=x onerror="boom">&\'';
 const { card } = setup({ title: attack, name: attack, name_1: attack, icon_1: 'mdi:x" onclick="boom',
  path_1: '/room?x="<svg>&', weather_entity: 'weather.home', scene_8: 'scene.evening' }, {
  states: { 'weather.home': state('<script>boom</script>', { temperature: 3, temperature_unit: attack, friendly_name: attack }),
   'scene.evening': state('unknown', { friendly_name: attack, icon: 'mdi:x" onload="boom' }) },
 });
 const html = card.shadowRoot.innerHTML;
 assert.doesNotMatch(html, /<img|<svg|<script|icon="mdi:x" (?:onclick|onload)=/);
 assert.match(html, /&lt;img/); assert.match(html, /&lt;script/); assert.match(html, /&quot;/); assert.match(html, /&amp;/); assert.match(html, /&#39;/);
 assert.match(html, /href="\/room\?x=&quot;&lt;svg&gt;&amp;"/);
});

test('weather translations may fall back safely and More Info has exact event detail only', async () => {
 const { card, events, calls, routes } = setup({ weather_entity: 'weather.home' }, {
  states: { 'weather.home': state('sunny') }, formatEntityState() { throw new Error('private'); },
 });
 assert.match(card.shadowRoot.innerHTML, />Sunny</);
 await card._activate('weather');
 assert.equal(events.length, 1); assert.equal(events[0].type, 'hass-more-info');
 assert.deepEqual(plain(events[0].detail), { entityId: 'weather.home' }); assert.equal(events[0].bubbles, true); assert.equal(events[0].composed, true);
 assert.deepEqual(calls, []); assert.deepEqual(routes, []);
 card.hass = { ...card.hass, locale: { language: 'en-US' }, formatEntityState: () => '<script>translated</script>' };
 assert.match(card.shadowRoot.innerHTML, /&lt;script&gt;translated/);
});

test('scene activation permits unknown startup scene with exact scene.turn_on payload', async () => {
 const env = setup({ scene_8: 'scene.evening' }, { states: { 'scene.evening': state('unknown') } });
 assert.doesNotMatch(shortcuts(env.card)[0], / disabled/);
 assert.equal(env.calls.length, 0);
 await env.card._activate('scene', '8');
 assert.deepEqual(plain(env.calls), [['scene', 'turn_on', { entity_id: 'scene.evening' }]]);
 assert.match(env.card.shadowRoot.innerHTML, /Scene requested/);
 assert.equal(env.events.length, 0); assert.equal(env.routes.length, 0);
});

for (const reason of ['unavailable', 'missing', 'no service', 'read only']) test('scene is blocked when ' + reason, async () => {
 const env = setup({ scene_1: 'scene.evening', read_only: reason === 'read only' }, {
  states: reason === 'missing' ? {} : { 'scene.evening': state(reason === 'unavailable' ? 'unavailable' : 'unknown') },
  ...(reason === 'no service' ? { services: {} } : {}),
 });
 assert.match(shortcuts(env.card)[0], / disabled/);
 await env.card._activate('scene', 1); assert.deepEqual(env.calls, []);
});

test('duplicate async scene requests are guarded across slots and busy state clears', async () => {
 let release;
 const env = setup({ scene_1: 'scene.evening', scene_8: 'scene.evening' }, { states: { 'scene.evening': state('unknown') } });
 env.card.hass.callService = (...args) => { env.calls.push(args); return new Promise((resolve) => { release = resolve; }); };
 const first = env.card._activate('scene', 1);
 await env.card._activate('scene', 1); await env.card._activate('scene', 8);
 assert.equal(env.calls.length, 1); assert.equal(env.card._busy.size, 1);
 for (const html of shortcuts(env.card)) { assert.match(html, / disabled/); assert.match(html, /aria-busy="true"/); }
 release(); await first; assert.equal(env.card._busy.size, 0);
 assert.doesNotMatch(env.card.shadowRoot.innerHTML, /aria-busy="true"/);
});

test('scene failure is generic, clears busy, and allows retry without exposing exception details', async () => {
 const { card, calls } = setup({ scene_1: 'scene.evening' }, { states: { 'scene.evening': state('unknown') } });
 card.hass.callService = () => { throw new Error('<secret> private credentials'); };
 await card._activate('scene', 1);
 assert.equal(card._busy.size, 0); assert.match(card.shadowRoot.innerHTML, /role="alert"/);
 assert.match(card.shadowRoot.innerHTML, /The scene could not be activated/); assert.doesNotMatch(card.shadowRoot.innerHTML, /secret|private credentials/);
 card.hass.callService = async (...args) => calls.push(args);
 await card._activate('scene', 1); assert.equal(calls.length, 1); assert.doesNotMatch(card.shadowRoot.innerHTML, /role="alert"/);
});

test('navigation local route emits exact HA event, retains query/hash, and same-path click is a no-op', async () => {
 const env = setup({ path_8: '/dashboard-home/room?tab=lights#main', read_only: true });
 await env.card._activate('navigate', 8);
 assert.deepEqual(env.routes, [[{ from: '/dashboard-home/overview' }, '', '/dashboard-home/room?tab=lights#main']]);
 assert.equal(env.routingEvents.length, 1); assert.equal(env.routingEvents[0].type, 'location-changed');
 assert.deepEqual(plain(env.routingEvents[0].detail), { replace: false });
 await env.card._activate('navigate', 8); assert.equal(env.routes.length, 1); assert.equal(env.routingEvents.length, 1);
 assert.equal(env.calls.length, 0); assert.equal(env.events.length, 0);
});

test('external, protocol-relative, control-character and backslash routes are rejected', () => {
 const { card } = setup();
 for (const path of ['https://evil.invalid', '//evil.invalid', 'javascript:alert(1)', 'room', '/bad path', '/bad\tpath', '/bad\npath', '/bad\rpath', '/bad\u0000path', '/bad\u001fpath', '/bad\u007fpath', '/\\evil.invalid', '/room\\view', 3, {}]) {
  assert.throws(() => card.setConfig({ path_1: path }), String(path));
 }
 for (const path of ['/', '/dashboard-home/room', '/room?tab=lights#main']) assert.doesNotThrow(() => card.setConfig({ path_8: path }));
});

for (const modifiers of [{ ctrlKey: true }, { metaKey: true }, { altKey: true }, { shiftKey: true }, { button: 1 }, { button: 2 }]) test('modified navigation click stays native ' + JSON.stringify(modifiers), async () => {
 const env = setup({ path_1: '/room' });
 assert.equal(env.click('navigate', 1, modifiers), 0); await flush();
 assert.equal(env.routes.length, 0); assert.equal(env.calls.length, 0); assert.equal(env.events.length, 0);
});

test('ordinary delegated link click prevents default and navigates exactly once', async () => {
 const env = setup({ path_1: '/room' });
 assert.equal(env.click('navigate', 1), 1); await flush();
 assert.equal(env.routes.length, 1); assert.equal(env.routingEvents.length, 1); assert.equal(env.calls.length, 0);
});

test('navigation failure reports a generic error and never sends a service', async () => {
 const env = setup({ path_1: '/room' });
 env.context.window.history.pushState = () => { throw new Error('private location detail'); };
 await env.card._activate('navigate', 1);
 assert.match(env.card.shadowRoot.innerHTML, /role="alert"/);
 assert.match(env.card.shadowRoot.innerHTML, /The room view could not be opened/);
 assert.doesNotMatch(env.card.shadowRoot.innerHTML, /private location detail/);
 assert.equal(env.calls.length, 0); assert.equal(env.routingEvents.length, 0);
});

test('weather condition, unit and scene availability attribute changes rerender', () => {
 const env = setup({ weather_entity: 'weather.home', scene_8: 'scene.evening' }, { states: {
  'weather.home': state('sunny', { temperature: 20, temperature_unit: '°C' }), 'scene.evening': state('unknown'),
 } });
 env.card.hass.states['weather.home'].attributes.temperature_unit = '°F'; env.card._update();
 assert.match(env.card.shadowRoot.innerHTML, />20<small>°F/);
 env.card.hass.states['weather.home'].state = 'rainy'; env.card._update();
 assert.match(env.card.shadowRoot.innerHTML, />Rainy</);
 env.card.hass.states['scene.evening'].state = 'unavailable'; env.card._update();
 assert.match(shortcuts(env.card)[0], / disabled/);
 delete env.card.hass.services.scene.turn_on; env.card.hass.states['scene.evening'].state = 'unknown'; env.card._update();
 assert.match(shortcuts(env.card)[0], / disabled/);
});

test('unrelated hass updates preserve DOM signature and existing delegated scene click', async () => {
 const env = setup({ scene_8: 'scene.evening', weather_entity: 'weather.home' }, {
  states: { 'scene.evening': state('unknown'), 'weather.home': state('sunny', { temperature: 20, temperature_unit: '°C' }) },
 });
 const html = env.card.shadowRoot.innerHTML, signature = env.card._signature, writes = env.card.shadowRoot.writes;
 env.card.hass = { ...env.card.hass, states: { ...env.card.hass.states, 'sensor.unrelated': state('123') } };
 assert.equal(env.card.shadowRoot.writes, writes); assert.equal(env.card.shadowRoot.innerHTML, html); assert.equal(env.card._signature, signature);
 env.click('scene', 8); await flush(); assert.equal(env.calls.length, 1);
 env.card.hass = { ...env.card.hass, states: { ...env.card.hass.states, 'weather.home': state('sunny', { temperature: 21, temperature_unit: '°C' }) } };
 assert.match(env.card.shadowRoot.innerHTML, />21<small>°C/);
});

test('unknown actions, unconfigured slots and mismatched shortcut kinds send no incidental services', async () => {
 const env = setup({ path_1: '/room', scene_8: 'scene.evening' }, { states: { 'scene.evening': state('unknown') } });
 for (const [action, index] of [['scene', 1], ['navigate', 8], ['scene', 2], ['scene', 0], ['scene', 9], ['turn_on', 8], ['toggle', 8], ['unknown', 8]]) await env.card._activate(action, index);
 assert.equal(env.calls.length, 0); assert.equal(env.routes.length, 0); assert.equal(env.events.length, 0);
});

test('invalid configs fail clearly and unsupported palette falls back safely', () => {
 const { card } = setup();
 for (const config of [null, [], 'text', { show_time: 'false' }, { title: {} }, { weather_entity: 'sensor.weather' }, { time_zone: 'Not/AZone' }, { scene_8: 'light.room' }, { scene_1: 'scene.evening', path_1: '/room' }, { icon_8: 5 }]) assert.throws(() => card.setConfig(config));
 card.setConfig({ palette: 'constructor' }); assert.match(card.shadowRoot.innerHTML, /data-palette="aurora"/);
});

test('registration, manifest and package version agree when supporting files exist', (t) => {
 const { context } = setup();
 assert.equal(context.window.customCards.length, 1); assert.equal(context.window.customCards[0].type, 'ha-welcome-orbit-card');
 // Separate ES-module evaluation has its own lexical scope. A bare repeat
 // in one VM script scope would instead redeclare top-level const bindings.
 vm.runInContext('{\n' + source + '\n}', context); assert.equal(context.window.customCards.length, 1);
 const manifestURL = new URL('../hacs.json', import.meta.url), packageURL = new URL('../package.json', import.meta.url);
 if (!existsSync(manifestURL) || !existsSync(packageURL)) { t.diagnostic('Supporting manifest/package not present yet; registration verified.'); return; }
 const manifest = JSON.parse(readFileSync(manifestURL, 'utf8')), pkg = JSON.parse(readFileSync(packageURL, 'utf8'));
 assert.equal(manifest.filename, 'ha-welcome-orbit-card.js'); assert.equal(pkg.name, 'ha-welcome-orbit-card');
 assert.equal(manifest.filename, pkg.name + '.js'); assert.ok(source.includes("const VERSION = '" + pkg.version + "'"));
});
