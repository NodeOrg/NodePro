/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:23:23 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 21:10:36
 */
let buffer = Buffer.from('www.baidu.com');
let json = buffer.toJSON();
console.log(json);