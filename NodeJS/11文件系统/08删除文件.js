/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:55:21 
 * @Last Modified by:   dyh 
 * @Last Modified time: 2017-12-21 15:55:21 
 */
let fs = require('fs');
console.log('准备删除文件。');
fs.unlink('11文件系统/delete.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('文件删除成功！');
});