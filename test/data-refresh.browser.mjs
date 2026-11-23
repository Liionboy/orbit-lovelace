import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { compactFixtures } from './compact-fixtures.mjs';

const { chromium, webkit } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const engine = process.env.BROWSER === 'webkit' ? webkit : chromium;
const browser = await engine.launch({ executablePath: process.env.BROWSER_EXECUTABLE });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/*', route => route.abort());
  await page.setContent('<meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}ha-card{display:block}main{width:180px}</style><div style="height:1600px"></div><main></main><div style="height:900px"></div>');
  await page.addScriptTag({ content: await readFile(process.env.ORBIT_BUNDLE || new URL('../dist/orbit-lovelace.js', import.meta.url), 'utf8'), type: 'module' });
  await page.waitForFunction(() => window.orbitLovelace?.compact);
  await page.evaluate(compactFixtures);
  const results = await page.evaluate(async () => {
    const rows = [];
    const nextFrame = () => new Promise(requestAnimationFrame);
    const main = document.querySelector('main');
    const hass = window.compactHass;
    const revisedStates = Object.fromEntries(Object.entries(hass.states).map(([id, value]) => {
      const state = id.startsWith('sensor.') && typeof value.state === 'string' && value.state.trim() && Number.isFinite(Number(value.state))
        ? String(Number(value.state) + 1) : value.state;
      const attributes = { ...value.attributes };
      for (const key of ['current_temperature', 'temperature', 'brightness', 'percentage', 'current_humidity', 'current_position', 'volume_level', 'media_position']) {
        if (typeof attributes[key] === 'number') attributes[key] += key === 'volume_level' ? 0.05 : 1;
      }
      return [id, { ...value, state, attributes }];
    }));
    for (const layout of ['normal', 'compact']) for (const [type, config] of Object.entries(window.compactConfigs)) {
      const card = document.createElement(type);
      card.setConfig({ ...config, layout, design: 'modern', glow: true, satin: true });
      card.hass = hass;
      main.replaceChildren(card);
      if (card.updateComplete) await card.updateComplete;
      await nextFrame();
      const frame = () => Array.from(card.shadowRoot.children).find(node => node.localName !== 'style');
      const before = frame();
      if (!before) throw Error('Missing card frame: ' + type);
      document.scrollingElement.scrollTop = 1550;
      const initialScroll = document.scrollingElement.scrollTop;
      card.hass = { ...hass, states: { ...hass.states, 'sensor.orbit_unrelated': { state: '75', attributes: {} } } };
      await nextFrame();
      const unrelated = frame() === before;
      card.hass = { ...hass, states: revisedStates };
      await nextFrame();
      rows.push({ type, layout, unrelated, stable: frame() === before, scroll: document.scrollingElement.scrollTop === initialScroll });
    }
    return rows;
  });
  assert.equal(results.length, 74);
  assert.deepEqual(results.filter(row => !row.unrelated || !row.stable || !row.scroll), []);
  assert.deepEqual(errors, []);
  console.log('74 mobile mounts: original frame and scroll retained on unrelated and live entity updates.');
} finally {
  await browser.close();
}
