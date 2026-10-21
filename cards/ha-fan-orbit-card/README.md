# Fan Orbit Card

A standalone Home Assistant Dashboard fan card in the Orbit style. Compact theme-aware layout, four palettes, native visual form and capability-aware controls. No framework, build step, external resources or autodiscovery.

## Install

HACS → menu → **Custom repositories** → `https://github.com/Liionboy/ha-fan-orbit-card` → **Dashboard**. Download and refresh the browser. This is a custom repository, not default HACS catalog inclusion.

Manual: copy `ha-fan-orbit-card.js` to `config/www/` and add `/local/ha-fan-orbit-card.js` as a **JavaScript module** resource. Home Assistant **2026.6.0+** is the API-based minimum for the native `getConfigForm` form; not live-certified.

```yaml
type: custom:ha-fan-orbit-card
entity: fan.example
palette: aurora
read_only: false
```

Replace the example with your own fan. No entity is selected by default; an empty configuration shows a useful setup hint.

| Option | Default | Purpose |
| --- | --- | --- |
| `entity` | none | Selected fan |
| `name`, `icon` | entity metadata | Optional overrides |
| `palette` | `aurora` | `aurora`, `ocean`, `sunset`, `lavender` |
| `read_only` | `false` | Disable all commands; More Info remains available |

## Controls and safeguards

Only controls supported by the selected fan's `supported_features` and valid attributes are rendered. Service availability, known on/off state, read-only mode and a pending-request guard also gate every dispatch.

- Power: separate **TURN_ON=32** and **TURN_OFF=16** flags. Power is never inferred from speed support.
- Speed: **SET_SPEED=1**, finite percentage from 0–100. Uses valid `percentage_step` or fallback 1; clamps and snaps requests, then rounds to the integer percentage required by HA. Zero speed can stop a fan; nonzero speed can start it.
- Presets: **PRESET_MODE=8** and the actual reported `preset_modes` list. No invented modes.
- Oscillation: **OSCILLATE=2** and a reported boolean `oscillating`.
- Direction: **DIRECTION=4** and the frontend `direction` attribute (`forward` or `reverse`).
- Missing/unknown/unavailable fans and absent services cannot send commands. Read-only blocks all commands. More Info targets only the selected existing entity.
- Sliders submit on change, not every input event. Unrelated HA updates and pending feedback preserve the range DOM node. Duplicate requests are blocked; failures show a generic retryable message.

Only the six documented fan services are available; no arbitrary service/action configuration. “Request sent” confirms dispatch, not physical device state.

## Verification

```sh
npm run check
npm test
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/output npm run test:browser
```

19 Node regression tests plus synthetic Chromium checks at 200/280/320/440px, light/dark and reduced motion. Browser verifies all six service payloads against mocks, keyboard activation, range stability, busy/read-only/capability gates, More Info and escaping. HA components/icons are stubbed; no live HA instance, dashboard or physical fan was accessed or changed. See [RESEARCH.md](RESEARCH.md) for API sources and [TODO.md](TODO.md) for live checks.
