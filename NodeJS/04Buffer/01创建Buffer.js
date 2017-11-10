// 创建对象Buffer，3种
var buffer=new Buffer(128);
console.log('写入字节数：'+buffer.length);

var buffer2 = new Buffer([10, 20, 30, 40, 50]);
console.log('写入字节数：'+buffer2.length);

var buffer3=new Buffer('www.baidu.com','utf-8');
console.log('写入字节数：'+buffer3.length);

