# Orbit Compact — all-card design specification

**Design reference.** The first selectable-layout implementation is available in **v1.12.0-beta.1**; see [exact shipped scope and test instructions](COMPACT.md). Some proposed secondary-panel collapses below remain future refinements, not beta claims. Baseline: Orbit Lovelace v1.11.0. This defines a user-selectable compact presentation for all 30 primary card types in the existing single-resource suite. No live Home Assistant change.

## Requirement and existing behavior

- User chooses Normal or Compact in every card editor; do not switch automatically on phones. Same public types, resource and Orbit themes. No separate compact repositories/cards.
- 27 imported packages plus one native Controls package supply 30 primary types. UniFi has two distinct primary types; Select/Number share a module. living-temperature-card remains a compatibility alias, not a 31st design.
- Welcome already supports layout: classic|compact. Person supports metrics_layout: tiles|compact, affecting readings only. Room, Climate and Luma already have small summaries/details. README words and CSS classes called compact do not establish a selectable layout.

## Proposed API — not usable in v1.11.0 yet

- Editor: Card layout → Normal / Compact. Proposed common YAML key: layout: normal|compact. Welcome must retain classic as a supported Normal alias and its existing compact behavior.
- An omitted key preserves the exact pre-feature behavior, including Welcome and Person preferences; no dashboard rewrite. Explicit Compact selects the design below without overwriting other options. Person compact uses paired readings; Normal restores the existing configured metrics_layout preference.
- forecast_layout, Number control mode, palette, precision/units, entities, read-only and navigation remain independent. Do not mutate stored settings when switching layout.
- Same data/service model and guards in both layouts. No new integration, card-mod dependency or theme YAML installation.

## Shared visual rules

1. Retain Orbit stripe/accent, radius, surfaces, focus ring and semantic colors. Remove large decorative orbit/illustrations and duplicate brand/status headings before shrinking useful text. No transform:scale trick.
2. Hierarchy: identity → reported state/main values → everyday actions → Details. Pending, errors, unknown outcomes and safety-critical alerts remain readable in the closed summary. Do not hide them behind a generic ready icon.
3. Start with approximately 10–12px outer padding and 6–8px gaps, adjusted only after measured geometry. These are design targets, not tested results. Keep readable text and original precision/unit semantics; do not abbreviate numeric values to force a height.
4. Aim for at least 44×44 CSS-pixel action targets, clear labels/focus, Enter/Space and accessible disclosure semantics. At half-phone width, wrap rather than overlap or shrink targets. Long press is not the only path to Details or More Info.
5. All configured information remains reachable. Essential state is visible; secondary information uses labeled Details/list sections or the existing explicit More Info where specified. No arbitrary top-three cutoff or combined averages. Long strings may wrap and increase height.
6. No universal fixed height or promised reduction percentage. A single sensor and 24 scenes need different budgets. Compare matched populated Normal/Compact fixtures and measure closed/open height. Already-small cards may improve only modestly.
7. Disclosure state is separate from layout choice and incoming hass updates. Preserve focus, expansion, drafts, pending state and pressed controls. Expand/collapse must never submit a command. Safely cancel unsent gestures before hiding their controls; do not claim a sent service was cancelled.
8. Use actual container width, not only viewport width. Two cards at a 390px viewport are about 183px each. Complex controls may need several readable rows. Preserve desktop layout and parent grid behavior.
9. Preserve read-only/reduced-motion, actual state vs selected mode, unknown/unavailable distinctions and service acknowledgment vs hardware success. No automatic command, discovery or query caused by changing density.

## Per-card design — 30/30

### 1. Alerts Orbit

- Type: `custom:ha-alerts-orbit-card`.
- **Compact summary:** Active-alert summary and short, labeled rows.
- **Secondary content and invariants:** All active/problem states remain visible; inactive rows follow show_inactive. No false all-clear from unknown sensors.

### 2. Battery Orbit

- Type: `custom:ha-battery-orbit-card`.
- **Compact summary:** Icon/name/value rows, thin battery bars, persistent low/charging indicators.
- **Secondary content and invariants:** Keep every configured battery and its original unit/state; do not replace the list with an average.

### 3. Fan Orbit

- Type: `custom:ha-fan-orbit-card`.
- **Compact summary:** Name, actual state/speed, power and supported speed control.
- **Secondary content and invariants:** Presets, direction and oscillation in Details only where already supported. Preserve service/read-only guards.

### 4. NAS Orbit

- Type: `custom:ha-nas-orbit-card`.
- **Compact summary:** Name/status, paired CPU/memory and a labeled thin storage usage bar.
- **Secondary content and invariants:** Drive bays and additional thermal/storage telemetry expand; explicit Wake stays available. Preserve matched storage scope and NAS identity.

### 5. Person Orbit

- Type: `custom:ha-person-orbit-card`.
- **Compact summary:** Small avatar/name/presence header and existing two-column icon/value readings.
- **Secondary content and invariants:** Keep every configured battery/ETA/extra reading and full values/units. Retain verified half-phone paired geometry; no return to the old 200px single-column fallback.

### 6. Room Orbit

- Type: `custom:ha-room-orbit-card`.
- **Compact summary:** Refine the already-small icon/name, readings/activity and up to four shortcuts; remove redundant decoration.
- **Secondary content and invariants:** Existing details retain full names. Preserve separate navigation/shortcut/More Info hit regions and actual climate/humidifier action. Baseline already small, so savings may be modest.

### 7. Scenes Orbit

- Type: `custom:ha-scenes-orbit-card`.
- **Compact summary:** Short header and responsive labeled buttons instead of tall decorative tiles.
- **Secondary content and invariants:** All configured scenes/scripts accessible; no arbitrary cutoff. Keep armed/confirm/cancel behavior and feedback.

### 8. Sensor Graph Orbit

- Type: `custom:ha-sensor-graph-orbit-card`.
- **Compact summary:** Labeled value plus shallow timestamp sparkline per selected sensor.
- **Secondary content and invariants:** Retain independent scales/units, every selected sensor and history window. Full charts can expand without extra history requests.

### 9. Server Orbit

- Type: `custom:ha-server-orbit-card`.
- **Compact summary:** Host/status, existing power action and up to four paired icon/value metrics with optional thin gauges.
- **Secondary content and invariants:** Detailed labels/gauge context expand; all configured readings and real power/status distinctions preserved. Not merged with NAS.

### 10. Speedtest Orbit

- Type: `custom:ha-speedtest-orbit-card`.
- **Compact summary:** Download/upload paired and ping in a small labeled row; reduce the large decorative scene.
- **Secondary content and invariants:** Freshness/source context retained; more detail expands without running a speed test or changing discovery.

### 11. UniFi Orbit

- Type: `custom:unifi-orbit-card`.
- **Compact summary:** Small network/physical-device/client/traffic summary instead of the full orbit animation.
- **Secondary content and invariants:** Device roster/topology expand, preserving available per-device telemetry and actions. No fabricated counters or new controller access.

### 12. UniFi Command Center

- Type: `custom:unifi-command-center-card`.
- **Compact summary:** Distinct compact network-health/traffic/client summary with persistent issue/update indicators.
- **Secondary content and invariants:** Topology, devices and contextual actions in labeled expandable sections. Preserve existing selection/context and keep distinct from UniFi Orbit.

### 13. Vacuum Commander

- Type: `custom:ha-vacuum-commander-card`.
- **Compact summary:** Name/activity/battery/progress and supported daily actions; relevant Pause/Stop immediately accessible.
- **Secondary content and invariants:** Map and room chooser expand; preserve real selected map/segment IDs and safeguards. No guessed mappings or test cleaning commands.

### 14. Weather Orbit

- Type: `custom:ha-weather-orbit-card`.
- **Compact summary:** Small conditions/provider temperature header, separate optional measured sensor and compact clock/date.
- **Secondary content and invariants:** Forecast in a compact secondary section/disclosure; preserve count/type/tiles-or-bars, Min/Max and current marker. No source conflation or new subscriptions.

### 15. Welcome Orbit

- Type: `custom:ha-welcome-orbit-card`.
- **Compact summary:** Reuse existing compact toolbar/greeting/weather-date chip/settings and collapsible shortcuts.
- **Secondary content and invariants:** Do not invent a competing third layout. Preserve classic/compact YAML, shortcuts_expanded initialization and independent scene/navigation safeguards.

### 16. Action Button

- Type: `custom:action-button-card`.
- **Compact summary:** One short icon/label/status/action row, wrapping when narrow.
- **Secondary content and invariants:** Explicit confirmation/cancel remains visible. A last-press timestamp never becomes an inferred device-on state.

### 17. AlecoAir Dehumidifier

- Type: `custom:alecoair-dehumidifier-card`.
- **Compact summary:** Name, reported humidity/activity, target humidity and existing main power/target controls.
- **Secondary content and invariants:** Other supported settings in Details. Water/problem warnings stay visible; no inferred modes or expanded command scope.

### 18. Animated Gate

- Type: `custom:animated-gate-card`.
- **Compact summary:** Small gate glyph with actual state/position and labeled supported Open/Stop/Close.
- **Secondary content and invariants:** Full illustration expands. Moving/unknown indicators stay visible; full-size separated targets, no toggle on background.

### 19. Climate Control

- Type: `custom:climate-control-card`.
- **Compact summary:** Inline current/target temperatures, actual HVAC action and supported target steps/power.
- **Secondary content and invariants:** Reuse Adjust controls for mode/preset. Preserve ranges, units/steps, actual idle vs heating semantics and command feedback.

### 20. Frigate Control

- Type: `custom:frigate-control-card`.
- **Compact summary:** Small snapshot thumbnail beside name/state/motion and configured count readings.
- **Secondary content and invariants:** Full preview/More Info remains available. Preserve aspect ratio and refresh lifecycle; no autoplay or new live stream.

### 21. Home Connect Washer

- Type: `custom:home-connect-washer-card`.
- **Compact summary:** Operation/program, slim progress, finish-time context and door/connectivity/problem indicators.
- **Secondary content and invariants:** Temperature/spin/dosing/remote settings and existing controls expand; relevant existing Stop stays immediately discoverable. No new Start behavior.

### 22. HP Printer

- Type: `custom:hp-printer-card`.
- **Compact summary:** Printer/status and individually labeled thin supply bars instead of a large illustration.
- **Secondary content and invariants:** All available configured supply channels retained; other existing device/paper telemetry expands. No combined misleading ink average.

### 23. Luma Control

- Type: `custom:luma-control-card`.
- **Compact summary:** Name/state, existing power action and compact supported brightness control/readout.
- **Secondary content and invariants:** Reuse Adjust controls for color/temperature/effects. Switch mode stays a switch; preserve real RGB and current guards.

### 24. Pi-hole Control

- Type: `custom:pihole-control-card`.
- **Compact summary:** Blocking/running state, main blocking action, configured queries/blocked summary and active pause countdown.
- **Secondary content and invariants:** Instance selector accessible; groups, maintenance, updates and other counters expand. Keep confirmations and strict instance separation.

### 25. Sensor Meter

- Type: `custom:sensor-meter-card`.
- **Compact summary:** Icon/name/value/unit and optional thin meter in one or two short rows.
- **Secondary content and invariants:** Preserve existing configured precision/min/max. No forced Details button on this already-small tile; retain exact More Info.

### 26. Switch Control

- Type: `custom:switch-control-card`.
- **Compact summary:** Inline name/state/explicit power, then only configured power/energy/voltage in tight rows.
- **Secondary content and invariants:** No empty sensor panels. Retain all readings/units and existing service/More Info/feedback behavior.

### 27. Media Player

- Type: `custom:media-player-card`.
- **Compact summary:** Small optional artwork, now-playing title/state, essential supported transport/power and compact volume.
- **Secondary content and invariants:** Seek, sources and secondary metadata in Details; full metadata accessible. Keep touch/control identity and truthful feedback. App/channel browsing is not added by compact design.

### 28. Temperature & Humidity

- Type: `custom:temperature-humidity-card`.
- **Compact summary:** Paired named/icon temperature and humidity values/units, with small comfort decoration.
- **Secondary content and invariants:** Preserve precision, independent unavailable states and exact More Info. Legacy living-temperature-card receives the same design.

### 29. Select Orbit

- Type: `custom:ha-select-orbit-card`.
- **Compact summary:** Short name/current-value header and native dropdown; remove duplicate large status panels.
- **Secondary content and invariants:** Exact options, reported-state distinction and visible pending/error/unknown feedback retained. No invented default option or unlabeled icon-only picker.

### 30. Number Orbit

- Type: `custom:ha-number-orbit-card`.
- **Compact summary:** Inline reported value/unit with compact slider and full-size +/- targets, or existing box/Apply.
- **Secondary content and invariants:** Keep min/max/step context, draft/feedback, decimal-safe arithmetic, release-to-commit, Escape/cancel and stale-metadata rejection. Do not silently change control mode.

## Architecture and provenance before implementation

Inspect each component editor/render lifecycle before patching. A single global shrink-all stylesheet cannot implement this contract safely.

For imported cards, update the maintained component and import its verified release, or explicitly record suite-owned adaptations with source hashes, guarded transformation contracts and regressions. Never label modified source as an unchanged public upstream artifact. Keep immutable input identity. Select/Number use their native source/version/hash path. Preserve the public types, alias and picker metadata.

Keep editor defaults, validation, serialized config and effective layout consistent. Add layout-aware getCardSize/getGridOptions hints where supported after measuring actual geometry. Parent grid_options/row overrides can independently force height; explain Auto rows without changing a live dashboard.

## Proposed sequential implementation order

One card and one test/build at a time; no parallel workers. This is a proposed order, not background work already started.

1. Select, Number, Sensor Meter, Temperature/Humidity; preserve Person, Room and Welcome compatibility.
2. Switch, Luma, Action Button, Fan, Climate, AlecoAir and Gate: safe control layouts.
3. Battery, Alerts, Scenes, Sensor Graph, Speedtest, Server, NAS, Printer and Washer: complete lists/telemetry.
4. Weather, Media, Frigate, Vacuum, UniFi Orbit and UniFi Command Center: lifecycle, map, media and registry constraints.
5. Final suite checks/docs and authorized GitHub/HACS publication, separate from any live HA installation.

## Acceptance gates — not yet executed for the proposal

- Exact inventory coverage: 30 primary types × two layouts; legacy alias compatible. Key omission preserves baseline Welcome/Person and all other existing configs.
- Each card: populated normal/compact, empty/missing/unknown/unavailable, long labels/full values and units, optional field combinations and maximum practical list counts. Open/close Details and return to compact geometry.
- True two-column phone grids at viewport360/390/430px with measured widths (including164/183/203px cards), plus243/440px examples and full-width phone/desktop. Reset tiny fixture dimensions before later wide tests.
- Measure matched heights and bounds: no-overflow alone is not compactness. Retain Person paired-cell y/equal-width geometry and complete decimal readings. Do not hide data to pass geometry.
- Exact mocked services/More Info/navigation, keyboard/mouse/mobile touch, pointercancel/scroll, read-only, pending/duplicates/errors/timeouts/late results. No command on layout/disclosure change, slider preview or box draft/blur.
- Stable focused controls/drafts/pending requests through HA updates. No extra history/weather/registry/media requests solely from changing density or expanding Details. Reuse existing subscriptions/data.
- Final artifact under24 theme modes ×30 cards ×two layouts =1440 target mounts, plus no-theme baseline, semantic/explicit palettes and reduced motion. This is a prospective test matrix, not a passed count. Populated screenshots and interactions remain separate gates.
- Inspect actual light/dark closed/open screenshots, then syntax/deterministic build/Node/regression/CI/public asset verification before release. Synthetic HA/icons do not certify native HA editor/Companion/iOS or hardware.

## Delivery state

This document began as a local design-only deliverable against1.11.0. The follow-up user request authorized a testable implementation; v1.12.0-beta.1 provides all30 selectable profiles with the precise scope in COMPACT.md. The stable release remains1.11.0. Live HA configuration/theme/dashboard and device operation are outside this change.
