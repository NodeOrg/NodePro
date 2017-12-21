/*
 * @Author: dyh 
 * @Date: 2017-12-21 15:29:13 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 15:30:33
 */
let fs = require('fs');
let buffer = Buffer.from('你究竟有几个好妹妹', 'utf8');
console.log('准备写入！');
fs.writeFile('11文件系统/write.txt', buffer, function (err) { //fs.writeFile('write.txt','哈哈哈',function(err){
    if (err) {
        console.error(err);
    }
    console.log("数据写入成功！");
    console.log('--------------------分割线-----------------')
    console.log('开始读取写入的数据!');
    fs.readFile('11文件系统/write.txt', function (err, data) {
        if (err) {
            console.error(err);
        }
        console.log('异步读取文件数据：' + data.toString());
    });
});