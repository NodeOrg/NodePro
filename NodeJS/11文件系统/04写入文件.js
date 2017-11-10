let fs=require('fs');
let buffer=new Buffer('你究竟有几个好妹妹','UTF8');
console.log('准备写入！');
fs.writeFile('write.txt',buffer,function(err){//fs.writeFile('write.txt','哈哈哈',function(err){
    if(err)
    {
        console.error(err);
    }
    console.log("数据写入成功！");
    console.log('--------------------分割线-----------------')
    console.log('开始读取写入的数据!');
    fs.readFile('write.txt',function(err,data){
        if(err)
        {
            console.error(err);
        }
        console.log('异步读取文件数据：'+data.toString());
    });
});
