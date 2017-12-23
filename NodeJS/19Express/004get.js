let express = require('express');
let app = express();

app.use(express.static('19Express/public'));

app.get('/index_get.html', function (req, res) {
    res.sendFile(__dirname + '/' + "index_get.html");
});

app.get('/process_get', function (req, res) {
    let response = {
        'first_name': req.query.first_name,
        'last_name': req.query.last_name
    }
    console.log(response);
    //res.end(JSON.stringify(response));
    res.send('姓名：' + req.query.last_name + ' ' + req.query.first_name);
})

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});