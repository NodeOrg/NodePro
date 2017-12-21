/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:43:35 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 15:54:07
 */
let fs = require('fs');
console.log('准备打开文件')
fs.open('11文件系统/write.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log('文件打开成功！')

    console.log('开始截取文件')
    // 截取文件：
    fs.ftruncate(fd, 9, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('文件截取成功！');
        console.log('读取相同的文件');
        let buf = new Buffer(1024);
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytesRead, buffer) {
            if (err) {
                return console.error(err);
            }
            console.log('读取相同文件成功！');
            if (bytesRead > 0) {
                console.log('读取截取后的数据：' + buf.slice(0, bytesRead).toString());
            }

            fs.close(fd, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log('文件关闭成功！');
            });
        })
    });
});