//*ES6 - Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let novaArr = [100, 'João', ...arr1, true, ...arr1, {nome: 'João', apelido: 'Gonçalves'}]; //A dimensão das arrays são dinâmicas (pode-se adicionar, subtrair, mudar e fazer-se mais ou menos o que quiser com os elementos, ao contrário de muitas linguagens de programação)
console.log('novaArr', novaArr);

//?Copy by reference
let copyRef = arr1;
console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

arr1.push(10);
console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

copyRef.push(100);
console.log('arr1:', arr1);
console.log('copyRef:', copyRef);

//?Copy by Value
console.log('------------------')
let clone = [...arr1];
console.log('arr1:', arr1);
console.log('clone:', clone);

arr1.push(124);
console.log('arr1:', arr1);
console.log('clone:', clone);

//*Utilizar spread com parâmetros de funções
console.log('------------------');

let params = [5, 6];

console.log ('addNums:', addNums(...params));

function addNums (num1, num2){ //Function declaration - permite fazer hoisting
    return num1 + num2;
}

/* let nome = 'Manuel da Silva';
console.log(...nome); */
