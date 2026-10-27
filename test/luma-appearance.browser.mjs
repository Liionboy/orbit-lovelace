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




 const luma=page.locator('luma-control-card');
 const palettes={aurora:'#078f72',ocean:'#1477c9',sunset:'#cf573e',lavender:'#8059c7'};
 await page.evaluate(()=>{window.mountLuma=(config)=>{document.querySelector('#host').replaceChildren();window.card=document.createElement('luma-control-card');card.setConfig(config);card.hass=compactHass;document.querySelector('#host').append(card);};compactHass.states['light.example'].attributes.rgb_color=[10,30,240];});
 const form=await page.evaluate(()=>customElements.get('luma-control-card').getConfigForm().schema.map(f=>({name:f.name,selector:f.selector})));
 for(const name of ['layout','icon','palette','entity','title','transition'])assert.equal(form.filter(f=>f.name===name).length,1);
 assert.equal(form.find(f=>f.name==='icon').selector.icon!==undefined,true);
 let cases=0;
 for(const layout of ['normal','compact'])for(const [palette,hex]of Object.entries(palettes))for(const domain of ['light','switch'])for(const state of ['on','off','unavailable','unknown'])for(const width of [164,243,440]){
  await page.evaluate(({layout,palette,domain,state,width})=>{document.querySelector('#host').style.width=width+'px';compactHass.states[domain+'.example'].state=state;mountLuma({entity:domain+'.example',title:'My Luma',layout,palette,icon:'mdi:ceiling-fan'});},{layout,palette,domain,state,width});
  const result=await luma.evaluate(c=>{const r=c.shadowRoot,s=r.querySelector('.shell'),i=r.querySelector(c._orbitCompact?'.orbit-tile-icon':'.icon-wrap');return{palette:s.dataset.lumaPalette,accent:s.style.getPropertyValue('--accent'),icon:i.querySelector('ha-icon').getAttribute('icon'),color:getComputedStyle(i).color,glow:s.style.getPropertyValue('--glow'),disabled:r.querySelector('.power').disabled,state:r.querySelector('.pill').textContent.trim(),names:[...r.querySelectorAll('.orbit-tile-name,.title')].filter(n=>n.getClientRects().length).length};});
  assert.equal(result.palette,palette);assert.equal(result.accent,hex);assert.equal(result.icon,'mdi:ceiling-fan');assert.equal(result.color,'rgb('+hex.slice(1).match(/../g).map(n=>parseInt(n,16)).join(', ')+')');assert.equal(result.glow,domain==='light'&&state==='on'?'#0a1ef0':hex);assert.equal(result.disabled,['unavailable','unknown'].includes(state));assert.equal(result.names,1);
  if(layout==='compact'){
   const disclosure=luma.locator('.orbit-compact-disclosure');if(await disclosure.count()){await disclosure.click();assert.equal(await luma.locator('.header').isVisible(),false);}
   const rect=await luma.locator('.orbit-tile-icon').boundingBox();assert.ok(rect.width<=width);
  }
  if(out&&domain==='switch'&&state==='on'&&width===243)await luma.screenshot({path:out+'/'+layout+'-'+palette+'.png'});
  cases++;
 }
 assert.equal(cases,192);assert.deepEqual(await page.evaluate(()=>[calls,queries]),[[],[]]);
 let themeCases=0;
 for(const [name,theme]of Object.entries(catalog.themes))for(const [mode,vars]of Object.entries(theme.modes))for(const layout of ['normal','compact'])for(const [palette,hex]of Object.entries(palettes)){
  await page.evaluate(({vars,layout,palette})=>{document.documentElement.removeAttribute('style');for(const[k,v]of Object.entries(vars))document.documentElement.style.setProperty('--'+k,v);compactHass.states['switch.example'].state='on';mountLuma({entity:'switch.example',title:'My Luma',layout,palette,icon:'mdi:fan'});},{vars,layout,palette});
  assert.equal(await luma.locator(layout==='compact'?'.orbit-tile-icon':'.icon-wrap').evaluate(n=>getComputedStyle(n).color),'rgb('+hex.slice(1).match(/../g).map(n=>parseInt(n,16)).join(', ')+')');
  assert.equal(await luma.locator('.pill.on').evaluate(n=>getComputedStyle(n).color),'rgb('+vars['success-color'].slice(1).match(/../g).map(n=>parseInt(n,16)).join(', ')+')');
  if(out&&name==='Orbit Graphite'&&mode==='dark'&&palette==='ocean')await luma.screenshot({path:out+'/'+layout+'-dark.png'});themeCases++;
 }
 assert.equal(themeCases,192);assert.deepEqual(await page.evaluate(()=>[calls,queries]),[[],[]]);await page.evaluate(()=>document.documentElement.removeAttribute('style'));
 // Optional/empty keys keep auto behavior; override > entity > state-derived default.
 await page.evaluate(()=>{compactHass.states['switch.example'].state='off';compactHass.states['switch.example'].attributes.icon='mdi:desk-lamp';mountLuma({entity:'switch.example',layout:'compact'});});
 assert.equal(await luma.locator('.orbit-tile-icon ha-icon').getAttribute('icon'),'mdi:desk-lamp');
 for(const palette of [null,'','auto']){await page.evaluate(palette=>card.setConfig({entity:'switch.example',layout:'compact',palette,icon:' '}),palette);assert.equal(await luma.locator('.shell').getAttribute('data-luma-palette'),null);assert.equal(await luma.locator('.orbit-tile-icon ha-icon').getAttribute('icon'),'mdi:desk-lamp');}
 await page.evaluate(()=>{delete compactHass.states['switch.example'].attributes.icon;card.hass={...compactHass};});await page.waitForFunction(()=>card.shadowRoot.querySelector('.orbit-tile-icon ha-icon').getAttribute('icon')==='mdi:toggle-switch-off-outline');
 // Exact native services, no optimistic state, reported RGB unaffected by palette.
 await page.evaluate(()=>mountLuma({entity:'switch.example',layout:'compact',palette:'sunset',icon:'mdi:fan'}));await luma.locator('.power').click();await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['switch','turn_on',{entity_id:'switch.example'}]);assert.equal(await luma.locator('.orbit-tile-state-text').textContent(),'Off');
 await page.evaluate(()=>{compactHass.states['light.example'].state='on';mountLuma({entity:'light.example',layout:'compact',palette:'ocean',icon:'mdi:desk-lamp'});});await luma.locator('.orbit-compact-disclosure').click();await luma.locator('.controls-toggle').click();await luma.locator('[data-control=brightness]').evaluate(n=>{n.value='55';n.dispatchEvent(new Event('change',{bubbles:true}));});await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['light','turn_on',{entity_id:'light.example',transition:.3,brightness_pct:55}]);assert.equal(await luma.locator('.shell').evaluate(n=>n.style.getPropertyValue('--glow')),'#0a1ef0');
 await page.evaluate(()=>{card.hass={...compactHass,callService:(...a)=>{calls.push(a);return Promise.reject(Error('Synthetic failure'));}};});await luma.locator('.power').click();await page.waitForFunction(()=>!card._pending);assert.equal(await luma.locator('.feedback.error').isVisible(),true);
 // Per-card overrides do not mutate entity metadata or neighboring cards; hostile icon stays an attribute.
 await page.evaluate(()=>{mountLuma({entity:'switch.example',layout:'compact',palette:'lavender',icon:'mdi:test\" onload=\"alert(1)'});window.neighbor=document.createElement('luma-control-card');neighbor.setConfig({entity:'switch.example',layout:'compact',palette:'ocean',icon:'mdi:fan'});neighbor.hass=compactHass;document.querySelector('#host').append(neighbor);});
 assert.equal(await luma.first().locator('[onload]').count(),0);assert.equal(await luma.last().locator('.orbit-tile-icon ha-icon').getAttribute('icon'),'mdi:fan');assert.equal(await page.evaluate(()=>compactHass.states['switch.example'].attributes.icon),undefined);
 assert.deepEqual(errors,[]);console.log('PASS192 theme combinations +192 Luma appearance cases: 2 layouts × 4 palettes × 2 domains × 4 states × 3 widths; native editor schema, per-card icons/palettes, fallback/reset/escaping, native commands/errors/RGB, no incidental calls. Synthetic HA/icons only.');
}finally{await browser.close();}
