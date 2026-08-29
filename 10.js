const prompt = require("prompt-sync")();

let historicoSaques = [];

let saldo = 500;

banco: while (true) {
  let senha = Number(prompt("Digite sua senha ? "));

  if (senha === 0) {
    break;
  }

  if (senha === 8888) {
    atm: while (true) {
      console.log("1 - Realizar Saque");
      console.log("2 - Ver Extrato");
      console.log("3 - Sair");

      let perg = Number(prompt(""));

      if (perg === 1) {
        saque: while (true) {
          let valor = Number(prompt("Digite o valor de saque ? "));

          if (valor > 0 && valor <= saldo) {
            saldo = saldo - valor;
            historicoSaques.push(valor);
            console.log("Saque feito com sucesso");
          }

          if (valor > saldo) {
            erro: while (true) {
              console.log("-----SAQUE INVÁLIDO-----");

              console.log("1 - Redigitar valor");
              console.log("2 - Cancelar operação");
              console.log("3 - Retirar cartão e encerrar");

              let perg2 = Number(prompt(""));

              if (perg2 === 1) {
                break;
              }

              if (perg2 === 2) {
                break saque;
              }

              if (perg2 === 3) {
                break banco;
              }

              if (perg2 === 0) {
                break saque;
              }
            }
          }

          if (valor === 0) {
            break;
          }
        }
      }

      if (perg === 2) {
        console.log(
          "Histórico de saques",
          historicoSaques,
          "Quantidade de saques",
          historicoSaques.length,
          "Saldo",
          saldo,
        );
      }

      if (perg === 3) {
        break banco;
      }
    }
  }
}

console.log(
  "Histórico de saques",
  historicoSaques,
  "Quantidade de saques",
  historicoSaques.length,
  "Saldo",
  saldo,
);
