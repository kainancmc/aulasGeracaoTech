let imoveis = [];
let opcao = "";

do {

    opcao = prompt(`
        Bem Vindos ao cadastro de imóveis \n
        Total de imóveis: ${imoveis.length} \n
        1 - Novo Imóvel
        2 - Listar Imóvel
        3 - Sair.
        `)

    switch(opcao){
        case "1":

        let imovel = {};

        imovel.nome = prompt(`Qual o nome do proprietário?`)
        imovel.quartos = parseInt(prompt(`Quantos quartos o imóvel possui?`))
        imovel.banheiro = parseInt(prompt(`Quantos banheiro o imóvel possui?`))
        imovel.garagem = prompt(`Possui garagem? Sim / Não`)

        let salvarImovel = confirm(
            `Deseja salvar imóvel? \n
            ${imovel.nome} \n
            ${imovel.quartos} \n
            ${imovel.banheiro} \n
            ${imovel.garagem} \n`
        )

        if (salvarImovel) {
            imoveis.push(imovel)
        }

        break;
        case "2":

        break;
        case "3":
    }
} while(opcao !="3");