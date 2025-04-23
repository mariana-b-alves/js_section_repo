function lerMusica(){
    console.log('Contexto de execução global');
}

function verNome(){
    console.log(this);
}

let jukebox = {
    musicas: [
        {titulo: 'So long', artista: 'Fisher Z'},
        {titulo: 'La Folie', artista: 'Stranglers'},
    ],
    lerMusica: function(musica){
        console.log(`Playing: ${musica.titulo} - ${musica.artista}`);
    },

    lerMusicas: function(){
        this.musicas.forEach(
            (musica) => this.lerMusica(musica)
            //Function context => não tem contexto de execução própria
        )
    }
}

jukebox.lerMusicas();

let pessoa = {
    nome: 'João',
    verNome: function(){
        console.log(this);
    }
}
pessoa.verNome();