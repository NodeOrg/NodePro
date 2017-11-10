const net=require('net');
let server=net.createServer(function(socket){
    console.log('客户端已连接');
    socket.on('end',function(){
        console.log('客户端已关闭连接');
    })
    socket.write('Hello World\r\n');
    socket.pipe(socket);
});

server.listen(3030,function(){
    console.log('服务器监听中...');
})