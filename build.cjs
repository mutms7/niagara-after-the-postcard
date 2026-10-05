const fs=require('node:fs');const path=require('node:path');
const out=path.join(__dirname,'dist');fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','style.css','script.js','image-credits.json','SOURCES.md'])fs.copyFileSync(path.join(__dirname,name),path.join(out,name));
fs.cpSync(path.join(__dirname,'assets'),path.join(out,'assets'),{recursive:true});console.log('Ready to share: dist/ (static files, no build dependencies).');
