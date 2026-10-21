# Animated Gate Card

A polished, responsive Home Assistant Lovelace card for gate and other cover entities. Its compact inline SVG depicts a double-leaf entrance gate, with separate opening and closing animations driven by the entity's live cover state.

The card never calls services on its own. Its Open, Close, and Stop buttons call Home Assistant's standard cover services only when clicked. The card fetches no external assets and contains no personal entity IDs.

## Features

- Original, gate-focused SVG artwork of a swinging entrance gate, pillars, fence, and driveway, filling the compact scene without stretching the illustration.
- Distinct animations for `opening` and `closing`; static open/closed appearance for those states.
- State pill, friendly name, and current position when the cover exposes `current_position`.
- Open, Close, and Stop controls using `cover.open_cover`, `cover.close_cover`, and `cover.stop_cover`; movement feedback follows the selected entity only, and Stop remains available whenever the cover supports it (including covers that report only `open`/`closed`).
- Subtle hover and press feedback on enabled controls, with the hover treatment limited to mouse-capable devices.
- Direct button click handling and visible pending/acknowledgement/error feedback for each cover command, including local motion tracking so Stop remains available when the integration omits intermediate movement states.
- Native entity selector in the card editor; each user chooses their own `cover` entity.
- Responsive layout with Home Assistant theme colors.
- Honors the operating system's reduced-motion preference.
- Unknown, unavailable, and nonstandard cover states degrade gracefully.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/lovelace-animated-gate-card` with category **Dashboard**.
3. Install **Animated Gate Card** and refresh the browser.
4. Add the card to your dashboard and select a `cover` entity in the visual editor.

This is a HACS Dashboard plugin, not a Home Assistant backend integration. The visual config editor uses the native `getConfigForm` API, available in Home Assistant 2026.6 and later.

## Configuration

The visual editor is recommended. Select any cover entity; no entity IDs are built into the card.

```yaml
type: custom:animated-gate-card
entity: cover.my_gate
title: Entrance gate
```

The card animates in response to the standard Home Assistant cover states: `opening`, `open`, `closing`, and `closed`. The current-position indicator is shown only when the entity supplies a numeric `current_position` attribute. Open/Close are enabled when useful for the current state; Stop appears enabled only while the gate is moving and when the entity reports that Stop is supported.

## Manual resource install

Copy `dist/animated-gate-card.js` to `/config/www/animated-gate-card.js`, add `/local/animated-gate-card.js` as a JavaScript module resource in **Settings → Dashboards → Resources**, refresh the browser, and use `type: custom:animated-gate-card`.

## Development

Dependency-free ES module (release 1.0.9):

```sh
npm run check
```

## License

MIT. See [LICENSE](LICENSE).
