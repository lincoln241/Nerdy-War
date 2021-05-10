function valida() {
    
    if (document.getElementById('nome').value == "") {
        alert ('Digite seu nome completo.');
        document.getElementById('nome').focus();
    }

    if (document.getElementById('email').value == "") {
        alert ('Digite seu e-mail.');
        document.getElementById('email').focus();
    }

    if (document.getElementById('dddtel').value == "") {
        alert ('Digite o DDD do seu telefone.');
        document.getElementById('dddtel').focus();
    }

    if (document.getElementById('tel').value == "") {
        alert ('Digite seu telefone.');
        document.getElementById('tel').focus();
    }

    var marvel = document.getElementById('marvel').checked;
    var dc = document.getElementById('dc').checked;
    var st = document.getElementById('star_wars').checked;

    if (!marvel && !dc && !st) {
        alert('Escolha uma preferência.')
    }
    
    
    if (document.getElementById('cpf').value == "") {
        alert ('Digite seu CPF.');
        document.getElementById('cpf').focus();
    }

    if (document.getElementById('nasc').value == "") {
        alert ('Informe sua data de nascimento.');
        document.getElementById('nasc').focus();
    }

    if (document.getElementById('end').value == "") {
        alert ('Digite seu endereço.');
        document.getElementById('end').focus();
    }

    if (document.getElementById('num').value == "") {
        alert ('Digite o número da sua residência.');
        document.getElementById('num').focus();
    }

    if (document.getElementById('cep').value == "") {
        alert ('Digite seu CEP.');
        document.getElementById('cep').focus();
    }

    if (document.getElementById('bairro').value == "") {
        alert ('Digite o nome do seu bairro.');
        document.getElementById('bairro').focus();
    }

    if (document.getElementById('cid').value == "") {
        alert ('Digite o nome da sua cidade.');
        document.getElementById('cid').focus();
    }

    if (document.getElementById('uf').value == "") {
        alert('Escolha o seu estado.');
    }

    var senha = document.form.senha;
    var conf_senha = document.form.conf_senha;


    if (document.getElementById('senha').value == "") {
        alert ('Digite sua senha.');
        document.getElementById('senha').focus();
    }
    else if (document.getElementById('senha').value.length < 6) {
        alert ('A senha deve conter no minímo 6 digitos.');
        document.getElementById('senha').focus();
    }

    if (document.getElementById('conf_senha').value == "") {
        alert ('Confirme sua senha.');
        document.getElementById('senha').focus();
    }
    else if (document.form.conf_senha.value != document.form.senha.value) {
        alert ('As senhas não são iguais');
        document.form.conf_senha.focus();
    }
}