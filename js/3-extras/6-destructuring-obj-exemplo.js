let output = document.querySelector('#output');
let container = document.querySelector('#container');

container.addEventListener('click', dizerOla, false);


//function dizerOla(e){
//function dizerOla(e){
function dizerOla({target: {value}}){

    //let {target: {value}} = e;

    //let texto = e.target.value;
    //let texto = target.value;
    //let texto = value;
    //output.textContent = texto;
    output.textContent = value;

}