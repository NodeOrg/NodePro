const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306', //端口号 （默认：3306）
    user: 'root',
    password: 'dingyunhu',
    database: 'test',
    multipleStatements: true // 是否允许一个query中有多个MySQL语句 （默认：false）
});

let addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
let addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
//增
connection.query(addSql, addSqlParams, function (err, results, fields) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }

    console.log('INSERT ID:', results.insertId);
    console.log(JSON.stringify(results));
});

connection.end();