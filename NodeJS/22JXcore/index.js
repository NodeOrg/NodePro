let express = require('express'),
    app = express();

app.use(express.static('22JXcore/public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});