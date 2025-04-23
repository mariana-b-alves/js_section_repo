class Pessoa{
    //ES10
    name = '';
    apelido = '';
    #titulo = 'Sr.'; //!Propriedade privada

    constructor (nome = 'John', apelido = 'Doe'){
        this.nome = nome;
        this.apelido = apelido;
    }

    verNome(){
        return `Nome: ${this.#titulo} ${this.nome} ${this.apelido}.`
    }

    //?Getters and setters

    get titulo(){
        console.log('-Dar acesso a propriedade privada-');
        return this.#titulo;
    }

    set titulo(novoTitulo){
        this.$titulo = novoTitulo;
    }
}

let joao = new Pessoa('João', 'Gonçalves');

console.log(joao);
console.log(joao.apelido);

joao.nome = 'João José';
console.log(joao);
console.log(joao.titulo);

joao.titulo = 'Tenente'
console.log(joao.titulo);
console.log(joao);

//?Herança de classes

class Developer extends Pessoa{
    constructor(nome, apelido, linguagem = 'Javascript'){
        super(nome, apelido);
        this.linguagem = linguagem;
    }

    programa(){
        return `Foi criado um Dev:${this.nome} ${this.apelido}, que gosta de ${linguagem}.`;
    }

  
}
let jose = new Developer('José', 'Silva');
console.log(jose);
console.log(jose.verNome());

/*ler teste = new String('João');
console.log(teste)*/