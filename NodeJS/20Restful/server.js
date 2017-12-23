let express = require('express'),
    fs = require('fs'),
    util = require('util');

let app = express();

//获取用户列表
app.get('/listusers', function (req, res) {
    fs.readFile(__dirname + '/users.json', {
        encoding: 'utf8'
    }, function (err, data) {
        console.log(data);
        let dataParser = JSON.parse(data);
        res.send(data);
    })
})

//添加用户
let user = {
    "user4": {
        "name": "Elena",
        "password": "password4",
        "profession": "tearch",
        "id": 4
    }
}

//添加用户
app.get('/adduser', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
            let usersObj = JSON.parse(data);
            usersObj["user4"] = user["user4"];
            res.end(JSON.stringify(usersObj));
        }
    })
})
// 显示用户详情
app.get('/:id', function (req, res) {
    if (!isNaN(req.params.id)) {
        fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
                let usersObj = JSON.parse(data);
                let userinfo = usersObj['user' + req.params.id];
                if (!util.isUndefined(userinfo)) {
                    res.end(JSON.stringify(userinfo));
                } else {
                    res.end('未找到数据');
                }
            }
        })
    } else {
        console.error('缺少参数id有误');
        res.end('缺少参数id有误')
    }
})

// 删除用户
app.get('/delete/user', function (req, res) {
    if (!isNaN(req.query.id)) {
        fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
                let usersObj = JSON.parse(data);
                console.log(usersObj.hasOwnProperty('user' + req.query.id));
                // 查询是否存在此用户
                let userinfo = usersObj['user' + req.query.id];
                if (!util.isUndefined(userinfo)) {
                    // 若存在则删除
                    delete usersObj['user' + req.query.id]
                    res.end("已删除：" + JSON.stringify(userinfo));
                } else {
                    res.end('未找到数据');
                }
            }
        })
    } else {
        console.error('缺少参数id有误');
        res.end('缺少参数id有误')
    }
})

// 监听
let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})