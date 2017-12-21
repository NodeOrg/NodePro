/*
 * @Author: dyh 
 * @Date: 2017-12-21 16:07:40 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 16:10:09
 */
let fs = require('fs'),
    util = require('util');
fs.readdir('./11文件系统/test/', function (err, files) {
    if (err) {
        return console.error(err);
    }

    files.forEach(function (value, index, array) {
        fs.stat('./11文件系统/test/' + value, function (err, stats) {
            if (err) {
                return console.error(err);
            }
            if (stats.isFile()) {
                console.log('文件：' + value);
            } else if (stats.isDirectory()) {
                console.log('目录：' + value);
            }
        })
    });
})