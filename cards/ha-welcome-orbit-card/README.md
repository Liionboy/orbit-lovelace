# Welcome Orbit Card

A standalone Home Assistant dashboard header in the Orbit style: time-aware greeting, date, clock, current weather and optional room or scene shortcuts. No Minimalist, button-card, external fonts, external weather requests or build step.

## Features

- Morning (05–11:59), afternoon (12–17:59), evening (18–21:59) and night greetings. UI greetings/editor labels are English; date/time and weather conditions follow the HA language where available.
- Current HA user name, optional name override, or no name for shared displays. User data stays inside Home Assistant.
- HA time zone by default, optional IANA override, browser zone fallback. Date/greeting/clock refresh every 30 seconds while mounted, even without state updates; timer is cleaned up when removed. Uses your device clock.
- Optional current conditions and temperature from one selected `weather` entity, preserving its temperature unit. Tap for HA More Info. No forecast service is called.
- **Zero to eight optional shortcuts**: a local room/dashboard route **or** a scene per slot. Empty slots are completely hidden; no entities are required.
- Scene activation only on explicit tap via `scene.turn_on`. Service checks, duplicate-request guard, generic errors and read-only mode. Scene timestamps are not interpreted as on/off. Unknown (never activated) scenes may be invoked; unavailable/missing scenes are disabled. “Scene requested” does not confirm physical device state.
- Four palettes, theme-aware colors, responsive container layout, keyboard focus, optional slow decorative orbit with reduced-motion support.

## Install with HACS

1. HACS → menu → **Custom repositories**.
2. Add `https://github.com/Liionboy/ha-welcome-orbit-card`, category **Dashboard**.
3. Download **Welcome Orbit Card** and reload your browser.
4. Add **Welcome Orbit Card** from the dashboard card picker.

This is a custom repository, not inclusion in the default HACS catalog. Home Assistant **2026.6+** is declared for the native `getConfigForm` visual editor API; this minimum is API-based, not live-certified.

Manual: copy `ha-welcome-orbit-card.js` into `config/www/`, add `/local/ha-welcome-orbit-card.js` as a **JavaScript module** resource, then add the card.

## Minimal YAML — no entities required

```yaml
type: custom:ha-welcome-orbit-card
```

## Example

```yaml
type: custom:ha-welcome-orbit-card
title: Home overview
palette: aurora
weather_entity: weather.home
path_1: /dashboard-home/living-room
name_1: Living room
icon_1: mdi:sofa
path_2: /dashboard-home/kitchen
name_2: Kitchen
icon_2: mdi:countertop-outline
scene_3: scene.evening
name_3: Evening
icon_3: mdi:weather-night
```

Replace sample entity IDs and routes with your own. Routes are never inferred from room names. Choose **either** `path_N` **or** `scene_N` per slot (N=1…8); label and icon alone do not display a shortcut. Visual editor groups are expandable and optional.

## Compact header (v1.1.0)

Choose **Header layout → compact** in the visual editor for a top-left quick-navigation disclosure, centered weather/date chip, optional top-right settings link and rounded icon/label shortcuts. Classic remains the default so existing dashboards do not change unexpectedly.

```yaml
type: custom:ha-welcome-orbit-card
layout: compact
show_time: false
shortcuts_expanded: true
weather_entity: weather.home
settings_path: /config/dashboard
path_1: /dashboard-home/overview
name_1: Home
icon_1: mdi:home
path_2: /dashboard-home/lights
name_2: Lights
icon_2: mdi:lightbulb
```

Replace all sample routes/entities with your own. `settings_path` is empty by default: no destination is inferred, and the cog is hidden until configured. It is only a navigation link, not an action that edits settings. The current HA user permissions still apply.

`shortcuts_expanded` defaults to false and sets the initial state; the arrow toggles the existing 0–8 configured shortcuts. It has an accessible expanded state and supports Enter/Space. State survives ordinary HA updates, clock refreshes and same-mode config changes while the card lives; it is not stored across a frontend reload. No configured shortcuts means no arrow or navigation row. Compact weather shows the condition icon, short date (when enabled) and current provider temperature; tap opens the selected weather entity, never navigation or scenes. Without weather, an optional date-only chip is shown.

At narrow widths, toolbar/shortcuts wrap onto additional rows; they do not scroll horizontally. The compact mode omits the classic title/decorative orbit; its optional clock remains controlled by `show_time`. Scene shortcuts retain all read-only/availability/busy guards. Settings and navigation remain available in read-only mode.

If installed through **Orbit Lovelace**, update the suite and fully reload the frontend instead of adding a second standalone resource.

## Options

| Key | Default | Purpose |
| --- | --- | --- |
| `layout` | `classic` | `classic` or opt-in `compact` |
| `shortcuts_expanded` | `false` | Initial compact shortcut panel state |
| `settings_path` | none | Explicit local settings navigation path; compact only |
| `title` | `Home overview` | Small header title |
| `name` | current HA user | Optional greeting-name override |
| `show_name` | `true` | Set false for anonymous/shared displays |
| `show_date`, `show_time` | `true` | Independently hide date/clock |
| `time_zone` | HA time zone | Optional IANA zone, e.g. `Europe/London` |
| `weather_entity` | none | Weather entity; missing/unavailable shows a neutral message |
| `palette` | `aurora` | `aurora`, `ocean`, `sunset`, `lavender` |
| `animate` | `true` | Decorative orbit; OS reduced motion always disables it |
| `read_only` | `false` | Disables scene activation, not navigation or weather More Info |
| `path_N` | none | Local path beginning with one slash; no external URLs, backslashes or whitespace |
| `scene_N` | none | Scene ID, mutually exclusive with `path_N` |
| `name_N`, `icon_N` | scene name/icon or generic room label | Optional overrides |

The header defaults to the full 12-column width of a section. It wraps content rather than forcing a fixed height. It does not create room views or scenes, discover entities, modify dashboards, or call devices in the background.

## Verification / development

```sh
npm run check
npm test
# Optional browser suite; no npm dependencies are installed by default:
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium SCREENSHOT_DIR=/path/to/output npm run test:browser
```

Tests use synthetic HA states and record scene calls/routing/More Info. Browser fixtures stub HA components and icons; they are not native HA editor or physical-device verification. See [TODO.md](TODO.md) for live-validation follow-ups.

API references: [custom cards](https://contributors.home-assistant.io/frontend/custom-ui/custom-card/), [visual form](https://contributors.home-assistant.io/frontend/custom-ui/card-editor/), [weather](https://www.home-assistant.io/integrations/weather/), [scenes](https://www.home-assistant.io/integrations/scene/).

MIT licensed.
