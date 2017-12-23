let express = require('express');
let app = express();

// 托管静态资源文件
app.use(express.static('19Express/public')); //http://127.0.0.1:8081/images/1.jpg
app.use('/static', express.static('19Express/public')); //访问http://127.0.0.1:8081/static/files/1.txt

app.get('/', function (req, res) {
    res.send('Hello World'+__dirname);
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})