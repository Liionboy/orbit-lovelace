# Changelog

## 1.1.0

- Add opt-in compact layout with accessible quick-navigation disclosure, top weather/date chip, optional explicit settings path and rounded icon/label shortcuts.
- Preserve classic default, existing 0–8 shortcut slots, scenes/read-only guards and all card types/YAML. No routes/entities inferred or devices contacted.
- Expanded state survives HA/clock updates; settings and shortcut navigation use exact configured local paths, preserve native modified clicks and do not trigger weather/scenes.
- Missing weather entities cannot dispatch More Info.
- 66 Node regressions and synthetic Chromium (167–760px, light/dark, expanded/collapsed, exact routes/weather, keyboard/focus and classic scene/motion checks) passed. Native HA/editor/Companion not certified.
