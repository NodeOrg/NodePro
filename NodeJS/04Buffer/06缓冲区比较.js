/*
 * @Author: dyh 
 * @Date: 2017-12-20 17:31:30 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-20 17:31:30 
 */
let buffer1 = Buffer.from('www.baidu.com');
let buffer2 = Buffer.from('百度');
let result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + " 之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + " 相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + " 之后");
}