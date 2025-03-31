let lista = document.querySelector('ul'); //document => Seleção baseada na página inteira. Não é necessário fazer à página toda...

let items = lista.querySelectorAll('li') //..como aqui, que estamos só a selecionar a lista

let primeiroItem = lista.firstElementChild;
primeiroItem.className = 'cool';

let ultimoItem = lista.lastElementChild;
ultimoItem.className = 'complete';
