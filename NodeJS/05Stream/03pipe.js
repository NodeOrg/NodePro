let fs=require('fs');
let readStream  = fs.createReadStream('input.txt');
let writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);
console.log('管道流传输数据执行完毕！')