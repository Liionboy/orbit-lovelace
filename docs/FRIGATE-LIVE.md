# Frigate camera playback — Orbit v1.14.0

## Why the camera clock was frozen

The imported Frigate1.0.0 implementation used a plain image with the camera's entity_picture URL. A stable URL/state did not fetch new frames. A page reload fetched another still image; that was not a live player. Orbit1.14.0 replaces this path with persistent camera playback while keeping the card's design, sensors and More Info.

## Choose playback

The native editor now exposes Camera view (Live / Snapshot auto refresh) and Live provider (Home Assistant / go2rtc MP4). The stream-specific names/URL below are optional YAML fields, not extra editor selectors.

### Home Assistant (default)

~~~yaml
type: custom:frigate-control-card
camera_entity: camera.your_camera
camera_view: live
live_provider: ha
~~~

This delegates to HA's native hui-image / ha-camera-stream, lazily loaded with loadCardHelpers via the built-in picture-entity module. HA chooses its supported transport (HLS/WebRTC/MJPEG) and handles authentication, codecs and errors. Playback is muted. The card does not guess an RTSP address, call camera.play_stream, install WebRTC dependencies, or embed raw camera credentials.

For intentionally lower-rate still images, use camera_view: snapshot. HA then owns automatic thumbnail refresh (currently ten-second intervals in the researched frontend), not a static image. This is labeled as snapshot, never continuous video.

### go2rtc MP4 through the Frigate integration

For a previous Frigate Card configuration with live_provider: go2rtc and go2rtc.modes: [mp4], use:

~~~yaml
type: custom:frigate-control-card
camera_entity: camera.your_camera
title: Camera
camera_view: live
live_provider: go2rtc
frigate:
  camera_name: EXACT_FRIGATE_CAMERA_NAME
go2rtc:
  modes:
    - mp4
~~~

camera_name is case-sensitive. The provider can use camera attributes camera_name/client_id when available. An explicit frigate.client_id overrides the entity attribute; the integration default is frigate. go2rtc.stream overrides camera_name when the go2rtc stream has a different name. No camera name or private server URL is built in.

The default endpoint is the integration's authenticated same-origin proxy /api/frigate/{client_id}/go2rtc/ws/api/ws?src={stream}. It is signed through HA auth/sign_path for five minutes on each connection; signatures remain in memory, are not logged or placed in YAML. A long-running socket does not need a page refresh when its initial signature expires. Fresh connections request a new signature. The Frigate integration must be installed and its go2rtc proxy/stream must work. This does not configure or enable go2rtc on the server.

An older integration can use the compatibility proxy with an explicit base URL:

~~~yaml
go2rtc:
  modes: [mp4]
  url: /api/frigate/frigate/mse
~~~

An explicit go2rtc.url points to a go2rtc API base, not the Frigate homepage or an RTSP URL. Absolute HTTP(S)/WS(S) URLs are optional; cross-origin URLs are not signed with HA credentials. Embedded URL credentials are rejected. HTTPS dashboards require a secure external URL; the default HA proxy avoids mixed content. frigate.url from the old card is not used as a browser streaming endpoint.

**MP4 here is go2rtc's ongoing MP4 keyframe-preview protocol over WebSocket**, matching that selected mode in the previous card. Each MP4 frame is decoded locally and displayed without reloading the page. It is not full-frame-rate video/audio. Only modes: [mp4] is supported by this provider; use the native HA provider for continuous supported HLS/WebRTC playback. The card does not pretend to implement the entire Advanced Camera Card configuration: menu/download/recording/zones/dependencies/webrtc_card options are not migrated as features.

## Lifecycle, errors and safety

- The actual preview frame/player stays mounted on motion/count/title/palette/unrelated hass updates. It is not rebuilt for each entity update.
- Compact hides the preview in Details; no stream runs while collapsed. Opening starts it, closing stops it. The same applies to off-screen, hidden-tab, detached and unavailable/off camera states.
- go2rtc errors close the socket, decoder and object URL and clear the old image. A15-second no-frame timeout is visible. Retry uses bounded2/5/15-second backoff, at most three automatic retries per session/configuration, then manual Retry. A delayed signed URL cannot reconnect a removed card. Only one latest undecoded frame is retained, with a10MiB per-frame cap.
- The MP4 video decoder is muted and inline, with its frame callback armed before source playback so the first frame is not missed. Blobs are revoked and decoder/media/observers/listeners/timers are released on stop/disconnect.
- Tap or keyboard activation of the preview still opens native More Info for the exact camera. Original motion/object/person/vehicle values and identity remain; no camera control/service is sent.

## Update and rollback

Update Orbit Lovelace to **v1.14.0 in HACS**, then fully reload browser/Companion. Same suite resource, no theme YAML update or HA/Frigate restart. Default existing cards now use HA live playback; select go2rtc and add the camera mapping above when matching an older go2rtc MP4 setup. No live dashboard/server/device configuration has been changed by release publication. Do not add a duplicate standalone Orbit Frigate resource.

Before reverting to1.13.1, remove new camera_view/live_provider/frigate/go2rtc keys. The previous card returns to its static snapshot behavior. The separate Advanced/Frigate Card remains independent and was not removed.

## Verification and provenance

Suite-owned runtime src/orbit-frigate-live.js1.0.0 and guarded scripts/frigate-live.mjs are separately hashed under suiteFeatures and bundle-lock. All27 imported component inputs, Controls1.0.0, Compact0.3.4, Welcome/Luma/Switch adaptations and Themes1.1.0 remain unchanged.

600 Node tests +2 smoke, syntax/deterministic build; final-bundle browser tests send actual encoded red and blue H.264 MP4 fixtures over a mocked WebSocket and assert decoded canvas pixels change without page reload. Exact MP4 codec negotiation and signed same-origin proxy, retained frame/player under motion/count updates, keyboard More Info, six layout/width combinations, Compact close/open, visibility, unavailable, remove/reconnect, error/Retry, no-frame timeout and stale-sign cancellation pass. Native HA live/snapshot property wiring and lazy loading use a stub; they are not a native HA transport certification.90 all-card identity cases and general30-card/alias/migration suite pass; Switch120+384theme and Luma192+192theme regressions pass. Other29 cards' computed Normal/Compact profiles match1.13.1. Synthetic Normal/Compact screenshots inspected. No live camera feed, server, dashboard or device was contacted/changed. Actual Frigate/HA/Companion/Safari/hardware validation remains for the installation.

The browser test accepts MP4_RED and MP4_BLUE fixture paths; test fixtures can be generated sequentially with ffmpeg color sources, one H.264/yuv420p frame in an MP4 container. They are synthetic data, not camera captures.

## Researched contracts

- HA frontend316043960c11296c6a53b2db7f2468202984d814: hui-image (live/auto cameraView, muted stream, snapshot interval), native picture-entity module lazy loader, ha-camera-stream.
- Frigate integrationddfe9cca72a1e9c1985cacab813214f2ec1d7b6d: camera_name/client_id attributes; Go2RTCAPIWebsocketProxyView and MSE compatibility route in views.py.
- go2rtc7c05066c90ab6ad1fccb506d5f0408aa31ebe60f: www/video-rtc.js onmp4 WebSocket protocol ({type:mp4,value:codecs} plus binary MP4 previews). This release implements the narrow protocol; it does not bundle the upstream player or Advanced Camera Card.
