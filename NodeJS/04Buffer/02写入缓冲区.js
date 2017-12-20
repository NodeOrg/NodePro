/*
 * @Author: dyh 
 * @Date: 2017-12-20 16:56:03 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 16:59:39
 */
let buffer = new Buffer(128);
let length = buffer.write('明月松间照', 'utf-8');
console.log('写入字节数：' + length);