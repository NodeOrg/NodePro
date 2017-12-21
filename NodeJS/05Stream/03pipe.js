/*
 * @Author: dyh 
 * @Date: 2017-12-21 10:34:17 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 11:38:28
 */
let fs = require('fs');
let readStream = fs.createReadStream('05Stream/input.txt');
let writeStream = fs.createWriteStream('05Stream/output.txt');
readStream.pipe(writeStream);
console.log('管道流传输数据执行完毕！')