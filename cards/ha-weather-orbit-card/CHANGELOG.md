# Changelog

## 1.1.0

- Show current time and full calendar date by default. No sensor required.
- Add native editor options `show_time`, `show_date` and optional IANA `time_zone`.
- Respect HA language, 12/24-hour and local/server time zone preferences; use the same zone for forecasts.
- Update at minute boundaries without weather state updates, new forecast queries or rebuilding weather controls. Clean up timers on removal and reconnect.
- Preserve weather subscriptions, existing YAML/type, read-only interactions and Orbit themes.
- Verified with 61 Node tests and synthetic Chromium at 167–760px, light/dark, midnight, locale and lifecycle checks. Native HA editor/Companion/hardware remain unverified.
