/*
 * @Author: dyh 
 * @Date: 2017-12-21 14:58:11 
 * @Last Modified by: dyh
 * @Last Modified time: 2018-03-18 16:36:34
 */
console.log(__filename);
console.log(__dirname);
console.time('Time');
let time = global.setTimeout(function() {
    console.log('setTimeout');
    console.trace();
}, 2000);

//clearTimeout(time);

let interval = global.setInterval(function() {
    console.log('setInterval');
}, 1000);

clearInterval(interval);

console.log('你今年几岁');
console.error('你今年几岁');
console.info('你今年几岁');
console.warn('你今年几岁');
console.log('ABCD%dEFG', 22);

console.timeEnd('Time');



console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
for (var index = 0; index < 1000; index++) {
    var element = index;
}
console.timeEnd('获取数据');

console.info("程序执行完毕。")