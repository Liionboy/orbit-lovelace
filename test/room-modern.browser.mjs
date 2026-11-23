import assert from 'node:assert/strict';
import {readFile, mkdir} from 'node:fs/promises';
import {compactFixtures} from './compact-fixtures.mjs';

const engines = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const bundle = await readFile(process.env.ROOM_RESOURCE || new URL('../dist/orbit-lovelace.js', import.meta.url), 'utf8');
const satinTheme=JSON.parse(await readFile(new URL('../themes/catalog.json',import.meta.url))).themes['Orbit Satin'].modes;
const iconPaths = JSON.parse(await readFile(new URL('fixtures/modern-icons.json', import.meta.url)));
const browser = await engines[process.env.ROOM_BROWSER || 'chromium'].launch(process.env.CHROMIUM_EXECUTABLE ? {executablePath:process.env.CHROMIUM_EXECUTABLE} : {});
try {
 const page = await browser.newPage({viewport:{width:390,height:800},hasTouch:true,isMobile:true});
 await page.setContent('<meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:14px system-ui;background:var(--primary-background-color)}main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;align-items:start}</style><main></main>');
 await page.evaluate(paths => {
  customElements.define('ha-card',class extends HTMLElement{connectedCallback(){this.style.display='block';}});
  customElements.define('ha-icon',class extends HTMLElement{connectedCallback(){
   this.style.cssText='display:inline-flex;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)';
   this.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="'+(paths[this.getAttribute('icon')] || 'M4 10l8-7 8 7v10h-6v-6h-4v6H4Z')+'"/></svg>';
  }});
 }, iconPaths);
 await page.addScriptTag({content:bundle});
 await page.evaluate(compactFixtures);
 let tested = 0;
 for (const mode of ['light','dark']) for (const layout of ['normal','compact']) for (const width of [144,164,183,203,243,440]) {
  await page.evaluate(({mode,layout,width,vars})=>{
   const host=document.querySelector('main');
   host.style.width=(width*2+8)+'px';
   document.documentElement.style.colorScheme=mode;
   for (const [key,value] of Object.entries(vars)) document.documentElement.style.setProperty('--'+key,value);
   host.replaceChildren();
   const titles=['Pompa de căldură','Hol','Living room','Dormitor','Camera centrală'];
   const entities=['light.example','switch.example','climate.example','sensor.temperature'];
   for (const [count,title] of titles.entries()){
    const card=document.createElement('ha-room-orbit-card');
    const config={...compactConfigs['ha-room-orbit-card'],layout,design:'modern',glow:true,satin:true,palette:count%2?'teal':'indigo',title,navigation_path:'/example/room'};
    for (let i=0;i<4;i++) config['entity_'+(i+1)]=i<count?entities[i]:'';
    card.setConfig(config);
    const temperature=compactHass.states['sensor.temperature'];
    card.hass={...compactHass,states:{...compactHass.states,'sensor.temperature':{...temperature,state:count===0?'19.8':'23.3'}}};host.append(card);
   }
  },{mode,layout,width,vars:satinTheme[mode]});
  const metrics=await page.evaluate(()=>Array.from(document.querySelector('main').children,card=>{
   const root=card.shadowRoot, summary=root.querySelector('.summary').getBoundingClientRect(), identity=root.querySelector('.identity').getBoundingClientRect();
   return {height:card.getBoundingClientRect().height,shortcuts:[...root.querySelectorAll('.quick')].map(button=>{
    const r=button.getBoundingClientRect();
    return {width:r.width,height:r.height,right:r.right<=summary.right+1,beside:r.left>=identity.right-1,accessible:!!button.getAttribute('aria-label')};
   })};
  }));
  for (const [count,{shortcuts}] of metrics.entries()){
   assert.equal(shortcuts.length,count);
   for (const button of shortcuts){
    assert.ok(button.right && button.accessible && button.height>=44);
    if(layout==='normal'){
     const expectedWidth = width<=216 && count>=3 ? 40 : 44;
     assert.equal(button.width,expectedWidth,'Shortcut width must stay bounded');
     if(width>=164) assert.ok(button.beside,'Shortcuts must sit beside Room identity even on phones');
    }
   }
   tested++;
  }
  if(layout==='normal' && width===183){
   assert.ok(metrics[4].height<=165,JSON.stringify(metrics));
   if(process.env.SCREENSHOT_DIR){
    const out=process.env.SCREENSHOT_DIR;await mkdir(out,{recursive:true});
    await page.locator('main').screenshot({path:out+'/room-modern-'+mode+'.png'});
   }
  }
 }
 const button=page.locator('ha-room-orbit-card').nth(2).locator('.quick').first();
 await button.tap();
 assert.deepEqual(await page.evaluate(()=>calls.at(-1)),['light','toggle',{entity_id:'light.example'}]);
 const effects = await page.evaluate(() => {
  const card = document.querySelector('ha-room-orbit-card');
  const config = {...compactConfigs['ha-room-orbit-card'],design:'modern',glow:true,palette:'teal'};
  const state = compactHass.states['sensor.temperature'];
  const shadow = () => getComputedStyle(card.shadowRoot.querySelector('ha-card')).boxShadow;
  const update = (reading,unit='°C',connected=true) => {
   card.hass={...compactHass,connected,states:{...compactHass.states,'sensor.temperature':{
    ...state,state:reading,attributes:{...state.attributes,unit_of_measurement:unit}
   }}};
   return shadow();
  };
  card.setConfig(config);
  const cold = update('21.9');
  const amber = update('22');
  const hot = update('27');
  const fahrenheit = update('71.6','°F');
  const kelvin = update('295.15','K');
  const unavailable = update('unavailable');
  const unsupported = update('25','%');
  const offline = update('25','°C',false);
  const live = update('27');
  card.setConfig({...config,glow:false});
  return {cold,amber,hot,fahrenheit,kelvin,unavailable,unsupported,offline,live,off:shadow()};
 });
 assert.match(effects.cold,/21px 3px/);
 assert.match(effects.amber,/21px 2px/);
 assert.notEqual(effects.amber,effects.hot);
 assert.equal(effects.fahrenheit,effects.amber);
 assert.equal(effects.kelvin,effects.amber);
 assert.equal(effects.unavailable,effects.unsupported);
 assert.equal(effects.unavailable,effects.offline);
 assert.equal(effects.live,effects.hot);
 assert.notEqual(effects.off,effects.hot);
 console.log(tested+' Room geometry cases and native shortcut tap passed');
} finally { await browser.close(); }
