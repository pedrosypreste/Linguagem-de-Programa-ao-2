const prompt = require('prompt-sync')();

let t =0
let p = 0

principal: while (true) {
    let perg = Number(prompt('Digite o preço do produto: '))

    if (perg < 0) {
        while (true) {
            console.log('1 - Digitar preço novamente')
            console.log('2 - Cancelar a compra inteira')

            let perg2 = Number(prompt(''))

            if (perg2 === 1) {
                break
            }

            if (perg2 === 2) {
                break principal
            }
        }
    }

    if (perg === 0) {
        while (true) {
            console.log('Deseja fechar o pedido? 1-SIM 2-NÃO')
            let perg3 = Number(prompt(''))

            if (perg3 === 1) {
                console.log(`Total de itens ${t} e valor da compra ${p}`)
                break principal
            }

            if (perg3 === 2) {
                break
            }
        }
    }

    if (perg > 0) {
        t++
        p = perg + p
    }
}