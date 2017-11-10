let fs=require('fs');
console.log('创建目录 /node/test/');
fs.mkdir('./test/3e.txt',function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log('创建目录成功！');
});