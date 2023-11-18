// import { mkdir } from 'node:fs';

const fs = require('fs');
const folderName = process.argv[2] || 'project';

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('apple', { recursive: true }, (err) => {
//     console.log("di dalam collback");
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/style.css`, '');
    fs.writeFileSync(`${folderName}/main.js`, '');
    console.log("berhasil dubuat");
} catch (error) {
    console.log(error);
    console.log("file telah ada");
}