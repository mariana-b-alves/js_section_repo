//NOTA: querySelector é um seletor de CSS e, portanto, não funciona no SASS 

//NOTA 2: SASS =/= CSS

/* let itemsHot = document.querySelector('ul li.hot');
console.log(itemsHot);

itemsHot[1].className = 'cool';
 */

//Selecionar

let itemsHot = document.querySelectorAll('hot');
console.log(itemsHot);
itemsHot[0].className = 'complete';