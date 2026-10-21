import {spawnSync} from 'node:child_process';import {manifest,root} from './build.mjs';
let files=0,nodeTests=0,smokeSuites=0;
for(const c of manifest.components)for(const file of c.upstreamTests){
 console.log('Sequential upstream test: '+c.id+'/'+file);
 const smoke=file.endsWith('smoke.mjs'),args=smoke?[file]:['--test','--test-concurrency=1',file];
 const result=spawnSync(process.execPath,args,{cwd:root+'/cards/'+c.id,encoding:'utf8'});
 if(result.status!==0){console.error(result.stdout,result.stderr);process.exit(result.status||1);}
 const match=result.stdout.match(/tests ([0-9]+)/);if(match)nodeTests+=Number(match[1]);if(smoke)smokeSuites++;files++;
 console.log(result.stdout.trim().split(String.fromCharCode(10)).slice(-8).join(String.fromCharCode(10)));
}
console.log(JSON.stringify({files,nodeTests,smokeSuites,parallel:false}));
