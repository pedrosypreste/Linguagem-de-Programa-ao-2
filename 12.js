const prompt = require("prompt-sync")();

let temperaturas = [];

sistema: while (true) {
  let senha = Number(prompt("Digite sua senha: "));

  if (senha === 0) {
    break;
  }

  if (senha === 333) {
    painel: while (true) {
      console.log("1 - Registrar Leitura");
      console.log("2 - Relatório de Temperaturas");
      console.log("3 - Desligar Sistema");
      console.log("");

      let perg = Number(prompt(""));

      if (perg === 1) {
        leitura: while (true) {
          let perg2 = Number(prompt("Digite a temperatura: "));

          if (perg2 >= -20 && perg2 <= 100) {
            temperaturas.push(perg2);
          }

          if (perg2 === 999) {
            break leitura;
          }

          if (perg2 < -20 || perg2 > 100) {
            alerta: while (true) {
              console.log("1 - Redigitar leitura");
              console.log("2 - Cancelar registros");
              console.log("3 - PARADA DE EMERGÊNCIA");
              console.log("");

              let perg3 = Number(prompt(""));

              if (perg3 === 1) {
                break;
              }

              if (perg3 === 2) {
                break leitura;
              }

              if (perg3 === 3) {
                break sistema;
              }
            }
          }
        }
      }

      if (perg === 2) {
        console.log(
          "Temperaturas",
          temperaturas,
          "Quantidade",
          temperaturas.length,
        );
      }

      if (perg === 3) {
        break sistema;
      }
    }
  }
}

console.log("Temperaturas", temperaturas, "Quantidade", temperaturas.length);
