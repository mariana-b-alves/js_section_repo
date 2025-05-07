let output = document.querySelector('#output');


fetch('pessoas.json')
    .then( resp => resp.json() )
    .then( data => {
        //console.log(data);
        output.innerHTML = `
            <h1>${data.nome} ${data.apelido}</h1>
            <p>${data.pais}</p>
        `;
    })

    .catch( () => output.textContent = 'Ocorreu um erro, tente mais tarde.')