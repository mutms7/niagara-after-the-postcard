const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root=__dirname;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.ttf':'font/ttf','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8'};
const port=Number(process.env.PORT)||4173;
http.createServer((req,res)=>{
 let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
 const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 fs.stat(file,(error,stat)=>{if(error||!stat.isFile()){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});fs.createReadStream(file).pipe(res);});
}).listen(port,'0.0.0.0',()=>console.log(`Niagara is ready: http://localhost:${port}\nFor a phone on the same Wi-Fi, use this computer's LAN address with port ${port}.`));
