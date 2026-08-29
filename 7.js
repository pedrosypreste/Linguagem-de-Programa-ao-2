const prompt = require('prompt-sync')();

let faturamentoTotal = 0

let carrosAtendidos = 0

sistema: while (true) {

    let senha = Number(prompt('Digite sua senha ? '))

    if (senha === 0) {
        break
    }

    if (senha === 9999 ) {
        painel: while (true) {

            console.log('1 - Novo Veículo')
            console.log('2 - Trocar Operador')
            console.log('3 - Fechar Estacionamento')

            let perg = Number(prompt(''))

            if (perg === 1) {

                let totalVeiculo = 0

                veiculo: while (true) {
                    let perg2 = Number(prompt('Digite o valor das taxas/hora '))

                    if (perg2 > 0) {

                        totalVeiculo = totalVeiculo + perg2

                    }

                    if (perg2 < 0) {
                        erro: while (true) {
                            console.log('1 - Redigitar taxa')
                            console.log('2 - Cancelar ticket')
                            console.log('3 - ALARME DE INCÊNDIO')

                            let perg3 = Number(prompt(''))

                            if (perg3 === 1) {
                                break erro
                            }

                            if (perg3 === 2) {
                                break veiculo
                            }

                            if (perg3 === 3) {
                                break sistema
                            }
                        }
                    }

                    if (perg2 === 0) {
                        pagamento: while (true) {
                            console.log(`Confirmar cobrança de R$ ${totalVeiculo} ? 1-SIM 2-NÃO`)

                            let perg4 = Number(prompt(''))

                            if (perg4 === 1) {
                                faturamentoTotal = totalVeiculo + faturamentoTotal

                                carrosAtendidos++

                                break veiculo
                            }

                            if (perg4 === 2) {
                                break pagamento
                            }
                        }
                    }
                }
            }

            if (perg === 2) {
                break painel
            }

            if (perg === 3) {
                break sistema
            }
        }
    }
}

console.log(`Faturamento total ${faturamentoTotal} carros atendidos ${carrosAtendidos}`)
