# Verification records

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
