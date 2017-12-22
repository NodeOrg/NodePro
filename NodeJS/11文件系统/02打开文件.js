/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:27:39 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 16:13:55
 */
let fs = require('fs');
console.log('准备打开文件！');
fs.open('11文件系统/open.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log(fd);
    console.log('文件打开成功！');
});