/*
 * @Author: dyh 
 * @Date: 2017-12-22 14:18:48 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-22 14:50:27
 */
const net = require('net');
let server = net.createServer(function (socket) {
    console.log('客户端已连接');
    socket.on('end', function () {
        console.log('客户端已关闭连接');
    })
    socket.write('Hello World');
    socket.pipe(socket);
});

server.listen(3030, function () {
    console.log('服务器监听中...');
})