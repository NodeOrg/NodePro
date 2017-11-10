let fs=require('fs'),zlib=require('zlib');
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log('链式流执行文件压缩完毕');