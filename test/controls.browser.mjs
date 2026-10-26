import assert from 'node:assert/strict';
import {readFile,mkdir} from 'node:fs/promises';
const{chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const source=await readFile(process.env.CARD_RESOURCE||new URL('../src/orbit-controls.js',import.meta.url),'utf8');
const catalog=JSON.parse(await readFile(new URL('../themes/catalog.json',import.meta.url),'utf8'));
const out=process.env.SCREENSHOT_DIR;if(out)await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
try{
 const page=await browser.newPage({viewport:{width:900,height:800},hasTouch:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>{const u=new URL(r.request().url());assert.equal(u.origin,'http://controls.test','No external requests');return r.fulfill({contentType:u.pathname==='/card.js'?'application/javascript':'text/html; charset=utf-8',body:u.pathname==='/card.js'?source:'<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:12px;background:var(--primary-background-color,#f1f3f7);font:14px system-ui}#host{width:440px;max-width:100%}</style><div id="host"></div><script>customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);align-items:center;justify-content:center";}});</script><script type="module" src="/card.js"></script>'});});
 await page.goto('http://controls.test');await page.waitForFunction(()=>customElements.get('ha-select-orbit-card'));
 await page.clock.install();
 await page.evaluate(catalog=>{
  window.catalog=catalog;window.calls=[];window.infos=[];window.queries=[];
  window.hass={states:{'select.example':{state:'Eco',attributes:{friendly_name:'Operating profile',options:['Eco','Normal','Boost']}},'input_select.example':{state:'Eco',attributes:{friendly_name:'Room profile',options:['Eco','Normal','Boost']}}},services:{select:{select_option:{}},input_select:{select_option:{}},number:{set_value:{}},input_number:{set_value:{}}},connection:{connected:true},callService:(...a)=>{calls.push(a);if(window.delay)return new Promise((resolve,reject)=>{window.resolve=resolve;window.reject=reject;});if(window.fail)return Promise.reject(Error('synthetic error'));return Promise.resolve();},callWS:(...a)=>{queries.push(a);return Promise.resolve([]);}};
  window.mount=(type,config)=>{document.querySelector('#host').replaceChildren();window.card=document.createElement(type);card.setConfig(config);card.hass=hass;card.addEventListener('hass-more-info',e=>infos.push(e.detail));document.querySelector('#host').append(card);};
  window.theme=(name,mode)=>{document.documentElement.removeAttribute('style');if(name)for(const[k,v]of Object.entries(catalog.themes[name].modes[mode]))document.documentElement.style.setProperty('--'+k,v);};
  mount('ha-select-orbit-card',{entity:'select.example'});
 },catalog);
 const select=page.locator('ha-select-orbit-card'),field=select.locator('select');
 const bounds=async(label)=>{const r=await page.locator('#host').evaluate(el=>{const c=el.firstElementChild,outer=c.getBoundingClientRect();return{width:outer.width,height:outer.height,overflow:[...c.shadowRoot.querySelectorAll('.name,.value,.field,.feedback,.meta,.stepper,.apply')].filter(n=>n.getClientRects().length&&(n.scrollWidth>n.clientWidth+1||n.getBoundingClientRect().right>outer.right+1)).map(n=>n.className)};});assert.deepEqual(r.overflow,[],label);assert.ok(r.height<(label.includes('box')?480:420),label+': '+r.height);if(out)await page.locator('#host').screenshot({path:out+'/'+label+'.png'});};
 for(const width of [440,243,200,164]){await page.evaluate(w=>document.querySelector('#host').style.width=w+'px',width);await bounds('select-'+width);}
 await page.evaluate(()=>{document.querySelector('#host').style.width='320px';window.delay=true;window.before=card.shadowRoot.querySelector('select');});
 await field.selectOption('1');assert.equal(await select.locator('.feedback').textContent(),'Sending…');assert.equal(await field.isDisabled(),true);
 assert.equal(await select.locator('.value').textContent(),'Eco');
 await page.evaluate(()=>{card.hass={...hass,states:{...hass.states,'sensor.unrelated':{state:'42'}}};});assert.equal(await page.evaluate(()=>before===card.shadowRoot.querySelector('select')),true);
 await page.evaluate(()=>resolve());await page.waitForFunction(()=>!card._pending);assert.match(await select.locator('.feedback').textContent(),/Command sent/);assert.deepEqual(await page.evaluate(()=>calls),[['select','select_option',{entity_id:'select.example',option:'Normal'}]]);
 await page.evaluate(()=>{hass.states['select.example'].state='Normal';card.hass=hass;window.delay=false;});assert.equal(await select.locator('.value').textContent(),'Normal');
 await field.focus();await page.keyboard.press('ArrowDown');await page.keyboard.press('Enter');await page.waitForFunction(()=>!card._pending);assert.equal(await page.evaluate(()=>calls.at(-1)[2].option),'Boost');
 await page.evaluate(()=>{mount('ha-select-orbit-card',{entity:'input_select.example'});window.fail=true;});await field.selectOption('1');await page.waitForFunction(()=>!card._pending);assert.match(await select.locator('.feedback').textContent(),/Command failed/);assert.equal(await select.locator('.value').textContent(),'Eco');
 await page.evaluate(()=>{window.fail=false;window.delay=true;});await field.selectOption('2');await page.clock.fastForward(15001);assert.match(await select.locator('.feedback').textContent(),/Result unknown/);const count=await page.evaluate(()=>calls.length);await page.evaluate(()=>resolve());assert.equal(await page.evaluate(()=>calls.length),count);assert.match(await select.locator('.feedback').textContent(),/Result unknown/);
 await page.evaluate(()=>{window.delay=false;mount('ha-select-orbit-card',{entity:'select.example'});});await field.focus();await page.evaluate(()=>{hass.states['select.example'].attributes.options=['Eco'];card.hass=hass;});const beforeCount=await page.evaluate(()=>calls.length);await field.selectOption('2');assert.equal(await page.evaluate(()=>calls.length),beforeCount);assert.match(await select.locator('.feedback').textContent(),/Not sent/);
 await page.evaluate(()=>{mount('ha-select-orbit-card',{entity:'select.example',read_only:true});});assert.equal(await field.isDisabled(),true);await select.locator('.info').tap();assert.deepEqual(await page.evaluate(()=>infos.at(-1)),{entityId:'select.example'});
 await page.evaluate(()=>{const hostile='<img src=https://tracker.invalid onerror=alert(1)>';hass.states['select.example']={state:hostile,attributes:{friendly_name:hostile,options:[hostile,'Eco']}};mount('ha-select-orbit-card',{entity:'select.example',name:hostile,icon:hostile});});assert.equal(await select.locator('img,[onerror]').count(),0);assert.match(await select.locator('.name').textContent(),/<img/);
 await page.evaluate(()=>{hass.states['select.example']={state:'Eco',attributes:{friendly_name:'Operating profile',options:['Eco','Normal','Boost']}};mount('ha-select-orbit-card',{entity:'select.example'});});
 for(const mode of ['light','dark']){await page.evaluate(mode=>theme('Orbit Graphite',mode),mode);await bounds('select-themed-'+mode);}
 for(const state of ['unknown','unavailable']){await page.evaluate(state=>{hass.states['select.example'].state=state;card.hass=hass;},state);assert.equal(await field.isDisabled(),true);}
 console.log('PASS Select: native dropdown/keyboard, phone widths, stable controls, exact services, pending/error/timeout, stale options, read-only/More Info, escaping and themes.');
 await page.evaluate(()=>{
  hass.states['number.example']={state:'0.2',attributes:{friendly_name:'Target level',min:0,max:1,step:0.1,unit_of_measurement:'V'}};
  hass.states['input_number.example']={state:'-0.25',attributes:{friendly_name:'Fine adjustment',min:-1,max:1,step:0.25,mode:'box',unit_of_measurement:'°C'}};
  mount('ha-number-orbit-card',{entity:'number.example'});
 });
 const number=page.locator('ha-number-orbit-card'),slider=number.locator('.slider'),box=number.locator('.box');
 for(const width of [440,243,200,164]){await page.evaluate(w=>document.querySelector('#host').style.width=w+'px',width);await bounds('number-slider-'+width);}
 await page.evaluate(()=>{document.querySelector('#host').style.width='350px';window.delay=true;window.beforeSlider=card.shadowRoot.querySelector('.slider');window.callCount=calls.length;});
 await slider.focus();await page.keyboard.press('ArrowRight');assert.ok(await page.evaluate(()=>!!card._pending));assert.equal(await number.locator('.value').textContent(),'0.2 V');assert.equal(await slider.isDisabled(),true);
 assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['number','set_value',{entity_id:'number.example',value:0.3}]);
 await page.evaluate(()=>{card.hass={...hass,states:{...hass.states,'sensor.unrelated':{state:'99'}}};});assert.equal(await page.evaluate(()=>beforeSlider===card.shadowRoot.querySelector('.slider')),true);
 await page.evaluate(()=>resolve());await page.waitForFunction(()=>!card._pending);assert.equal(await number.locator('.value').textContent(),'0.2 V');
 await page.evaluate(()=>{window.delay=false;hass.states['number.example'].state='0.3';card.hass=hass;});assert.equal(await number.locator('.value').textContent(),'0.3 V');
 await number.locator('.range-row [data-cmd=up]').tap();await page.waitForFunction(()=>!card._pending);assert.equal(await page.evaluate(()=>calls.at(-1)[2].value),0.4);
 // Repeated acknowledgments without a new HA state cannot flood identical writes.
 const once=await page.evaluate(()=>calls.length);await number.locator('.range-row [data-cmd=up]').tap();assert.equal(await page.evaluate(()=>calls.length),once);
 await page.evaluate(()=>{hass.states['number.example'].state='1';card.hass=hass;});assert.equal(await number.locator('.range-row [data-cmd=up]').isDisabled(),true);
 await page.evaluate(()=>{hass.states['number.example'].state='0';card.hass=hass;});assert.equal(await number.locator('.range-row [data-cmd=down]').isDisabled(),true);
 await page.evaluate(()=>mount('ha-number-orbit-card',{entity:'input_number.example'}));assert.equal(await box.isVisible(),true);
 const beforeBox=await page.evaluate(()=>calls.length);await box.fill('0.5');assert.match(await number.locator('.draft').textContent(),/not sent/);await box.blur();assert.equal(await page.evaluate(()=>calls.length),beforeBox);
 await number.locator('.apply').tap();await page.waitForFunction(()=>!card._pending);assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['input_number','set_value',{entity_id:'input_number.example',value:0.5}]);assert.equal(await number.locator('.value').textContent(),'-0.25 °C');
 const invalidCount=await page.evaluate(()=>calls.length);await box.fill('0.3');await box.press('Enter');assert.equal(await page.evaluate(()=>calls.length),invalidCount);assert.match(await number.locator('.feedback').textContent(),/Not sent/);
 await box.fill('5');await number.locator('.apply').tap();assert.equal(await page.evaluate(()=>calls.length),invalidCount);
 await box.fill('0.25');await box.press('Escape');assert.equal(await box.inputValue(),'-0.25');assert.equal(await page.evaluate(()=>calls.length),invalidCount);
 await box.fill('0.25');await page.evaluate(()=>{hass.states['input_number.example'].attributes.step=0.5;card.hass=hass;});await box.press('Enter');assert.equal(await page.evaluate(()=>calls.length),invalidCount);
 await page.evaluate(()=>{hass.states['input_number.example'].attributes.step=0.25;card.hass=hass;});await box.fill('0.25');await page.evaluate(()=>{hass.states['input_number.example'].attributes.unit_of_measurement='°F';card.hass=hass;});await box.press('Enter');assert.equal(await page.evaluate(()=>calls.length),invalidCount);assert.match(await number.locator('.feedback').textContent(),/unit changed/);
 await page.evaluate(()=>{hass.states['input_number.example'].attributes.unit_of_measurement='°C';card.hass=hass;});
 await page.evaluate(()=>{hass.states['input_number.example'].attributes.step=0.25;mount('ha-number-orbit-card',{entity:'input_number.example',read_only:true});});assert.equal(await box.isDisabled(),true);await number.locator('.info').tap();assert.deepEqual(await page.evaluate(()=>infos.at(-1)),{entityId:'input_number.example'});
 for(const width of [440,243,200,164]){await page.evaluate(w=>document.querySelector('#host').style.width=w+'px',width);await bounds('number-box-'+width);}
 await page.evaluate(()=>{hass.states['number.example'].state='0.2';mount('ha-number-orbit-card',{entity:'number.example'});document.querySelector('#host').style.width='350px';});
 // Native pointer drag commits once; input previews and cancellation are command-free.
 const prior=await page.evaluate(()=>calls.length);const rect=await slider.boundingBox();await page.mouse.move(rect.x+rect.width*.2,rect.y+rect.height/2);await page.mouse.down();await page.mouse.move(rect.x+rect.width*.7,rect.y+rect.height/2,{steps:4});assert.equal(await page.evaluate(()=>calls.length),prior);await page.mouse.up();await page.waitForFunction(()=>!card._pending);assert.equal(await page.evaluate(()=>calls.length),prior+1);
 const cdp=await page.context().newCDPSession(page);const cancelPrior=await page.evaluate(()=>calls.length);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:rect.x+rect.width*.2,y:rect.y+rect.height/2}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:rect.x+rect.width*.8,y:rect.y+rect.height/2}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchCancel',touchPoints:[]});assert.equal(await page.evaluate(()=>calls.length),cancelPrior);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:rect.x+rect.width*.2,y:rect.y+rect.height/2}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:rect.x+rect.width*.9,y:rect.y+rect.height/2}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForFunction(()=>!card._pending);assert.equal(await page.evaluate(()=>calls.length),cancelPrior+1);
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>{document.querySelector('#host').style.width='100%';});
 for(const mode of ['light','dark']){await page.evaluate(mode=>theme('Orbit Graphite',mode),mode);await bounds('number-themed-'+mode);}
 await page.evaluate(()=>{hass.states['number.example'].attributes.min=undefined;card.hass=hass;});assert.equal(await slider.isDisabled(),true);
 await page.evaluate(()=>{card.hass={...hass,connection:{connected:false}};});assert.equal(await slider.isDisabled(),true);
 assert.deepEqual(await page.evaluate(()=>queries),[]);assert.deepEqual(errors,[]);console.log('PASS Number: exact decimals/limits, slider keyboard and pointer commit, cancel/no writes, box draft/Apply/Enter/Escape, current-limit recheck, stable controls, themes/phone/More Info.');
 const gridCalls=await page.evaluate(()=>calls.length);await page.evaluate(()=>{
  hass.states['number.example']={state:'21.5',attributes:{friendly_name:'Target setting',min:16,max:30,step:.5,unit_of_measurement:'°C'}};hass.states['select.example'].state='Eco';
  const host=document.querySelector('#host');host.replaceChildren();host.style.cssText='display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;width:100%;align-items:start';
  for(const[type,entity]of [['ha-select-orbit-card','select.example'],['ha-number-orbit-card','number.example']]){const c=document.createElement(type);c.setConfig({entity});c.hass=hass;host.append(c);}
 });
 for(const width of [360,390,430]){await page.setViewportSize({width,height:844});for(const mode of ['light','dark']){await page.evaluate(mode=>theme('Orbit Graphite',mode),mode);const overflow=await page.locator('#host').evaluate(host=>[...host.children].flatMap(c=>[...c.shadowRoot.querySelectorAll('.field,.name,.value,.feedback')].filter(n=>n.getClientRects().length&&n.scrollWidth>n.clientWidth+1).map(n=>n.className)));assert.deepEqual(overflow,[]);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);if(out)await page.locator('#host').screenshot({path:out+'/controls-phone-'+mode+'-'+width+'.png'});}}
 assert.equal(await page.evaluate(()=>calls.length),gridCalls);console.log('PASS two native controls side by side at360/390/430px, light/dark; no incidental writes. Synthetic HA/icons; no physical Companion claim.');
}finally{await browser.close();}
