/*
 * @Author: dyh 
 * @Date: 2017-12-27 22:59:22 
 * @Last Modified by: dyh
 * @Last Modified time: 2017-12-27 23:00:53
 */
const mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/runoob';

mongoClient.connect(url, function(err, db) {
    if (err) {
        console.error(err);
        return;
    }
    updateData(db, function(result) {
        console.log(JSON.stringify(result));
        db.close();
    });
})

function updateData(db, callback) {
    let collection = db.collection('student');
    let whereStr = { "name": "Elena" };
    let updateStr = { $set: { "age": 25 } };
    collection.update(whereStr, updateStr, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        callback(result);
    });
}