/*
 * @Author: dyh 
 * @Date: 2017-12-22 11:07:10 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-22 11:07:38
 */
let http = require('http'),
    url = require('url'),
    util = require('util');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    response.end(util.inspect(url.parse(request.url, true)));
}).listen(300);
console.log('请在浏览器运行：http://127.0.0.1:300');