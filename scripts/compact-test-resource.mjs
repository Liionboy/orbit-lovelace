// Test-only fixture: force the existing interaction suites to pass layout: compact.
import {readFileSync,writeFileSync}from"node:fs";
if(!process.env.CARD_FIXTURE_OUTPUT)throw Error("Set CARD_FIXTURE_OUTPUT to a scratch JavaScript path, never an installed resource.");
const source=readFileSync(new URL("../dist/orbit-lovelace.js",import.meta.url),"utf8");
const wrapper=`;(()=>{for(const type of ["ha-select-orbit-card","ha-number-orbit-card","media-player-card"]){const p=customElements.get(type).prototype,original=p.setConfig;p.setConfig=function(config){const result=original.call(this,{...config,layout:"compact"});if(EXPANDED)this.setAttribute("data-orbit-details-open","");return result;};}})();`;
writeFileSync(process.env.CARD_FIXTURE_OUTPUT,source+wrapper.replace("EXPANDED",process.env.COMPACT_DETAILS==="expanded"?"true":"false"));
