let prompt = require("prompt-sync")();

let carros = [];

principal: while (true) {
  let senha = Number(prompt("Digite sua senha: "));

  if (senha === 0) {
    break;
  }

  if (senha === 9999) {
    menu: while (true) {
      console.log(
        "1 Registrar tempo de permanênci 2 Exibir relatório de registros e total acumulado.3 Encerrar sistema",
      );

      let perg = Number(prompt(""));

      if (perg === 1) {
        registro: while (true) {
          let perg2 = Number(
            prompt("Digite o tempo de horas de 1 a 24 horas "),
          );

          if (perg2 >= 1 && perg2 <= 24) {
            carros.push(perg2);

            console.log("Salvo com sucesso");
          }

          if (perg2 === 0) {
            break registro;
          }

          if (perg2 < 1 || perg2 > 24) {
            erro: while (true) {
              console.log(
                "1 Tentar novamente.2 Cancelar registro e voltar ao menu principal.3 Desligar todo o sistema.",
              );

              let perg3 = Number(prompt(""));

              if (perg3 === 1) {
                break;
              }

              if (perg3 === 2) {
                break registro;
              }

              if (perg3 === 3) {
                break principal;
              }
            }
          }
        }
      }

      if (perg === 2) {
        console.log(`Tempos ${carros} quantidade de tempos ${carros.length}`);
      }

      if (perg === 3) {
        break principal;
      }
    }
  }
}

console.log(`Tempos ${carros} quantidade de tempos ${carros.length}`);
