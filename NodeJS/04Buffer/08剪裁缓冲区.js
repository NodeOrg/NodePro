/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:41:02 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 17:42:51
 */
let buffer = Buffer.from('baidu');
let buffer2 = buffer.slice(2, 4);
console.log(buffer2.toString());