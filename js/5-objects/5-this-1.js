function lerMusica(){
    console.log('Contexto de execução global');
}

let jukebox = {
    musica: [
        {titulo: 'So long', artista: 'Fisher Z'},
        {titulo: 'La Folie', artista: 'Stranglers'}
    ],
    lerMusica, function(musica){
        console.log(`Playing: ${musica.titulo} - ${musica.artista}`);
    },

    lerMusicas: function(){
        let self = this;

        this.musica.forEach(
            function(musica){
                self.lerMusica(musica);
                /* this.lerMusica(musica); */
            }
            /* }.bind(this) */
        )
    }
}

jukebox.lerMusicas();