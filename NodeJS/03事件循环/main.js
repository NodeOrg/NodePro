const events= require('events');
let event=new events.EventEmitter();
var connectHandler=function()
{
    console.log('连接成功！');
    event.emit('receive');
}
event.on('connect',connectHandler);

var received=function(){
    console.log('数据接收完毕！');
}
event.on("receive",received);

// 获取绑定到对象的事件名称
var arr=event.eventNames();
arr.map(function(val,index,arr){
    console.log(val);
})

// 设置监视器的数量
event.setMaxListeners(12);

// 获取对象能接受的最大监视器个数
var maxlistenerCount= event.getMaxListeners();
console.log(maxlistenerCount);

// 获取指定的事件的监视器个数
console.log(events.listenerCount(event,'connect'));
// 发送事件
event.emit('connect');
console.log('程序执行完毕。');
//event.emit('error'); // error 事件