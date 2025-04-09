let username = document.querySelector('#username');
let feedback = document.querySelector('#feedback');

//?Event Listener

username.addEventListener('blur', checkUsername, false) //NOTA: Por agora deixar o false por motivos que vão ser explicados depois


//? LISTENERS
function checkUsername(){ //Event Handler -> Anonymous Function (que pode ser transformada em arrow function)
    if(username.value.length < 5){
        feedback.textContent = "Tem que ter mais do que 5 carateres"
    } else{
        feedback.textContent = ''
    }
}

//? EVENT LISTENER
/* username.addEventListener('blur', function(){ //Event Handler -> Anonymous Function (que pode ser transformada em arrow function)
    if(username.value.length < 5){
        feedback.textContent = "Tem que ter mais do que 5 carateres"
    } else{
        feedback.textContent = ''
    }
}, false) */


//? EVENT LISTENER
/* username.addEventListener('blur', () =>{ //NOTA: Má prática usar arrow functions neste caso, porque as arrow function são para retornar qualquer coisa; aqui não está a retornar nada
    if(username.value.length < 5){
        feedback.textContent = "Tem que ter mais do que 5 carateres"
    } else{
        feedback.textContent = ''
    }
}, false) */