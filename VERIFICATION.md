# Verification records

## v1.10.0 — Device-profile themes

- Orbit Themes1.1.0:12 names/24 light-dark modes, including original3 names and9 Desktop/Mobile/iOS Mobile profiles. Original family tokens and all27 component pins exactly match v1.9.1; bundle runtime changes are suite-version metadata only.
-507 Node tests (89 suite/theme+418 upstream),2 smoke, syntax/deterministic build and real YAML parser comparison passed sequentially. Quoted YAML/catalog agree, unique keys; mobile card-mod-theme names exact, scoped narrow/root CSS retains Back/editing, no device/network/runtime injection.
-672 sequential card/theme mounts plus24 populated desktop/phone mode previews passed: original no-theme computed profiles against saved1.8.0, dialogs/mode-control identity/no extra queries, explicit/state overrides and exact mocked Media/More Info retained. Standard28-card browser passed from final artifact.
- Real card-mod4.2.1 root patch/injection/removal tested with pinned runtime (SHA2565e7e71ad61796f59070f8c4621e69fa8e71a9864d0be0922bc4dbc72f990cd35; not shipped):24 theme modes at390/767/768/1280px; native Back/edit markers, safe-area47/34/11/13px, dynamic844→640px viewport, long-page bottom reachable, real bundled Room navigation and Back, Desktop rollback, unknown markup fail-open and absent-card-mod fallback passed. Zero services/queries; requests isolated.
- Final mobile/iOS/Desktop/Back root screenshots and representative populated theme images visually inspected. Fixtures use inspected HA root markup, not actual installed HA. New profiles need optional card-mod; docs preserve/merge config/resource URLs and include profile recovery before hiding navigation. Themes do not install routes/dashboard layouts; generic profiles need no personal dashboard URL.
- No live HA configuration/dashboard/resource/dependency/theme/device changed. Physical iOS/Safari/WebKit/Companion and native HA installation remain unverified.

## v1.9.1 — Person compact paired readings

- Only Person pin changed to verified public1.1.1/6f2b43b143bdeeac309b7354549690c8b49e5aca; imported source/package/README/tests exactly match tag.26 other pins and Orbit Themes1.0.0/YAML/catalog/bridge contracts unchanged.
- Syntax/deterministic build,470 Node tests (52 suite/theme+418 upstream),2 smoke, standard28-card browser and complete Person regression from final bundle passed sequentially. Person has74 Node tests; browser tests verify1–6 metrics across440/280/243/220/200/167px with real column/row geometry, odd/sparse counts, absent primary fields, full single-line decimal/unit values and visible wrapped long text. Exact native More Info events preserved, zero service calls/queries/external requests.
- Screenshot-style battery70%,distance0.0055km,altitude376.0m,activityStopped occupies two rows/126px total at243px; prior148px. Full compact six metrics148px at243px; ≤200px safe single-column fallback unchanged. Default labeled tiles/charging/low battery/keyboard/privacy retained. Standalone and final-bundle light/dark/narrow screenshots inspected.
- Synthetic HA components/icons/data only; native HA/Companion unverified. No live HA/dashboard/resource/device changed.

## v1.9.0 — Complete Orbit theme pack / opt-in bridge

- Adds Orbit Themes1.0.0: Graphite/Fjord/Dune, six native light/dark variants in one optional YAML. No pinned component source/version/commit/hash changed. Build-only CSS bridge contracts are explicit; no-theme fallbacks, later palette/state precedence retained. Metadata locks theme and bundle digests.
- Deterministic JS/YAML/catalog build, syntax (including preview),52 suite/theme +417 upstream Node tests (469 total) and2 smoke suites passed sequentially. Generated quoted YAML also parsed with a real installed YAML parser and compared to the catalog with unique keys. CI guards generated theme outputs.
- Core token-pair normal text contrast >=4.5:1, primary on card >=7:1, accent/action/semantic token pairs checked; not a blanket WCAG claim for every device/state/chart. Native themes carry legacy and modern semantic aliases verified against official frontend sources.
- Theme Chromium matrix168 sequential mounts (28 types ×6 variants), six populated desktop/390px-phone previews (Welcome,2 Rooms,Weather,Media,Temperature/Humidity), dialog token examples, live-mode control identity/no extra queries, explicit ocean palette, warm-state override, exact Weather More Info and themed Media pause payload/feedback passed. Six populated no-theme card computed profiles exactly match v1.8.0 colors/backgrounds/radius/shadow/geometry.
- Six desktop variants, representative three phone variants and both Graphite dialog previews visually inspected. Visual review caught full-inset pseudo-overlays incorrectly treated as narrow stripes; separated transparent overlay hook, added regression, reran matrix and inspected final captures. No CSS-only success claim without screenshot review.
- Full standard browser28/28 plus complete Media mobile touch and Weather bar/marker/clock regressions ran against final combined artifact and passed. All work sequential; no subagents/live commands.
- Themes are a separate manual companion download; HACS Dashboard update does not copy or activate them. THEMES.md preserves existing frontend/includes/themes, covers reload/first-enable validation/restart choice, profile selection and rollback. No new repository/dependency/card-mod/external font.
- Preview shell/icons/data are synthetic; native HA profile loading/stock dialogs/editor, physical Companion and all legacy/device-specific states remain unverified. No live HA config/dashboard/resource/theme/device changed.

## v1.8.0 — Media Player mobile command feedback

- Only Media Player updated to public v1.2.5 commit `c817349b79d2a0708ca49b789d2edb8404d943ea`, source SHA256 `e3726fb55a8f28f56c4e7aa1ea836d2a7d5ea7ba1310d051e1467f8f13b28600`. Selected docs/package/source/tests match the verified tag. Other pins, including Weather1.4.0, unchanged.
- Deterministic build/syntax, 32 suite +417 upstream Node tests (449 total),2 smoke suites and synthetic Chromium28/28 passed sequentially. Added28 Media unit tests to the suite’s upstream regression list.
- Full Media mobile Chromium regression ran against **dist/orbit-lovelace.js** through CARD_RESOURCE: immediate pending/sent/error feedback, duplicate pending suppression,15s unknown-result timeout/no auto retry, timestamp/unrelated and relevant HA updates during touch, captured power intent, cancellation, Enter/Space, volume/mute/source/browser payloads, reduced motion, removal/remount.
- Real touch event sequence pointerup → pointerout → compatibility click verified: noninteractive deferred render waits until click/cancel/gesture completion, not touch pointerout. No command on touchstart or scroll/cancel. Feedback is service acknowledgment, never an optimistic player-state change.
- Combined pending light/sent dark/error/narrow screenshots inspected; tested167/243/350px feedback layouts no overflow. Power target >=44px, five-state feedback readably wraps;350px pending193px/sent209px and167px sent297px fixture heights.
- Standalone CI main/tag and public asset/raw/package/tag/latest/digest/notes verified first. Existing untracked climate/temperature assets in the standalone checkout were preserved, unstaged. Browser fixture encoding and ha-card display:block stub were corrected before geometry checks; stub icons are not native HA validation.
- No live HA/dashboard/resources/TV operated. Physical phone, native Companion/editor/hardware remain unverified.

## v1.7.0 — Current-temperature dot on today’s daily bar

- Only Weather updated to public v1.4.0 commit `e9ef5834fec155b9fb2cc03fe2edf19f54501f84`, source SHA256 `2307d27fdee7b3faa440b7a2b85825a283b4220416767c98fb65da3e7611f2a0`. Selected imports match that verified tag; all other pins unchanged.
- Deterministic build/syntax, 32 suite +389 upstream Node tests (421 total),2 smoke suites and synthetic Chromium28/28 passed sequentially.
- Full Weather browser regression ran from **dist/orbit-lovelace.js** via CARD_RESOURCE. Marker geometry, attribute-only temperature changes, scale extension with unchanged forecast endpoints, today-only/full-year matching, hidden-clock midnight move/removal without replacing weather buttons or new requests passed. Prior layout/sensor/clock/offline/More Info checks retained.
- Standalone107 tests also cover finite zero/negative/decimal readings, missing/invalid/unknown units, equal/reversed/missing ranges, date/time-zone/DST, sensor independence and timer cleanup. Existing bar tests now freeze a non-today date explicitly, avoiding host-date-dependent scale expectations. New fixture corrections covered default-argument undefined, UTC-to-local forecast dates, and simulated timer consumption; production behavior was not changed to satisfy incorrect fixture assumptions.
- Combined light/dark/narrow screenshots inspected. Widths167–760px no overflow;5-day fixture451px at440px,584px at167px. Dot fits within existing rows and does not intercept actions.
- Standalone CI main/tag and public release/tag/raw/package/asset/latest/digest verified before importing. Native HA components/icons are stubs; native editor/Companion/hardware unverified. No live HA/dashboard/resource/device changed.

## v1.6.0 — Weather daily min–max bars

- Only Weather updated to verified public v1.3.0 commit `5773bf0cb5a34959e36633fe58cffeafdcb71d27`, source SHA256 `73a51f2c14983c5008c92577aeb74801978576b1c4cf1eb4bcb840cd958f9afb`. Selected imports match the tag; other pins including Room1.6.0 unchanged.
- Reproducible build/syntax, 32 suite +374 upstream Node tests (406 total),2 smoke suites and full synthetic Chromium28/28 passed sequentially.
- Complete Weather browser regression ran against **dist/orbit-lovelace.js** through CARD_RESOURCE: new layout/default switching, exact shared min–max geometry/equal track widths, values/units/locale, zero/negative/decimal/missing/reversed/equal ranges, count limits, minute/unrelated-state stability/no extra requests, independent More Info, offline/reconnect, existing sensor/clock/lifecycle.
- Bar fixture167–760px no overflow; five days with clock/date/current451px high at440px,584px at167px. Full min/max labels fit; narrow bars get a separate full-width line. Light/dark/narrow combined-artifact screenshots inspected.
- Standalone Weather92/92 Node tests and synthetic browser passed; CI main/tag, public release/tag/raw/asset/digest/latest verified before importing. Browser fixture initially let its queued default response override manual bar data; corrected fixture delivery order, not production logic.
- HA components/icons are stubs; native editor/Companion/live device checks remain unverified. No HA/dashboard/resource/device changed.

## v1.5.0 — Any Room shortcut entity

- Only Room updated to verified public v1.6.0 commit `74588ce9eebe3c4edafa5f464f00929ae1fef4a2`, source SHA256 `2395fdd1da15f6df28c2c9e4138bde6e905811881e846390eab255e32690f0a5`; all other pins unchanged. Selected imports match the public tag.
- Reproducible build/syntax, 32 suite +357 upstream Node tests (389 total),2 smoke suites and synthetic Chromium28/28 passed sequentially.
- Complete Room regression ran from the combined artifact via CARD_RESOURCE=dist/orbit-lovelace.js: arbitrary domain pointer/keyboard More Info, no new services or routing, binary state/device-class icon changes, unavailable neutral icon, HA-formatted label, read-only, and all prior climate/humidifier/fan/navigation/temperature/cover tests.
- Standalone45 tests include34 additional domains in all4 slots,29 native binary classes, malformed IDs, custom/prototype-like domains/classes, icon overrides and escaping. Full browser fixture uses stub HA components/icons; native HA editor/Companion/hardware remains unverified.
- Generic binary fixture118px high at243/440px and124px at164/200px, complete readings; light/dark combined screenshots inspected. Slots remain4, dedicated fields remain domain-filtered, existing service allowlist retained.
- No live HA/dashboard/resource/device changed.

## v1.4.0 — Room humidifier and fan support

- Only Room Orbit updated to verified public v1.5.0 commit `59e6b3db0516af7ddb96ed592f6abf2af7856e17`, source SHA256 `788216015a48a478b073461cf4fca9458e9378c1c002584cd177ad6c72cc19d4`. All other component pins unchanged.
- Reproducible build/syntax, 32 suite +351 upstream Node tests (383 total), 2 smoke suites passed sequentially. Full synthetic Chromium suite mounted all28 cards and retained Weather sensor/clock, Welcome compact, Person, alias/picker/duplicate/migration and existing mocked actions.
- Complete Room browser regression ran against **dist/orbit-lovelace.js**, not just isolated sources: climate activity, humidifier action-only updates/More Info, exact fan keyboard toggle, current capability/read-only fallbacks, unrelated-update DOM stability, no routing cross-trigger, cover controls, temperature effects/motion and existing compact layouts. Run with CARD_RESOURCE=dist/orbit-lovelace.js node cards/ha-room-orbit-card/test/browser.mjs and the usual PLAYWRIGHT_MODULE/CHROMIUM_EXECUTABLE environment.
- Humidifier+fan fixture126px high at243/440px,142px at164/200px; complete temperature/humidity/activity text. Narrow humidifier uses its own full-width bottom line. Light/dark screenshots from the combined artifact inspected.
- Standalone Room39/39 tests and synthetic browser passed; CI main/tag and public release/raw asset/tag/digest verified before importing selected files from its tag.
- HA components/icons are stubbed. Native HA editor/Companion/device validation remains unverified. No live HA/dashboard/resource/device was changed.

## v1.3.0 — Compact Welcome navigation

- Only Welcome Orbit updated to verified public v1.1.0 commit `a30e5cb31023f47df056738cd5dd9837ee9bac57`, source SHA256 `a6ffbfd4744f6a20a0deea0d4661db744ade078f865a05fb2f0d75907fff35a8`. Other pins, including Weather v1.2.0, unchanged.
- Reproducible build/syntax, 32 suite +343 upstream Node regressions (375 total), 2 smoke suites and synthetic Chromium28/28 passed sequentially. Legacy/duplicate/picker/migration, Weather clock/sensor, Person and fan/light/scene mock checks retained.
- Actual combined artifact exercised compact disclosure with Enter/Space and focus restoration, collapsed/expanded state, 5 links, persistence through HA/clock updates, exact weather More Info, settings and shortcut routes without cross-triggering/services.
- Combined compact167–500px bounds checked; collapsed162px / expanded254px at500px with5 links and no clock. Light/dark screenshots inspected. Standalone additionally checked classic200–760px, compact0–8 shortcuts, read-only scenes, motion and midnight behavior with66 tests.
- HA components/icons are stubbed. No native editor/Companion/live dashboard/resources/devices were modified or validated.

## v1.2.0 — Measured outdoor temperature

- Only Weather Orbit updated, from verified public v1.2.0 commit `cbaee1068c911d2ea8694dd7fa90fcda164ebefc`, JS SHA256 `7d9c657b66cd40a025522dfc465e03750df0a19d146c456caf8029cbb2b51942`; all other pins unchanged.
- Reproducible build/syntax, 32 suite +330 upstream Node regressions (362 total), 2 smoke suites and combined synthetic Chromium passed sequentially. All 28 card types mounted; duplicate/picker/alias/migration and prior clock/Person/fan/light/scene checks retained.
- From the final bundle, measured `6,43 °C` and provider `14°C` rendered independently; selected sensor More Info, state-only update to `-2,75 °C`, no new queries, weather/sensor independent availability and no service calls checked. Sensor readings fit 167/243/440px with a single-line height below 30px. Romanian light/dark243px screenshots inspected.
- Standalone Weather has 75 Node regressions and Chromium measured-panel checks167–440px plus existing clock/forecast167–760px. Own units/precision, missing/invalid states/units, zero/negative values, sensor-only, hostile strings and keyboard inspected/tested.
- Synthetic HA components/icons only; no live sensor, native editor, Companion or dashboard/resource modifications/validation.

## v1.1.0 — Weather clock and date

- Only Weather Orbit was updated, from its verified public v1.1.0 commit `25585ee730fb5897896f66bcf664281c39bf885e`; source SHA256 `34db08cd02e02fd4af300d69746ee88fa70668344bea264334a4484675b130f6`. Other component pins remain unchanged.
- Reproducible build/syntax, 32 suite integrity tests + 316 upstream Node regressions (348 total) and 2 smoke suites passed sequentially.
- Combined Chromium mounted all 28 card types, checked unique picker entries, legacy alias, repeat load, standalone-first migration and existing Person/fan/light/scene mocks.
- Weather from the actual combined artifact showed Romanian clock/date, advanced from 23:59 to 00:00 and the next calendar date without a new HA object, additional queries or replacing its weather button. Timer cleanup and exact weather More Info were checked.
- Clock/calendar fit widths 167/200/243/440px; Romanian light/dark screenshots at 243px inspected. Standalone Weather additionally passed 61 Node regressions and full synthetic Chromium 167–760px, locale/12h/24h, midnight/year rollover, subscriptions, unavailable/error/retry, keyboard and reduced motion checks.
- Native HA components/icons remain stubbed; no live HA, Companion, dashboard/resource or device validation/modification.

## v1.0.0

- Source inventory:27 canonical public release snapshots,28 distinct card types, one retained legacy alias.
- Node:32 suite integrity/compatibility tests and308 upstream regression tests passed (340 total), plus2 upstream smoke suites. All child tests run sequentially.
- Combined Chromium:28 card types registered and mounted one at a time from the single compiled resource; no registration errors or duplicate picker entries.
- Confirmed no service/API calls during bundle registration. Default/stub mounts sent no device service calls.
- Mock interaction checks: exact Person sensor More Info, fan off, legacy Luma off (including its original transition option), and two-step scene confirmation. No real services or devices were contacted.
- Repeated bundle evaluation and a standalone Luma resource loaded first were tested: existing types are never overwritten and picker metadata remains unique.
- Person compact four-reading layout checked at243/200/167px; light/dark screenshots inspected. Representative screenshots from Temperature & Humidity, UniFi Command Center, Vacuum Commander and Climate were inspected with default/mock data.
- No claim of a fresh full functional/responsive audit of every older card. Legacy card-specific language, layout limitations and device restrictions remain unchanged. For example, UniFi Command Center remains a dashboard-style view rather than being retuned into a tiny room tile.
- HA components/icons are stubbed except the bundled Lit implementation. Real Home Assistant editors, icon glyphs, Companion apps and hardware are not certified by these checks.
- No live HA instance, resources, dashboard, backend integration or devices were changed. HACS installation/migration is user-managed.

The GitHub Check workflow separately reruns reproducible build/syntax and Node tests. It does not install/run Chromium. Public tag/asset/digest and CI status are verified at release delivery; see the GitHub Actions/release pages for their terminal results.
