let fs=require('fs');
console.log('准备打开文件！');
fs.open('open.txt','r+',function(err,fd){
    if(err)
    {
       return  console.error(err);
    }
    console.log(fd);
    console.log('文件打开成功！');
});