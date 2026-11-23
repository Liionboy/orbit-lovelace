import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const { chromium, webkit } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const engine = process.env.BROWSER === 'webkit' ? webkit : chromium;
const browser = await engine.launch({ executablePath: process.env.BROWSER_EXECUTABLE });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.setContent('<meta name="viewport" content="width=device-width,initial-scale=1"><style>ha-card{display:block}</style><div style="height:1600px"></div><main></main><div style="height:900px"></div>');
  const bundle = process.env.ORBIT_BUNDLE || new URL('../dist/orbit-lovelace.js', import.meta.url);
  await page.addScriptTag({ content: await readFile(bundle, 'utf8'), type: 'module' });
  await page.waitForFunction(() => customElements.get('climate-control-card'));
  for (const layout of ['normal', 'compact']) {
    for (const [type, entity, domain, on, off, attributes] of [
      ['luma-control-card', 'light.test', 'light', 'on', 'off', { supported_color_modes: ['brightness'], brightness: 102 }],
      ['climate-control-card', 'climate.test', 'climate', 'heat', 'off', { hvac_modes: ['off', 'heat'], current_temperature: 20, temperature: 22, min_temp: 10, max_temp: 30 }],
      ['switch-control-card', 'switch.test', 'switch', 'on', 'off', {}],
    ]) {
      const result = await page.evaluate(async ({ layout, type, entity, domain, on, off, attributes }) => {
        const card = document.createElement(type);
        const calls = [];
        const update = (state, attrs = attributes) => {
          card.hass = { states: { [entity]: { state, attributes: attrs } }, callService: async (...args) => calls.push(args) };
        };
        card.setConfig({ entity, layout, design: 'modern', glow: true, satin: true });
        document.querySelector('main').replaceChildren(card);
        update(on);
        await new Promise(requestAnimationFrame);
        const frame = card.shadowRoot.querySelector('ha-card');
        const selector = '[data-action="power"],[data-action="toggle"]';
        const button = card.shadowRoot.querySelector(selector);
        const root = document.scrollingElement;
        root.scrollTop = 1550;
        button.click();
        await new Promise(requestAnimationFrame);
        update(off);
        await new Promise(requestAnimationFrame);
        const retained = card.shadowRoot.querySelector('ha-card') === frame &&
          card.shadowRoot.querySelector(selector) === button && root.scrollTop === 1550;
        button.click();
        await new Promise(requestAnimationFrame);
        update(on);
        await new Promise(requestAnimationFrame);
        if (domain === 'climate') {
          const step = card.shadowRoot.querySelector('[data-step="1"]');
          step.click();
          await new Promise(requestAnimationFrame);
          update(on, { ...attributes, temperature: 23 });
          await new Promise(requestAnimationFrame);
          if (step !== card.shadowRoot.querySelector('[data-step="1"]')) throw Error('Temperature stepper replaced');
        }
        return { retained, calls };
      }, { layout, type, entity, domain, on, off, attributes });
      assert.equal(result.retained, true, type + ' ' + layout);
      assert.deepEqual(result.calls.map(call => call.slice(0, 2)), domain === 'climate'
        ? [['climate', 'set_hvac_mode'], ['climate', 'set_hvac_mode'], ['climate', 'set_temperature']]
        : [[domain, 'turn_off'], [domain, 'turn_on']]);
    }
  }
  console.log('PASS six mobile command/refresh cases: control identity, scroll, and exactly one service per action');
} finally {
  await browser.close();
}
