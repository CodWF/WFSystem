console.log("logica funcionando");
//Validar os campos usados no Login
let user = "admin";
let senha = "admin";

function check(strLogin, strSenha) {
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
        //document.frmLogin.action = "index.html"
        //document.frmLogin.submit();
        window.location.href = "index.html";
        return true;
    } else {
        alert("Usuario ou senha Incorreta");
        document.getElementById('login').value = ''; // Limpa o campo
        document.getElementById('password').value = ''; // Limpa o campo
        return false;
    }





};


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