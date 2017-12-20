/*
 * @Author            : dyh
 * @Date              : 2017-12-20 14: 39: 33
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-12-20 15:26:19
 */
const buffer = Buffer.from("nodejs测试", "ascii");
let data = buffer.toString("hex");
console.log("Encoding-hex：" + data);