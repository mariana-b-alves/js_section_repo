let lista = document.querySelector('ul');

//Acrescentar um li no final da lista~

//1 - Criar o li
let itemFim = document.createElement('li');

//2 - Criar texto para li
itemFim.textContent = 'Rename';

//3 - Acrescentar à lista
lista.append(itemFim);


//Acrescentar item no início da lista
let itemInicio = document.createElement('li');

itemInicio.textContent = 'item inicio';
lista.insertBefore(itemInicio, lista.firstElementChild); //inserBefore precisa de duas referências: a referência antes de onde vamos inserir a nossa referência e o que vamos inserir