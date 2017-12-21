/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:55:31 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 16:05:20
 */
let fs = require('fs');
console.log('创建目录 /node/test/');
fs.mkdir('./11文件系统/test/3e', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('创建目录成功！');
});