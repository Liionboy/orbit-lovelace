// Real card-mod runtime, synthetic hui-root markup from the inspected HA frontend.
import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
assert.ok(process.env.CARD_MOD_RESOURCE,'Set CARD_MOD_RESOURCE to card-mod v4.2.1 card-mod.js (test only, not bundled).');
const cm=await readFile(process.env.CARD_MOD_RESOURCE,'utf8');
assert.equal(createHash('sha256').update(cm).digest('hex'),'5e7e71ad61796f59070f8c4621e69fa8e71a9864d0be0922bc4dbc72f990cd35');
const catalog=JSON.parse(await readFile(new URL('../themes/catalog.json',import.meta.url),'utf8')),bundle=await readFile(new URL('../dist/orbit-lovelace.js',import.meta.url),'utf8');
const out=process.env.SCREENSHOT_DIR;if(out)await mkdir(out,{recursive:true});
const html=`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>body{margin:0;font:14px system-ui;background:var(--primary-background-color);color:var(--primary-text-color)}#controls{padding:10px}button,a{font:inherit;padding:12px}home-assistant{display:block}</style><div id="controls">Synthetic HA root · real card-mod · mocked entities</div><home-assistant><hui-root></hui-root></home-assistant><script type="module">
window.calls=[];window.queries=[];
customElements.define('home-assistant',class extends HTMLElement{});
customElements.define('ha-icon',class extends HTMLElement{connectedCallback(){this.textContent='◈';this.style.cssText='display:inline-block;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)';}});
customElements.define('hui-root',class extends HTMLElement{
 constructor(){super();this.attachShadow({mode:'open'});this.updateComplete=Promise.resolve();}
 firstUpdated(){}
});
const catalog=await(await fetch('/catalog.json')).json();
window.root=document.querySelector('hui-root');
document.querySelector('home-assistant').hass={themes:{themes:catalog.themes,theme:'Orbit Graphite Mobile'},connection:{subscribeEvents:()=>Promise.resolve(()=>{})},callService:(...a)=>calls.push(a),callWS:(...a)=>{queries.push(a);return Promise.resolve([]);}};
root.shadowRoot.innerHTML='<style>:host{display:block}*{box-sizing:border-box}.header{display:block;background:var(--app-header-background-color);padding:12px;height:56px;border-bottom:1px solid var(--divider-color)}#view{display:block;padding:56px 0 0;min-height:100vh}.room-copy{padding:20px}a{color:var(--primary-color)}ha-room-orbit-card{display:block;margin:8px 0;max-width:440px}</style><div class="narrow"><div class="header"><span class="tabs">Home · Rooms · Energy</span><button id="native-back" hidden>Back</button><button id="edit">Edit</button></div><hui-view-container id="view"><ha-room-orbit-card></ha-room-orbit-card><div class="room-copy"><h2>Living room</h2><p>Full content remains scrollable.</p><a href="/profile" id="recovery">Appearance / recovery</a><div style="height:1000px"></div><button id="bottom">Bottom content</button></div></hui-view-container></div>';
window.apply=(name,mode)=>{document.documentElement.removeAttribute('style');const t=catalog.themes[name];for(const[k,v]of Object.entries({...t,...t.modes[mode]}))if(k!=='modes')document.documentElement.style.setProperty('--'+k,v);document.documentElement.style.colorScheme=mode;document.dispatchEvent(new Event('cm_update'));};
window.setView=(edit=false,subview=false)=>{root.shadowRoot.querySelector('.narrow').classList.toggle('edit-mode',edit);root.shadowRoot.querySelector('ha-icon-button-arrow-prev')?.remove();if(subview){const arrow=document.createElement('ha-icon-button-arrow-prev');root.shadowRoot.querySelector('.header').prepend(arrow);}root.shadowRoot.querySelector('.tabs').hidden=subview;root.shadowRoot.querySelector('#native-back').hidden=!subview;};
root.shadowRoot.querySelector('#native-back').onclick=()=>{history.pushState(null,'','/dashboard-example/home');setView();};
window.addEventListener('location-changed',()=>{if(location.pathname.endsWith('/living-room'))setView(false,true);});
apply('Orbit Graphite Mobile','light');
await import('/bundle.js');const room=root.shadowRoot.querySelector('ha-room-orbit-card');room.setConfig({title:'Living room',navigation_path:'/dashboard-example/living-room'});room.hass={states:{},services:{},callService:(...a)=>calls.push(a),callWS:(...a)=>queries.push(a)};
if(!location.search.includes('missing')){await import('/card-mod.js');await customElements.whenDefined('card-mod');root.firstUpdated();}
window.ready=true;
</script>`;
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
const errors=[],results=[];
try{const page=await browser.newPage({viewport:{width:390,height:844}});page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>{const u=new URL(r.request().url());assert.equal(u.origin,'http://profiles.test');const body=u.pathname==='/card-mod.js'?cm:u.pathname==='/catalog.json'?JSON.stringify(catalog):u.pathname==='/bundle.js'?bundle:html;return r.fulfill({contentType:u.pathname.endsWith('.js')?'application/javascript':u.pathname.endsWith('.json')?'application/json':'text/html; charset=utf-8',body});});
 await page.goto('http://profiles.test/dashboard-example/home');await page.waitForFunction(()=>window.ready);
 const header=page.locator('hui-root').locator('.header');await header.waitFor({state:'hidden'});
 assert.equal(await page.locator('hui-root').locator('card-mod').count(),1,'real card-mod root hook must be applied');
 for(const[name,t]of Object.entries(catalog.themes))for(const mode of ['light','dark']){
  await page.evaluate(({name,mode})=>{setView();apply(name,mode);},{name,mode});
  const mobile=name.includes('Mobile');
  for(const width of [390,767,768,1280]){await page.setViewportSize({width,height:844});if(mobile&&width<768)await header.waitFor({state:'hidden'});else await header.waitFor({state:'visible'});}
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>setView(true));await header.waitFor({state:'visible'});assert.ok(await page.locator('hui-root').locator('#edit').isVisible());
  await page.evaluate(()=>setView(false,true));await header.waitFor({state:'visible'});assert.ok(await page.locator('hui-root').locator('#native-back').isVisible());
  if(out&&name==='Orbit Graphite Mobile'&&mode==='dark')await page.screenshot({path:out+'/orbit-graphite-mobile-back.png'});
  await page.locator('hui-root').locator('#native-back').click();assert.ok(page.url().endsWith('/home'));
  if(mobile)await header.waitFor({state:'hidden'});
  await page.evaluate(()=>{document.documentElement.style.setProperty('--safe-area-inset-top','47px');document.documentElement.style.setProperty('--safe-area-inset-bottom','34px');document.documentElement.style.setProperty('--safe-area-inset-left','11px');document.documentElement.style.setProperty('--safe-area-inset-right','13px');});
  const m=await page.locator('hui-root').locator('#view').evaluate(el=>{const c=getComputedStyle(el);return{top:c.paddingTop,bottom:c.paddingBottom,left:c.paddingLeft,right:c.paddingRight,height:c.height,minHeight:c.minHeight,scroll:el.scrollHeight,client:el.clientHeight};});
  if(mobile){assert.equal(m.top,'47px');assert.equal(m.bottom,'34px');assert.equal(m.left,'11px');assert.equal(m.right,'13px');}
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await page.locator('hui-root').locator('#bottom').scrollIntoViewIfNeeded();assert.ok(await page.locator('hui-root').locator('#bottom').isVisible());await page.evaluate(()=>window.scrollTo(0,0));
  if(mobile){await page.setViewportSize({width:390,height:640});const dynamic=await page.locator('hui-root').locator('#view').evaluate(el=>getComputedStyle(el).minHeight);assert.equal(dynamic,'640px');await page.setViewportSize({width:390,height:844});}
  if(out&&mode==='dark'&&name.startsWith('Orbit Graphite'))await page.screenshot({path:out+'/'+name.toLowerCase().replaceAll(' ','-')+'.png'});
  results.push({name,mode,...m});
 }
 // Theme switch removes real card-mod root CSS. Header stays usable without card-mod.
 await page.evaluate(()=>apply('Orbit Graphite Mobile','dark'));await header.waitFor({state:'hidden'});
 const room=page.locator('hui-root').locator('ha-room-orbit-card');await room.locator('a').first().click();assert.ok(page.url().endsWith('/living-room'));await header.waitFor({state:'visible'});await page.locator('hui-root').locator('#native-back').click();await header.waitFor({state:'hidden'});
 await page.evaluate(()=>apply('Orbit Graphite Desktop','light'));await header.waitFor({state:'visible'});
 await page.evaluate(()=>{apply('Orbit Graphite Mobile','light');const old=root.shadowRoot.querySelector('.narrow'),unknown=document.createElement('section');unknown.className='unknown-root';unknown.append(...old.childNodes);old.replaceWith(unknown);});await header.waitFor({state:'visible'});
 assert.deepEqual(await page.evaluate(()=>[calls,queries]),[[],[]]);
 await page.goto('http://profiles.test/dashboard-example/home?missing');await page.waitForFunction(()=>window.ready);await header.waitFor({state:'visible'});assert.equal(await page.locator('hui-root').locator('card-mod').count(),0);
 assert.deepEqual(errors,[]);if(out)await writeFile(out+'/verification.json',JSON.stringify({realCardMod:'4.2.1',syntheticHA:true,results,errors},null,2));console.log('PASS 32 theme modes: real card-mod injection/removal, 390/767/768/1280px, edit/Back, safe-area/scroll, Room navigation and missing dependency fallback. Synthetic HA; no native iOS/Companion claim.');
}finally{await browser.close();}
