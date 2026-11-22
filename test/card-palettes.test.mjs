import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {applyCardPalettes,paletteCatalog,paletteTypes} from '../scripts/card-palettes.mjs';
import {componentSource,components,manifest} from '../scripts/build.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('six new palettes and four supported types have verified suite provenance',()=>{
 const f=manifest.suiteFeatures.find(f=>f.id==='card-palettes');assert.equal(f.sha256,createHash('sha256').update(read(f.source)).digest('hex'));assert.equal(f.catalogSha256,createHash('sha256').update(read(f.catalog)).digest('hex'));assert.equal(paletteCatalog.version,f.version);assert.deepEqual(f.types,paletteTypes);assert.equal(Object.keys(paletteCatalog.palettes).length,6);
});
for(const type of paletteTypes)test(type+' build adds actual editor/runtime colors without changing source pins',()=>{
 const c=components.find(c=>c.types.includes(type)),source=componentSource(c);
 for(const name of Object.keys(paletteCatalog.palettes)){assert.ok(source.includes('data-palette='+name));assert.ok(source.includes('"'+name+'"'));}
 assert.equal(createHash('sha256').update(read(c.source)).digest('hex'),c.sha256);
 assert.throws(()=>applyCardPalettes('changed source',c.id),/Palette contract changed/);
});
test('unrelated components remain byte-identical through palette transformation',()=>{
 for(const c of components.filter(c=>!c.types.some(t=>paletteTypes.includes(t))))assert.equal(applyCardPalettes(read(c.source),c.id),read(c.source));
});
test('palette CSS is before Room state and Chips neutral/alarm overrides',()=>{
 const room=componentSource(components.find(c=>c.id==='ha-room-orbit-card')),chips=componentSource(components.find(c=>c.id==='orbit-chips'));
 assert.ok(room.indexOf('data-palette=slate')<room.indexOf('ha-card[data-temperature=warm]'));
 assert.ok(chips.indexOf('.chip[data-palette=slate]')<chips.indexOf('.chip[data-active=false]'));
 for(const p of Object.values(paletteCatalog.palettes))for(const color of p.colors)assert.match(color,/^#[0-9a-f]{6}$/i);
 assert.ok(!read('scripts/card-palettes.mjs').includes('!important'));
});
