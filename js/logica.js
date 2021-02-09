console.log("logica funcionando");
//Validar os campos usados no Login
let user = "admin";
let senha = "admin";

function ValidarLogin(strLogin, strSenha) {
    //linha de debug
    //alert("Login " + strLogin + "\n" + "Senha: " + strSenha);    
    if (strLogin == "") {
        alert("Preencha  o campo Login!");
        document.getElementById('login').value = ''; // Limpa o campo
        document.getElementById('password').value = ''; // Limpa o campo


        return false;
    } else if (strSenha == "") {
        alert("Preencha o campo Senha!");
        document.getElementById('login').value = ''; // Limpa o campo
        document.getElementById('password').value = ''; // Limpa o campo

        return false;
    }
    if (strLogin === user && strSenha === senha) {
        alert("Login feito com sucesso!!");
        //poderia mandar o form fazer algo aqui ou mandar para alguma URL com window.location.href = URLDesejada; Ou deixar um action definida na propriedade action da tag form
        //exemplo de submit dinâmico
        //document.frmLogin.action = "noticias_login.asp"
        //document.frmLogin.submit();
        //window.location.href = "index.html";
        return true;
    } else {
        alert("Usuario ou senha Incorreta");
        document.getElementById('login').value = ''; // Limpa o campo
        document.getElementById('password').value = ''; // Limpa o campo
        return false;
    }

};
//
// You can also require other files to run in this process


function time() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout('time()', 500);
};
// botoes html:
function indexHome() {
    console.log('clicou no btn HOME')
    window.location.href = 'index.html';
};

function indexOs() {
    console.log('clicou no btn OS')
    window.location.href = 'os.html';
};

function indexCli() {
    console.log('clicou no btn cliente')
    window.location.href = 'clientes.html';
};

function indexProd() {
    console.log('clicou no btn Produtos')
    window.location.href = 'produtos.html';
};
function indexCaixa() {
    console.log('clicou no btn Caixa')
    window.location.href = 'caixa.html';
};


$(document).ready(function () {
    const {
        remote
    } = require('electron');

    $('#btnSair').click(function () {
        console.log("Fechar");
        window.close();
    });


});

function tec() {    
    document.getElementById("usu").innerHTML = "admin";
}

console.log("login funcionando");
// INSTANCIANDO BANCO DE DADOS COLOCAR SEMPRE AONDE FOR INSTANCIAR
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

// INSTANCIANDO NOME DO USUARIO DO BANCO COMO NOME:
const txtNome = document.getElementById('nomeUsu')
console.log(txtNome)
let a = db.get('tbUsu').find({
    id: "2"
}).value()
f = a.nome
console.log(f)
txtNome.innerText = f
//