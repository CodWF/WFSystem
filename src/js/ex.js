
console.log('ex.js funcionando');
const mysql = require('mysql');
const $ = require('jquery');
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null, // or the original password : 'apaswword'
    port: 3306,
    database: 'wfsystem'
});
var read = 'SELECT * FROM `tb_usuarios` LIMIT 10';

function btnCreate(addu, adds) {
    console.log(addu);
    console.log(adds);
    $postU = addu;
    $postS = adds;
    console.log($postU, $postS);
    var create = "INSERT INTO `tb_usuarios` (`usu_ID` ,`usu_Nome`, `usu_Senha`) VALUES (?,?,?)"; //CREATE
    sql.query(create, function (err, result, fields) {
        if (err) {
            console.log("Erro a o executar a Query");
            console.log(err);
            return;
        }
        //document.getElementById('bdtext').innerHTML = rows[0].usu_Nome;
        console.log("Query executada com sucesso!!! ", result);
    });

};


function btnRead(addu, adds) {
    console.log(addu);
    console.log(adds);
    sql.query(read, function (err, result, fields) {
        if (err) {
            console.log("Erro a o executar a Query");
            console.log(err);
            return;
        }
        //document.getElementById('bdtext').innerHTML = rows[0].usu_Nome;
        console.log("Query executada com sucesso!!! ", result);
    });

};


