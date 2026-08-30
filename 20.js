const prompt = require('prompt-sync')();

let cardapioNomes = [];
let cardapioPecos = [];
let comandaNomes = [];
let comandaPrecos = [];

function valorcomanda() {
    let precototal = 0;
    for (let i = 0; i < comandaPrecos.length; i++) {
        precototal += comandaPrecos[i];
    }
    return precototal;
}

principal: while (true) {

    let senha = Number(prompt('Digite a senha: '));

    if (senha === 0) {
        break;
    }

    if (senha === 777) {
        menu: while (true) {
            console.log('1 - Cadastrar Prato');
            console.log('2 - Adicionar Item a Comanda');
            console.log('3 - Remover Item da Comanda');
            console.log('4 - Ver Comanda e Total Parcial');
            console.log('5 - Fechar Conta');
            console.log('6 - Relatório do Cardápio');
            console.log('7 - Encerrar Sistema');
            console.log('');

            let perg = Number(prompt(''));

            if (perg === 1) {
                let nprato = prompt('Digite o nome do prato: ');
                let pprato = Number(prompt('Digite valor do preço: '));

                if (cardapioNomes.includes(nprato)) {
                    console.log('PRATO JÁ CADASTRADO');
                } else {
                    cardapioNomes.push(nprato);
                    cardapioPecos.push(pprato);

                    console.log(`${nprato} foi cadastrado com o preço de R$ ${pprato}`);
                }
            }

            if (perg === 2) {
                let nome = prompt('Digite nome para a comanda: ');
                let nindex = cardapioNomes.indexOf(nome);

                if (nindex !== -1) {
                    comandaNomes.push(nome);
                    comandaPrecos.push(cardapioPecos[nindex]);
                    console.log(`${nome} adicionado à comanda!`);
                } else {
                    console.log('Prato não consta no cardápio');
                }
            }

            if (perg === 3) {
                let perg1 = prompt('Digite nome para ser removido: ');

                if (comandaNomes.includes(perg1)) {
                    let index = comandaNomes.indexOf(perg1);
                    comandaNomes.splice(index, 1);
                    comandaPrecos.splice(index, 1);
                    console.log(`${perg1} removido da comanda!`);
                } else {
                    console.log(`${perg1} não consta na comanda`);
                }
            }

            if (perg === 4) {
                console.log(`Itens na comanda: ${comandaNomes.join(', ')} | Preço total: R$ ${valorcomanda()}`);
            }

            if (perg === 5) {
                console.log(`Valor total R$ ${valorcomanda()}`);

                comandaNomes = [];
                comandaPrecos = [];
            }

            if (perg === 6) {
                console.log(`Todos os pratos do cardápio: ${cardapioNomes.join(', ')} | Quantidade total: ${cardapioNomes.length}`);
            }

            if (perg === 7) {
                break principal;
            }
        }
    }
}