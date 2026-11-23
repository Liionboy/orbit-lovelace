import assert from 'node:assert/strict';
import {readFile, mkdir} from 'node:fs/promises';
import {compactFixtures} from './compact-fixtures.mjs';

const {chromium} = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const bundle = await readFile(process.env.ROOM_RESOURCE || new URL('../dist/orbit-lovelace.js', import.meta.url), 'utf8');
const iconPaths = JSON.parse(await readFile(new URL('fixtures/modern-icons.json', import.meta.url)));
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE ? {executablePath:process.env.CHROMIUM_EXECUTABLE} : {});
try {
 const page = await browser.newPage({viewport:{width:486,height:800},hasTouch:true});
 await page.setContent('<style>body{font:14px system-ui;background:var(--primary-background-color)}main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;align-items:start}</style><main></main>');
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
 for (const mode of ['light','dark']) for (const layout of ['normal','compact']) for (const width of [164,183,203,243,440]) {
  await page.evaluate(({mode,layout,width})=>{
   const host=document.querySelector('main');
   host.style.width=(width*2+8)+'px';
   document.documentElement.style.colorScheme=mode;
   for (const [key,value] of Object.entries(mode==='dark'
    ? {'primary-background-color':'#121724','card-background-color':'#181f30','primary-text-color':'#eef1f8','secondary-text-color':'#a6b1cb'}
    : {'primary-background-color':'#eaeef8','card-background-color':'#fff','primary-text-color':'#182238','secondary-text-color':'#56637e'})) document.documentElement.style.setProperty('--'+key,value);
   host.replaceChildren();
   const titles=['Pompa de căldură','Hol','Living room','Dormitor','Camera centrală'];
   const entities=['light.example','switch.example','climate.example','sensor.temperature'];
   for (const [count,title] of titles.entries()){
    const card=document.createElement('ha-room-orbit-card');
    const config={...compactConfigs['ha-room-orbit-card'],layout,design:'modern',glow:true,palette:count%2?'teal':'indigo',title,navigation_path:'/example/room'};
    for (let i=0;i<4;i++) config['entity_'+(i+1)]=i<count?entities[i]:'';
    card.setConfig(config);card.hass=compactHass;host.append(card);
   }
  },{mode,layout,width});
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
     assert.equal(button.width,44,'Modern shortcuts should not stretch across a grid column');
     if(width>=243) assert.ok(button.beside,'Shortcuts should sit beside Room identity');
    }
   }
   tested++;
  }
  if(layout==='normal' && width===243){
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
 console.log(tested+' Room geometry cases and native shortcut tap passed');
} finally { await browser.close(); }
