const prompt = require('prompt-sync')();

let totalClientes = 0;
let totalDoDia = 0;

principal: while (true) {
    let senha = Number(prompt('Digite sua senha: '));

    if (senha === 0) {
        break principal;
    }

    if (senha === 1234) {
        caixa: while (true) {
            console.log('1 - Novo Atendimento');
            console.log('2 - Trocar de Operador');
            console.log('3 - Encerrar Sistema');

            let perg = Number(prompt(''));

            if (perg === 1) {
                let ct = 0; // Acumula APENAS o valor do cliente atual

                natendimento: while (true) {
                    let valor = Number(prompt('Digite o valor da bomba: '));

                    if (valor > 0) {
                        ct = ct + valor; // Soma no cliente atual
                    }

                    if (valor < 0) {
                        atendimento: while (true) {
                            console.log('1 - Redigitar valor');
                            console.log('2 - Cancelar este atendimento');
                            console.log('3 - PARADA DE EMERGÊNCIA');

                            let perg2 = Number(prompt(''));

                            if (perg2 === 1) {
                                break atendimento; // Volta para a bomba
                            }

                            if (perg2 === 2) {
                                break natendimento; // Cancela e volta ao caixa
                            }

                            if (perg2 === 3) {
                                break principal; // Desliga o sistema
                            }
                        }
                    }

                    // Fora do (valor < 0)
                    if (valor === 0) {
                        fechamento: while (true) {
                            console.log(`Confirmar pagamento de R$ ${ct}? 1-SIM 2-NÃO`);

                            let perg3 = Number(prompt(''));

                            if (perg3 === 1) {
                                di = di + ct;          // Soma no total do dia
                                totalClientes++;        // Incrementa o contador de clientes
                                break natendimento;   // Encerra atendimento e volta ao caixa
                            }

                            if (perg3 === 2) {
                                break fechamento;     // Volta a pedir valor na bomba
                            }
                        }
                    }
                }
            }

            if (perg === 2) {
                break caixa;
            }

            if (perg === 3) {
                break principal;
            }
        }
    }
}

console.log(`Total de clientes: ${totalClientes} | Total arrecadado: R$ ${totalDoDia}`);