/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:25:18 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 17:25:38
 */

let buffer =  Buffer.from('www.baidu.com');
let buffer2 = new Buffer.from('百度');
let buffer3 = Buffer.concat([buffer, buffer2]);
console.log(buffer3.toString());