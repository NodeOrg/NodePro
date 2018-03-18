var fs = require("fs");
// 阻塞代码示例
var data = fs.readFileSync('D:\\Work\\NodeJS\\trunk\\NodeJS\\02回调函数\\input.txt');
console.log(data.toString());
// 非阻塞代码示例
fs.readFile("D:\\Work\\NodeJS\\trunk\\NodeJS\\02回调函数\\input.txt", function(error, data) {
    if (error) {
        return console.log(error);
    }
    console.log("readFile:" + data.toString());
});
console.log('程序执行结束！');