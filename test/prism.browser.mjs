// Final resource, synthetic HA only; no access to a real instance or devices.
import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=new URL('../',import.meta.url),catalog=JSON.parse(await readFile(new URL('themes/catalog.json',root),'utf8'));
const out=process.env.SCREENSHOT_DIR;if(out)await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
const errors=[],rows=[];
try{
 const page=await browser.newPage({viewport:{width:1440,height:1080},hasTouch:true});
 await page.clock.install({time:new Date('2026-10-26T09:41:30Z')});page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',async r=>{const u=new URL(r.request().url());assert.equal(u.origin,'http://prism.test','No external requests');const p=u.pathname.slice(1);assert.ok(['docs/themes/preview.html','docs/themes/preview.css','docs/themes/preview.mjs','themes/catalog.json','dist/orbit-lovelace.js'].includes(p));return r.fulfill({contentType:p.endsWith('.html')?'text/html; charset=utf-8':p.endsWith('.css')?'text/css':p.endsWith('.json')?'application/json':'application/javascript; charset=utf-8',body:await readFile(new URL(p,root),'utf8')});});
 await page.goto('http://prism.test/docs/themes/preview.html?gallery=prism');await page.waitForFunction(()=>window.previewReady);
 for(const name of Object.keys(catalog.themes).filter(n=>n.startsWith('Orbit Prism')))for(const mode of ['light','dark']){
  await page.evaluate(async({name,mode})=>{applyTheme(name,mode);await mountDemo();window.refs=[...document.querySelectorAll('.demo')].map(c=>c.shadowRoot.querySelector('.current,.info,.quick,.control,.toggle'));window.before=[calls.length,queries.length];},{name,mode});
  const paint=await page.evaluate(()=>[...document.querySelectorAll('.demo')].map(c=>{const shell=c.shadowRoot.querySelector('.shell'),h=c.shadowRoot.querySelector('ha-card');return{type:c.localName,accent:getComputedStyle(h).getPropertyValue('--accent').trim(),background:shell?getComputedStyle(shell).backgroundImage:'none',overlay:shell?getComputedStyle(shell,'::before').backgroundImage:'none'};}));
  const rooms=paint.filter(p=>p.type==='ha-room-orbit-card');assert.notEqual(rooms[0].accent,rooms[1].accent);assert.notEqual(rooms[0].background,rooms[1].background,'Local palette tint must not be flattened');
  assert.notEqual(paint.find(p=>p.type==='media-player-card').overlay,'none','Full native media glow retained');
  assert.notEqual(paint.find(p=>p.type==='ha-gauge-orbit-card').background,'none');
  for(const width of [1440,768,390]){
   await page.setViewportSize({width,height:1080});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,name+mode+width);
   assert.deepEqual(await page.evaluate(()=>[...document.querySelectorAll('.demo')].filter(c=>c.scrollWidth>c.clientWidth+1).map(c=>c.localName)),[]);
   if(out&&name==='Orbit Prism')await page.screenshot({path:out+'/orbit-prism-'+mode+'-'+(width===1440?'desktop':width===768?'tablet':'phone')+'.png',fullPage:true});
  }
  await page.evaluate(({name,mode})=>{applyTheme('Orbit Graphite',mode);applyTheme(name,mode);},{name,mode});
  assert.equal(await page.evaluate(()=>[...document.querySelectorAll('.demo')].every((c,i)=>refs[i]===c.shadowRoot.querySelector('.current,.info,.quick,.control,.toggle'))),true);
  assert.deepEqual(await page.evaluate(()=>[calls.length,queries.length]),await page.evaluate(()=>before),'Theme selection performs no commands or added queries');
  rows.push({name,mode,palettes:paint,widths:[1440,768,390]});
 }
 for(const mode of ['light','dark']){
  await page.evaluate(async mode=>{applyTheme('Orbit Prism',mode);await mountDemo();for(const [i,c] of [...document.querySelectorAll('.demo')].entries()){const cfg=demoConfigs[i];c.setConfig({...cfg[2],layout:'compact'});c.hass=demoHass;if(c.updateComplete)await c.updateComplete;}},mode);
  for(const width of [1440,390]){await page.setViewportSize({width,height:1080});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);if(out)await page.screenshot({path:out+'/orbit-prism-'+mode+'-compact-'+(width===1440?'desktop':'phone')+'.png',fullPage:true});}
  const before=await page.evaluate(()=>[calls.length,queries.length]);await page.locator('ha-gauge-orbit-card .orbit-compact-disclosure').click();assert.deepEqual(await page.evaluate(()=>[calls.length,queries.length]),before);
 }
 await page.evaluate(()=>mountDemo());
 // Deterministic CSS rollback and state/actual RGB precedence on populated final cards.
 await page.evaluate(()=>{applyTheme('Orbit Prism','dark');const c=document.querySelector('ha-room-orbit-card');c.setConfig({...demoConfigs[1][2],palette:'aurora',temperature_effect:true,temperature_cold_below:18,temperature_warm_from:21});});
 assert.equal(await page.locator('ha-room-orbit-card').first().locator('ha-card').evaluate(n=>getComputedStyle(n).getPropertyValue('--accent').trim()),'#de7136');
 await page.evaluate(()=>{applyTheme(null);});
 assert.equal(await page.evaluate(()=>document.documentElement.style.getPropertyValue('--orbit-theme-accent')),'');
 await page.evaluate(()=>{applyTheme('Orbit Prism','light');});
 await page.locator('ha-select-orbit-card select').selectOption('Boost');await page.waitForFunction(()=>calls.length===1);
 assert.deepEqual(await page.evaluate(()=>calls[0]),['select','select_option',{entity_id:'select.example',option:'Boost'}]);
 await page.locator('ha-number-orbit-card .stepper[data-cmd=up]:visible').click();await page.waitForFunction(()=>calls.length===2);
 assert.deepEqual(await page.evaluate(()=>calls[1]),['number','set_value',{entity_id:'number.example',value:22}]);
 assert.deepEqual(await page.evaluate(()=>orbitLovelace.errors),[]);assert.deepEqual(errors,[]);
 if(out)await writeFile(out+'/verification.json',JSON.stringify({syntheticHA:true,nativeHA:false,rows,errors},null,2));
 console.log('PASS Prism: 8 profile/modes, local palettes/decorations, 3 viewport widths, stable controls/no queries, state precedence, rollback and exact Select/Number commands.');
}finally{await browser.close();}
