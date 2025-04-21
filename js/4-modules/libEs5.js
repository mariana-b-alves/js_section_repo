//IIFE - Immediate Invoked Function Expression

//Closure - Serve para expôr determinados membros (métodos e propriedades) da função

let libEs5 = (function(){
    let nome = 'João';
    let apelido = 'Gonçalves';

    function dizerOla(){
        return `Olá ${nome} ${apelido}.`
    }
    return{
        nome,
        dizerOla,
    }
})();

console.log(libEs5.nome);