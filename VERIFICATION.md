# Verification records

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
