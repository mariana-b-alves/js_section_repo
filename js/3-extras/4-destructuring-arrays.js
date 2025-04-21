//*Destructuring de Arrays

let arr = [1, 2, 3, ]; //Trailing Comma - ES8 - Não faz nada de especial, mas é prático para motivos de não esquecimento
//console.log(arr.length);

let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a);
console.log(b);
console.log(c);

let [um, dois, tres] = arr; //Destructuring
console.log(um);
console.log(dois);
console.log(tres);

let [g, ...h] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(g);
console.log(h);

//APIs (Aplication Programming Interface) - Software intermediary that allows two apps to communicate with each other.
//When you use an app on your phone, it connects to the Internet and sends data to a server. Then, the server recovers that data, interprets it, executes the necessary actions, and returns it back to the phone. The app interprets that data and relays the . O app interpreta esses dados e apresenta as informações que solicitou de maneira legível. Todo esse processo ocorre por meio de uma API.

//JSON (JavaScript Object Notation) - Text-based, human-readable data interchange format used to exchange data between web clients and web servers. The format defines a set of structuring rules for the representation of structured data. JSON is used as an alternative to Extensible Markup Language (XML).


function xpto(){
    let nome = 'João'
    let pais = 'Portugal'

    return [nome, pais];
}

let [nome, pais] = xpto();
console.log(nome);
