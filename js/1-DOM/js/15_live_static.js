let lista = document.querySelector('ul');

let itemsLive = document.getElementsByTagName('li'); //Live Nodes -> É automaticamente atualizada / considera novos elementos 
let itemsStatic = document.querySelectorAll('li'); //Static Nodes -> Não é atualizada / considera sempre os mesmos elementos

//Live Nodes gastam mais memória do PC, por correr os queries sempre que há atualizações (pior ainda em aplicações maiores / mais complexas); Static Nodes só corre uma vez e considera só o atributos dentro dela (gasta menos memória)

console.log(itemsLive);
console.log(itemsStatic);


let novoLi = document.createElement('li');
novoLi.textContent = 'teste';
lista.append(novoLi);

/* destacar(itemsLive); */
destacar(itemsStatic);



//Porque é uma function declaration, podemos fazer hoisting
function destacar(items){
    for (const item of items) {
        item.classList.add('destaque');
    }
}