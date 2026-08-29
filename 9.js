const prompt = require('prompt-sync')();

let estoque = []

sistema: while (true) {

    let senha = Number(prompt('Digite sua senha '))

    if (senha === 0) {
        break
    }

    if (senha === 555) {

        menu: while (true) {

            console.log('1 - Cadastrar Lote')
            console.log('2 - Ver Estoque no Console')
            console.log('3 - Encerrar')

            let perg = Number(prompt(''))

            if (perg === 1) {
                lote: while (true) {

                    let caixas = Number(prompt('Quantas caixas vão para o lete: '))

                    if (caixas > 0) {

                        estoque.push(caixas)

                        console.log('Caixas adicionadas com sucesso')

                    }

                    if (caixas < 0) {

                        while (true) {
                            console.log('1-Redigitar')
                            console.log('2-Cancelar')
                            console.log('3-Parada de emergência')

                            let perg2 = Number(prompt(''))

                            if (perg2 === 1) {
                                break
                            }

                            if (perg2 === 2) {
                                break lote
                            }

                            if (perg2 === 3) {
                                break sistema
                            }
                        }
                    }

                    if (caixas === 0) {
                        break
                    }
                }
            }

            if (perg === 2 ) {

                console.log('Estoque',estoque,'Quantidade',estoque.length)
                
            }

            if (perg === 3) {
                break sistema
            }
        }
    }
}

console.log('Estoque',estoque,'Quantidade',estoque.length)