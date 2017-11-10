let http=require('http'),url=require('url');
exports.start=function(router)
{
    http.createServer(onRequest).listen(8888);

    function onRequest(request,response)
    {
        let pathname=url.parse(request.url).pathname;
        router(pathname);

        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Hello World');
        response.end();
    };

    console.log('Server has started.')
};