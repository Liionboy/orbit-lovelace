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




 const switchCard=page.locator('switch-control-card');
 await page.evaluate(()=>{window.savedState=compactHass.states['switch.example'];window.mountSwitch=(state,layout,palette,width)=>{document.querySelector('#host').replaceChildren();document.querySelector('#host').style.width=width+'px';if(state==='missing')delete compactHass.states['switch.example'];else compactHass.states['switch.example']={...savedState,state};window.card=document.createElement('switch-control-card');card.setConfig({...compactConfigs['switch-control-card'],title:'My switch',icon:'mdi:power-socket-eu',layout,palette});card.hass=compactHass;document.querySelector('#host').append(card);};});
 const check=async(state,layout)=>{
  const result=await switchCard.evaluate((c,{state,layout})=>{const r=c.shadowRoot;const icon=r.querySelector(layout==='compact'?'.orbit-tile-icon':'.icon-wrap');const probe=document.createElement('span');r.querySelector('.shell').append(probe);probe.style.color=state==='on'?'var(--accent)':'var(--secondary-text-color,#637080)';const color=getComputedStyle(probe).color;probe.remove();return{icon:icon?{color:getComputedStyle(icon).color,bg:getComputedStyle(icon).backgroundColor,image:getComputedStyle(icon).backgroundImage,shadow:getComputedStyle(icon).boxShadow,name:icon.querySelector('ha-icon').getAttribute('icon')}:null,expected:color,disabled:r.querySelector('.toggle')?.disabled,on:r.querySelector('ha-card').getAttribute('data-orbit-switch-on'),visibleNames:[...r.querySelectorAll('.title,.orbit-tile-name')].filter(n=>n.getClientRects().length).length};},{state,layout});
  if(state==='missing'&&layout==='normal'){assert.equal(result.icon,null);return;}
  assert.equal(result.icon.color,result.expected,state+' '+layout);assert.equal(result.icon.image,'none');assert.equal(result.icon.shadow,'none');if(state!=='on')assert.equal(result.icon.bg,'rgba(0, 0, 0, 0)');
  if(state!=='missing'){assert.equal(result.icon.name,'mdi:power-socket-eu');assert.equal(result.on,String(state==='on'));assert.equal(result.disabled,['unknown','unavailable'].includes(state));}
  assert.equal(result.visibleNames,1);
 };
 let cases=0;for(const layout of ['normal','compact'])for(const palette of ['aurora','ocean','sunset','lavender'])for(const state of ['on','off','unavailable','unknown','missing'])for(const width of [164,243,440]){
  await page.evaluate(({state,layout,palette,width})=>mountSwitch(state,layout,palette,width),{state,layout,palette,width});await check(state,layout);
  if(out&&palette==='ocean'&&width===243&&['on','off'].includes(state))await switchCard.screenshot({path:out+'/'+layout+'-'+state+'.png'});cases++;
 }
 assert.equal(cases,120);assert.deepEqual(await page.evaluate(()=>[calls,queries]),[[],[]]);
 let themeCases=0;for(const[name,theme]of Object.entries(catalog.themes))for(const[mode,vars]of Object.entries(theme.modes))for(const layout of ['normal','compact'])for(const palette of ['aurora','ocean','sunset','lavender'])for(const state of ['on','off']){
  await page.evaluate(({vars,state,layout,palette})=>{document.documentElement.removeAttribute('style');for(const[k,v]of Object.entries(vars))document.documentElement.style.setProperty('--'+k,v);mountSwitch(state,layout,palette,243);},{vars,state,layout,palette});await check(state,layout);if(out&&name==='Orbit Graphite'&&mode==='dark'&&palette==='ocean')await switchCard.screenshot({path:out+'/'+layout+'-'+state+'-dark.png'});themeCases++;
 }
 assert.equal(themeCases,384);assert.deepEqual(await page.evaluate(()=>[calls,queries]),[[],[]]);await page.evaluate(()=>document.documentElement.removeAttribute('style'));
 // State changes, pending/ack/error and telemetry do not fake icon state.
 await page.evaluate(()=>{mountSwitch('off','compact','sunset',243);window.resolveService=null;compactHass.callService=(...a)=>{calls.push(a);return new Promise(r=>resolveService=r);};card.hass={...compactHass};});await switchCard.locator('.toggle').click();assert.equal(await switchCard.locator('.toggle').isDisabled(),true);assert.equal(await switchCard.locator('ha-card').getAttribute('data-orbit-switch-on'),'false');assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['switch','turn_on',{entity_id:'switch.example'}]);await page.evaluate(()=>resolveService());await page.waitForFunction(()=>!card._pending);await check('off','compact');
 await page.evaluate(()=>{compactHass.states['switch.example']={...savedState,state:'on'};compactHass.callService=(...a)=>{calls.push(a);return Promise.resolve();};card.hass={...compactHass};});await check('on','compact');
 await switchCard.locator('.orbit-compact-disclosure').click();assert.equal(await switchCard.locator('.reading-value').count(),3);assert.equal(await switchCard.locator('.header').isVisible(),false);await check('on','compact');
 await switchCard.locator('.toggle').click();await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['switch','turn_off',{entity_id:'switch.example'}]);await check('on','compact');
 await page.evaluate(()=>{card.hass={...compactHass,callService:(...a)=>{calls.push(a);return Promise.reject(Error('Synthetic error'));}};});await switchCard.locator('.toggle').click();await page.waitForFunction(()=>!card._pending);assert.equal(await switchCard.locator('.hint.error').isVisible(),true);await check('on','compact');
 await page.evaluate(()=>{compactHass.states['switch.example']={...savedState,state:'off'};card.hass={...compactHass};});await check('off','compact');
 await page.evaluate(()=>{card.setConfig({...card._config,layout:'normal'});card.remove();document.querySelector('#host').append(card);});await check('off','normal');
 assert.deepEqual(errors,[]);console.log('PASS120 Switch icon cases +384 theme cases: ON palette accent, all other states neutral; both layouts, 4 palettes, 3 widths, live reported-state updates, pending/sent/error no optimism, native power and 3 readings retained. Synthetic HA/icons only.');
}finally{await browser.close();}
