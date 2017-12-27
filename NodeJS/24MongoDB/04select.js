let MongoDBClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/runoob";

MongoDBClient.connect(url, function (err, db) {
    if (err) {
        console.error(err);
    }
    selectData(db, function (result) {
        console.log(JSON.stringify(result));
        db.close();
    })
})

var selectData = function (db, callback) {
    let collection = db.collection('student');
    let whereStr = {
        "name": "Elena"
    };
    collection.find(whereStr).toArray(function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        callback(result);
    });
}