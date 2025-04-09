let username = document.querySelector('#username');

username.focus();

username.addEventListener('blur', (evt) => check(evt, 5), false);
apelido.addEventListener('blur', (evt) => check(evt, 7), false);
password.addEventListener('blur', (evt) => check(evt, 9), false);

function check(evt, min){
    let campoValidar = evt.target;

    if(campoValidar.value.length < 5){
        divMsgErro.textContent = `O ${evt.target.id} tem que ter mais que ${min} caracteres.`
    } else{
        divMsgErro.textContent = '';
    }
}