let fs=require('fs');
console.log('准备打开文件！')
fs.open('write.txt','r+',function(err,fd){
    if(err)
    {
        return console.error(err);
    }
    console.log('文件打开成功！');
    
    console.log('开始读取文件：');
    let buffer=new Buffer(1024);
    fs.read(fd,buffer,0,buffer.length,0,function(err,bytesRead,buffer){
        if(err)
        {
            return console.error(err);
        }
        console.log('读取的字节：'+bytesRead);
        
        if(bytesRead>0)
        {
            console.log('文件内容：'+buffer.slice(0,bytesRead).toString());
        }
        else
        {
            console.log('文件暂无数据！');
            fs.writeFile('write.txt','捉泥鳅',function(err){
                if(err)
                {
                    return console.error(err);
                }
            })
        }

        fs.close(fd,function(err){
            if(err)
            {
                return console.error(err);
            }
        });
    });
});