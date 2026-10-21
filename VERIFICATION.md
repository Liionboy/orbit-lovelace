# Verification record — v1.0.0

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
