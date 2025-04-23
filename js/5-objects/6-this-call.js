let pessoa = {
    nome: 'João',
    verNome: function(){
        return this.nome;
    }
};

let outraPessoa = Object.create(pessoa);
console.log(outraPessoa);g

console.log(pessoa.verNome())

outraPessoa.nome = 'Maria';
console.log(outraPessoa.verNome())

console.log(outraPessoa.verNome.call(pessoa));
