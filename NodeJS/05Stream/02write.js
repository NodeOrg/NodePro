/*
 * @Author: dyh 
 * @Date: 2017-12-21 10:26:45 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 11:38:27
 */
let fs=require('fs');
let stream = fs.createWriteStream('05Stream/output.txt');
let data   = '风儿从那二月南方来';
stream.write(data,'UTF8');
stream.end();
stream.on('finish',function(){
    console.log('写入完成');
});
stream.on('error',function(err){
    console.log(err.stack);
});
console.log('程序执行完毕');