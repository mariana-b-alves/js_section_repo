function Pessoa (nome = 'John', apelido = 'Doe'){
    this.nome = nome;
    this.apelido = apelido;

    this.nomeCompleto = function(){
        return `Foi criada uma Pessoa com o nome: ${this.nome} ${this.apelido}.`;
    }
}



let joao = new Pessoa ('João', 'Gonçalves');

console.log(joao);
console.log(joao.nomeCompleto());
console.log('-----------------');

let manuel = new Pessoa ('Manuel');

console.log(manuel);
console.log(manuel.nomeCompleto());

console.log('-----------------');

joao.pais = 'PT';
console.log(joao);

console.log('-----------------');

Pessoa.prototype.titulo = 'Sr.';

console.log(joao);
console.log(manuel);

//?Herança

function Developer (nome, apelido, linguagem = 'Javascript'){
    Pessoa.call(this, nome, apelido);

    this.linguagem = linguagem;

    this.programa = function(){
        return `Foi criado um Dev:${this.nome} ${this.apelido}, que gosta de ${linguagem}.`
    }
}

let antonio = new Developer('António');
console.log(antonio)

