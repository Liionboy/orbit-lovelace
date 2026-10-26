# Changelog

## 1.11.0

- Adds first-party Select Orbit (`ha-select-orbit-card`) for select/input_select and Number Orbit (`ha-number-orbit-card`) for number/input_number, in the same resource and visual language. Native optional editor, Orbit palettes/themes, More Info, read-only,44px controls and narrow/mobile layouts.30 card types total:27 preserved upstream packages plus one suite-owned Controls1.0.0 package. No new repositories/resources/dependencies.
- Select uses only reported exact options. Number supports slider and ±, or a box with explicit Apply/Enter and Escape-to-discard; min/max/step/unit come from the entity. Exact decimal-grid arithmetic, stale-unit/range draft rejection, pointer-cancel/no command, no guessed metadata or silent snapping.
- Both provide one-request pending/sent/error/15-second unknown feedback, duplicate guards and current capability/availability rechecks. Reported state never changes optimistically. No automatic retries, discovery or device verification commands. Source provenance/hash is explicit in nativeComponents; all27 upstream pins/themeYAML1.1.0 unchanged.

## 1.10.1

- Fixes Person compact readings stacking below200px on two-column phone dashboards (Person1.1.2). Compact-only spacing/icons adapt below210/180px; paired rows remain at164/183/203px phone card widths. Only extremely narrow containers≤150px stack. Full decimals/units/text retained; long values can wrap. Default tiles/entities/actions unchanged.
- Adds actual side-by-side two-person regression at360/390/430px viewports, system fonts/light/dark, complete percentage/distance/altitude/activity and exact geometry. All26 other component pins and Themes1.1.0 unchanged. No live HA modifications.

## 1.10.0

- Orbit Themes1.1.0 adds Desktop/Mobile/iOS Mobile profiles for Graphite/Fjord/Dune, light/dark:9 new selectable names,3 existing names preserved (24 modes total). Existing base colors and all27 component pins unchanged.
- Optional card-mod root styling hides the ordinary dashboard header below768px only; native subview Back/title, edit controls and wider-screen navigation remain. Mobile profiles respect four safe-area insets, dynamic viewport height and scrolling; iOS additionally prefers system fonts and normalizes viewport transforms/margins. Unknown root markup fails open.
- Adds real pinned card-mod4.2.1 integration tests, native Room/subview/back_path example and recovery guide. No automatic dependency/theme installation, dashboard modification or OS detection. HACS Dashboard updates still do not copy YAML. Native HA/Safari/Companion remain unverified.

## 1.9.1

- Updates Person Orbit to1.1.1: compact extra readings share the same equal-width two-column grid as battery/travel, rather than each spanning a full row. Empty slots reserve no space; configured order preserved. Existing narrow (container ≤200px) single-column fallback and default labeled tiles are unchanged.
- Geometry tested for1–6 readings at440/280/243/220/200/167px, decimal units/text/long values, missing primary fields, odd counts and exact More Info. Four screenshot-style readings measure126px at243px, down from148px. No YAML/entity/service changes. Orbit Themes1.0.0 unchanged.

## 1.9.0

- Adds Orbit Themes v1.0.0: Graphite, Fjord and Dune, each with native light/dark modes, one optional companion YAML and safe installation/rollback instructions. HA navigation/canvas/forms/dialog/card surfaces use coordinated legacy/modern frontend tokens.
- Guarded build-only theme bridge adapts default decorative accents/surfaces, card radius/shadow and companion metrics without changing pinned upstream source, public types/YAML/services or semantic state colors. No-theme defaults retained; explicit palette/state overrides preserved.
- Adds interactive local design preview, desktop/phone images, theme contrast/schema/fallback tests and a168-mount sequential browser theme matrix. Native HA/Companion remains unverified; no live config or theme selection changed.
- Important: updating the HACS Dashboard plugin does not install/activate theme YAML. Follow THEMES.md for the separate companion file. No new repository, card-mod, external fonts or runtime dependencies.

## 1.8.0

- Media Player v1.2.5: immediate pending/sent/error feedback for media commands, including Turn on, with duplicate pending-request suppression and a15s unknown-result timeout. No optimistic player-state changes or automatic retries.
- Touch/click/slider targets survive HA state updates; explicit power intent, scroll/cancel behavior, minimum44px power button and reduced-motion-safe accessible feedback.
- Adds28 media regression tests and mobile touch browser coverage. Other component pins, including Weather1.4.0, unchanged.

## 1.7.0

- Weather Orbit v1.4.0: current-temperature dot on today’s daily bar, matched by full date in the card’s resolved zone. Uses weather temperature/unit, not the separate outdoor sensor.
- Shared scale expands to include valid current weather outside predicted ranges without changing Min/Max. Invalid current/today range shows no dot; tomorrow is never used as a fallback.
- Existing-state updates and hidden-clock midnight refresh add no subscriptions/services and retain weather controls. Other pins and layouts unchanged.

## 1.6.0

- Update Weather Orbit to v1.3.0: selectable daily forecast `forecast_layout: tiles|bars` (tiles remains default). Horizontal bars show explicit provider minimum/maximum, weekday and condition icon on a common displayed-day scale.
- Missing/invalid/reversed ranges remain neutral without inferred temperatures; equal endpoints are points. Responsive narrow full-width bars, locale/unit/time zone support and no additional forecast requests when switching layout.
- Existing clock/date, measured outdoor sensor and all other pins unchanged (including Room1.6.0). HACS suite update → full reload → Daily forecast layout bars.

## 1.5.0

- Update Room Orbit to v1.6.0: any valid entity domain in all four shortcut selectors/YAML fields, including all binary_sensor types and custom integration domains. The number of slots is unchanged.
- Binary icons follow all29 standard device classes and on/off state; unavailable/unknown/missing values use neutral icons. Metadata/slot overrides retained.
- Existing direct controls remain explicitly allowed; all other domains open exact native More Info without inferred services (including locks, alarms, buttons, scenes/scripts and updates).
- All other component pins unchanged. HACS suite update → full reload → select entities in Room editor.

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
