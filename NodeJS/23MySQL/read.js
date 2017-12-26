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

/* connection.query('select * from student limit 1', function (error, results, fields) {
    if (error) {
        throw error;
    } else {
        console.log(JSON.stringify(results));
    }
}); */


/* connection.query('select 1+1 as solution',function(error,results,fields){
    if (error) {
        throw error;
    } else {
        console.log(JSON.stringify(results));
    }
}); */


var sql = 'SELECT * FROM websites';
//查
connection.query(sql, function (err, results, fields) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log(JSON.stringify(results));
});

connection.end();