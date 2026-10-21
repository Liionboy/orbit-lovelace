import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const source = await readFile(new URL('../ha-fan-orbit-card.js', import.meta.url), 'utf8'), out=process.env.SCREENSHOT_DIR;
if(out) await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
try {
 const page=await browser.newPage({viewport:{width:1000,height:1000}}), errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('http://fan.test/**',r=>r.fulfill(new URL(r.request().url()).pathname==='/card.js'?{contentType:'application/javascript',body:source}:{contentType:'text/html; charset=utf-8',body:'<!doctype html><meta charset="utf-8"><style>body{margin:20px;background:#f4f6fa;font-family:Arial,sans-serif}body.dark{background:#10171e;--primary-text-color:#e7edf5;--secondary-text-color:#a5b2c4;--card-background-color:#1c2834;--divider-color:#344454}#host{width:440px}</style><div id="host"><ha-fan-orbit-card></ha-fan-orbit-card></div><script>customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;justify-content:center;align-items:center;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);font-size:var(--mdc-icon-size,24px)";}});</script><script src="/card.js"></script>'}));
 await page.goto('http://fan.test/');
 await page.evaluate(()=>{
  window.card=document.querySelector('ha-fan-orbit-card');window.calls=[];window.infos=[];window.config={entity:'fan.example'};
  window.attrs={friendly_name:'Living room fan',supported_features:63,percentage:50,percentage_step:25,preset_modes:['normal','auto'],preset_mode:'normal',oscillating:false,direction:'forward'};
  card.addEventListener('hass-more-info',e=>infos.push(e.detail));card.setConfig(config);
  card.hass={states:{'fan.example':{state:'on',attributes:{...attrs}}},services:{fan:Object.fromEntries(['turn_on','turn_off','set_percentage','set_preset_mode','oscillate','set_direction'].map(x=>[x,{}]))},callService:async(...args)=>{calls.push(args);if(window.failNext){window.failNext=false;throw Error('PRIVATE backend');}if(window.hold)await new Promise(r=>window.release=r);}};
 });
 const card=page.locator('ha-fan-orbit-card');
 for(const width of [440,320,280,200]){
  await page.evaluate(w=>document.querySelector('#host').style.width=w+'px',width);
  const m=await card.evaluate(el=>{const b=el.getBoundingClientRect();return{width:b.width,height:b.height,overflow:[...el.shadowRoot.querySelectorAll('.head,.info,.name,.row,input,select,button')].filter(n=>n.scrollWidth>n.clientWidth+1||n.getBoundingClientRect().right>b.right+1).map(n=>n.className||n.tagName)};});
  assert.deepEqual(m.overflow,[]);assert.ok(m.height<440);console.log(width,JSON.stringify(m));if(out)await card.screenshot({path:out+'/light-'+width+'.png'});
 }
 await page.evaluate(()=>{document.querySelector('#host').style.width='320px';document.body.classList.add('dark');});await page.emulateMedia({reducedMotion:'reduce'});if(out)await card.screenshot({path:out+'/dark-320.png'});
 await card.locator('.info').click();assert.deepEqual(await page.evaluate(()=>infos),[{entityId:'fan.example'}]);assert.equal(await page.evaluate(()=>calls.length),0);
 const slider=card.locator('#speed');await slider.focus();
 await page.evaluate(()=>{window.oldRange=card.shadowRoot.querySelector('#speed');card.hass={...card.hass,states:{...card.hass.states,'sensor.unrelated':{state:'9'}}};});assert.ok(await page.evaluate(()=>oldRange===card.shadowRoot.querySelector('#speed')));
 await slider.evaluate(el=>{el.value='75';el.dispatchEvent(new Event('input',{bubbles:true,composed:true}));});assert.equal(await page.evaluate(()=>calls.length),0);
 await slider.evaluate(el=>el.dispatchEvent(new Event('change',{bubbles:true,composed:true})));assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['fan','set_percentage',{percentage:75},{entity_id:'fan.example'}]);
 assert.ok(await page.evaluate(()=>oldRange===card.shadowRoot.querySelector('#speed')));
 await card.locator('#preset').selectOption('auto');assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['fan','set_preset_mode',{preset_mode:'auto'},{entity_id:'fan.example'}]);
 await card.locator('.oscillate').click();assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['fan','oscillate',{oscillating:true},{entity_id:'fan.example'}]);
 await card.locator('#direction').selectOption('reverse');assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['fan','set_direction',{direction:'reverse'},{entity_id:'fan.example'}]);
 await card.locator('.power').focus();await page.keyboard.press('Enter');assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['fan','turn_off',{},{entity_id:'fan.example'}]);
 await page.evaluate(()=>{card.hass.states['fan.example'].state='off';card.hass={...card.hass};});await card.locator('.power').click();assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['fan','turn_on',{},{entity_id:'fan.example'}]);
 // One pending request blocks both same and different controls, preserving range nodes.
 await page.evaluate(()=>window.hold=true);await card.locator('.power').click();assert.ok(await card.locator('#speed').isDisabled());
 await page.evaluate(()=>{void card._activate('power');void card._activate('speed',25);});assert.equal(await page.evaluate(()=>calls.length),7);
 await page.evaluate(()=>{window.hold=false;window.release();});await page.waitForFunction(()=>!card._busy);
 await page.evaluate(()=>window.failNext=true);await card.locator('.power').click();assert.match(await card.locator('.message').innerText(),/Request failed/);assert.doesNotMatch(await card.locator('.message').innerText(),/PRIVATE/);assert.ok(await card.locator('.power').isEnabled());
 await page.evaluate(()=>card.setConfig({...config,read_only:true}));assert.ok(await card.locator('.power').isDisabled());assert.ok(await card.locator('#speed').isDisabled());await card.locator('.info').click();assert.equal(await page.evaluate(()=>calls.length),8);
 await page.evaluate(()=>{card.setConfig(config);card.hass.states['fan.example'].attributes={...attrs,supported_features:0};card.hass={...card.hass};});assert.equal(await card.locator('input,select,.power,.oscillate').count(),0);
 await page.evaluate(()=>{card.hass.states['fan.example']={state:'unavailable',attributes:{...attrs}};card.hass={...card.hass};});assert.ok(await card.locator('#speed').isDisabled());assert.match(await card.locator('.status').innerText(),/Unavailable/);
 await page.evaluate(()=>{const hostile='"><img src=x onerror="window.pwned=1">';card.setConfig({...config,name:hostile,icon:hostile});card.hass.states['fan.example']={state:'on',attributes:{...attrs,preset_modes:[hostile]}};card.hass={...card.hass};});assert.equal(await card.locator('img,[onerror]').count(),0);assert.equal(await page.evaluate(()=>window.pwned),undefined);
 await page.evaluate(()=>card.setConfig({}));assert.match(await card.locator('.hint').innerText(),/Select a fan/);assert.equal(await card.locator('input,select,.power,.oscillate').count(),0);
 assert.deepEqual(errors,[]);console.log('PASS: all six exact fan services mocked; 8 calls including failure, busy/read-only/feature gates, focused range stability, keyboard, More Info, escaping, dark/reduced motion. No live HA.');
}finally{await browser.close();}
