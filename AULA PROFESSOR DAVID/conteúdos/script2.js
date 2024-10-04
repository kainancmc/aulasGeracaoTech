// conseguir tratar um documento como se ele fosse um objeto
// manipular os elementos da tela

// .getElementById é uma forma de selecionar o elemento pelo ID

let conteudo = document.getElementById('card');
let paragrafo = document.getElementsByTagName('p');
let selecionar = document.getElementsByClassName('cardSelection');

let navegacao = document.querySelector('#menu');
let menu = document.querySelectorAll(".conteudoMenu > a");

let cabecalho = document.getElementById('header');

let cabecalhoNovo = document.querySelector('.cardSection');


console.log(conteudo);
console.log(paragrafo);
console.log(typeof conteudo);

console.log(selecionar);

console.log(navegacao);
console.log(typeof navegacao);

console.log(menu);

menu.forEach((item)=>{
    console.log(item)
})


function show(){
    alert('você clicou aqui!');
    cabecalho.classList.add('novoCard');
}

function cardVermelho(){ 
    cabecalhoNovo.innerHTML = 
    `
    <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Sapiente recusandae earum tempora? Officiis, illo.
          Deleniti quo possimus laboriosam deserunt unde error numquam,
           nobis, amet corrupti, rem consequatur blanditiis quod quis!
    </span>
    `;

   // cabecalhoNovo.classList.add("cardVermelho")

}