import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const source = readFileSync(new URL('../ha-scenes-orbit-card.js', import.meta.url), 'utf8');
const plain = (v) => JSON.parse(JSON.stringify(v));
function setup(config = {}, overrides = {}) {
 const registry = new Map(), calls = [], events = [];
 class Element {
  attachShadow() { this.shadowRoot = { html: '', writes: 0, listeners: {}, activeElement: null, querySelectorAll: () => [], addEventListener(t, fn) { this.listeners[t] = fn; }, get innerHTML() { return this.html; }, set innerHTML(v) { this.html = v; this.writes++; } }; }
  dispatchEvent(e) { events.push(e); return true; }
 }
 const ctx = vm.createContext({ HTMLElement: Element, window: {}, console: { info() {} }, customElements: { get: (t) => registry.get(t), define: (t, C) => registry.set(t, C) }, CustomEvent: class { constructor(type, o) { this.type = type; Object.assign(this, o); } } });
 vm.runInContext(source, ctx); const Card = registry.get('ha-scenes-orbit-card'), card = new Card(); card.setConfig(config);
 card.hass = { states: { 'scene.cinema': { state: 'unknown', attributes: { friendly_name: 'Cinema' } }, 'script.night': { state: 'off', attributes: { friendly_name: 'Night' } } }, services: { scene: { turn_on: {} }, script: { turn_on: {} } }, callService: async (...a) => calls.push(a), ...overrides };
 return { card, Card, calls, events, click(id, action = 'activate') { card.shadowRoot.listeners.click({ composedPath: () => [{}, { dataset: { entity: id, action } }] }); } };
}
test('empty and partial configurations have no mandatory controls', () => {
 const { card, calls } = setup(); assert.match(card.shadowRoot.innerHTML, /Choose scenes or scripts/); assert.equal(card._config.entities.length, 0); assert.equal(calls.length, 0);
 const single = setup({ entities: ['scene.cinema'] }).card; assert.equal((single.shadowRoot.innerHTML.match(/class="activate"/g) || []).length, 1);
});
test('selector is optional, multi scene/script, defaults match runtime', () => {
 const { Card } = setup(), form = Card.getConfigForm(); assert.ok(form.schema.every((s) => !s.required));
 const entities = form.schema.find((s) => s.name === 'entities'); assert.equal(entities.selector.entity.multiple, true); assert.deepEqual(plain(entities.selector.entity.domain), ['scene', 'script']);
 assert.equal(form.schema.find((s) => s.name === 'confirmation').default, true);
});
test('selection order preserved and duplicates deduplicated', () => {
 const { card } = setup({ entities: ['script.night', 'scene.cinema', 'script.night'] }); assert.deepEqual(plain(card._config.entities), ['script.night', 'scene.cinema']);
});
test('default confirmation arms then exact scene.turn_on, no on/off interpretation', async () => {
 const { card, calls } = setup({ entities: ['scene.cinema'] }); await card._activate('scene.cinema', 'activate'); assert.equal(calls.length, 0); assert.match(card.shadowRoot.innerHTML, /Tap again to confirm/);
 await card._activate('scene.cinema', 'activate'); assert.deepEqual(plain(calls), [['scene', 'turn_on', { entity_id: 'scene.cinema' }]]); assert.match(card.shadowRoot.innerHTML, /Activation requested/); assert.doesNotMatch(card.shadowRoot.innerHTML, /tile active/);
});
test('disabled confirmation starts a script with only generic script.turn_on', async () => {
 const { card, calls } = setup({ entities: ['script.night'], confirmation: false }); await card._activate('script.night', 'activate'); assert.deepEqual(plain(calls), [['script', 'turn_on', { entity_id: 'script.night' }]]);
});
test('cancel and selecting another action disarm without sending', async () => {
 const { card, calls } = setup({ entities: ['scene.cinema', 'script.night'] }); await card._activate('scene.cinema', 'activate'); await card._activate('script.night', 'activate'); assert.equal(card._armed, 'script.night');
 await card._activate('', 'cancel'); assert.equal(card._armed, ''); assert.equal(calls.length, 0);
});
for (const [label, overrides, config] of [
 ['read-only', {}, { read_only: true }], ['no service', { services: {} }, {}], ['missing', { states: {} }, {}],
 ['scene unavailable', { states: { 'scene.cinema': { state: 'unavailable', attributes: {} } } }, {}],
]) test(label + ' blocks all dispatch', async () => { const { card, calls } = setup({ entities: ['scene.cinema'], confirmation: false, ...config }, overrides); await card._activate('scene.cinema', 'activate'); assert.equal(calls.length, 0); assert.match(card.shadowRoot.innerHTML, / disabled/); });
for (const s of ['on', 'unknown', 'unavailable']) test('script ' + s + ' cannot be started', async () => {
 const { card, calls } = setup({ entities: ['script.night'], confirmation: false }, { states: { 'script.night': { state: s, attributes: {} } } }); await card._activate('script.night', 'activate'); assert.equal(calls.length, 0); if (s === 'on') assert.match(card.shadowRoot.innerHTML, /Running/);
});
test('pending duplicate protected and busy clears', async () => {
 let resolve; const { card, calls } = setup({ entities: ['scene.cinema'], confirmation: false }, { callService: (...a) => { calls.push(a); return new Promise((r) => { resolve = r; }); } });
 const first = card._activate('scene.cinema', 'activate'); await card._activate('scene.cinema', 'activate'); assert.equal(calls.length, 1); assert.match(card.shadowRoot.innerHTML, /aria-busy="true"/); resolve(); await first; assert.equal(card._busy.size, 0);
});
test('generic failure never exposes backend errors and supports retry', async () => {
 let count = 0; const { card } = setup({ entities: ['scene.cinema'], confirmation: false }, { callService: async () => { count++; throw Error('SECRET backend detail'); } });
 await card._activate('scene.cinema', 'activate'); assert.equal(card._busy.size, 0); assert.match(card.shadowRoot.innerHTML, /could not be sent/); assert.doesNotMatch(card.shadowRoot.innerHTML, /SECRET/); await card._activate('scene.cinema', 'activate'); assert.equal(count, 2);
});
test('unrelated hass update leaves DOM and delegated activation intact', async () => {
 const { card, calls, click } = setup({ entities: ['scene.cinema'], confirmation: false }); const writes = card.shadowRoot.writes; card.hass = { ...card.hass, states: { ...card.hass.states, 'light.other': { state: 'on' } } }; assert.equal(card.shadowRoot.writes, writes); click('scene.cinema'); await Promise.resolve(); assert.equal(calls.length, 1);
});
test('script state attribute update shows running and blocks', async () => {
 const { card, calls } = setup({ entities: ['script.night'] }); card.hass.states['script.night'].state = 'on'; card.hass = { ...card.hass }; assert.match(card.shadowRoot.innerHTML, /Running/); await card._activate('script.night', 'activate'); assert.equal(calls.length, 0);
});
test('More Info targets chosen row even read-only and sends no service', async () => {
 const { card, events, calls } = setup({ entities: ['script.night'], read_only: true }); await card._activate('script.night', 'info'); assert.equal(events[0].type, 'hass-more-info'); assert.deepEqual(plain(events[0].detail), { entityId: 'script.night' }); assert.equal(events[0].bubbles, true); assert.equal(events[0].composed, true); assert.equal(calls.length, 0);
});
test('hostile title, friendly name and icon are escaped', () => {
 const { card } = setup({ title: '<img src=x onerror=alert(1)>', entities: ['scene.cinema'] }, { states: { 'scene.cinema': { state: 'unknown', attributes: { friendly_name: '"><script>bad</script>', icon: 'mdi:x" onerror="bad' } } } }); assert.doesNotMatch(card.shadowRoot.innerHTML, /<img|<script|icon="mdi:x"/); assert.match(card.shadowRoot.innerHTML, /&lt;img/); assert.match(card.shadowRoot.innerHTML, /&quot; onerror=&quot;/);
});
test('unconfigured entities and arbitrary services rejected', async () => {
 const { card, calls, events } = setup({ entities: ['scene.cinema'] }); await card._activate('script.night', 'activate'); await card._activate('script.night', 'info'); await card._activate('scene.cinema', 'turn_off'); assert.equal(calls.length, 0); assert.equal(events.length, 0);
});
test('config validation and palette fallback', () => {
 for (const config of [null, [], { entities: 'scene.x' }, { entities: ['light.x'] }, { entities: ['scene.bad-x'] }, { entities: Array(25).fill('scene.x') }, { read_only: 'true' }, { confirmation: 'false' }, { title: {} }]) assert.throws(() => setup(config));
 assert.equal(setup({ palette: '<x>' }).card._config.palette, 'aurora');
});
test('config change/disconnect clears confirmation and does not activate', () => {
 const { card, calls } = setup({ entities: ['scene.cinema'] }); card._activate('scene.cinema', 'activate'); card.disconnectedCallback(); assert.equal(card._armed, ''); card.setConfig({ entities: [] }); assert.equal(calls.length, 0);
});
test('manifest, version and registration agree', () => {
 const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url))), manifest = JSON.parse(readFileSync(new URL('../hacs.json', import.meta.url))); assert.equal(pkg.name, 'ha-scenes-orbit-card'); assert.equal(manifest.filename, pkg.name + '.js'); assert.ok(source.includes("const VERSION = '" + pkg.version + "'"));
});
