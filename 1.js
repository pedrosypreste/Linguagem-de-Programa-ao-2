const prompt = require('prompt-sync')();

let j = 0
let i = 0

principal: while(true) {
    let perg = Number(prompt('Quanto quer sacar ? '))

    if (perg === 0) {
        continue
    }

    if (perg < 0) {

        while(true) {

            console.log('RESPOSTA INVÁLIDA')

            let perg2 = Number(prompt('Deseja fazer um saque válido ? 1-SIM 2-NÃO'))

            if (perg2 === 1 ) {
                break
            } else if (perg2 === 2) {
                break principal
            } 
        }
    }

    if (perg > 0) {
        i++
        j = j+perg
    }
}

console.log(`Número de saques válidos ${i} número sacado ${j} `)