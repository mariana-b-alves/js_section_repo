//NOTA: Quando selecionamos document.[x], alerts, entre outros, realmengte estamos a selecionar o nosso window / browser

window.addEventListener('DOMContentLoaded', init, false); //DOMCOntentLoaded -> Despoleta logo que o DOM estja pronto, é mais rápido
//load -> Despoleta só depois de todos os recursos, como, por exemplo, imagens, estejam 100% carregados, é mais lento

function init(){
    let username = document.querySelector('#username');
    username.value = 'teste';
}
