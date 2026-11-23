import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const { chromium, webkit } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = await readFile(process.env.ORBIT_BUNDLE || new URL('../dist/orbit-lovelace.js', import.meta.url), 'utf8');
const engine = process.env.BROWSER === 'webkit' ? webkit : chromium;
const browser = await engine.launch({ headless: true, executablePath: process.env.BROWSER_EXECUTABLE });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.setContent('<meta name="viewport" content="width=device-width,initial-scale=1"><style>ha-card{display:block}#spacer{height:1800px}</style><div id="spacer"></div><main></main>');
  await page.addScriptTag({ content: source, type: 'module' });
  await page.waitForFunction(() => customElements.get('switch-control-card'));
  for (const layout of ['normal', 'compact']) {
    const result = await page.evaluate((layout) => {
      const card = document.createElement('switch-control-card');
      const states = {
        'switch.example': { state: 'on', attributes: { friendly_name: 'Test switch' } },
        'sensor.power': { state: '10.23', attributes: { unit_of_measurement: 'W' } },
        'sensor.energy': { state: '7.61', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.voltage': { state: '228.12', attributes: { unit_of_measurement: 'V' } },
      };
      const hass = { states, callService: () => { throw new Error('Unexpected device command'); } };
      card.setConfig({
        entity: 'switch.example', power_entity: 'sensor.power', energy_entity: 'sensor.energy',
        voltage_entity: 'sensor.voltage', layout, design: 'modern', glow: true, satin: true,
      });
      document.querySelector('main').replaceChildren(card);
      card.hass = hass;
      const root = card.shadowRoot;
      const readings = () => [...root.querySelectorAll('.reading-value')];
      const frame = root.querySelector('ha-card');
      const toggle = root.querySelector('.toggle');
      const originalReadings = readings();
      const originalHeight = card.getBoundingClientRect().height;
      const scrollRoot = document.scrollingElement;
      scrollRoot.scrollTop = scrollRoot.scrollHeight;
      const initialScroll = scrollRoot.scrollTop;
      for (let i = 0; i < 60; i++) {
        card.hass = { ...hass, states: {
          ...states,
          'sensor.power': { ...states['sensor.power'], state: String(10 + i) },
        } };
      }
      const latestPower = readings()[0].textContent;
      const stable = root.querySelector('ha-card') === frame &&
        root.querySelector('.toggle') === toggle &&
        readings().every((node, index) => node === originalReadings[index]) &&
        card.getBoundingClientRect().height === originalHeight &&
        scrollRoot.scrollTop === initialScroll;
      card.hass = { ...hass, states: { ...states, 'sensor.power': undefined } };
      const missingPower = readings()[0].textContent;
      card.hass = { ...hass, states: { ...states, 'switch.example': { ...states['switch.example'], state: 'off' } } };
      const off = root.querySelector('ha-card').dataset.orbitSwitchOn === 'false';
      return { stable, latestPower, missingPower, off };
    }, layout);
    assert.deepEqual(result, { stable: true, latestPower: '69 W', missingPower: 'Unavailable', off: true }, layout);
  }
  console.log('Switch telemetry: live values, stable controls and scroll, missing reading, reported power state; Normal and Compact');
} finally {
  await browser.close();
}
