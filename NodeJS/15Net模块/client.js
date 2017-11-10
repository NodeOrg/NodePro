const net =require('net');
let client=net.connect({port:3030},function(){
    console.log('连接到服务器');
});

client.on('data',function(data){
    console.log(data.toString());
    client.end();
});

client.on('end',function(){
    console.log('断开于服务器连接');
});