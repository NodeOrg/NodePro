let fs=require('fs'),util=require('util');
fs.readdir('./test/',function(err,files){
    if(err)
    {
        return console.error(err);
    }

    files.forEach(function(value,index,array){
        fs.stat('./test/'+value, function (err, stats) {
            if(err)
            {
                return console.error(err);
            }
            if(stats.isFile())
            {
                console.log('文件：'+value);
            }
            else if(stats.isDirectory())
            {
                console.log('目录：'+value);
            }
        })
    });
})