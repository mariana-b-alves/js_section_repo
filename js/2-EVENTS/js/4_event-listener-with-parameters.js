let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');
username.focus();

/* username.addEventListener('blur', validar(), false) */

/* username.addEventListener('blur', function(){
    check(7)
}, false) */

username.addEventListener('blur', () => check(7), false);
/* password.addEventListener('blur', () => check(9), false);
 */

/* function validar(){
    check(6);
} */

function check(min){
    if(username.value.length < min ){
        feedback.textContent = `Tem que ter mais do que ${min} carateres`
    } else{
        feedback.textContent = ''
    }
}