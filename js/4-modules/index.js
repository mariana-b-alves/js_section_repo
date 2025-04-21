import xpto, {olaUniverso, nome} from './libEs6.js';
import moduleName from './data.js';

let output = document.querySelector('#output');

output.innerHTML += `<h2>A utilizar o módulo de ES5.<br> Nome: ${libEs5.nome}</h2>`;
output.innerHTML += `<h2>ES5, dizer olá.<br>${libEs5.dizerOla()}</h2>`;
output.innerHTML += `<hr>`
output.innerHTML += `<h2>A utilizar o módulo de ES6:<hr> Universo: ${olaUniverso()}</h2>`
output.innerHTML += `<h2>ES6, nome.<br>${nome}</h2>`;
output.innerHTML += `<h2>ES6, EXPORT DEFAULT.<br> Default: ${xpto()}</h2>`;