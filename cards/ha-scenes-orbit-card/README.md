# Scenes Orbit Card

A standalone, compact Home Assistant Dashboard plugin for configured scenes and scripts. Four Orbit palettes, theme-aware colors, responsive grid, native visual form and keyboard-accessible controls. No framework, build step, external resources or Minimalist dependency.

## Install

HACS → menu → **Custom repositories** → `https://github.com/Liionboy/ha-scenes-orbit-card` → **Dashboard**, then download and refresh the browser. This is a custom repository, not default HACS catalog inclusion. Home Assistant **2026.6.0+** is declared for the native `getConfigForm` API; not live-certified.

Manual: place `ha-scenes-orbit-card.js` in `config/www/`, add `/local/ha-scenes-orbit-card.js` as a JavaScript module resource.

```yaml
type: custom:ha-scenes-orbit-card
title: Home scenes
palette: aurora
confirmation: true
entities:
  - scene.cinema
  - scene.night
  - script.leaving_home
```

IDs are examples; choose your own entities. Empty `entities: []` is supported. The visual editor supports multiple scene/script selection; **no mandatory entity count**. Up to 24 entries, duplicates removed, selection order retained. Labels/icons come from the selected entities.

| Option | Default | Meaning |
| --- | --- | --- |
| `title` | `Scenes Orbit` | Card title |
| `entities` | `[]` | Selected scene or script IDs (maximum 24) |
| `palette` | `aurora` | `aurora`, `ocean`, `sunset`, `lavender` |
| `read_only` | `false` | Disable all activation; More Info remains available |
| `confirmation` | `true` | First tap arms a single button; second tap confirms. Cancel button disarms it. |

## Activation and safety

- Only explicit taps send `scene.turn_on` or `script.turn_on` with the selected entity ID. No arbitrary service calls, toggles, stop-all commands or bulk activation.
- A scene's state is a timestamp or `unknown`, **not on/off**; it never gets an “active” indicator. Unknown/never-used scenes may be activated; missing/unavailable scenes and missing services are blocked.
- Scripts report `on` while running. The card shows **Running** and blocks restart while running, regardless of script mode. Unknown script state is blocked. This card starts only scripts that need no additional parameters (configure their defaults in HA).
- Duplicate pending requests are blocked. Failures show generic errors, with retry available. “Activation requested” means HA accepted the call, not that devices reached the desired state.
- Confirmation is a local two-tap safeguard, not authentication. Never configure consequential scenes/scripts on a publicly accessible dashboard without appropriate HA permissions.
- Info icons open HA More Info for that specific entity. No action runs on card load or HA updates.

## Development and validation

```sh
npm run check
npm test
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/output npm run test:browser
```

Tests are synthetic; scene/script service calls are mocked. Browser checks stub HA components/icons and are not native-editor or real-device validation. No HA instance/dashboard was modified. See [TODO.md](TODO.md) and [RESEARCH.md](RESEARCH.md).
