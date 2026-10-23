// Existing Cloudflare Pages Direct Upload infrastructure; short-lived JWT on stdin only.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import readline from 'node:readline';
const rl=readline.createInterface({input:process.stdin});const token=await new Promise(resolve=>rl.once('line',resolve));rl.close();
if(!token)throw Error('Upload credential required on stdin');
const types={'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain','.jpg':'image/jpeg','.png':'image/png','.json':'application/json'};
const files=[];
function walk(dir){for(const name of fs.readdirSync(dir)){const p=path.join(dir,name);if(fs.statSync(p).isDirectory())walk(p);else if(!name.startsWith('_')){const data=fs.readFileSync(p),key=crypto.createHash('sha256').update(data).digest('hex').slice(0,32);files.push({path:'/'+path.relative('dist',p).split(path.sep).join('/'),key,value:data.toString('base64'),metadata:{contentType:types[path.extname(p)]||'application/octet-stream'},base64:true});}}}
walk('dist');
async function api(route,body){const r=await fetch('https://api.cloudflare.com/client/v4/pages/assets/'+route,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(body)});const j=await r.json();if(!j.success)throw Error(JSON.stringify(j.errors));return j.result;}
const hashes=files.map(f=>f.key),missing=new Set(await api('check-missing',{hashes}));const send=files.filter(f=>missing.has(f.key));for(let i=0;i<send.length;i+=20){await api('upload',send.slice(i,i+20).map(({path,...f})=>f));console.log('Uploaded',Math.min(i+20,send.length),'/',send.length);}
await api('upsert-hashes',{hashes});fs.writeFileSync('asset-manifest-100.json',JSON.stringify(Object.fromEntries(files.map(f=>[f.path,f.key]))));console.log(JSON.stringify({ready:true,assets:files.length,uploaded:send.length}));
