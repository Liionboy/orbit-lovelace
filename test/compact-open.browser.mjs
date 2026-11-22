import assert from 'node:assert/strict';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {compactFixtures} from './compact-fixtures.mjs';
const{chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
let source=await readFile(new URL('../dist/orbit-lovelace.js',import.meta.url),'utf8'),manifest=JSON.parse(await readFile(new URL('../components.json',import.meta.url),'utf8')),catalog=JSON.parse(await readFile(new URL('../themes/catalog.json',import.meta.url),'utf8'));
const types=[...manifest.components,...manifest.nativeComponents].flatMap(c=>c.types),out=process.env.SCREENSHOT_DIR;if(out)await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
const errors=[],measurements=[];
const baseline=process.env.BASELINE_RESOURCE?await readFile(process.env.BASELINE_RESOURCE,'utf8'):null, snapshots=new Map();let cases=0;
try{
 for(const old of baseline?[true,false]:[false]){source=old?baseline:await readFile(new URL('../dist/orbit-lovelace.js',import.meta.url),'utf8');
 const page=await browser.newPage({viewport:{width:1000,height:1000},hasTouch:true});page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',route=>{const u=new URL(route.request().url());assert.equal(u.origin,'http://compact.test');if(u.pathname==='/card.js')return route.fulfill({contentType:'application/javascript',body:source});if(u.pathname==='/snapshot.svg')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="#4e6976"/><text x="20" y="90" fill="white">Synthetic camera</text></svg>'});return route.fulfill({contentType:'text/html; charset=utf-8',body:'<!doctype html><meta charset="utf-8"><style>body{margin:0;padding:12px;background:var(--primary-background-color,#f1f3f7);color:var(--primary-text-color,#202b3c);font:14px system-ui}#host{width:440px;max-width:100%}#edit{width:440px}ha-card{display:block}</style><div id="host"></div><div id="edit"></div><script>customElements.define("ha-card",class extends HTMLElement{connectedCallback(){this.style.display="block";}});customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;flex:none;align-items:center;justify-content:center;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)";}});</script><script type="module" src="/card.js"></script>'});});
 await page.goto('http://compact.test');await page.waitForFunction(()=>window.orbitLovelace?.compact);await page.clock.install({time:new Date('2026-10-27T12:00:00Z')});await page.evaluate(compactFixtures);
 await page.evaluate(()=>{window.mount=async(type,layout)=>{document.querySelector('#host').replaceChildren();const card=document.createElement(type),config={...compactConfigs[type],...(layout?{layout}:{})};card.setConfig(config);card.hass=compactHass;document.querySelector('#host').append(card);if(card.updateComplete)await card.updateComplete;await new Promise(r=>queueMicrotask(r));window.card=card;return{height:card.getBoundingClientRect().height,compact:card.getAttribute('data-orbit-layout')};};});

 for(const type of types)for(const design of ['classic','modern'])for(const mode of ['light','dark'])for(const width of [164,243,440]){
  const key=[type,design,mode,width].join('/');
  const row=await page.evaluate(async({type,design,mode,width,vars,old})=>{
   document.documentElement.removeAttribute('style');for(const[k,v]of Object.entries(vars))document.documentElement.style.setProperty('--'+k,v);
   document.querySelector('#host').style.width=width+'px';
   await mount(type,'compact');card.setConfig({...compactConfigs[type],layout:'compact',design,palette:'teal'});
   if(old)card.setAttribute('data-orbit-details-open','');
   await Promise.resolve();await Promise.resolve();
   const root=card.shadowRoot,visible=n=>!!n.getClientRects().length&&getComputedStyle(n).display!=='none';
   const inspect=()=>({arrow:root.querySelectorAll('.orbit-compact-disclosure').length,open:card.hasAttribute('data-orbit-details-open'),details:card._orbitProfile.details.map(s=>[s,[...root.querySelectorAll(s)].filter(visible).map(n=>n.textContent.trim())]),overflow:[...root.querySelectorAll('.value,.reading-value,.metric-value,.orbit-tile-name,.orbit-tile-state')].filter(n=>visible(n)&&n.scrollWidth>n.clientWidth+1).map(n=>n.className),height:card.getBoundingClientRect().height});
   const first=inspect(),before=calls.length;window.savedNative=[...root.querySelectorAll('input,select,button')];
   card.hass={...compactHass};await Promise.resolve();
   const stable=savedNative.every(n=>n.isConnected);
   card.remove();document.querySelector('#host').append(card);await Promise.resolve();
   return {...first,reconnectedOpen:card.hasAttribute('data-orbit-details-open'),writes:calls.length-before,stable};
  },{type,design,mode,width,vars:catalog.themes['Orbit Prism'].modes[mode],old});
  if(old)snapshots.set(key,row);
  else{assert.equal(row.arrow,0,key+' no disclosure');assert.equal(row.open,true,key+' details automatically open');assert.equal(row.reconnectedOpen,true,key+' remains open after reconnect');assert.equal(row.writes,0,key+' no incidental writes');assert.deepEqual(row.overflow,[],key+' complete readings');assert.equal(row.stable,true,key+' hass retains native controls');if(baseline)assert.deepEqual(row.details,snapshots.get(key).details,key+' retains every previously expanded detail');measurements.push({type,design,mode,width,...row});cases++;}
 }
 assert.deepEqual(await page.evaluate(()=>calls),[]);await page.close();
 }
 assert.deepEqual(errors,[]);if(out)await writeFile(out+'/verification.json',JSON.stringify({cases,types:types.length,comparedWithExpandedBeta3:!!baseline,measurements,syntheticHA:true,nativeHA:false},null,2));
 console.log('PASS always-open Compact: '+cases+' all-card design/mode/width cases, expanded-content equivalence, no arrows, live updates/reconnect and zero incidental writes.');
}finally{await browser.close();}

