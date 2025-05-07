let output = document.querySelector('#output');

fetch('https://picsum.photos/500/400')
    .then( resp => resp.blob())
    .then( data =>{
        let image = new Image();
        let imgUrl = URL. createObjectURL(data);
        image.src= imgUrl;
        output.append(image);
    })