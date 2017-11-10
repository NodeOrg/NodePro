let buffer=new Buffer('www.baidu.com');
let buffer2=new Buffer('百度');
let buffer3=Buffer.concat([buffer,buffer2]);
console.log(buffer3.toString());