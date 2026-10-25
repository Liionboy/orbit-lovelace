# Changelog

## 1.4.0

- Update Room Orbit to v1.5.0: `climate_entity` accepts thermostats and humidifiers/dehumidifiers; reported Humidifying/Drying/Idle/Off badge with native More Info and no humidifier commands.
- Fan entities in all four shortcuts with capability/service-gated quick power toggle, on/off highlight and More Info for full controls. Read-only/busy/error guards retained.
- Narrow humidifier badge remains fully readable. Existing YAML/types/palettes, thermostat behavior, navigation and temperature effects retained.
- All other component pins unchanged. Update Orbit Lovelace in HACS and fully reload; do not add standalone Room alongside it.

## 1.3.0

- Update Welcome Orbit to v1.1.0: opt-in `layout: compact`, collapsible quick navigation, top weather/date chip and optional explicit `settings_path`.
- `shortcuts_expanded` sets the initial panel state; existing 0–8 shortcut paths/scenes, names/icons and guards retained. Classic is still the default.
- Update the suite in HACS, fully reload, select Header layout → compact in Welcome and configure your routes/weather. No new standalone resource required.
- All other component pins, including Weather v1.2.0, are unchanged.

## 1.2.0

- Update Weather Orbit to v1.2.0, adding an optional measured outdoor sensor separate from the weather provider. Select Outdoor temperature sensor in the editor or set `outdoor_temperature_entity`.
- Own units and precision, zero/negative values and independent availability are retained. No sensor auto-discovery, forecast substitution, new sensor queries or commands.
- Exact selected sensor More Info; missing/unavailable values are explicit. Existing clock/date, forecast, types and single suite resource stay compatible.
- Other component pins remain unchanged. Update Orbit Lovelace in HACS, fully reload the frontend, then select your outdoor sensor.

## 1.1.0

- Update Weather Orbit to v1.1.0: current clock and full date are visible by default. No additional sensors required.
- Optional `show_time`, `show_date`, `time_zone` editor/YAML settings; HA language, 12/24-hour and local/server time zone preferences respected.
- Minute-boundary updates do not recreate weather controls or request new forecasts.
- All other pinned components, 28 card types, the legacy alias and the single HACS resource remain unchanged. Existing YAML remains valid.
- Update Orbit Lovelace in HACS and fully reload the frontend. Do not install standalone Weather alongside the suite.

## 1.0.0

- Initial consolidated distribution: 27 packages, 28 cards and one legacy alias. See CATALOG.md and MIGRATION.md.
