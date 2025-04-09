let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');


//FUNCTION DECLARATION -> Faz hoisting
/* username.onblur = checkUsername;

function checkUsername(){
    if(username.value.length < 5){
        feedback.textContent = "Tem que ter mais do que 5 carateres"
    } else{
        feedback.textContent = ''
    }
} */

username.onblur = () =>{ //Event Handler -> Anonymous Function (que pode ser transformada em arrow functions
    if(username.value.length < 5){
        feedback.textContent = "Tem que ter mais do que 5 carateres"
    } else{
        feedback.textContent = ''
    }
}
