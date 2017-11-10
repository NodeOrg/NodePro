const dns=require('dns');
dns.lookup('www.github.com',function(err,address,family){
    console.log('IP地址：'+address);
    dns.reverse(address,function(err,hostnames){
        if(err)
        {
           return console.error(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });

    
    dns.resolveCname('www.github.com',function(err,addresses)
    {
        if(err)
        {
        return console.error(err.stack);
        }
        console.log('resolveCname:'+JSON.stringify(addresses));
    });

      
    dns.resolveNs('www.github.com',function(err,addresses)
    {
        if(err)
        {
        return console.error(err.stack);
        }
        console.log('resolveNs:'+JSON.stringify(addresses));
    });

    
});
