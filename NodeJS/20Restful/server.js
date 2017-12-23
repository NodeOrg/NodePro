let express = require('express'),
    fs = require('fs');

let app = express();

//获取用户列表
app.get('/listusers', function (req, res) {
    fs.readFile(__dirname + '/users.json', {
        encoding: 'utf8'
    }, function (err, data) {
        console.log(data);
        res.send(data);
    })
})


// 监听
let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})