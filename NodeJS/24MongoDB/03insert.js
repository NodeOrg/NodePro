var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob'; //# 数据库为 runoob
/*
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("连接成功！");

    console.log("链接集合site");
    let collction = db.collection("site");

    //插入数据
    var data = [{
        "name": "菜鸟教程",
        "url": "www.runoob.com"
    }, {
        "name": "菜鸟工具",
        "url": "c.runoob.com"
    }];
    collction.insert(data, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(JSON.stringify(result));
        db.close();
    });
})
*/

let insertData=function(db, callback) {
    let collection = db.collection('student');

    var data = [{
        "name": "Elena",
        "age": 37
    }, {
        "name": "Catherine",
        "age": 28
    }]
    collection.insert(data, function (err, result) {
        if(err){
            console.error(err);
            return;
        }
        callback(result);
    })
}
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.error(err);
    }
    console.log("连接数据库成功！");
    insertData(db, function (result) {
        console.log(JSON.stringify(result));
        db.close();
    });
})