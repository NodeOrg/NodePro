let buffer=new Buffer(128);
let length=buffer.write('明月松间照','utf-8');
console.log('写入字节数：'+length);
