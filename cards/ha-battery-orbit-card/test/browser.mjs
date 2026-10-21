import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const slug = "ha-battery-orbit-card", battery = true;
const source = await readFile(new URL('../' + slug + '.js', import.meta.url), 'utf8');
const output = process.env.SCREENSHOT_DIR;
if (output) await mkdir(output, { recursive:true });
const browser = await chromium.launch({ headless:true, args:['--no-sandbox', '--disable-dev-shm-usage'], ...(process.env.CHROMIUM_EXECUTABLE ? { executablePath:process.env.CHROMIUM_EXECUTABLE } : {}) });
try {
 const page = await browser.newPage({viewport:{width:1000,height:1000}}), errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 await page.route('http://orbit.test/**',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><meta charset="utf-8"><style>body{margin:20px;background:#f4f6fa;font-family:Arial,sans-serif}body.dark{background:#10171e;--primary-text-color:#e7edf5;--secondary-text-color:#a5b2c4;--card-background-color:#1c2834;--divider-color:#344454}#host{width:440px}</style><div id="host"></div>'}));
 await page.goto('http://orbit.test/');
 // HA components and icons are explicit synthetic stubs, not native HA validation.
 await page.evaluate(()=>{customElements.define('ha-card',class extends HTMLElement{});customElements.define('ha-icon',class extends HTMLElement{connectedCallback(){this.textContent='◇';this.style.cssText='display:inline-flex;align-items:center;justify-content:center;width:var(--mdc-icon-size,20px);height:var(--mdc-icon-size,20px);font-size:20px;';}});});
 await page.addScriptTag({content:source});
 await page.evaluate(({slug,battery})=>{
  window.calls=[];window.queries=[];window.infos=[];window.card=document.createElement(slug);document.querySelector('#host').append(card);
  card.addEventListener('hass-more-info',e=>infos.push(e.detail));
  window.fixture=battery?{ 'sensor.critical':{state:'0',attributes:{friendly_name:'Entry sensor',device_class:'battery',unit_of_measurement:'%'}},'sensor.low':{state:'24.7',attributes:{friendly_name:'Window battery',unit_of_measurement:'%'}},'sensor.healthy':{state:'85',attributes:{friendly_name:'Desk remote',unit_of_measurement:'%'}},'binary_sensor.flag':{state:'on',attributes:{friendly_name:'Hall low battery',device_class:'battery'}} }:{'binary_sensor.door':{state:'on',attributes:{friendly_name:'Entry door',device_class:'door'}},'binary_sensor.smoke':{state:'off',attributes:{friendly_name:'Kitchen smoke',device_class:'smoke'}},'binary_sensor.water':{state:'on',attributes:{friendly_name:'Utility moisture',device_class:'moisture'}}};
  window.ids=Object.keys(fixture);ids.push('binary_sensor.missing');window.config={entities:ids};
  card.setConfig(config);card.hass={states:fixture,callService:(...args)=>calls.push(args),callWS:(...args)=>queries.push(args)};
 },{slug,battery});
 const metrics=[];
 for(const width of [200,280,320,440,760]) {
  await page.evaluate(width=>document.querySelector('#host').style.width=width+'px',width);
  const m=await page.evaluate(()=>{const root=card.shadowRoot,box=root.querySelector('ha-card').getBoundingClientRect();return{width:box.width,height:box.height,overflow:root.querySelector('ha-card').scrollWidth>box.width,rows:root.querySelectorAll('button').length,buttons:[...root.querySelectorAll('button')].every(b=>b.scrollWidth<=b.clientWidth),values:[...root.querySelectorAll('.value')].every(b=>b.scrollWidth<=b.clientWidth)};});
  assert.equal(m.width,width);assert.equal(m.overflow,false);assert.equal(m.buttons,true);assert.equal(m.values,true);assert.ok(m.height<470);metrics.push(m);
  if(output)await page.screenshot({path:output+'/'+width+'-light.png',fullPage:true});
 }
 const first=battery?'binary_sensor.flag':'binary_sensor.door';
 console.log('row diagnostics', await page.evaluate(() => ({ tag: card.tagName, rows:[...card.shadowRoot.querySelectorAll('button')].map(b=>b.dataset.entity) })));
 const row=page.locator('button').filter({has:page.locator('.name', {hasText: battery ? 'Hall low battery' : 'Entry door'})});
 await row.evaluate(el=>el.marker='stable');
 await page.evaluate(()=>card.hass={...card.hass,states:{...card.hass.states,'sensor.unrelated':{state:'42',attributes:{}}}});
 assert.equal(await row.evaluate(el=>el.marker),'stable');
 await row.click();await row.focus();await page.keyboard.press('Enter');await page.keyboard.press('Space');
 assert.deepEqual(await page.evaluate(()=>infos),[{entityId:first},{entityId:first},{entityId:first}]);
 // Attribute-only update and units/classes are observed in real DOM.
 await page.evaluate(({battery})=>{const id=battery?'sensor.low':'binary_sensor.door';const s=fixture[id];fixture={...fixture,[id]:{...s,attributes:{...s.attributes,...(battery?{unit_of_measurement:'V'}:{device_class:'smoke'})}}};card.hass={...card.hass,states:fixture};},{battery});
 assert.match(await page.locator(slug).locator('.shell').innerText(),battery?/Expected battery percentage/:/Smoke detected/);
 if(!battery){await page.evaluate(()=>card.setConfig({...config,show_inactive:false}));assert.equal(await page.locator(slug).locator('button[data-entity="binary_sensor.smoke"]').count(),0);assert.equal(await page.locator(slug).locator('button[data-entity="binary_sensor.missing"]').count(),1);assert.match(await page.locator(slug).locator('.shell').innerText(),/1 inactive/);}
 // All palettes, dark, reduced motion; no animation intentionally exists.
 const colors=[];
 for(const palette of ['aurora','ocean','sunset','lavender']) {await page.evaluate(palette=>card.setConfig({...config,palette}),palette);colors.push(await page.evaluate(()=>getComputedStyle(card.shadowRoot.querySelector('ha-card')).getPropertyValue('--accent')));}
 assert.equal(new Set(colors).size,4);
 await page.emulateMedia({reducedMotion:'reduce',colorScheme:'dark'});
 await page.evaluate(()=>{document.body.classList.add('dark');document.querySelector('#host').style.width='280px';card.setConfig({...config,palette:'aurora'});});
 const dark=await page.evaluate(()=>({background:getComputedStyle(card.shadowRoot.querySelector('ha-card')).backgroundColor,animations:card.shadowRoot.getAnimations({subtree:true}).length}));assert.equal(dark.background,'rgb(28, 40, 52)');assert.equal(dark.animations,0);
 if(output)await page.screenshot({path:output+'/280-dark-reduced.png',fullPage:true});
 // Hostile attributes must remain data and never create executable DOM.
 await page.evaluate(()=>{const id=ids[0],s=fixture[id];fixture={...fixture,[id]:{...s,attributes:{...s.attributes,friendly_name:'\"><img src=x onerror="window.pwned=1">',icon:'\" onload="window.pwned=1'}}};card.setConfig({...config,title:'<script>window.pwned=1</script>'});card.hass={...card.hass,states:fixture};});
 assert.equal(await page.evaluate(()=>card.shadowRoot.querySelectorAll('img,script,[onload],[onerror]').length),0);assert.equal(await page.evaluate(()=>window.pwned),undefined);
 // Empty, one, many and explicit unavailable are distinct.
 await page.evaluate(()=>card.setConfig({}));assert.match(await page.locator(slug).locator('.shell').innerText(),/No .* selected/);assert.equal(await page.locator(slug).locator('button').count(),0);
 await page.evaluate(()=>{card.setConfig({entities:[ids[0]]});card.hass={...card.hass,states:{[ids[0]]:{state:'unavailable',attributes:{}}}};});assert.equal(await page.locator(slug).locator('button').count(),1);assert.match(await page.locator(slug).locator('.shell').innerText(),/Unavailable/);
 await page.locator(slug).locator('button').click();assert.deepEqual((await page.evaluate(()=>infos)).at(-1),{entityId:battery?'sensor.critical':'binary_sensor.door'});
 await page.evaluate(()=>card.setConfig({entities:Array.from({length:20},(_,i)=>'binary_sensor.missing_'+i)}));assert.equal(await page.locator(slug).locator('button').count(),20);
 assert.deepEqual(await page.evaluate(()=>calls),[]);assert.deepEqual(await page.evaluate(()=>queries),[]);assert.deepEqual(errors,[]);
 console.log(JSON.stringify({slug,metrics,dark,moreInfo:await page.evaluate(()=>infos),services:0,queries:0,pageErrors:errors,icons:'stubbed HA components, not live HA'},null,2));
} finally {await browser.close();}
