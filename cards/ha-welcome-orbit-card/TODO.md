# Welcome Orbit follow-up checklist

## Release scope

- [x] Standalone configurable greeting, date, clock and current weather.
- [x] Zero to eight optional room/scene shortcuts; no required entities.
- [x] Native visual form, four Orbit palettes, read-only scenes and reduced-motion support.

## Live validation — not performed by automated/mock tests

- [ ] Verify the native Home Assistant 2026.6+ visual form, including expandable optional shortcut groups.
- [ ] Verify rendering with actual HA icons/themes and companion apps.
- [ ] Confirm user-selected room routes and weather provider attributes in the installed dashboard.
- [ ] User-initiated scene activation check after installation, only when safe; never activate devices as automated verification.

## Possible later enhancements — proposals, not promised features

- [ ] Optional translated greetings/editor strings (currently English; dates/weather follow HA language).
- [ ] Forecast summary if requested; use the current weather API, not legacy forecast attributes.
- [ ] Optional per-scene confirmation for consequential scenes, if requested.
