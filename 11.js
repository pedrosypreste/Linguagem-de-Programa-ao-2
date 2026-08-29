const prompt = require("prompt-sync")();

let notas = [];

escola: while (true) {
  let senha = Number(prompt("Digite sua senha ? "));

  if (senha === 0) {
    break escola;
  }

  if (senha === 1010) {
    portal: while (true) {
      console.log("1 - Cadastrar Nota");
      console.log("2 - Ver Boletim");
      console.log("3 - Sair");

      let perg = Number(prompt(""));

      if (perg === 1) {
        lancamento: while (true) {
          let perg2 = Number(
            prompt("Digite uma nota entre 0 a 10 (ou 999 para sair): "),
          );

          if (perg2 >= 0 && perg2 <= 10) {
            notas.push(perg2);
          }

          if (perg2 === 999) {
            break lancamento;
          }

          if ((perg2 < 0 || perg2 > 10) && perg2 !== 999) {
            erro: while (true) {
              console.log("1 - Redigitar nota");
              console.log("2 - Cancelar lançamento");
              console.log("3 - Sair do sistema");

              let perg3 = Number(prompt(""));

              if (perg3 === 1) {
                break erro;
              }

              if (perg3 === 2) {
                break lancamento;
              }

              if (perg3 === 3) {
                break escola;
              }
            }
          }
        }
      }

      if (perg === 2) {
        console.log("Notas:", notas, "Quantidade de notas:", notas.length);
      }

      if (perg === 3) {
        break escola;
      }
    }
  }
}
