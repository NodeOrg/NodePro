let express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    multer = require('multer');

let app = express();

app.use('/static', express.static('19Express/public'));
app.use(bodyParser.urlencoded({
    extends: false
}));
app.use(multer({
    dest: '/tmp/'
}).array('image'));

app.get('/fileupload.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'fileupload.html');
});

app.post('/fileupload', function (req, res) {
    // 上传文件的信息
    console.log(req.files[0]);
    let des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
})

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});