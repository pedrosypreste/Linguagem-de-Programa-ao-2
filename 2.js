const prompt = require('prompt-sync')();

let b = 0

principal: while(true) {
    let pin = Number(prompt('Digite PIN correto ? '))

    if (pin === 1234) {
        while (true) {
            let saque = Number(prompt('Quanto quer sacar ? '))

            if (saque === 0) {
                break principal
            }
        }
    } else {
        b++
    }

    if (b === 3) {
        console.log('CARTÃO RECUSADO')
        break
    }
}