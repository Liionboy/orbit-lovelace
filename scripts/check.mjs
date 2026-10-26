import {execFileSync} from 'node:child_process';import {readdirSync} from 'node:fs';import {root,components,componentSource} from './build.mjs';import vm from 'node:vm';
for(const file of ['dist/orbit-lovelace.js','docs/themes/preview.mjs',...readdirSync(root+'/scripts').filter(f=>f.endsWith('.mjs')).map(f=>'scripts/'+f),...readdirSync(root+'/test').filter(f=>f.endsWith('.mjs')).map(f=>'test/'+f)])execFileSync(process.execPath,['--check',root+'/'+file],{stdio:'inherit'});
for(const c of components)new vm.Script(componentSource(c),{filename:c.source});
console.log('Syntax: suite, tooling and '+components.length+' isolated component sources passed.');
