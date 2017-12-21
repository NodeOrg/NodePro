/*
 * @Author: dyh 
 * @Date: 2017-12-21 16:06:10 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 16:06:44
 */
let fs = require('fs');
fs.rmdir('./11文件系统/test/3e', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('目录删除成功！');
});