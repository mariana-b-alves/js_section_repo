let output = document.querySelector('#output');
let container = document.querySelector('#container');

container.addEventListener('click', dizerOla, false);


/* function dizerOla(e){ */
function dizerOla({target: {value}, currentTarget}, altKey){
    //console.log(e)
    //let (target: {value}, currentTarget = e)

    let {target: {value}, currentTarget} = e;

    console.log('Target value: ', value);
    console.log('Current target: ', currentTarget);
    console.log('Alt ligado', altKey);
}