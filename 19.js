const prompt = require("prompt-sync")();

let disponiveis = [];

let alugados = [];

principal: while (true) {
  let senha = Number(prompt("Digite    a    senha    :    "));

  if (senha === 0) {
    break;
  }

  if (senha === 333) {
    menu: while (true) {
      console.log("1    -    Cadastrar    Veículos    ");
      console.log("2    -    Alugar    Veículo    Específico");
      console.log("3    -    Devolver    Veículo    Específico");
      console.log("4    -    Consultar    Veículos");
      console.log("5    -    Relatório    de    Frota");
      console.log("6    -    Encerrar    Sistema");
      console.log("");

      let perg = Number(prompt(""));

      if (perg === 1) {
        let perg1 = prompt(
          "Digite    veículo    para    ser    cadastrado:    ",
        );

        if (alugados.includes(perg1) || disponiveis.includes(perg1)) {
          console.log(`${perg1}    JÁ    ESTÁ    CADASTRADO`);
        } else {
          disponiveis.push(perg1);
          console.log(`${perg1}    foi    cadastrado`);
        }
      }

      if (perg === 2) {
        let perg2 = prompt("Digite    veículo    a    ser    alugado:    ");

        if (disponiveis.includes(perg2)) {
          let indice = disponiveis.indexOf(perg2);
          disponiveis.splice(indice, 1);
          alugados.push(perg2);

          console.log(`${perg2}    foi    alugado`);
        } else {
          console.log(`${perg2}    não    está    disponível`);
        }
      }

      if (perg === 3) {
        let perg3 = prompt("Digite    veículo    a    ser    devolvido:    ");

        if (alugados.includes(perg3)) {
          let indice = alugados.indexOf(perg3);
          alugados.splice(indice, 1);
          disponiveis.push(perg3);

          console.log(`${perg3}    foi    devolvido`);
        } else {
          console.log(`${perg3}    não    está    sendo    alugado`);
        }
      }

      if (perg === 4) {
        let perg4 = prompt("Digite    carro    a    ser    pesquisado:    ");

        if (alugados.includes(perg4)) {
          console.log(`${perg4}    está    sendo    alugado`);
        } else if (disponiveis.includes(perg4)) {
          console.log(`${perg4}    está    disponível    `);
        } else {
          console.log(`${perg4}    não    está    cadastrado`);
        }
      }

      if (perg === 5) {
        console.log(
          `Carros    disponíveis    ${disponiveis}    Quantidade    disponíveis    ${disponiveis.length}    ||    Carros    alugados    ${alugados}    quantidade    ${alugados.length}`,
        );
      }

      if (perg === 6) {
        break principal;
      }
    }
  }
}

console.log(
  `Carros    disponíveis    ${disponiveis}    Quantidade    disponíveis    ${disponiveis.length}    ||    Carros    alugados    ${alugados}    quantidade    ${alugados.length}`,
);
