let http=require('http'),url=require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    // 解析url
    var params = url.parse(req.url,true).query;
    res.write('Id:'+params.Id);
    res.write('\n');
    res.write('name:'+params.name);
    res.end();
    
}).listen(888);
console.log('请在浏览器运行：http://127.0.0.1:888');