# Changelog

## 1.2.0

- Add optional `outdoor_temperature_entity` native editor/YAML sensor selection.
- Show measured outdoor temperature separately from the weather provider; retain own units/precision, zero/negative values and independent availability. No guessed entities, unit conversion, apparent-temperature calculation or provider substitution.
- Exact sensor More Info via pointer/keyboard, with missing-entity protection and no device commands.
- Unconfigured cards retain existing appearance; sensor-only mode is supported. Clock/date/forecasts remain compatible.
- Verified with 75 Node tests and synthetic Chromium; native HA/editor/Companion remain unverified.

## 1.1.0

- Show current time and full calendar date by default. No sensor required.
- Add native editor options `show_time`, `show_date` and optional IANA `time_zone`.
- Respect HA language, 12/24-hour and local/server time zone preferences; use the same zone for forecasts.
- Update at minute boundaries without weather state updates, new forecast queries or rebuilding weather controls. Clean up timers on removal and reconnect.
- Preserve weather subscriptions, existing YAML/type, read-only interactions and Orbit themes.
- Verified with 61 Node tests and synthetic Chromium at 167–760px, light/dark, midnight, locale and lifecycle checks. Native HA editor/Companion/hardware remain unverified.
