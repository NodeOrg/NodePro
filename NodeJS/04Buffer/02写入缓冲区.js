/*
 * @Author: dyh 
 * @Date: 2017-12-20 16:56:03 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 17:19:54
 */
let buffer = Buffer.alloc(128);
let length = buffer.write('明月松间照', 0, buffer.length, 'utf8');
console.log('写入字节数：' + length);
console.log('数据：' + buffer.toString());

let buf = Buffer.alloc(256);
let len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);