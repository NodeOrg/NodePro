let fs=require('fs');
fs.rmdir('./test/',function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log('目录删除成功！');
});