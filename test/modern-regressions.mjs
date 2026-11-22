// Force Modern, Teal and Glow only in the synthetic harness, keeping every original assertion.
// This is NOT shipped in dist or used on a live Home Assistant instance.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {resolve} from 'node:path';
const root=new URL('../',import.meta.url),out=new URL('artifacts/palettes/regressions/',root);mkdirSync(out,{recursive:true});
const manifest=JSON.parse(readFileSync(new URL('components.json',root))),types=[...manifest.components,...manifest.nativeComponents].flatMap(c=>c.types);
const hook='\n;for(const type of '+JSON.stringify(types)+'){const C=customElements.get(type),original=C.prototype.setConfig;C.prototype.setConfig=function(config){const result=original.call(this,{...config,design:"modern",palette:"teal",glow:true});if(this.getAttribute("data-orbit-design")!=="modern")throw Error("Missing Modern presentation: "+type);return result;};}\n';
const forced=new URL('modern-resource.js',out);writeFileSync(forced,readFileSync(new URL('dist/orbit-lovelace.js',root),'utf8')+hook);
for(const script of ['test/controls.browser.mjs','cards/media-player-card/test/browser.mjs','test/bambu.browser.mjs','test/bambu-scroll.browser.mjs','test/frigate-live.browser.mjs']){
 console.log('Modern regression: '+script);execFileSync(process.execPath,[resolve(root.pathname,script)],{cwd:root,stdio:'inherit',env:{...process.env,CARD_RESOURCE:forced.pathname,SCREENSHOT_DIR:new URL(script.replaceAll('/','-')+'/',out).pathname}});
}
console.log('PASS Modern: original Controls, Media, Bambu, Bambu scroll and Frigate regression assertions, sequentially; synthetic HA only.');
