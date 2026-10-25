# Orbit Lovelace

**One HACS custom repository. One JavaScript resource. 28 cards.**

Orbit Lovelace packages the Orbit cards and the matching companion card collection into a single, self-contained Home Assistant Dashboard resource. Individual cards keep their existing names, Lovelace types, configurations and controls. This is a distribution suite, not a new all-in-one dashboard card.

Requires **Home Assistant 2026.6.0+** (the strictest native configuration-form API requirement among included cards). No backend integration is installed. There are no dynamic code downloads, CDNs or npm runtime installation requirements. Vacuum Commander's existing Lit runtime is included in the compiled resource.

## Installation

1. HACS → menu → **Custom repositories**.
2. Add **https://github.com/Liionboy/orbit-lovelace**, category **Dashboard**.
3. Download **Orbit Lovelace** and refresh your browser.
4. Check that Dashboard Resources contains this single resource, type **JavaScript module**:

    /hacsfiles/orbit-lovelace/orbit-lovelace.js

The resource path is **/hacsfiles/orbit-lovelace/orbit-lovelace.js**. If you already installed individual cards, follow [MIGRATION.md](MIGRATION.md) before loading the suite: old standalone resources must not remain enabled alongside it. This repository is a HACS custom repository; default catalog inclusion is not implied.

For manual installation, copy only `dist/orbit-lovelace.js` to `config/www/orbit-lovelace.js` and register `/local/orbit-lovelace.js` as a JavaScript module. Do not register files under `cards/` as additional resources.

## Current-temperature dot (v1.7.0)

Weather Orbit v1.4.0 automatically marks the weather entity’s current temperature with a contrasting dot on **today’s daily forecast bar**. It follows the same resolved date/time zone and shared range scale, never the separate outdoor sensor. If current weather exceeds forecast endpoints the scale expands, without changing Min/Max. No dot for missing today/invalid data. Update the suite in HACS, fully reload, select daily/bars; no new configuration needed.

## Daily forecast update (v1.6.0)

Weather Orbit v1.3.0 adds **Daily forecast layout → bars** (or `forecast_type: daily`, `forecast_layout: bars`) for horizontal daily minimum–maximum ranges. Existing tiles stays default. Min/max come from the provider, not the separate outdoor sensor; missing values are not estimated. Update Orbit Lovelace in HACS and fully reload; no standalone resource needed.

## Room update (v1.5.0)

Room Orbit v1.6.0 accepts **any entity domain** in the four shortcut slots, including all binary sensors, people, media players, vacuums, helpers and custom integrations. Binary icons follow device class/state. Existing direct light/switch/helper/fan and cover controls remain; other types open native More Info only, without inferred services. Humidifiers/dehumidifiers remain supported in **Room climate / humidifier**. Existing YAML remains valid. Update this suite in HACS, fully reload, then select your entities in Room’s editor. No additional standalone resource is needed.

## Included cards

- **Orbit:** Alerts, Battery, Fan, NAS, Person, Room, Scenes, Sensor Graph, Server, Speedtest, UniFi Orbit + UniFi Command Center, Weather and Welcome.
- **Companion collection:** Action Button, AlecoAir Dehumidifier, Animated Gate, Climate Control, Frigate Control, Home Connect Washer, HP Printer, Luma Control, Pi-hole Control, Sensor Meter, Switch Control, Media Player, Temperature & Humidity and Vacuum Commander.

There are **27 source packages and 28 distinct cards**, plus the legacy `living-temperature-card` alias. NAS remains a separate UGREEN-oriented card; Server remains independently configurable. This packaging does not add functionality or device support to the included cards.

See [CATALOG.md](CATALOG.md) for exact included versions, existing Lovelace types and each card's configuration reference. For example, your existing `type: custom:ha-person-orbit-card` remains unchanged, including the v1.1.0 optional readings/compact layout.

## Compatibility and safety

- Suite releases update the collection together. Component versions are pinned in `components.json`; they are independent of the suite version.
- Loading the suite only registers cards; it does not instantiate them or call device services. Configured cards retain their original behavior, including state/API requests, local camera images and explicit controls.
- Existing standalone registrations are not overwritten. They are skipped and reported in `window.orbitLovelace.skipped`. This prevents duplicate definitions, **not** live upgrading: remove old resources and perform a full frontend reload to use the bundled version.
- Temperature & Humidity's legacy alias now uses a distinct subclass, fixing its duplicate-constructor registration error. Its stale version banner is corrected in the bundle; both existing types are retained. Since suite v1.1.0, Weather Orbit includes the current clock and calendar date by default; both are configurable. Suite v1.2.0 adds an optional measured outdoor temperature sensor to Weather Orbit, displayed separately from the weather provider (`outdoor_temperature_entity`). Suite v1.3.0 adds Welcome Orbit v1.1.0 with opt-in compact layout, collapsible quick navigation, top weather/date chip and an explicit optional settings route. Other card functionality remains unchanged.
- HA native components, the actual native configuration editors, physical devices and Companion apps require user-side validation. Offline/browser mocks do not certify live HA compatibility.

## Development

Node.js 22+; no install step or build dependencies:

```sh
npm run build
npm run check
npm test
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROMIUM_EXECUTABLE=/path/to/chromium npm run test:browser
```

All tests are run **sequentially**, including upstream suites. Browser tests require an existing Playwright/Chromium installation and operate only on mocked Home Assistant data. Use `SCREENSHOT_DIR` to save screenshots outside the repository.

The deterministic build verifies source digests, applies the documented packaging/compatibility transformations and writes the single distributable. No network access is required for build/test. See [AUDIT.md](AUDIT.md) for scope/provenance and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for licensing.
