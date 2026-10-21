import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = await readFile(new URL('../ha-scenes-orbit-card.js', import.meta.url), 'utf8'), out = process.env.SCREENSHOT_DIR;
if (out) await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath: process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
 const page = await browser.newPage({ viewport: { width: 800, height: 1000 } }), errors = []; page.on('pageerror', (e) => errors.push(e.message));
 await page.route('http://scenes.test/**', async (route) => route.request().url().endsWith('/card.js') ? route.fulfill({ contentType: 'application/javascript', body: source }) : route.fulfill({ contentType: 'text/html; charset=utf-8', body: '<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:16px;font-family:Arial,sans-serif;background:#f4f6fa}body.dark{background:#10171e;--primary-text-color:#e7edf5;--secondary-text-color:#a5b2c4;--card-background-color:#1c2834;--divider-color:#344454}#host{width:440px;max-width:100%}</style><div id="host"><ha-scenes-orbit-card></ha-scenes-orbit-card></div><script>customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;align-items:center;justify-content:center;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);font-size:var(--mdc-icon-size,24px)";}});</script><script src="/card.js"></script>' }));
 await page.goto('http://scenes.test/');
 await page.evaluate(() => {
  window.card = document.querySelector('ha-scenes-orbit-card'); window.calls = []; window.infos = [];
  window.card.addEventListener('hass-more-info', (e) => window.infos.push(e.detail));
  window.config = { entities: ['scene.cinema', 'scene.night', 'script.leaving'], title: 'Home scenes' };
  window.card.setConfig(window.config);
  window.card.hass = { states: { 'scene.cinema': { state: 'unknown', attributes: { friendly_name: 'Cinema', icon: 'mdi:movie-open-outline' } }, 'scene.night': { state: '2026-10-21T12:00:00Z', attributes: { friendly_name: 'Good night' } }, 'script.leaving': { state: 'off', attributes: { friendly_name: 'Leaving home' } } }, services: { scene: { turn_on: {} }, script: { turn_on: {} } }, callService: async (...args) => window.calls.push(args) };
 });
 const card = page.locator('ha-scenes-orbit-card');
 for (const width of [440, 320, 280, 200]) {
  await page.evaluate((w) => document.querySelector('#host').style.width = w + 'px', width);
  const m = await card.evaluate((el) => { const outer = el.getBoundingClientRect(); return { width: outer.width, height: outer.height, overflow: [...el.shadowRoot.querySelectorAll('.tile,.activate,.copy,h2,.name')].filter((n) => n.scrollWidth > n.clientWidth + 1 || n.getBoundingClientRect().right > outer.right + 1).map((n) => n.className || n.tagName) }; });
  assert.deepEqual(m.overflow, []); assert.ok(m.height <= 350); console.log(width, JSON.stringify(m));
  if (out) await card.screenshot({ path: out + '/light-' + width + '.png' });
 }
 await page.setViewportSize({ width: 360, height: 950 }); await page.evaluate(() => { document.querySelector('#host').style.width = '100%'; document.body.classList.add('dark'); });
 if (out) await card.screenshot({ path: out + '/dark-phone.png' });
 // A control remains valid after an unrelated entity change.
 const b = card.locator('.activate[data-entity="scene.cinema"]');
 await b.focus(); await page.evaluate(() => { window.oldButton = window.card.shadowRoot.querySelector('.activate'); window.card.hass = { ...window.card.hass, states: { ...window.card.hass.states, 'light.other': { state: 'on' } } }; });
 assert.ok(await page.evaluate(() => window.oldButton === window.card.shadowRoot.querySelector('.activate')));
 await page.keyboard.press('Enter'); assert.equal(await page.evaluate(() => window.calls.length), 0); await card.locator('.confirm').waitFor();
 await page.keyboard.press('Enter'); await card.locator('[role="status"]').waitFor(); assert.deepEqual(await page.evaluate(() => window.calls), [['scene', 'turn_on', { entity_id: 'scene.cinema' }]]);
 await card.locator('.info[data-entity="script.leaving"]').click(); assert.deepEqual(await page.evaluate(() => window.infos), [{ entityId: 'script.leaving' }]); assert.equal(await page.evaluate(() => window.calls.length), 1);
 await card.locator('.activate[data-entity="script.leaving"]').click(); await card.locator('.cancel').click(); assert.equal(await page.evaluate(() => window.calls.length), 1);
 await page.evaluate(() => { window.card.setConfig({ ...window.config, confirmation: false }); });
 await card.locator('.activate[data-entity="script.leaving"]').click(); assert.deepEqual(await page.evaluate(() => window.calls.at(-1)), ['script', 'turn_on', { entity_id: 'script.leaving' }]);
 await page.evaluate(() => { window.card.hass.states['script.leaving'].state = 'on'; window.card.hass = { ...window.card.hass }; });
 assert.ok(await card.locator('.activate[data-entity="script.leaving"]').isDisabled()); assert.match(await card.locator('.running').innerText(), /Running/);
 await page.evaluate(() => { window.card.setConfig({ ...window.config, read_only: true }); });
 assert.ok(await card.locator('.activate[data-entity="scene.cinema"]').isDisabled()); await card.locator('.info[data-entity="scene.cinema"]').click(); assert.equal(await page.evaluate(() => window.calls.length), 2);
 await page.emulateMedia({ reducedMotion: 'reduce' }); assert.equal(await card.locator('.tile').first().evaluate((el) => getComputedStyle(el).animationName), 'none');
 await page.evaluate(() => { window.card.setConfig({ entities: [], title: '<img src=x onerror=alert(1)>' }); });
 assert.equal(await card.locator('.activate,img').count(), 0); assert.match(await card.locator('h2').innerText(), /<img/);
 assert.deepEqual(errors, []); console.log('PASS: confirmation/keyboard/payloads/cancel/readonly/More Info/Running/escaping/empty/layout; all services mocked, HA icons stubbed.');
} finally { await browser.close(); }
