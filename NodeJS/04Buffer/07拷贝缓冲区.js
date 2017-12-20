/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:34:21 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 21:10:45
 */
let buffer1 = Buffer.from('ABCD');
let buffer2 = Buffer.from("4");
buffer2.copy(buffer1, 2);
console.log(buffer1.toString());