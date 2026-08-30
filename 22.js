const prompt = require('prompt-sync')();

let filmes = []

let precos = []

let assentos = []

function buscaint (filme) {
    return filmes.indexOf(filme)
}

function adcfilme(filme, preco, assento) {
    if (buscaint(filme) !== -1) {
        console.log(`${filme} já está cadastrado`)
    } else {
        filmes.push(filme)
        precos.push(preco)
        assentos.push(assento)
    }
}

function vending(filme, assento) {
    let index = buscaint(filme)

    if (index === -1) {
        console.log(`${filme} não cadastrado`)
    } else if (assentos[index] < assento) {
        console.log('Assentos insuficientes')
    } else {
        assentos[index] -= assento

        let valort = precos[index] * assento

        console.log(`Compra efetuada com sucesso valor total ${valort}`)
    }
}

function adcvagas(filme, assento) {
    let index1 = buscaint(filme)

    if (index1 === -1 ) {
        console.log('FILME NÃO CADASTRADO')
    } else {
        let antigo = assentos[index1]
        assentos[index1] += assento
        return console.log(`Quantidade antiga de assentos disponíveis para o filme ${filme} : ${antigo}, quantidade atual ${assentos[index1]}`)
    }
}

function fatmax() {

    let valormax = 0

    for (let i = 0; i < filmes.length ; i++) {
        valormax = valormax + (precos[i] * assentos[i])
    }

    return console.log(`O faturamento máximo é de ${valormax}`)
}

principal: while (true) {
    console.log('1 - Busca Interna')
    console.log('2 - Adicionar Filme')
    console.log('3 - Vender Ingressos')
    console.log('4 - Adicionar Vagas')
    console.log('5 - Faturamento Máximo')
    console.log('0 - Sair')
    console.log('')

    let perg = Number(prompt())

    if (perg === 1 ) {
        let filme = prompt('Digite filme a ser buscado: ')

        if (buscaint(filme) === -1) {
            console.log('FILME NÃO ENCONTRADO')
        } else {
            console.log(`${filme} está na posição ${buscaint(filme)} na lista`)
        }
    }

    if (perg === 2 ) {
        let filme = prompt('Digite Filme a se cadastrado: ')
        let preco = Number(prompt('Digite preço do filme: '))
        let assento = Number(prompt('Digite quantidade de assentos disponíveis: '))

        adcfilme(filme, preco, assento)
    }

    if (perg === 3 ) {
        let filme = prompt('Digite filme a ser comprado: ')
        let assento = Number(prompt('Quantidade assento a ser comprado: '))

        vending(filme, assento)
    }

    if (perg === 4 ) {
        let filme = prompt('Digite nome do filme a ter assentos adicionados: ')

        let assento = Number(prompt('Digite quantidade de assentos a ser adicionado: '))

        adcvagas(filme, assento)
    }

    if (perg === 5 ) {
        fatmax()
    }

    if (perg === 0 ) {
        break
    }
}