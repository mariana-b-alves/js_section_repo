/* let items = document.querySelectorAll('li');

for (const item of items){
    item.addEventListener('click', eliminarItem, false)
}
 */

let ul = document.querySelector('ul');
    ul.addEventListener('click', eliminarItem, false); 

//Nota: Não é necessário colocar o false porque é o default, mas deve-se colocar para efeitos de relembrar os conceitos de event capturing e event bubbling

function eliminarItem(event){
   

    /* let itemEliminar = event.target.parentElement;
    itemEliminar.remove(); */

    if (event.target.nodeName === "EM"){
        event.target.parentElement = parentElement.remove();
    } else{
        event.target.parentElement.remove();
    }

    console.log (event);

    event.preventDefault(); //Previne o comportamento normal de um element (neste da hiperligação)
}
