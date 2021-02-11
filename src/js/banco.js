var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null, // or the original password : 'apaswword'
    database: 'wfsystem'

});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if (err) {
        console.log("ERRO A CONECTAR A O BANCO DE DADOS")
        console.log(err.stack);
        console.log(err.code);
        console.log(err.fatal);
        return;
    }
});


var nomeu = 'Robson',
    senhau = 'rob100';
// Perform a query
//$query = "INSERT INTO `tb_usuarios` (`usu_Nome`, `usu_Senha`) VALUES ('Comando',PASSWORD('123'))"; //CREATE
$query = 'SELECT * FROM `tb_usuarios` LIMIT 10'; // READ
//$query = "UPDATE `tb_usuarios` SET `usu_Senha` = MD5('102030') WHERE `tb_usuarios`.`usu_ID` = 1; " // UPDATE
//$query = "DELETE FROM `tb_usuarios` WHERE `tb_usuarios`.`usu_ID` = 4" //DELETE


connection.query($query, function(err, rows, fields) {
    if (err) {
        console.log("Erro a o executar a Query");
        console.log(err);
        return;
    }
    //document.getElementById('bdtext').innerHTML = rows[0].usu_Nome;
    console.log("Query executada com sucesso!!! ", rows);
});


function calcula(nome, senha) {
    console.log('FUNCIONA')
    $("#resultNome").html(nome + ' ' + senha); //use jquery para mostrar o valor digitado ao clicar no botão    


}

// Close the connection
connection.end(function() {
    // The connection has been closed
});