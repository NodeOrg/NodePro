let express = require('express'),
    cookieParser = require('cookie-parser')

let app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    console.log('cookies：' + JSON.stringify(req.cookies));
    res.send(JSON.stringify(req.cookies));
});

app.listen(8081);