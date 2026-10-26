import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {compactFixtures} from './compact-fixtures.mjs';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
if(!process.env.DENSITY_BASELINE_RESOURCE)throw Error('Set DENSITY_BASELINE_RESOURCE to released v1.12.0-beta.1');
const sources=[await readFile(process.env.DENSITY_BASELINE_RESOURCE,'utf8'),await readFile(new URL('../dist/orbit-lovelace.js',import.meta.url),'utf8')];
// Explicit per-card probes: [text, glyph, glyph measurement, decorative wrapper].
const probes={
'ha-alerts-orbit-card':['h2','.orbit ha-icon','width','.orbit'],
'ha-battery-orbit-card':['h2','.orbit ha-icon','width','.orbit'],
'ha-fan-orbit-card':['.name','.orbit ha-icon','width','.orbit'],
'ha-nas-orbit-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'ha-person-orbit-card':['.name','.avatar ha-icon','width','.avatar'],
'ha-room-orbit-card':['h2','.room-icon ha-icon','width','.room-icon'],
'ha-scenes-orbit-card':['h2','.header>ha-icon','width'],
'ha-sensor-graph-orbit-card':['h2','header ha-icon','width'],
'ha-server-orbit-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'ha-speedtest-orbit-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'unifi-orbit-card':['h2','.core-icon','fontSize'],
'unifi-command-center-card':['.cc-title','.cc-mark','fontSize','.cc-mark'],
'ha-vacuum-commander-card':['.header-title','.icon-wrap ha-icon','width','.icon-wrap'],
'ha-weather-orbit-card':['.clock','.orbit ha-icon','width','.orbit'],
'ha-welcome-orbit-card':['h1','.weather>ha-icon','width'],
'action-button-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'alecoair-dehumidifier-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'animated-gate-card':['.title','.mark','fontSize','.mark'],
'climate-control-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'frigate-control-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'home-connect-washer-card':['.title','.brand-mark','fontSize','.brand-mark'],
'hp-printer-card':['h2','.mark svg','width','.mark'],
'luma-control-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'pihole-control-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'sensor-meter-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'switch-control-card':['.title','.icon-wrap ha-icon','width','.icon-wrap'],
'media-player-card':['.player-name','.brand-icon ha-icon','width','.brand-icon'],
'temperature-humidity-card':['.title','.brand-icon ha-icon','width','.brand-icon'],
'ha-select-orbit-card':['.name','.orbit ha-icon','width','.orbit'],
'ha-number-orbit-card':['.name','.orbit ha-icon','width','.orbit']};
const manifest=JSON.parse(await readFile(new URL('../components.json',import.meta.url),'utf8'));
assert.deepEqual(Object.keys(probes).sort(),[...manifest.components,...manifest.nativeComponents].flatMap(c=>c.types).sort());
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});const samples=[];
try{for(const source of sources){const page=await browser.newPage({viewport:{width:1000,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.route('**/*',route=>{const u=new URL(route.request().url());assert.equal(u.origin,'http://density.test');if(u.pathname==='/card.js')return route.fulfill({contentType:'application/javascript',body:source});if(u.pathname==='/snapshot.svg')return route.fulfill({contentType:'image/svg+xml',body:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="#456"/></svg>'});return route.fulfill({contentType:'text/html; charset=utf-8',body:'<!doctype html><meta charset="utf-8"><style>body{margin:0;font:14px system-ui}#host{width:440px}ha-card{display:block}</style><div id="host"></div><script>customElements.define("ha-card",class extends HTMLElement{});customElements.define("ha-icon",class extends HTMLElement{connectedCallback(){this.textContent="◇";this.style.cssText="display:inline-flex;flex:none;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px)";}});</script><script src="/card.js"></script>'});});
await page.goto('http://density.test');await page.waitForFunction(()=>window.orbitLovelace?.compact);await page.clock.install({time:new Date('2026-10-27T12:00:00Z')});await page.clock.pauseAt(new Date('2026-10-27T12:01:00Z'));await page.evaluate(compactFixtures);
const rows=[];for(const width of [164,243,440])for(const[type,probe]of Object.entries(probes))for(const layout of ['normal','compact']){rows.push(await page.evaluate(async({type,probe,width,layout})=>{const host=document.querySelector('#host');host.style.width=width+'px';host.replaceChildren();const c=document.createElement(type);c.setConfig({...compactConfigs[type],...(layout==='compact'?{layout}: {})});c.hass=compactHass;host.append(c);if(c.updateComplete)await c.updateComplete;await new Promise(r=>queueMicrotask(r));const height=c.getBoundingClientRect().height;
if(type==='unifi-orbit-card'&&layout==='compact'){c.shadowRoot.querySelector('.orbit-compact-disclosure')?.click();await new Promise(r=>queueMicrotask(r));}
const get=s=>{const n=c.shadowRoot.querySelector(s);if(!n)throw Error(type+' missing probe '+s);if(!n.getClientRects().length)throw Error(type+' hidden probe '+s);return n;},text=get(probe[0]),glyph=get(probe[1]),wrap=probe[3]?get(probe[3]):null;
return{type,width,layout,height,font:parseFloat(getComputedStyle(text).fontSize),glyph:parseFloat(getComputedStyle(glyph)[probe[2]]),wrap:wrap?Math.max(wrap.getBoundingClientRect().width,wrap.getBoundingClientRect().height):null};},{type,probe,width,layout}));}
assert.deepEqual(errors,[]);assert.deepEqual(await page.evaluate(()=>calls),[]);samples.push(rows);await page.close();}
const comparisons=[];for(let i=0;i<samples[0].length;i++){const before=samples[0][i],after=samples[1][i],label=after.type+' '+after.width+' '+after.layout;if(after.layout==='normal'){assert.deepEqual(after,before,label+' unchanged');continue;}assert.ok(after.font<before.font,label+' smaller text');assert.ok(after.glyph<before.glyph,label+' smaller glyph');if(after.wrap!==null)assert.ok(after.wrap<before.wrap,label+' smaller decorative wrapper');assert.ok(after.height<=before.height+1,label+' no height growth');comparisons.push({before,after});}
if(process.env.DENSITY_OUTPUT)await writeFile(process.env.DENSITY_OUTPUT,JSON.stringify({baseline:'1.12.0-beta.1',version:manifest.version,syntheticHA:true,stubIcons:true,comparisons},null,2)+String.fromCharCode(10));
console.log('PASS90 matched compact font/glyph/decoration comparisons at164/243/440px; all30 smaller text+glyphs, no summary height growth.90 normal snapshots unchanged. Mock HA/icons only.');
}finally{await browser.close();}
