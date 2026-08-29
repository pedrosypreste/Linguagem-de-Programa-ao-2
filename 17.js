const prompt = require("prompt-sync")();

let espera = [];

let embarcados = [];

principal: while (true) {
  let senha = Number(prompt("Digite sua senha: "));

  if (senha === 0) {
    break;
  }

  if (senha === 5555) {
    menu: while (true) {
      console.log("1 - Check In");
      console.log("2 - Embarcar Passageiro");
      console.log("3 - Desistir da Viagem");
      console.log("4 - Pesquisar Passageiro");
      console.log("5 - Relatório do Voo");
      console.log("6 - Encerrar Sistema");
      console.log("");

      let perg = Number(prompt(""));

      if (perg === 1) {
        let perg1 = prompt("Digite o nome de um passageiro: ");

        if (espera.includes(perg1) || embarcados.includes(perg1)) {
          console.log("PASSAGEIRO DUPLICADO");
        } else {
          espera.push(perg1);
          console.log(`${perg1} adicionado a lista de espera`);
        }
      }

      if (perg === 2) {
        let embarcado = espera.pop();

        embarcados.push(embarcado);

        console.log(`${embarcado} foi embarcado`);
      }

      if (perg === 3) {
        let cviagem = espera.pop();

        console.log(`${cviagem} passagem cancelada`);
      }

      if (perg === 4) {
        let pesquisar = prompt("Achar nome de passageiro: ");

        if (espera.includes(pesquisar)) {
          console.log(`${pesquisar} está na fila de espera`);
        } else if (embarcados.includes(pesquisar)) {
          console.log(`${pesquisar} está embarcado`);
        } else {
          console.log("Passageiro não encontrado");
        }
      }

      if (perg === 5) {
        console.log(
          `Passageiros : ${espera} , ${embarcados} || passageiros em espera ${espera.length}, passageiros em embarque ${embarcados.length}`,
        );
      }

      if (perg === 6) {
        break principal;
      }
    }
  }
}

console.log(
  `Passageiros : ${espera} ${embarcados} || passageiros em espera ${espera.length}, passageiros em embarque ${embarcados.length}`,
);
