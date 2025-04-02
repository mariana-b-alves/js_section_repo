let item2 = document.querySelector('#two');

item2.setAttribute('class', 'cool'); //Definir 2 params: nome e valor

if (item2.hasAttribute('class')){
    console.log(item2.getAttribute('class'));
}
item2.removeAttribute('class');

/* item2.className = 'cool';
item2.className = 'cool complete'; */

item2.classList.add('cool');
item2.classList.add('xpto');
item2.classList.remove('xpto');
item2.classList.toggle('xpto'); //Toggle -> "Ligar / desligar"

