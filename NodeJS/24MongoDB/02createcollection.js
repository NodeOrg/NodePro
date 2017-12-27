var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob'; //# 数据库为 runoob

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.error(err);
    }
    console.log("创建数据库成功！");
    db.createCollection("site", function (err, res) {
        if (err) {
            console.error(err);
        }
        console.log("创建集合成功！");
        db.close();
    })
})