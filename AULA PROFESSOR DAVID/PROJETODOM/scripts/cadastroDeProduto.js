
let produtos = []
let id = 1

let nomeProduto = document.getElementById('nome');
let valorProduto = document.getElementById('valor');
let quantidadeProduto = document.getElementById('quantidade');
let imagemProduto = document.getElementById('imagem');

function validarDados(){
    event.preventDefault();

    //console.log(`O valor digitado foi ${nomeProduto.value}`)

    if(nomeProduto.value.length !== 0){
        nomeProduto.classList.remove('is-invalid');
        nomeProduto.classList.add('is-valid');
    }else{
        nomeProduto.classList.remove('is-valid');
        nomeProduto.classList.add('is-invalid');
    }

    if(valorProduto.value.length !== 0){
        valorProduto.classList.remove('is-invalid');
        valorProduto.classList.add('is-valid');
    }else{
        valorProduto.classList.remove('is-valid');
        valorProduto.classList.add('is-invalid');
    }

    if(quantidadeProduto.value.length !== 0){
        quantidadeProduto.classList.remove('is-invalid');
        quantidadeProduto.classList.add('is-valid');
    }else{
        quantidadeProduto.classList.remove('is-valid');
        quantidadeProduto.classList.add('is-invalid');
    }

    if(imagemProduto.value.length !== 0){
        imagemProduto.classList.remove('is-invalid');
        imagemProduto.classList.add('is-valid');
    }else{
        imagemProduto.classList.remove('is-valid');
        imagemProduto.classList.add('is-invalid');
    }
}


function cadastrarProduto(){
    produtos.push({
        id: id, 
        nome: nomeProduto.value, 
        valor: valorProduto.value, 
        quantidade: quantidadeProduto.value, 
        imagem: imagemProduto.value
    });
    id++;
    renderProduto()
}


function renderProduto(){
    conteudoTabela.innerHTML =''
    produtos.map((item) =>{
    conteudoTabela.innerHTML += `
    
       <tr>
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.valor}</td>
        <td>${item.quantidade}</td>
        <td><img style="width: 200px; heigth: 200px" src="${item.imagem}"></td>
        <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger">Excluir</button>
        </td>
       </tr>
    `;})
}