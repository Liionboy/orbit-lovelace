# Changelog

## 1.1.0

- Update Weather Orbit to v1.1.0: current clock and full date are visible by default. No additional sensors required.
- Optional `show_time`, `show_date`, `time_zone` editor/YAML settings; HA language, 12/24-hour and local/server time zone preferences respected.
- Minute-boundary updates do not recreate weather controls or request new forecasts.
- All other pinned components, 28 card types, the legacy alias and the single HACS resource remain unchanged. Existing YAML remains valid.
- Update Orbit Lovelace in HACS and fully reload the frontend. Do not install standalone Weather alongside the suite.

## 1.0.0

- Initial consolidated distribution: 27 packages, 28 cards and one legacy alias. See CATALOG.md and MIGRATION.md.
