/*
 * @Author: dyh 
 * @Date: 2017-12-21 14:21:04 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-21 14:49:03
 */
let http = require('http'),
    url = require('url');
exports.start = function (router) {
    http.createServer(onRequest).listen(8888);

    function onRequest(request, response) {
        console.log(request.url);
        //let parseUrl=url.parse(request.url);
        let pathname = url.parse(request.url).pathname;
        console.log(pathname);
        router(pathname);

        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write('Hello World');
        response.end();
    };


    console.log('Server has started.')
};