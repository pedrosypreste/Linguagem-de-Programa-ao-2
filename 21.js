const prompt = require('prompt-sync')();

let produtos = []

let precos = []

let estoques = []

function buscarProduto(nome) {
    return produtos.indexOf(nome);
}

function cadastrarProduto(nome, preco, quantidade) {
    if (buscarProduto(nome) === -1) {
    produtos.push(nome);
    precos.push(preco);
    estoques.push(quantidade);
    console.log(`${nome} cadastrado com sucesso!`);
    } else {
    console.log("Produto já existe!");
    }
}

function realizarVenda(nome, quantidade) {

    let index = buscarProduto(nome)
    if (index === -1 ) {
        console.log('Produto não cadastrado')
    } else if (estoques[index] < quantidade) {
        console.log('Estoque não suficiente')
    } else {
        estoques[index] -= quantidade
        let totalp = quantidade * precos[index]
        console.log(`Venda realizada! Total a pagar: R$ ${totalp}`)
    }

}

function adicionarEstoque(nome , quantidade) {
    let index1 = buscarProduto(nome)

    if (index1 === -1 ) {
        console.log('Produto não cadastrado')
    } else {
        estoques[index1] += quantidade
    }
}

function calcularPatrimonio() {
    let valort = 0
    for (let i = 0 ; i < produtos.length ;i++) {
        valort = valort + (precos[i] * estoques[i])
    }

    return valort

}

principal: while (true) {
    console.log('1 - Cadastrar Produto')
    console.log('2 - Realizar Venda')
    console.log('3 - Repor Estoque')
    console.log('4 - Ver Patrimônio Total da Loja')
    console.log('5 - Listar Produtos e Estoques')
    console.log('0 - Sair')

    let perg = Number(prompt(''))

    if (perg === 1 ) {
        let nome = prompt('Digite nome do produto: ')
        let preco = Number(prompt('Digite valor: '))
        let quantidade = Number(prompt('Digite quantidade: '))

        cadastrarProduto(nome, preco, quantidade)
    }

    if (perg === 2 ) {
        let nome = prompt('Digite nome do produto: ')
        let quantidade = Number(prompt('Digite quantidade: '))

        realizarVenda(nome, quantidade)
    }

    if (perg === 3 ) {
        let nome = prompt('Digite nome do produto: ')
        let quantidade = Number(prompt('Digite quantidade: '))

        adicionarEstoque(nome, quantidade)
    }

    if (perg === 4 ) {
        console.log(`Patrimonio total: ${calcularPatrimonio()}`)
    }

    if (perg === 5 ) {
        console.log(`Produtos: ${produtos} || Estoque: ${estoques}`)
    }

    if (perg === 0 ) {
        break
    }
}