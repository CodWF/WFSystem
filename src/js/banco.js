var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null, // or the original password : 'apaswword'
    database: 'wfsystem'

});

// connect to mysql
connection.connect(function (err) {
    // in case of error
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Perform a query
//$query = 'SELECT * FROM `tbusu` LIMIT 10';
$query = "SELECT usu_Nome FROM tb_usuarios;"


connection.query($query, function (err, rows, fields) {
    if (err) {
        console.log("Erro a o executar a Query");
        console.log(err);
        return;
    }
    document.getElementById('bdtext').innerHTML = rows[0].usu_Nome;
    console.log("Query executada com sucesso!!! ", rows[0]);
});

// Close the connection
connection.end(function () {
    // The connection has been closed
});

