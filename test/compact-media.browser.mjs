// Transparent suite test adaptation: the native long press uses the visible Compact title.
import{readFileSync,writeFileSync}from'node:fs';import{execFileSync}from'node:child_process';
if(!process.env.CARD_RESOURCE||!process.env.CARD_HARNESS_OUTPUT)throw Error('Set CARD_RESOURCE and a scratch CARD_HARNESS_OUTPUT for Compact Media verification.');
const source=readFileSync(new URL('../cards/media-player-card/test/browser.mjs',import.meta.url),'utf8'),from="card.locator('.player-name').boundingBox()",to="card.locator('.orbit-tile-name').boundingBox()";if(source.split(from).length!==2)throw Error('Native Media long-press test contract changed');
writeFileSync(process.env.CARD_HARNESS_OUTPUT,source.replace(from,to));execFileSync(process.execPath,[process.env.CARD_HARNESS_OUTPUT],{stdio:'inherit',env:process.env});
