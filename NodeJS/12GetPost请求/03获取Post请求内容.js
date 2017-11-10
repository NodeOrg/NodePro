let http=require('http');
let querystring=require('querystring');
let util=require('util');

var postHTML = 
'<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
'<body>' +
'<form method="post">' +
'Id： <input name="Id"><br>' +
'Name： <input name="name"><br>' +
'<input type="submit">' +
'</form>' +
'</body></html>';

http.createServer(function(request,response){
    let body='';
    request.on('data',function(chunk){
        body+=chunk;
    });
    request.on('end',function(){
        body=querystring.parse(body);
        // 设置响应头部信息及编码
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.Id && body.name) { // 输出提交的数据
            response.write("Id:" + body.Id);
            response.write("<br>");
            response.write("name：" + body.name);
        } else {  // 输出表单
            response.write(postHTML);
        }
        response.end();
    })
}).listen(300);
console.log('请在浏览器运行：http://127.0.0.1:300');