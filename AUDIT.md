# Inventory, provenance and packaging audit

## v1.12.1 — Luma Compact identity suppression

Suite-owned presentation profile0.3.3 adds a Compact-scoped .header display:none override for luma-control-card and removes .header from its Details target list. Its source header contains identity/state only, not native commands; hidden text/icon/state remain the original summary source. No imported file, service code, other profile or Normal styling changes. Runtime changes only its feature banner; feature/profile digests and bundle lock are regenerated.

## v1.12.0 — unchanged stable promotion

Only suite version metadata and current release/installation documentation change from beta.5. All27 imported pins/nativeControls1.0.0/suiteFeatures0.3.2/themeYAML1.1.0 remain byte-identical. Stable resource equivalence is established after normalizing the two suite version strings; runtime safety/commands/navigation behavior is unchanged.

## v1.12.0-beta.5 — scoped Normal typography

The existing suite-owned hashed Welcome adaptation adds an orbit-welcome-normal shell class only in the Normal toolbar mode and appends scoped date/clock CSS after inherited narrow rules. Compact has no such class and receives no new styling. No formatter/time/subscription/navigation/service implementation changes; immutable input hashes retained.

## v1.12.0-beta.4 — native Welcome toolbar in Normal

Suite-owned scripts/welcome-normal-toolbar.mjs applies five exact guarded build replacements to the immutable Welcome input, permitting its original toolbar, collapse handler and configured Settings handler in Normal. src/orbit-compact.js enables this mode for explicit normal/classic or existing settings_path, rolls the flag back after validation failure, and leaves Compact and omitted-without-settings behavior intact. Runtime/profiles/adaptation hashes feed the combined feature digest; imported provenance is unchanged.

## v1.12.0-beta.3 — tile presentation adapter

Suite-owned Compact0.3.0 derives a plain-text summary from explicit per-type source DOM contracts, preserving all original device-control nodes/listeners/validation. It adds only presentation DOM and a guarded disclosure; configured Room navigation is passed to the original route handler. Data/commands remain source-owned. Every primary type has a traced tile profile; immutable27 imports/native Controls1.0.0/theme definitions remain unchanged. Attribute-aware observers ignore their own tile mutations and are cleaned up/reconnected. New hashes identify runtime/profiles in suiteFeatures and the final resource in bundle-lock.

## v1.12.0-beta.2 — suite-owned density profiles

Compact0.2.0 adds explicit per-card text/glyph/decoration dimensions after existing narrow rules, all scoped to layout compact. Original27 imported source hashes, native Controls1.0.0 and Themes1.1.0 stay unchanged. No service/config/state logic is changed. The adapter/profiles have updated suiteFeatures hashes; the suite release and public artifact identify the effective presentation. Normal is checked against both beta.1 samples and the full stable1.11.0 baseline.

## v1.12.0-beta.1 — suite-owned layout adaptation

All27 immutable imported assets/pins and native Controls1.0.0 remain exactly as in1.11.0. The suite now decorates each public constructor before registration, using suite-owned src/orbit-compact.js and src/compact-profiles.json. suiteFeatures declares their origin/version/separate source hashes; bundle-lock records the combined compact digest. This is explicit suite adaptation, not an unchanged-upstream compact feature claim. Same28 packages/30 primary types and legacy alias. Default omitted-layout browser snapshots match1.11.0 for all30 cards; original component tests remain separate from the feature tests.

## v1.11.0 extension

Select and Number are native suite-owned Controls1.0.0, not new upstream repositories. `nativeComponents` declares origin/source/version/SHA256; source provenance is the suite release commit/tag and root MIT license. Existing `components` retains all27 immutable upstream entries unchanged from1.10.1. Build isolates both origin classes, validates every source hash and reports28 packages/30 card types. First-party source already uses Orbit theme variables, so only imported components pass through the unchanged theme bridge. Native74-test suite and final-bundle interaction regression run separately from the unchanged sequential upstream test inventory. The original inventory below is a dated snapshot, not a claim that native controls have a separate published upstream.

Reviewed local checkouts and public GitHub stable releases on 2026-10-22. Scope includes all 13 explicitly named Orbit repositories and 14 matching companion packages from the same collection, including Vacuum Commander. UniFi contributes two cards, for 28 card types from27 packages.

All included local HEAD commits matched the corresponding public release commits at import time. JavaScript artifacts are pinned by commit/release and SHA256 in components.json. Vacuum Commander's distribution is a release-built artifact (not tracked in its source tree); its public release asset digest was verified before import. Original repository licenses/configuration references and available upstream regression sources are retained under cards/.

## Preserved boundaries

- Local uncommitted Pi-hole changes were **not** imported. The public v1.2.0 snapshot is included. Existing working files were not changed.
- Untracked Climate/Temperature copies in the Media Player checkout were **not** imported. Each card comes from its own canonical repository.
- NAS and Server remain distinct cards. NAS is not generalized beyond its original UGREEN-oriented telemetry.
- The separate ha-media-hub-card checkout pointing to the Jellyfin/Sonarr/Radarr project, older duplicate checkouts, backend integrations, UI Lovelace Minimalist fork and unrelated older energy/retail/MotoGP/utility/AI/qBittorrent projects are not part of this Orbit/companion collection and were not imported. This is not a bundle of every Home Assistant repository owned by the author.
- Pi-hole v1.2.0 still has package version1.1.0, and Switch v1.2.0 still has package version1.0.1. Both values are explicitly recorded; the public release tag controls the included component version.

## Build transformations

1. Each component is isolated in its own function scope; identical constants/classes in formerly separate resources cannot collide.
2. Standalone-only UniFi and Vacuum ES module export statements are removed by exact checked replacements. Their registered Lovelace elements are preserved. No other source rewriting/minification occurs.
3. Temperature & Humidity v1.2.6 tries to register the same constructor for both temperature-humidity-card and living-temperature-card, which browsers prohibit. The legacy alias is registered with a subclass in the bundle, and the stale1.2.5 banner is corrected to1.2.6. Original upstream source remains unchanged for traceability.
4. The wrapper guards already registered card types and isolates per-component failures with explicit errors in window.orbitLovelace.errors. Tests require no errors in a clean frontend.
5. Missing picker metadata (notably Vacuum Commander) is added without changing existing card registrations. UniFi metadata incorrectly prefixed its picker types with custom:; the wrapper normalizes those two metadata entries without changing either actual Lovelace type. Repeated suite loading cannot add duplicate picker entries.
6. The single JS includes first-party MIT and compiled Lit BSD notices. No dynamic imports, backend files, external script requests or module-loader network requests are introduced.

## Verification boundary

The suite provides integrity/registration/legacy compatibility checks, sequential upstream tests and a combined synthetic Chromium test. These are not a new full behavioral audit of every older card, nor native HA/editor/Companion or real-device certification. Original control safeguards and unresolved upstream functional limitations remain unchanged (including pending Media/Bravia application/channel work). No real HA instance, dashboard or devices were modified to build this suite.

## Maintaining the suite

Update one pinned component at a time from a verified public release. Retain its license, update source SHA256/version/commit metadata and any matching src/test snapshot, then rebuild and run all checks sequentially. Review exact build transformations if upstream source changes. Check the full bundle in a clean browser and in the migration scenarios, then tag/release the tested artifact. Individual upstream repositories can remain available; the suite must receive a new release to deliver a newer component version.
