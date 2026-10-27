// Orbit Frigate playback v1.0.0 — MIT. No camera URLs or credentials are embedded.
function orbitFrigateLive(C) {
 const p=C.prototype,render=p._render,setConfig=p.setConfig,hass=Object.getOwnPropertyDescriptor(p,'hass');
 const style='.orbit-camera-media{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none}.orbit-live-status{position:absolute;left:5px;bottom:4px;right:5px;font-size:10px;line-height:15px;color:#fff;background:#000a;padding:2px 5px;border-radius:5px;pointer-events:none}.orbit-live-retry{position:absolute;right:6px;top:6px;z-index:2;min-height:32px;border-radius:6px;border:1px solid var(--divider-color);background:var(--card-background-color,#fff);color:var(--primary-text-color);cursor:pointer}';
 let helpersPromise;
 async function nativeImage(){
  if(window.customElements.get('hui-image'))return;
  if(!helpersPromise)helpersPromise=(async()=>{if(!window.loadCardHelpers)throw Error('Native camera helper unavailable');const helpers=await window.loadCardHelpers();helpers.createCardElement({type:'picture-entity',entity:'camera.orbit_loader',show_name:false,show_state:false});let timer;try{await Promise.race([window.customElements.whenDefined('hui-image'),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Native camera loader timed out')),10000);})]);}finally{clearTimeout(timer);}})().catch(e=>{helpersPromise=undefined;throw e;});
  await helpersPromise;
 }
 p.setConfig=function(config){
  if(config?.camera_view!=null&&!['live','snapshot'].includes(config.camera_view))throw Error('camera_view must be live or snapshot.');
  if(config?.live_provider!=null&&!['ha','go2rtc'].includes(config.live_provider))throw Error('live_provider must be ha or go2rtc.');
  for(const key of ['frigate','go2rtc'])if(config?.[key]!=null&&(typeof config[key]!=='object'||Array.isArray(config[key])))throw Error(key+' must be an object.');
  if(config?.go2rtc?.modes!=null&&(!Array.isArray(config.go2rtc.modes)||config.go2rtc.modes.length!==1||config.go2rtc.modes[0]!=='mp4'))throw Error('This go2rtc provider supports modes: [mp4]. Use HA for native HLS/WebRTC.');
  for(const v of [config?.frigate?.client_id,config?.frigate?.camera_name,config?.go2rtc?.stream,config?.go2rtc?.url])if(v!=null&&typeof v!=='string')throw Error('Camera stream options must be text.');
  const key=JSON.stringify([config?.camera_entity,config?.camera_view,config?.live_provider,config?.frigate,config?.go2rtc]);
  if(this._orbitMediaKey!==key){this._orbitStop?.();this._orbitRetries=0;this._orbitMediaKey=key;}
  setConfig.call(this,config);
 };
 const form=C.getConfigForm;C.getConfigForm=function(){const f=form.call(this);return{...f,schema:[...f.schema,{name:'camera_view',selector:{select:{options:[{value:'live',label:'Live'},{value:'snapshot',label:'Snapshot (auto refresh)'}],mode:'dropdown'}}},{name:'live_provider',selector:{select:{options:[{value:'ha',label:'Home Assistant'},{value:'go2rtc',label:'go2rtc MP4 (Frigate integration)'}],mode:'dropdown'}}}]};};
 // Retain the actual preview frame across unrelated motion/count/title updates.
 p._orbitCommit=function(markup){
  const oldFrame=this.shadowRoot.querySelector('.camera-frame');
  if(!oldFrame){this.shadowRoot.innerHTML=markup;return;}
  const template=document.createElement('template');template.innerHTML=markup;
  for(const selector of ['.header','.sensor-grid','.footer']){const old=this.shadowRoot.querySelector(selector),next=template.content.querySelector(selector);if(old&&next)old.replaceWith(next);else if(old)old.remove();else if(next)this.shadowRoot.querySelector('.shell').append(next);}
  const card=this.shadowRoot.querySelector('ha-card');card.dataset.palette=this._config.palette;
  oldFrame.querySelector('.camera-open').setAttribute('aria-label',template.content.querySelector('.camera-open').getAttribute('aria-label'));
 };
 p._render=function(){render.call(this);this._orbitObserve();this._orbitSync();};
 Object.defineProperty(p,'hass',{get:hass.get,set(value){hass.set.call(this,value);if(this._orbitMedia)this._orbitMedia.hass=value;this._orbitSync();},configurable:true});
 p.connectedCallback=function(){this._orbitVisibility=()=>this._orbitSync();document.addEventListener('visibilitychange',this._orbitVisibility);this._orbitObserve();this._orbitSync();};
 p.disconnectedCallback=function(){document.removeEventListener('visibilitychange',this._orbitVisibility);this._orbitObserverLive?.disconnect();this._orbitObserverLive=null;this._orbitFrame=null;this._orbitStop();};
 p._orbitObserve=function(){const frame=this.shadowRoot?.querySelector('.camera-frame');if(!frame){this._orbitObserverLive?.disconnect();this._orbitObserverLive=null;this._orbitFrame=null;return;}if(frame===this._orbitFrame||!this.isConnected)return;this._orbitObserverLive?.disconnect();this._orbitFrame=frame;this._orbitIntersecting=false;
  if(typeof IntersectionObserver!=='undefined'){this._orbitObserverLive=new IntersectionObserver(entries=>{this._orbitIntersecting=entries.at(-1).isIntersecting;this._orbitSync();});this._orbitObserverLive.observe(frame);}else this._orbitIntersecting=true;
  if(!frame.querySelector('style[data-orbit-live]')){const s=document.createElement('style');s.dataset.orbitLive='';s.textContent=style;frame.append(s);}
 };
 p._orbitStatus=function(text,error=false){const frame=this.shadowRoot.querySelector('.camera-frame');if(!frame)return;let label=frame.querySelector('.orbit-live-status');if(!label){label=document.createElement('span');label.className='orbit-live-status';label.setAttribute('role','status');frame.append(label);}label.textContent=text;
  frame.querySelector('.orbit-live-retry')?.remove();if(error){const button=document.createElement('button');button.className='orbit-live-retry';button.type='button';button.textContent='Retry';button.addEventListener('click',e=>{e.stopPropagation();this._orbitStop();this._orbitRetries=0;this._orbitSync();});frame.append(button);}
 };
 p._orbitStop=function(){this._orbitGeneration=(this._orbitGeneration||0)+1;clearTimeout(this._orbitWatchdog);clearTimeout(this._orbitRetryTimer);this._orbitRetryTimer=null;const ws=this._orbitSocket;this._orbitSocket=null;if(ws){ws.onclose=ws.onerror=ws.onmessage=ws.onopen=null;ws.close();}
  this._orbitMedia?.remove();this._orbitMedia=null;this._orbitPending=false;if(this._orbitDecode){if(this._orbitFrameCallback!=null)this._orbitDecode.cancelVideoFrameCallback?.(this._orbitFrameCallback);this._orbitFrameCallback=null;this._orbitDecode.onloadeddata=this._orbitDecode.onerror=null;this._orbitDecode.pause();this._orbitDecode.removeAttribute('src');this._orbitDecode.load();this._orbitDecode.remove();this._orbitDecode=null;}if(this._orbitBlob){URL.revokeObjectURL(this._orbitBlob);this._orbitBlob=null;}this._orbitLatest=null;
 };
 p._orbitFail=function(message){this._orbitStop();this._orbitStatus(message,true);if((this._orbitRetries||0)<3){const delay=[2000,5000,15000][this._orbitRetries||0];this._orbitRetries=(this._orbitRetries||0)+1;this._orbitRetryTimer=setTimeout(()=>{this._orbitRetryTimer=null;this._orbitSync();},delay);}else this._orbitFailed=true;};
 p._orbitSync=function(){
  const camera=this._state(this._config.camera_entity),frame=this.shadowRoot?.querySelector('.camera-frame');
  const active=this.isConnected&&frame&&this._orbitIntersecting&&!document.hidden&&frame.getClientRects().length&&camera&&!['off','unknown','unavailable'].includes(String(camera.state).toLowerCase())&&this._hass?.connected!==false&&this._hass?.connection?.connected!==false;
  if(!active){this._orbitStop();if(frame){const button=frame.querySelector('.camera-open');if(button&&!button.querySelector('.empty-preview')){button.replaceChildren();const hint=document.createElement('span');hint.className='empty-preview';hint.textContent='Camera preview paused';button.append(hint);}this._orbitStatus(camera&&['off','unknown','unavailable'].includes(camera.state)?'Camera unavailable':'Preview paused');}return;}
  if(this._orbitMedia||this._orbitPending||this._orbitRetryTimer||this._orbitFailed)return;
  this._orbitPending=true;const gen=this._orbitGeneration||0;const current=()=>gen===(this._orbitGeneration||0)&&this.isConnected;
  const start=async()=>{
   if(this._config.live_provider!=='go2rtc'||this._config.camera_view==='snapshot'){
    this._orbitStatus('Loading Home Assistant camera player…');await nativeImage();if(!current())return;
    const image=document.createElement('hui-image');image.className='orbit-camera-media';image.cameraImage=this._config.camera_entity;image.cameraView=this._config.camera_view==='snapshot'?'auto':'live';image.aspectRatio='16:9';image.fitMode='contain';image.hass=this._hass;image.addEventListener('load',()=>this._orbitStatus(image.cameraView==='live'?'Home Assistant stream':'Snapshot · auto refresh'));this._orbitMedia=image;frame.querySelector('.camera-open').replaceChildren(image);this._orbitStatus(image.cameraView==='live'?'Home Assistant stream player':'Snapshot · auto refresh');this._orbitPending=false;return;
   }
   const cfg=this._config,client=cfg.frigate?.client_id||camera.attributes?.client_id||'frigate',stream=cfg.go2rtc?.stream||cfg.frigate?.camera_name||camera.attributes?.camera_name;
   if(!stream)throw Error('Select frigate.camera_name or go2rtc.stream for MP4.');
   const base=cfg.go2rtc?.url||'/api/frigate/'+encodeURIComponent(client)+'/go2rtc/ws';let endpoint=new URL(base.replace(/\/$/,'')+'/api/ws',location.origin);endpoint.searchParams.set('src',stream);
   if(endpoint.username||endpoint.password||!['http:','https:','ws:','wss:'].includes(endpoint.protocol))throw Error('Use an HTTP(S)/WS(S) go2rtc URL without embedded credentials.');
   const sameOrigin=endpoint.host===location.host;if(location.protocol==='https:'&&['http:','ws:'].includes(endpoint.protocol))throw Error('HTTPS dashboard needs a secure go2rtc URL or HA proxy.');
   if(sameOrigin){const signed=await this._hass.callWS({type:'auth/sign_path',path:endpoint.pathname+endpoint.search,expires:300});if(!current())return;endpoint=new URL(signed.path,location.origin);if(endpoint.origin!==location.origin)throw Error('Unexpected camera proxy origin.');}
   endpoint.protocol=['https:','wss:'].includes(endpoint.protocol)?'wss:':'ws:';if(!current())return;
   const canvas=document.createElement('canvas');canvas.className='orbit-camera-media';canvas.setAttribute('aria-label','go2rtc MP4 camera preview');this._orbitMedia=canvas;frame.querySelector('.camera-open').replaceChildren(canvas);
   const video=document.createElement('video');video.muted=true;video.autoplay=true;video.playsInline=true;video.setAttribute('aria-hidden','true');video.style.cssText='position:absolute;width:1px;height:1px;opacity:0;pointer-events:none';frame.append(video);this._orbitDecode=video;
   const decode=data=>{if(!current())return;if(video.dataset.busy){this._orbitLatest=data;return;}video.dataset.busy='true';this._orbitBlob=URL.createObjectURL(new Blob([data],{type:'video/mp4'}));if(video.requestVideoFrameCallback)this._orbitFrameCallback=video.requestVideoFrameCallback(paint);video.src=this._orbitBlob;video.play().catch(()=>{});};
   const paint=()=>{this._orbitFrameCallback=null;if(!current())return;canvas.width=video.videoWidth;canvas.height=video.videoHeight;canvas.getContext('2d').drawImage(video,0,0);URL.revokeObjectURL(this._orbitBlob);this._orbitBlob=null;delete video.dataset.busy;this._orbitStatus('go2rtc · MP4 updating');clearTimeout(this._orbitWatchdog);this._orbitWatchdog=setTimeout(()=>{if(current())this._orbitFail('No camera frames received — retrying');},15000);const next=this._orbitLatest;this._orbitLatest=null;if(next)decode(next);};video.onloadeddata=()=>{if(!video.requestVideoFrameCallback)paint();};video.onerror=()=>{if(current())this._orbitFail('MP4 decode failed — check camera codec');};
   const ws=new WebSocket(endpoint);ws.binaryType='arraybuffer';this._orbitSocket=ws;this._orbitStatus('Connecting to go2rtc…');
   this._orbitWatchdog=setTimeout(()=>{if(current())this._orbitFail('Camera connection timed out');},15000);
   ws.onopen=()=>{if(!current())return;const codecs=['avc1.640029','avc1.64002A','avc1.640033','hvc1.1.6.L153.B0'].filter(codec=>video.canPlayType('video/mp4; codecs="'+codec+'"')).join(',');if(!codecs){this._orbitFail('No supported MP4 camera codec');return;}ws.send(JSON.stringify({type:'mp4',value:codecs}));};
   ws.onmessage=event=>{if(!current())return;if(typeof event.data==='string'){try{if(JSON.parse(event.data).type==='error')this._orbitFail('go2rtc rejected this stream');}catch{}return;}if(event.data.byteLength>10*1024*1024){this._orbitFail('Camera frame exceeds size limit');return;}decode(event.data);};ws.onerror=ws.onclose=()=>{if(current())this._orbitFail('Camera stream disconnected');};this._orbitPending=false;
  };
  start().catch(()=>{if(current()){this._orbitPending=false;this._orbitFailed=true;this._orbitStatus('Camera player unavailable — check stream settings; Retry or open More Info',true);}});
 };
 const stop=p._orbitStop;p._orbitStop=function(){stop.call(this);this._orbitFailed=false;};
}
