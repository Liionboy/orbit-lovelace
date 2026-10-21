import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = await readFile(new URL('../ha-sensor-graph-orbit-card.js', import.meta.url), 'utf8');
const out = process.env.SCREENSHOT_DIR;
if (out) await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
 const page = await browser.newPage({ viewport: { width: 1000, height: 1000 } }); const errors = [];
 page.on('pageerror', e => errors.push(e.message));
 await page.route('http://sensor.test/**', route => route.fulfill(new URL(route.request().url()).pathname === '/card.js' ? { contentType: 'application/javascript', body: source } : { contentType: 'text/html', body: '<!doctype html><meta charset="utf-8"><style>body{margin:20px;background:#f4f6fa;font-family:Arial,sans-serif}body.dark{background:#10171e;--primary-text-color:#e7edf5;--secondary-text-color:#a5b2c4;--card-background-color:#1c2834;--divider-color:#344454}#host{width:440px}</style><div id="host"><ha-sensor-graph-orbit-card></ha-sensor-graph-orbit-card></div><script>customElements.define("ha-card",class extends HTMLElement{});customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;align-items:center;justify-content:center;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)"}});</script><script src="/card.js"></script>' }));
 await page.goto('http://sensor.test/');
 await page.evaluate(() => {
  window.calls = []; window.services = []; window.infos = []; window.fail = false;
  window.card = document.querySelector('ha-sensor-graph-orbit-card'); window.card.addEventListener('hass-more-info', e => window.infos.push(e.detail));
  const end = Date.parse('2026-10-21T12:00:00Z'), start = end - 86400000;
  const series = (id, values) => values.map(([f, value], i) => ({ ...(i === 0 ? { entity_id: id } : {}), state: value, last_changed: new Date(start + f * 86400000).toISOString() }));
  window.fixture = [series('sensor.temperature', [[0, '19'], [.05, '20'], [.23, '22'], [.31, 'unknown'], [.55, '24'], [.8, '23'], [.93, '24.7']]), series('sensor.humidity', [[0, '48'], [.08, '61'], [.5, '55'], [.8, '70'], [.96, '65.1']])];
  window.config = { entities: ['sensor.temperature', 'sensor.humidity'], title: 'Room trends', hours_to_show: 24, palette: 'aurora' };
  window.card._now = () => end; window.card.setConfig(window.config);
  window.card.hass = { states: { 'sensor.temperature': { state: '24.7', attributes: { friendly_name: 'Temperature', unit_of_measurement: '°C' } }, 'sensor.humidity': { state: '65.1', attributes: { friendly_name: 'Humidity', unit_of_measurement: '%' } } }, callApi: async (...args) => { window.calls.push(args); if (window.fail) throw Error('Forbidden'); return window.fixture; }, callService: (...args) => window.services.push(args) };
 });
 const card = page.locator('ha-sensor-graph-orbit-card'); await card.locator('svg').first().waitFor();
 assert.equal(await card.locator('svg').count(), 2);
 const paths = await card.locator('path').evaluateAll(nodes => nodes.map(n => n.getAttribute('d')));
 assert.ok(paths.every(p => p.length > 10 && !/NaN|Infinity/.test(p))); assert.equal((paths[0].match(/M/g) || []).length, 2);
 const query = await page.evaluate(() => window.calls[0]); assert.equal(query[0], 'GET');
 const url = new URL('http://sensor.test/' + query[1]); assert.equal(url.searchParams.get('filter_entity_id'), 'sensor.temperature,sensor.humidity'); assert.ok(url.searchParams.has('minimal_response')); assert.ok(url.searchParams.has('no_attributes'));
 const geometry = await card.locator('svg').evaluateAll(nodes => nodes.map(svg => ({ width: svg.getBoundingClientRect().width, pathLength: svg.querySelector('path').getTotalLength(), dots: [...svg.querySelectorAll('circle')].map(c => [Number(c.getAttribute('cx')), Number(c.getAttribute('cy'))]) })));
 assert.ok(geometry.every(g => g.pathLength > 10 && g.dots.every(([x, y]) => x >= 2 && x <= 298 && y >= 4 && y <= 48)));
 const measure = async (name, budget = 370) => {
  const m = await card.evaluate(el => {
   const r = el.getBoundingClientRect();
   const bad = [...el.shadowRoot.querySelectorAll('ha-card,.shell,.series,.summary,.info,.reading,.chart,.axis,.status')].filter(n => { const x = n.getBoundingClientRect(); return x.left < r.left - 1 || x.right > r.right + 1 || n.scrollWidth > n.clientWidth + 1; });
   const readings = [...el.shadowRoot.querySelectorAll('.reading')].map(n => ({ text: n.textContent, height: n.getBoundingClientRect().height, width: n.clientWidth, scroll: n.scrollWidth }));
   return { width: r.width, height: r.height, overflow: bad.map(n => n.className.baseVal || n.className || n.tagName), readings };
  });
  assert.deepEqual(m.overflow, [], name); assert.ok(m.height <= budget, name + ' height ' + m.height);
  if (!m.readings.every(r => r.height <= 23 && r.scroll <= r.width)) console.log('Readout diagnostics', name, JSON.stringify(m));
  assert.ok(m.readings.every(r => r.height <= 23 && r.scroll <= r.width));
  console.log(name, JSON.stringify(m)); if (out) await card.screenshot({ path: out + '/' + name + '.png' });
 };
 for (const width of [760, 440, 320, 280, 200]) { await page.evaluate(w => document.querySelector('#host').style.width = w + 'px', width); await measure('light-' + width); }
 // Control remains the same DOM node after unrelated hass update, then actual click and keyboard dispatch.
 const stable = await card.locator('.info').first().evaluate(button => { window.oldButton = button; window.card.hass = { ...window.card.hass, states: { ...window.card.hass.states, 'sensor.unrelated': { state: '99', attributes: {} } } }; return button === window.card.shadowRoot.querySelector('.info'); }); assert.equal(stable, true);
 await card.locator('.info').first().click(); await card.locator('.info').nth(1).focus(); await page.keyboard.press('Enter'); await page.keyboard.press('Space');
 assert.deepEqual(await page.evaluate(() => window.infos), [{ entityId: 'sensor.temperature' }, { entityId: 'sensor.humidity' }, { entityId: 'sensor.humidity' }]); assert.equal(await page.evaluate(() => window.calls.length), 1);
 await page.evaluate(() => { document.body.classList.add('dark'); document.querySelector('#host').style.width = '320px'; window.card.setConfig({ ...window.config, palette: 'ocean' }); }); await page.emulateMedia({ reducedMotion: 'reduce' }); await measure('dark-reduced-320');
 assert.equal(await card.locator('path').first().evaluate(n => n.getAnimations().length), 0);
 for (const palette of ['aurora', 'ocean', 'sunset', 'lavender']) { await page.evaluate(p => window.card.setConfig({ ...window.config, palette: p }), palette); assert.equal(await card.locator('ha-card').getAttribute('data-palette'), palette); }
 await page.evaluate(() => { window.card.setConfig({ ...window.config, low_threshold: 25, high_threshold: 60, low_color: 'blue', high_color: 'red' }); });
 assert.equal(await card.locator('.reading').first().getAttribute('data-color'), 'blue'); assert.equal(await card.locator('.reading').nth(1).getAttribute('data-color'), 'red');
 // Error fallback preserves current value; real Retry button recovers after throttle window.
 await page.evaluate(async () => { window.fail = true; window.card._lastAttempt = -Infinity; await window.card._fetch(true); }); await card.locator('.retry').waitFor(); assert.match(await card.locator('.shell').innerText(), /24.7/);
 if (out) await card.screenshot({ path: out + '/history-error.png' });
 await page.evaluate(() => { window.fail = false; window.card._lastAttempt = -Infinity; }); await card.locator('.retry').click(); await card.locator('svg').first().waitFor(); assert.equal(await card.locator('.retry').count(), 0);
 // Real DOM security: malicious attributes cannot create elements or event attributes.
 await page.evaluate(() => { const evil = '"><img src=x onerror="window.pwned=1">'; window.card.setConfig({ ...window.config, title: evil }); window.card.hass = { ...window.card.hass, states: { ...window.card.hass.states, 'sensor.temperature': { state: '24.7', attributes: { friendly_name: evil, unit_of_measurement: evil } } } }; });
 assert.equal(await card.locator('img,[onerror]').count(), 0); assert.equal(await page.evaluate(() => window.pwned), undefined);
 await page.evaluate(() => window.card.setConfig({})); assert.match(await card.locator('.shell').innerText(), /No sensors are selected/);
 assert.deepEqual(await page.evaluate(() => window.services), []); assert.deepEqual(errors, []);
 console.log('Browser assertions passed: timestamp geometry, actual paths, bounded coordinates, layout, clicks, keyboard, stubs, dark/reduced motion, palettes, thresholds, retry, escaping, no service calls.');
 console.log('Geometry:', JSON.stringify(geometry));
} finally { await browser.close(); }
