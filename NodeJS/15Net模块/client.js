/*
 * @Author: dyh 
 * @Date: 2017-12-22 14:18:51 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-22 14:55:02
 */
const net = require('net');
let socket = net.connect({
    port: 3030
}, function () {
    console.log('连接到服务器');
});

socket.on('data', function (data) {
    console.log(data.toString());
    socket.end();
});

socket.on('end', function () {
    console.log('断开于服务器连接');
});