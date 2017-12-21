/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:27:31 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 15:28:47
 */
let fs = require('fs');
fs.stat('11文件系统/input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");

    console.log('--------------------------------------------------');
    console.log('是否为文件：' + stats.isFile());
    console.log('是否为目录：' + stats.isDirectory());
    console.log(stats.isBlockDevice());
    console.log(stats.isCharacterDevice());
    console.log(stats.isSocket());
    console.log(stats.isFIFO());
    console.log(stats.isSymbolicLink());

});