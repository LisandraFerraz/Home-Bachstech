
function validarNome(){
    var campoNome = document.getElementById('txtNome').value;

    if(campoNome.length >= 3){
        return true;
    }
    else {
        document.getElementById('nomeInv').innerHTML = 
        "Insira um nome válido (acima de 3 caracteres).";
        return false; 
    }
}

function validarEmail(){
    var campoEmail = document.getElementById('txtEmail').value;

    if(campoEmail.length >= 10){
        return true;
    }
    else {
        document.getElementById('emailInv').innerHTML = 
        "Insira um endereço de e-mail válido.";
        return false;
    }
    
}

function validarAssunto(){
    var campoAssunto = document.getElementById('txtAssunto').value;

    if (campoAssunto.length > 5) {
        return true;
    }
    else {
        document.getElementById('assuntoInv').innerHTML = 
        "Insira um assunto válido (acima de 5 caracteres).";
        return false;
    }
}

function validarMsg(){
    var campoMsg = document.getElementById('txtMsg').value;

    if (campoMsg.length > 10){
        return true;
    }
    else {
        document.getElementById('msgInv').innerHTML = 
        "Escreva uma mensagem válida (acima de 10 caracteres).";
        return false;
    }
}

function validarTudo(){
    if (validarNome() &&
        validarEmail() &&
        validarAssunto() &&
        validarMsg()      
    ){
        return true;
    }
    else {
        return false;
    }
}