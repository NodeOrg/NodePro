var fs = require("fs");
// 阻塞代码示例
var data = fs.readFileSync('/02回调函数/input.txt');
console.log(data.toString());
// 非阻塞代码示例
fs.readFile("input.txt", function(error, data) {
    if (error) {
        return console.log(err);
    }
    console.log("readFile:" + data.toString());
});
console.log('程序执行结束！');