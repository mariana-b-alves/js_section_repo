let items = document.getElementsByTagName('li');
let itemsHot = document.querySelector('li.hot');

console.log(items);
console.log(itemsHot);

//For NÃO É um método para iterar arrays, é para iterar objetos ou qualquer coisa iteráveis
for (const item of itemsHot){
    item.className = 'cool';
}

//HTMLCollection => LIVE NODES (Quando o DOM é alterado, ele executa-o e atualiza-o)
//querySelector => STATIC NODES (Quando é o DOM é alterado, não executa nem atualiza automaticamente)

//Ao tornar o nosso objeto numa array, já dá para fazer uma arrow function
/* let outraLista = Array.from(items);
outraLista.map(item => item.className = 'cool'); */

//Arrow functions SÓ funcionam com arrays

//itemsHot.map(item => item.className = 'cool');
//items.map(item => item.className = 'cool');