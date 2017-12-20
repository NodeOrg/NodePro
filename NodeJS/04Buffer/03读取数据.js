/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:21:20 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 21:10:27
 */
let buffer = Buffer.alloc(26);
for (var index = 0; index < buffer.length; index++) {
    buffer[index] = index + 65;
}
console.log('写入缓冲区字节：' + buffer.length);
console.log('数据：' + buffer.toString('ascii'));
console.log('数据：' + buffer.toString('ascii', 0, 6).toUpperCase());
console.log('数据：' + buffer.toString('utf-8', 0, 6).toUpperCase());
console.log('数据：' + buffer.toString(undefined, 0, 6).toUpperCase());