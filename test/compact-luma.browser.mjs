import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {compactFixtures} from './compact-fixtures.mjs';
const{chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const source=await readFile(new URL('../dist/orbit-lovelace.js',import.meta.url),'utf8'),manifest=JSON.parse(await readFile(new URL('../components.json',import.meta.url),'utf8')),catalog=JSON.parse(await readFile(new URL('../themes/catalog.json',import.meta.url),'utf8'));
const types=[...manifest.components,...manifest.nativeComponents].flatMap(c=>c.types),out=process.env.SCREENSHOT_DIR;if(out)await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
const errors=[],measurements=[];
try{
 const page=await browser.newPage({viewport:{width:1000,height:1000},hasTouch:true});page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',route=>{const u=new URL(route.request().url());assert.equal(u.origin,'http://compact.test');if(u.pathname==='/card.js')return route.fulfill({contentType:'application/javascript',body:source});if(u.pathname==='/snapshot.svg')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="#4e6976"/><text x="20" y="90" fill="white">Synthetic camera</text></svg>'});return route.fulfill({contentType:'text/html; charset=utf-8',body:'<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:12px;background:var(--primary-background-color,#f1f3f7);color:var(--primary-text-color,#202b3c);font:14px system-ui}#host{width:440px;max-width:100%}#edit{width:440px}ha-card{display:block}</style><div id="host"></div><div id="edit"></div><script>customElements.define("ha-card",class extends HTMLElement{connectedCallback(){this.style.display="block";}});customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;flex:none;align-items:center;justify-content:center;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)";}});</script><script type="module" src="/card.js"></script>'});});
 await page.goto('http://compact.test');await page.waitForFunction(()=>window.orbitLovelace?.compact);await page.clock.install({time:new Date('2026-10-27T12:00:00Z')});await page.evaluate(compactFixtures);
 await page.evaluate(()=>{window.mount=async(type,layout)=>{document.querySelector('#host').replaceChildren();const card=document.createElement(type),config={...compactConfigs[type],...(layout?{layout}:{})};card.setConfig(config);card.hass=compactHass;document.querySelector('#host').append(card);if(card.updateComplete)await card.updateComplete;await new Promise(r=>queueMicrotask(r));window.card=card;return{height:card.getBoundingClientRect().height,compact:card.getAttribute('data-orbit-layout')};};});
 assert.deepEqual(await page.evaluate(()=>orbitLovelace.errors),[]);assert.deepEqual((await page.evaluate(()=>orbitLovelace.compact.types)).sort(),types.sort());
 assert.deepEqual(await page.evaluate(()=>Object.keys(compactConfigs).sort()),types.sort());



 const light=page.locator('luma-control-card');
 await page.evaluate(()=>{window.lumaConfig={entity:'light.example',title:'Example light',layout:'compact'};window.mountLuma=()=>{document.querySelector('#host').replaceChildren();window.card=document.createElement('luma-control-card');card.setConfig(lumaConfig);card.hass=compactHass;document.querySelector('#host').append(card);};});
 const assertIdentity=async()=>{assert.equal(await light.locator('.orbit-tile-name,.header .title').evaluateAll(nodes=>nodes.filter(n=>n.getClientRects().length).length),1,'one visible name');assert.equal(await light.locator('.orbit-tile-icon,.header .icon-wrap').evaluateAll(nodes=>nodes.filter(n=>n.getClientRects().length).length),1,'one visible icon identity');assert.equal(await light.locator('.header .pill').isVisible(),false);};
 let cases=0;
 for(const domain of ['light','switch'])for(const state of ['on','off','unavailable','unknown'])for(const width of [164,243,440]){
  await page.evaluate(({domain,state,width})=>{document.querySelector('#host').style.width=width+'px';compactHass.states[domain+'.example'].state=state;lumaConfig.entity=domain+'.example';mountLuma();},{domain,state,width});await assertIdentity();assert.equal(await light.locator('.power').isVisible(),true);assert.equal(await light.locator('.power').isDisabled(),['unavailable','unknown'].includes(state));
  assert.equal(await light.locator('.orbit-tile-state-text').textContent(),['unavailable','unknown'].includes(state)?'Unavailable':state==='on'?'On':'Off');
  const disclosure=light.locator('.orbit-compact-disclosure');assert.equal(await disclosure.count(),domain==='light'&&state==='on'?1:0,'no empty Details arrow');
  if(await disclosure.count()){const before=await page.evaluate(()=>[calls.length,queries.length]);await disclosure.focus();await page.keyboard.press('Enter');await assertIdentity();assert.equal(await light.locator('.controls-toggle').isVisible(),true);await disclosure.focus();await page.keyboard.press('Space');assert.deepEqual(await page.evaluate(()=>[calls.length,queries.length]),before);}
  if(out&&domain==='light'&&state==='off')await light.screenshot({path:out+'/light-off-'+width+'.png'});cases++;
 }
 assert.equal(cases,24);assert.deepEqual(await page.evaluate(()=>[calls,queries]),[[],[]]);
 // Native off/on power payloads remain exact; feedback never fakes reported state.
 await page.evaluate(()=>{lumaConfig.entity='light.example';compactHass.states['light.example'].state='off';mountLuma();});await light.locator('.power').tap();await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['light','turn_on',{entity_id:'light.example',transition:.3}]);assert.equal(await light.locator('.orbit-tile-state-text').textContent(),'Off');await assertIdentity();
 await page.evaluate(()=>{compactHass.states['light.example'].state='on';card.hass={...compactHass};});await page.waitForFunction(()=>card.shadowRoot.querySelector('.orbit-tile-state-text').textContent==='On');await light.locator('.orbit-compact-disclosure').click();
 const beforeDetails=await page.evaluate(()=>calls.length);await light.locator('.controls-toggle').click();assert.equal(await page.evaluate(()=>calls.length),beforeDetails);await assertIdentity();assert.equal(await light.locator('[data-control=brightness]').isVisible(),true);assert.equal(await light.locator('.power').isVisible(),true);
 if(out)await light.screenshot({path:out+'/light-on-details.png'});
 await light.locator('[data-control=brightness]').evaluate(n=>{n.value='55';n.dispatchEvent(new Event('change',{bubbles:true}));});await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['light','turn_on',{entity_id:'light.example',transition:.3,brightness_pct:55}]);await assertIdentity();
 await light.locator('.power').tap();await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['light','turn_off',{entity_id:'light.example',transition:.3}]);
 // Error is still visible through the source feedback; no hidden-header warning loss.
 await page.evaluate(()=>{card.hass={...compactHass,callService:(...a)=>{calls.push(a);return Promise.reject(new Error('Synthetic light command failure'));}};});await light.locator('.power').tap();await page.waitForFunction(()=>!card._pending);assert.equal(await light.locator('.feedback.error').isVisible(),true);assert.match(await light.locator('.feedback.error').textContent(),/Synthetic light command failure/);await assertIdentity();
 // Normal renders its original identity; switching back/reconnecting restores one Compact group.
 await page.evaluate(()=>card.setConfig({...lumaConfig,layout:'normal'}));assert.equal(await light.locator('.header .title').isVisible(),true);assert.equal(await light.locator('.header .icon-wrap').isVisible(),true);assert.equal(await light.locator('.orbit-tile').count(),0);
 await page.evaluate(()=>{card.setConfig({...lumaConfig,title:'Renamed light'});card.remove();document.querySelector('#host').append(card);});await page.waitForFunction(()=>card.shadowRoot.querySelector('.orbit-tile-name')?.textContent==='Renamed light');await assertIdentity();
 assert.deepEqual(errors,[]);console.log('PASS24 Compact Luma cases: light/switch on/off/unavailable/unknown at164/243/440px; single visible identity/state, no empty Details, keyboard/native controls, exact power/brightness commands, errors, no optimistic state, Normal/reconnect/update. Services mocked.');
}finally{await browser.close();}
