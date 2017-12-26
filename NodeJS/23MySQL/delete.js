var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dingyunhu',
    port: '3306',
    database: 'test',
});

connection.connect();

var delSql = 'DELETE FROM websites where id=6';
//删
connection.query(delSql, function (err, results) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('DELETE affectedRows', results.affectedRows);

});

connection.end();