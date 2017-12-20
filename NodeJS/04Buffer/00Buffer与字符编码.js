/*
 * @Author: dyh 
 * @Date: 2017-12-20 16:55:07 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-20 16:55:07 
 */

const buffer = Buffer.from("nodejs测试", "ascii");
let data = buffer.toString("hex");
console.log("Encoding-hex:" + data);

data = buffer.toString("utf8");
console.log("Encoding-UTF8:" + data);

data = buffer.toString("base64");
console.log("Encoding-base64 :" + data);
