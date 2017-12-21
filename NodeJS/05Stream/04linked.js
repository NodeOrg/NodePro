/*
 * @Author: dyh 
 * @Date: 2017-12-21 10:39:08 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 11:38:42
 */
let fs=require('fs'),zlib=require('zlib');
fs.createReadStream('05Stream/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('05Stream/input.txt.gz'));
console.log('链式流执行文件压缩完毕');