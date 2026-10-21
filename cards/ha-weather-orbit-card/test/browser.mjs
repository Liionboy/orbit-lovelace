import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = await readFile(new URL('../ha-weather-orbit-card.js', import.meta.url), 'utf8');
const out = process.env.SCREENSHOT_DIR;
if (out) await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
 const page = await browser.newPage({ viewport: { width: 1000, height: 1000 } });
 const errors = []; page.on('pageerror', (e) => errors.push(e.message));
 await page.route('http://weather.test/**', (route) => route.fulfill(new URL(route.request().url()).pathname === '/card.js' ? { contentType: 'application/javascript', body: source } : { contentType: 'text/html', body: '<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:20px;background:#f4f7fa;font-family:Arial,sans-serif}body.dark{background:#111c26;--primary-text-color:#e9eef5;--secondary-text-color:#a4b3c3;--card-background-color:#1b2a38;--divider-color:#354655}#host{width:440px;max-width:100%}</style><div id="host"><ha-weather-orbit-card></ha-weather-orbit-card></div><script>/* Synthetic HA components: NOT native HA. */customElements.define("ha-card",class extends HTMLElement{});customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);line-height:var(--mdc-icon-size,24px);font-size:var(--mdc-icon-size,24px);text-align:center;display:inline-block";}});</script><script src="/card.js"></script>' }));
 await page.goto('http://weather.test');
 await page.evaluate(() => {
  window.requests = []; window.infos = []; window.calls = []; window.listeners = {};
  window.connection = { connected: true, addEventListener(n, f) { (listeners[n] ||= new Set()).add(f); }, removeEventListener(n, f) { listeners[n]?.delete(f); }, subscribeMessage(cb, payload) { const request = { cb, payload, disposed: 0 }; requests.push(request); if (window.failNext) { window.failNext = false; return Promise.reject({ code: 'unauthorized' }); } queueMicrotask(() => cb({ type: payload.forecast_type, forecast: window.forecasts })); return Promise.resolve(() => { request.disposed++; return Promise.resolve(); }); } };
  window.forecasts = Array.from({ length: 7 }, (_, i) => ({ datetime: '2026-10-' + (22 + i) + 'T00:00:00Z', temperature: 21.7 + i, ...(i !== 1 ? { templow: 12.3 + i, condition: ['sunny', 'partlycloudy', 'rainy'][i % 3], precipitation: i % 3 === 2 ? 2.3 : 0 } : {}) }));
  window.card = document.querySelector('ha-weather-orbit-card');
  card.addEventListener('hass-more-info', (e) => infos.push(e.detail));
  window.config = { entity: 'weather.example', title: 'Weather outlook', palette: 'aurora', forecast_count: 3 };
  card.setConfig(config); card.hass = { connection, states: { 'weather.example': { state: 'partlycloudy', attributes: { friendly_name: 'Example weather', temperature: 24.7, temperature_unit: '°C', wind_speed: 12.3, wind_speed_unit: 'km/h', humidity: 57, precipitation_unit: 'mm', supported_features: 7 } } }, locale: { language: 'en-GB', time_format: '24' }, config: { time_zone: 'Europe/London' }, callService: (...a) => calls.push(a) };
 });
 const card = page.locator('ha-weather-orbit-card');
 await card.locator('.entry').first().waitFor();
 const metrics = [];
 async function measure(label, budget) {
  const m = await card.evaluate((el) => { const outer = el.getBoundingClientRect(), nodes = [...el.shadowRoot.querySelectorAll('.shell,.current,.temperature,.reading,.entry,.high,.low,time')]; return { width: outer.width, height: outer.height, overflow: nodes.filter((n) => { const r = n.getBoundingClientRect(); return r.right > outer.right + 1 || r.left < outer.left - 1 || n.scrollWidth > n.clientWidth + 1; }).map((n) => n.className || n.tagName), temperatureHeight: el.shadowRoot.querySelector('.temperature')?.getBoundingClientRect().height }; });
  assert.deepEqual(m.overflow, [], label); assert.ok(m.height <= budget, label + ' height ' + m.height); assert.ok(!m.temperatureHeight || m.temperatureHeight < 40, 'single line reading'); metrics.push({ label, ...m }); console.log(label, JSON.stringify(m)); if (out) await card.screenshot({ path: out + '/' + label + '.png' });
 }
 for (const width of [200, 280, 320, 440, 760]) { await page.evaluate((w) => document.querySelector('#host').style.width = w + 'px', width); await measure('light-' + width, width === 200 ? 480 : 340); }
 await page.evaluate(() => { document.querySelector('#host').style.width = '280px'; document.body.classList.add('dark'); }); await measure('dark-280', 340);
 // Keep the exact pressed element through an unrelated hass update.
 await card.locator('.current').hover(); await page.mouse.down();
 await page.evaluate(() => { window.pressed = card.shadowRoot.querySelector('.current'); card.hass = { ...card.hass, states: { ...card.hass.states, 'sensor.unrelated': { state: 'changed' } } }; if (pressed !== card.shadowRoot.querySelector('.current')) throw Error('Unrelated update replaced button'); });
 await page.mouse.up(); assert.deepEqual(await page.evaluate(() => infos), [{ entityId: 'weather.example' }]);
 await card.locator('.current').focus(); await page.keyboard.press('Enter'); await page.keyboard.press('Space'); assert.equal(await page.evaluate(() => infos.length), 3);
 assert.deepEqual(await page.evaluate(() => requests.map((r) => r.payload)), [{ type: 'weather/subscribe_forecast', entity_id: 'weather.example', forecast_type: 'daily' }]);
 for (const palette of ['aurora', 'ocean', 'sunset', 'lavender']) { await page.evaluate((p) => card.setConfig({ ...config, palette: p }), palette); assert.equal(await card.locator('ha-card').getAttribute('data-palette'), palette); }
 await page.emulateMedia({ reducedMotion: 'reduce' }); assert.equal(await card.locator('*').evaluateAll((els) => els.flatMap((el) => el.getAnimations()).length), 0); await measure('reduced-motion-280', 340);
 await page.evaluate(() => { card.setConfig({ ...config, forecast_type: 'hourly' }); }); await page.waitForFunction(() => requests.length === 2); await card.locator('.entry').first().waitFor(); assert.equal(await page.evaluate(() => requests[0].disposed), 1); assert.match(await card.locator('time').first().innerText(), /01:00/);
 await page.evaluate(() => { connection.connected = false; for (const fn of listeners.disconnected) fn(); }); await card.locator('[role=status]').waitFor(); assert.match(await card.locator('.shell').innerText(), /Forecast offline/); assert.equal(await card.locator('.entry').count(), 0);
 await page.evaluate(() => { connection.connected = true; for (const fn of listeners.ready) fn(); }); await card.locator('.entry').first().waitFor(); assert.equal(await page.evaluate(() => requests.length), 3);
 await page.evaluate(() => { window.failNext = true; card.setConfig({ ...config, forecast_type: 'twice_daily' }); }); await card.locator('.retry').waitFor(); assert.equal(await card.locator('.temperature').innerText(), '24.7°C'); await measure('forecast-error-280', 280);
 await card.locator('.retry').click(); await card.locator('.entry').first().waitFor(); assert.equal(await page.evaluate(() => requests.length), 5);
 await page.evaluate(() => { card.hass.states['weather.example'].attributes.temperature = -2.7; card.hass.states['weather.example'].attributes.temperature_unit = '°F'; card.hass = { ...card.hass }; }); assert.equal(await card.locator('.temperature').innerText(), '-2.7°F');
 await page.evaluate(() => { card.hass.states['weather.example'].state = 'unavailable'; card.hass = { ...card.hass }; }); assert.equal(await card.locator('.temperature,.stats,.entry').count(), 0); assert.match(await card.locator('.shell').innerText(), /Current weather unavailable/); await measure('unavailable-280', 260);
 await page.evaluate(() => { card.hass.states['weather.example'].state = 'sunny'; card.hass = { ...card.hass }; card.setConfig({ ...config, forecast_count: 7 }); }); await card.locator('.entry').first().waitFor(); assert.equal(await card.locator('.entry').count(), 7); await measure('seven-entries-280', 700);
 await page.evaluate(() => { const hostile = '"><img src=x onerror=alert(1)>'; card.hass.states['weather.example'].attributes.friendly_name = hostile; card.hass.states['weather.example'].attributes.temperature_unit = hostile; card.hass = { ...card.hass }; card.setConfig({ ...config, title: hostile }); }); assert.equal(await card.locator('img,script').count(), 0); assert.ok((await card.locator('.current').getAttribute('aria-label')).includes('<img'));
 await page.evaluate(() => card.setConfig({})); assert.match(await card.locator('.shell').innerText(), /Choose a weather entity/); await measure('empty-280', 200);
 assert.equal(await page.evaluate(() => calls.length), 0); assert.deepEqual(errors, []);
 console.log('PASS synthetic browser: no live HA. Native components/icons are stubs. Queries, lifecycle, clicks, keyboard, themes, reduced motion, error/retry and no service calls verified.');
} finally { await browser.close(); }
