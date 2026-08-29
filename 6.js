const prompt = require('prompt-sync')();

let totalFaturado = 0

let totalHospedes = 0

sistema: while (true) {

    let senha = Number(prompt('Digite senha ? '))

    if (senha === 0) {

        break sistema

    }

    if (senha === 1234 ) {
        menu: while (true) {
            console.log('1 - Nova Reserva')
            console.log('2 - Trocar Funcionário')
            console.log('3 - Desligar Sistema')

            let perg = Number(prompt(''))

            if (perg === 1) {

                let totalHospede = 0

                reserva: while (true) {

                    let perg2 = Number(prompt('Valor diária '))

                    if (perg2 > 0) {

                       totalHospede = totalHospede + perg2

                    }

                    if (perg2 < 0) {
                        erro: while (true) {

                            console.log('1 - Redigitar diária')
                            console.log('2 - Cancelar esta reserva')
                            console.log('3 - BLOQUEIO DE SEGURANÇA')

                            let perg3 = Number(prompt(''))

                            if (perg3 === 1) {
                                break erro
                            }

                            if (perg3 === 2) {
                                
                                let totalHospede = 0
                                break reserva
                            }

                            if (perg3 === 3) {
                                break sistema
                            }

                        }
                    }
                    
                    if (perg2 === 0) {
                                CP: while (true) {

                                    console.log(`Confirmar reserva no valor total de R$ ${totalHospede}? 1-SIM 2-NÃO`)

                                    let perg4 = Number(prompt(''))

                                    if (perg4 === 1) {

                                    totalFaturado = totalHospede + totalFaturado

                                    totalHospedes++

                                    break reserva

                                    }

                                    if (perg4 === 2) {
                                        break CP
                                    }
                                }
                            }

                }
            }

            if (perg === 2) {
                break menu
            }

            if (perg === 3) {
                break sistema
            }
        }
    }
}

console.log(`Total faturado ${totalFaturado} total de Hospedes ${totalHospedes}`)