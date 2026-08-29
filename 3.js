const prompt = require('prompt-sync')();

let t = 0

principal: while (true) {
    const n = 7

    let perg = Number(prompt('Tente um número'))

    if (perg === -1) {
        while (true) {
            console.log('1 - Continuar tentando')
            console.log('2 - Abandonar esta partida e tentar um novo número')
            console.log('3 - Sair do jogo completamente')

            let perg2 = Number(prompt(''))

            if (perg2 === 1) {
                break
            }

            if (perg2 === 2) {
                console.log('Partida reiniciada! Zerando tentativas...')
                t = 0
                break
            }

            if (perg2 === 3) {
                break principal
            }
        }
    }

    if (perg === 7) {
        t++
        break
    } else if (perg >= 0) {
        t++
        continue
    }
}