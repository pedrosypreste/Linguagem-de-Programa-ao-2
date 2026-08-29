const prompt = require('prompt-sync')();

let historicoVendas = []

sistema: while (true) {
    let senha = Number(prompt('Digite sua senha '))

    if (senha === 0) {
        break
    }

    if (senha === 123 ) {
        caixa: while(true) {
            console.log('1 - Registrar Produtos')
            console.log('2 - Ver Histórico no Console')
            console.log('3 - Encerrar')

            let perg = Number(prompt(''))

            if (perg ===1 ) {
                vendas: while(true) {
                    let preco = Number(prompt('Digite o valor '))

                    if (preco > 0) {

                    historicoVendas.push(preco)

                    console.log('Item foi gravado') }

                    if (preco < 0) {
                        erro: while (true) {

                            console.log('1-Redigitar, 2-Cancelar venda, 3-Parada de emergência')

                            let perg2 = Number(prompt(''))

                            if(perg2 === 1) {
                                break
                            }

                            if (perg2 === 2) {
                                break vendas
                            }

                            if (perg2 === 3) {
                                break sistema
                            }
                        }
                    }

                    if (preco
                         === 0) {

                        break vendas

                    }
                }
            }

            if (perg === 2 ) {

                console.log('Lista de vendas ',historicoVendas,'  Total de itens salvos ',historicoVendas.length)

            }

            if (perg === 3 ) {

                break sistema

            }
        }
    }

    if (senha === 0 ) {
        break sistema
    }
}

console.log(`Lista de vendas ${historicoVendas}  Total de itens salvos ${itens}`)