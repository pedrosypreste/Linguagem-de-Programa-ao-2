const prompt = require("prompt-sync")();

let aguardando = [];

let atendidos = [];

principal: while (true) {
  let senha = Number(prompt("Digite senha: "));

  if (senha === 0) {
    break;
  }

  if (senha === 999) {
    menu: while (true) {
      console.log("1 - Triagem");
      console.log("2 - Atender Paciente");
      console.log("3 - Desistência");
      console.log("4 - Consultar");
      console.log("5 - Relatório");
      console.log("6 - Encerrar");
      console.log("");

      let perg = Number(prompt(""));

      if (perg === 1) {
        let perg2 = prompt("Digite nome para aguardar: ");

        if (aguardando.includes(perg2) || atendidos.includes(perg2)) {
          console.log("Nome já adicionado");
        } else {
          aguardando.push(perg2);
          console.log(`${perg2} em aguardo`);
        }
      }

      if (perg === 2) {
        let chamado = aguardando.shift();

        atendidos.push(chamado);

        console.log(`${chamado} foi atendido`);
      }

      if (perg === 3) {
        let des = aguardando.pop();

        console.log(`${des} foi removido da fila`);
      }

      if (perg === 4) {
        let perg1 = prompt("Digite paciente a ser concultado: ");

        if (atendidos.includes(perg1)) {
          console.log(`${perg1} foi atendido`);
        } else if (aguardando.includes(perg1)) {
          console.log(`${perg1} está na fila de espera`);
        } else {
          console.log("Paciente não encontrado");
        }
      }

      if (perg === 5) {
        console.log(
          `Pacientes atendidos: Nomes: ${atendidos}   Quantidade: ${atendidos.length} || Pacientes em espera: Nomes: ${aguardando}   Quantidade: ${aguardando.length}`,
        );
      }

      if (perg === 6) {
        break principal;
      }
    }
  }
}
console.log(
  `Pacientes atendidos: Nomes: ${atendidos}   Quantidade: ${atendidos.length} || Pacientes em espera: Nomes: ${aguardando}   Quantidade: ${aguardando.length}`,
);
