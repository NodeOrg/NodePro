let fs=require('fs');
console.log('准备打开文件')
fs.open('write.txt','r+',function(err,fd){
   if(err) 
   {
       return console.error(err);
   }
   console.log('文件打开成功！')

   console.log('截取文件10个字节后的剩余内容。（从后往前截取）')
   // 截取文件：
   fs.ftruncate(fd,10,function(err){
        if(err) 
        {
            return console.error(err);
        }
        console.log('文件截取成功！');
        console.log('读取相同的文件');
        let buf=new Buffer(1024);
        fs.read(fd,buf,0,buf.length,0,function(err,bytesRead,buffer){
            if(err) 
            {
                return console.error(err);
            }
            console.log('读取相同文件成功！');
            if(bytesRead>0)
            {
                console.log('读取截取后的数据：'+buf.slice(0,bytesRead).toString());
            }

            fs.close(fd,function(err){
                if(err) 
                {
                    return console.error(err);
                }
                console.log('文件关闭成功！');
            });
        })
   });
});