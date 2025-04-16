let obj = {
    name: 'João',
    lastName: 'Gonçalves',
    address: {
        street: 'Rua da Betesga',
        city: 'Lisboa',
    }
};


console.log(obj.address.city);

let {name, lastName:apelido, address:{street.city}} = obj;

console.log(name);
console.log(apelido);
/* console.log(address.city); */
console.log(city);
