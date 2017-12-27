const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306', //端口号 （默认：3306）
    user: 'root',
    password: 'dingyunhu',
    database: 'test',
    multipleStatements: true // 是否允许一个query中有多个MySQL语句 （默认：false）
});
connection.connect();
var modSql = 'UPDATE websites SET name = ?,url = ?,alexa=? WHERE Id = ?';
var modSqlParams = ['京东', 'https://www.jd.com', 9, 8];
connection.query(modSql, modSqlParams, function(err, results) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }

    console.log('UPDATE affectedRows', results.affectedRows);
    console.log(JSON.stringify(results));
});

connection.end();