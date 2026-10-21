import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','app.js']) await copyFile(file,`dist/${file}`);
await cp('static','dist',{recursive:true});
console.log('Built static website in dist/');
