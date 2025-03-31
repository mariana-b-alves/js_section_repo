let scriptResults = document.getElementById('scriptResults') // NOTA: O none da variáve NÃO PRECISA de ser igual à classe de HTML, mas é mais prático.

let item2 =document.querySelector('#two')

console.log(item2.textContent); //textContent SÓ interpreta texto, não interpreta HTML
item1.textContent = "Morangos";
//item2.textContent = '<p>Morangos</p>';

item2.innerText = 'testa' //Não é standard


scriptResults.innerHTML = <p>Olá, universo!</p> //Cuidado com o innerHTML; ao interpretar tudo (incluindo HTML e script, por exemplo, num form), dá para hackear facilmente um "website"; só usar em sítios onde sabemos onde vem o conteúdo

