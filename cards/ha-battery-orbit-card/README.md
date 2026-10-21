# Battery Orbit

A compact, read-only Home Assistant Dashboard card. Standalone JavaScript, no build, framework or runtime dependencies. Home Assistant **2026.6+**; version **1.0.0**.

## Install

After publication, add this repository URL as a HACS custom repository, category **Dashboard**. Alternatively copy `ha-battery-orbit-card.js` into `config/www/` and add `/local/ha-battery-orbit-card.js` as a JavaScript module Dashboard resource. Add **Battery Orbit** in the card picker or use YAML. This local implementation has not been published or installed by its tests.

```yaml
type: custom:ha-battery-orbit-card
# entities: [] is valid; nothing is selected automatically
entities:
  - sensor.example_battery
  - binary_sensor.example_low_battery
palette: aurora
critical: 10
low: 25
```

All settings are optional and available through the native visual editor:

- `title`: Battery Orbit. Empty text is allowed.
- `entities`: multiple selected sensor / battery-class binary_sensor IDs; default `[]`, no discovery or fixed maximum. Duplicates are collapsed.
- `palette`: `aurora` (default), `ocean`, `sunset`, `lavender`. HA theme variables remain authoritative for background and text.
- `critical`: 10; `low`: 25. Finite numbers satisfying 0 ≤ critical < low ≤ 100. Critical and low boundaries are inclusive.

## State model

Percentage readings must be strict finite decimal numbers in 0–100 with unit exactly %. Device class may be battery or absent; a conflicting class (e.g. voltage) is unsupported. Numeric zero is valid. Whitespace around a number is accepted, but blank/hex/Infinity/NaN/unit-suffixed values are not. A battery-class binary sensor on means Low battery, off means Battery normal; binary flags do not fabricate a percentage or critical state.

Low binary flags come first, then numeric unhealthy values low-to-high, unknown rows, then healthy values low-to-high. Counts are mutually exclusive critical / low / healthy / unknown.

Missing, unavailable, unknown, malformed or unsupported readings remain visible as distinct labels and count as unknown, never healthy/all-clear. An empty selection is a configuration hint, not all-clear. Labels use friendly_name or entity ID. Tap any row (or focus and Enter/Space) for More Info on that exact entity. No service calls, alarm controls, dismiss/mute, queries, external requests or arbitrary HTML. This is not a replacement for a safety/alarm system.

## Development

```sh
npm run check
npm test
# Supply your installed Playwright module and Chromium if not project-local:
PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/evidence npm run test:browser
```

Node tests use a vm DOM mock; Playwright uses synthetic states and **stubbed HA icons/components**, not a live HA instance. No runtime dependencies. CI runs syntax and Node tests on push/PR; no automatic release workflow. See RESEARCH.md for source contracts and TODO.md for native/live checks.

MIT license.
