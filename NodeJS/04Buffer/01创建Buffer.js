/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:06:06 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 17:14:33
 */

const buf = Buffer.alloc(128);
console.log(buf.length);

const buf2 = Buffer.alloc(128, 1);
console.log(buf2.toString());

const buf3 = Buffer.allocUnsafe(128);
console.log(buf3.length);

const buf4 = Buffer.allocUnsafeSlow(128);
console.log(buf4.length);

const buf5 = Buffer.from([1, 2, 3]);
console.log(buf5.length);

const buf6 = Buffer.from(buf5);
console.log(buf6.length);

const buf7 = Buffer.from("Hello World!", "latin1");
console.log("Length:" + buf7.length + "，Value:" + buf7.toString());