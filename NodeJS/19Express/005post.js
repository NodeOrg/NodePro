let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use('/static', express.static('19Express/public'));

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.get('/index_post.html', function (req, res) {
    res.sendFile(__dirname + '/' + "index_post.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {
    let response = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name
    }
    console.log(response);
    //res.end(JSON.stringify(response));
    res.send('姓名：' + req.body.last_name + ' ' + req.body.first_name);
})

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});