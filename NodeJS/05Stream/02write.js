let fs=require('fs');
let stream = fs.createWriteStream('output.txt');
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