import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = await readFile(new URL('../ha-welcome-orbit-card.js', import.meta.url), 'utf8');
const out = process.env.SCREENSHOT_DIR;
if (out) await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
 const page = await browser.newPage({ viewport: { width: 1000, height: 900 } });
 const errors = []; page.on('pageerror', (e) => errors.push(e.message));
 await page.route('http://welcome.test/**', async (route) => {
  if (new URL(route.request().url()).pathname === '/card.js') return route.fulfill({ contentType: 'application/javascript', body: source });
  return route.fulfill({ contentType: 'text/html; charset=utf-8', body: '<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:20px;background:#f4f6fa;font-family:Arial,sans-serif}body.dark{background:#10171e;--primary-text-color:#e7edf5;--secondary-text-color:#a5b2c4;--card-background-color:#1c2834;--divider-color:#344454}#host{width:760px;max-width:100%}</style><div id="host"><ha-welcome-orbit-card></ha-welcome-orbit-card></div><script>customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.innerHTML="◇";this.style.cssText="display:inline-flex;align-items:center;justify-content:center;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);font-size:var(--mdc-icon-size,24px)";}});</script><script src="/card.js"></script>' });
 });
 await page.goto('http://welcome.test/dashboard-home/main');
 await page.evaluate(() => {
  window.routes = []; window.calls = []; window.infos = [];
  window.addEventListener('location-changed', (e) => window.routes.push(e.detail));
  window.card = document.querySelector('ha-welcome-orbit-card');
  window.card.addEventListener('hass-more-info', (e) => window.infos.push(e.detail));
  window.card._now = () => new Date('2026-10-21T07:35:00Z');
  window.config = { title: 'Home overview', name: 'Alex', palette: 'aurora', weather_entity: 'weather.home', path_1: '/dashboard-home/living-room', name_1: 'Living room', icon_1: 'mdi:sofa', path_2: '/dashboard-home/kitchen', name_2: 'Kitchen', icon_2: 'mdi:countertop-outline', scene_3: 'scene.evening', name_3: 'Evening', icon_3: 'mdi:weather-night' };
  window.card.setConfig(window.config);
  window.card.hass = { user: { name: 'Demo user' }, locale: { language: 'en-GB' }, config: { time_zone: 'Europe/Bucharest' }, services: { scene: { turn_on: {} } }, states: { 'weather.home': { state: 'partlycloudy', attributes: { temperature: 24.7, temperature_unit: '°C', friendly_name: 'Home weather' } }, 'scene.evening': { state: 'unknown', attributes: { friendly_name: 'Evening' } } }, callService: async (...args) => window.calls.push(args) };
 });
 const card = page.locator('ha-welcome-orbit-card');
 const measure = async (label, budget) => {
  const m = await card.evaluate((el) => {
   const outer = el.getBoundingClientRect(), nodes = [...el.shadowRoot.querySelectorAll('.copy,.weather,.temperature,.shortcut,.meta,h1')];
   return { width: outer.width, height: outer.height, overflow: nodes.filter((n) => { const r = n.getBoundingClientRect(); return r.right > outer.right + 1 || r.left < outer.left - 1 || n.scrollWidth > n.clientWidth + 1; }).map((n) => n.className || n.tagName) };
  });
  assert.deepEqual(m.overflow, [], label); if (budget) assert.ok(m.height <= budget, label + ' height ' + m.height);
  console.log(label, JSON.stringify(m));
  if (out) await card.screenshot({ path: out + '/' + label + '.png' });
 };
 for (const width of [760, 440, 360, 320, 280, 243, 200]) {
  await page.evaluate((w) => document.querySelector('#host').style.width = w + 'px', width);
  await measure('light-' + width, width >= 320 ? 330 : 500);
 }
 await page.setViewportSize({ width: 360, height: 950 });
 await page.evaluate(() => document.querySelector('#host').style.width = '100%');
 await measure('phone-360', 330);
 await page.evaluate(() => document.body.classList.add('dark'));
 await measure('dark-phone-360', 330);
 await card.locator('.weather').click();
 assert.deepEqual(await page.evaluate(() => window.infos), [{ entityId: 'weather.home' }]);
 assert.equal(await page.evaluate(() => window.calls.length), 0); assert.equal(await page.evaluate(() => window.routes.length), 0);
 await card.locator('a[data-index="1"]').click();
 assert.equal(new URL(page.url()).pathname, '/dashboard-home/living-room');
 assert.deepEqual(await page.evaluate(() => history.state), { from: '/dashboard-home/main' });
 assert.equal(await page.evaluate(() => window.routes.length), 1);
 await card.locator('a[data-index="1"]').click(); assert.equal(await page.evaluate(() => window.routes.length), 1);
 await card.locator('a[data-index="2"]').focus(); await page.keyboard.press('Enter');
 assert.equal(new URL(page.url()).pathname, '/dashboard-home/kitchen'); assert.equal(await page.evaluate(() => window.routes.length), 2);
 const modified = await card.locator('a[data-index="1"]').evaluate((a) => {
  const e = new MouseEvent('click', { bubbles: true, composed: true, ctrlKey: true, cancelable: true });
  // Suppress browser default after the delegated listener sees the native modifier.
  window.card.shadowRoot.addEventListener('click', (event) => { window.modifiedPrevented = event.defaultPrevented; event.preventDefault(); }, { once: true });
  a.dispatchEvent(e); return window.modifiedPrevented;
 });
 assert.equal(modified, false); assert.equal(await page.evaluate(() => window.routes.length), 2);
 await card.locator('button[data-index="3"]').click();
 await card.locator('[role="status"]').waitFor();
 assert.deepEqual(await page.evaluate(() => window.calls), [['scene', 'turn_on', { entity_id: 'scene.evening' }]]);
 assert.equal(await page.evaluate(() => window.routes.length), 2);
 // Real animated property, config and OS motion opt-outs.
 await page.emulateMedia({ reducedMotion: 'no-preference' });
 const transforms = await card.evaluate((el) => {
  const ring = el.shadowRoot.querySelector('.ring'), a = ring.getAnimations()[0]; assertAnimation(a);
  function assertAnimation(x) { if (!x) throw Error('Missing orbit animation'); }
  a.pause(); a.currentTime = 0; const first = getComputedStyle(ring).transform; a.currentTime = 9000; return [first, getComputedStyle(ring).transform];
 }); assert.notEqual(transforms[0], transforms[1]);
 await page.emulateMedia({ reducedMotion: 'reduce' });
 assert.equal(await card.locator('.ring').evaluate((el) => getComputedStyle(el).animationName), 'none');
 await page.emulateMedia({ reducedMotion: 'no-preference' });
 await page.evaluate(() => window.card.setConfig({ ...window.config, animate: false, read_only: true }));
 assert.equal(await card.locator('.ring').evaluate((el) => getComputedStyle(el).animationName), 'none');
 assert.ok(await card.locator('button[data-index="3"]').isDisabled());
 await card.locator('a[data-index="1"]').click(); assert.equal(new URL(page.url()).pathname, '/dashboard-home/living-room');
 assert.equal(await page.evaluate(() => window.calls.length), 1);
 // Weather attribute-only update and no unit guessing.
 await page.evaluate(() => { window.card.hass.states['weather.home'].attributes.temperature = 76.5; window.card.hass.states['weather.home'].attributes.temperature_unit = '°F'; window.card.hass = { ...window.card.hass }; });
 assert.equal(await card.locator('.temperature').innerText(), '76.5°F');
 await page.evaluate(() => { window.card.hass.states['weather.home'].state = 'unavailable'; window.card.hass = { ...window.card.hass }; });
 assert.equal(await card.locator('.temperature').count(), 0); assert.equal(await card.locator('.weather-label').innerText(), 'Weather unavailable');
 // Eight optional shortcuts and hostile long labels must wrap without overflow.
 await page.evaluate(() => { const c = { ...window.config }; for (let i = 4; i <= 8; i++) { c['path_' + i] = '/dashboard-home/room-' + i; c['name_' + i] = i === 8 ? 'VeryLongUnbrokenRoomNameForNarrowScreens' : 'Room ' + i; } window.card.setConfig(c); });
 assert.equal(await card.locator('.shortcut').count(), 8); await measure('eight-shortcuts-phone', 550);
 await page.evaluate(() => { window.card.setConfig({ type: 'custom:ha-welcome-orbit-card', name: '<img src=x onerror=alert(1)>', title: '<script>bad</script>' }); });
 assert.equal(await card.locator('img,script').count(), 0); assert.equal(await card.locator('.shortcut,.weather').count(), 0); await measure('minimal-no-entities', 250);
 // Local time moves date and greeting without any new hass object.
 await page.evaluate(() => { window.card.setConfig({ name: 'Alex', time_zone: 'Europe/Bucharest' }); window.card._now = () => new Date('2026-10-21T20:59:00Z'); window.card._update(); });
 assert.match(await card.locator('h1').innerText(), /Good night/);
 const beforeDate = await card.locator('.date').innerText();
 await page.evaluate(() => { window.card._now = () => new Date('2026-10-21T21:01:00Z'); window.card._update(); });
 assert.notEqual(await card.locator('.date').innerText(), beforeDate);
 assert.deepEqual(errors, []);
 console.log('PASS: widths 200–760, phone/dark, 0–8 shortcuts, real navigation/keyboard, More Info, mocked scene payload, read-only, motion opt-outs, weather updates, escaping and midnight refresh. HA icons/components stubbed; no live devices.');
} finally { await browser.close(); }
