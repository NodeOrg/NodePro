/*
 * @Author: dyh 
 * @Date: 2017-12-20 18:06:50 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-20 18:08:18
 */
let fs = require('fs');
let stream = fs.createReadStream('input.txt'); // D://worktest/nodejs/05Stream/input.txt
stream.setEncoding('UTF8');
let data = '';
stream.addListener('data', function (chunk) {
    data += chunk;
});
stream.on('end', function () {
    //let model={Result:true,Msg:'OK',data:data};
    //let result=JSON.stringify(model);
    //console.log(JSON.parse(result).data);
    console.log(data);
});
stream.on('error', function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕！');