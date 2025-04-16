let obj = {
    name: 'Joao',
    lastName: 'Goncalves',
    address: {
        street: 'Rua da Betesga',
        city: 'Lisboa',
    }
};

let obj2 = {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    }

console.log(obj.address.city);

let {name, lastName:apelido, address:{street,city}} = obj;

console.log(name);
console.log(apelido);
//console.log(address.city);
console.log(city);


let {username, address:{geo:{lat,lng}}} = obj2;
console.log(lat);