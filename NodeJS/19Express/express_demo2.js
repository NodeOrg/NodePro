/*
 * @Author: dyh 
 * @Date: 2017-12-22 20:33:50 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-22 20:35:41
 */
let express = require('express');
let app = express();

// Get 请求
app.get('/', function (request, response) {
    console.log('主页 Get 请求');
    response.send('Hello Get');
})

// Post 请求
app.post('/', function (request, response) {
    console.log('主页 Post 请求');
    response.send('Hello Post');
})

// 删除页面
app.get('/delete', function (request, response) {
    console.log('/delete 响应删除请求');
    response.send('删除页面');
})

// 列表
app.get('/list', function (request, response) {
    console.log('/delete 响应请求列表数据');
    response.send('列表数据');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (request, response) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

// 监听请求
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})