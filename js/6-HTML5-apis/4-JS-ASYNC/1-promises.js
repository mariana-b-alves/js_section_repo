let manterPalavra = true;

let promise = new Promise((resolve, reject) =>{
    if(manterPalavra){
        resolve('Promessa cumprida');
    } else{
        reject('Promessa quebrada');
    }
});

//console.log(promise);

let promise2 = new Promise((resolve, reject) =>{
//SetTimeout -> Executa uma função uma vez após certo tempo;
    setTimeout(() =>{
        resolve('Promessa cumprida');
    }, 3000); 
});

//console.log(promise2)

promise2
    .then(val => console.log(val))
    .then(() => console.log('Instrução dummy.'))
    //.then -> Executado quando a minha promise for fulfilled.
    //Sim, podem-se fazer vários .thens
    .catch( err => console.log(err))
    //.catch -> Método para apanhar erros.
    .finally( () => console.log('Executado independentemente de ser ou não cumprida.'))
    //.finally -> Executado independentemente de ser ou não cumprida