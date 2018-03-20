var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob'; //# 数据库为 runoob

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    var dbase = db.db("runboo");
    console.log("创建数据库成功！");
    dbase.createCollection("site", function (err, res) {
        if (err) {
            console.error(err);
        }
        console.log("创建集合成功！");
        db.close();
    })

})

/*
MongoClient.connect(url, function (err, db) {

    if (err) {
        throw err;
    }
    console.log("数据库已创建！");
    var dbase = db.db("runoob");
    dbase.createCollection("site", function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    })
})
*/