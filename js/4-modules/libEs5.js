//IIFE - Immediate Invoked Function Expression

//Closure - Serve para expôr determinados membros (métodos e propriedades) da função

let libEs5 = (function(){
    let nome = 'Joao';

    let apelido = 'Goncalves';

    function dizerOla(){
        return `Olá ${nome} ${apelido}`;
    }

    return {
        nome,
        sayHi : dizerOla,
    }

})();

//console.log(libEs5.nome);