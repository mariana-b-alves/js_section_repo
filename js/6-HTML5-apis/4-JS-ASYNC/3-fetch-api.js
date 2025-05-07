let output = document.querySelector('#output');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then ( data => mostrarUsers(data))
    .catch( () => output.textContent = 'Ocorreu um erro de comunicação');

    function mostrarUsers(users){
        console.log(users);
        users.map( ({name, email, address:{city}, website: site}) => {;
            //let {name, email, address:{city}, website: site} = user;
            output.innerHTML += `
                <article>
                    <h1>${name}</h1>
                    <h2>${email}</h2>
                    <p>${city}</p>
                    <h3>${site}</h3>
                    <hr>
                </article>
            `;
        })
    }

    //NOTA: Ter muito cuidado com o innerHTML neste caso, porque não sabemos de onde vêm os dados.