/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:25:18 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-12-20 20:55:59
 */

let buffer = Buffer.from('www.baidu.com');
let buffer2 = new Buffer.from('百度');
let buffer3 = Buffer.concat([buffer, buffer2]);
console.log(buffer3.toString());