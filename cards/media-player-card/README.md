# Media Player Card

A polished, responsive Lovelace card for Home Assistant `media_player` entities. It adapts its controls to each entity's advertised capabilities, so the same card can be used with TVs, speakers, streaming players, Music Assistant, Spotify, and grouped players.

## Features

- Colorful now-playing layout with artwork, track/channel, artist, album, app, and player state when those attributes are available.
- Capability-aware transport controls: play/pause, previous/next, stop, and power.
- Volume slider and mute, shown only when supported by the selected player.
- Seek bar when the player exposes a duration and seek support.
- Optional advanced controls for source selection, shuffle, repeat, and media browsing.
- Browse and launch apps, channels, and other media when the player exposes `BROWSE_MEDIA` and `PLAY_MEDIA`; large catalogs have a built-in search field.
- Responsive styling, keyboard-accessible controls, reduced-motion support, and a configurable artwork toggle.
- Press and hold an empty area of the card for More Info; interactive controls are not affected.
- Immediate command feedback on touch, mouse and keyboard: **Sending…**, then **command sent** or a visible error. Command controls are temporarily disabled while a request is pending to prevent duplicates.
- No device IDs or entity names are hard-coded; configure any `media_player` entity in the card editor or YAML.

## Install with HACS

1. In Home Assistant, open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/Liionboy/media-player-card` and choose **Dashboard** as the category.
3. Find **Media Player Card** in HACS and install it.
4. If HACS does not add the resource automatically, add `/hacsfiles/media-player-card/media-player-card.js` as a **JavaScript module** under **Settings → Dashboards → Resources**.
5. Refresh the browser and add the card to a dashboard.

## Configuration

The card editor lets you choose a `media_player`, set an optional title, and show or hide the artwork. YAML example:

```yaml
type: custom:media-player-card
entity: media_player.living_room_player
# title: Living Room
# show_artwork: true
```

Replace the example entity with any of your own `media_player` entities. Controls are shown only when the entity advertises the corresponding feature. In particular, source selection requires both `source_list` and the `SELECT_SOURCE` feature; seeking requires `SEEK` and a positive `media_duration`. Media browsing uses Home Assistant's `media_player/browse_media` WebSocket API. Selecting a supported item sends `media_player.play_media` with the item's media ID and content type. Browse controls appear only when the entity supports `BROWSE_MEDIA`; playable items require `PLAY_MEDIA`.

## Development

### Command feedback (v1.2.5)

Tapping **Turn on** immediately changes the button to **Sending…** and shows a live status message. Power, playback, mute, volume, seek, source, shuffle/repeat and playable browser items share the same feedback path. A successful request means Home Assistant accepted the service call, not that the physical player has already changed state. The displayed player state always comes from HA. If HA does not respond within15 seconds, the result is explicitly **unknown**; check the device state before retrying. No automatic retries or optimistic power toggles are performed. Errors re-enable controls for an explicit retry.

Selected-player timestamp-only and unrelated state updates no longer rebuild controls. Relevant updates during a touch/slider gesture are deferred until its click/change/cancel completes; a pressed Turn on retains that intent even if the player changes state meanwhile. Touch scrolling/cancellation does not send commands. The power target is at least44px high, with stacked copy/button on very narrow cards. Feedback respects reduced motion and is announced through a live region.

Suite users: update **Orbit Lovelace** in HACS and fully reload the frontend/Companion WebView; do not add standalone Media Player alongside the suite.

```sh
npm run check
npm test
# Configurable installed Playwright/Chromium paths; see test/browser.mjs
npm run test:browser
```

The HACS asset is `dist/media-player-card.js`.

Tests use mocked Home Assistant services and stubbed HA components/icons. Mobile Chromium touch emulation is not physical-phone, native Companion or live-TV certification; no devices are operated by these tests.

## License

MIT
