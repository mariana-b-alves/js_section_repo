let output = document.querySelector('#output');


fetch('texto.txt')
    .then(response => response.text())
    .then ( data => output. textContent = data + 'fetch')
    .catch( () => output.textContent = 'Ocorreu um erro de comunicação');


// Async / Await functions

(async function (){
    let response = await fetch('texto.txt');
    let data = await response.text();
    output.textContent = data + 'async-await';
})();

/* (async function (){
    try{
        let response = await fetch('texto.txt');
        if(!response.ok){
            throw new Error('Erro na comunicação.');
        }
        let data = await response.text();
        output.textContent = data;
    } catch (error) {
        output.textContent = 'Ocorreu um erro.';
    }
    
})(); */

/* async function lerTexto(){
    let response = await fetch('texto.txt');
    let data = await response.text();
    output.textContent = data;
} */

//lerTexto().catch ( err => output.textContent = 'Ocorreu um erro da função assíncrona.');

//Funções assíncronas retornam promises
async function ola() {
    return 'Olá da função assíncrona.'
}

ola().then( v => console.log(v));

