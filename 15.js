const prompt = require("prompt-sync")();

let chamadas = [];

menu: while (true) {
  console.log("1 - Abrir chamado");
  console.log("2 - Cancelar último chamado");
  console.log("3 - Pesquisar cliente");
  console.log("4 - Listar chamados");
  console.log("Sair");

  let perg = Number(prompt(""));

  if (perg === 1) {
    let perg2 = prompt("Digite nome do cliente: ");

    chamadas.push(perg2);
  } else if (perg === 2) {
    let retirado = chamadas.pop();

    console.log(`${retirado} foi retirado da lista`);
  } else if (perg === 3) {
    let buscar = prompt("Digite nome de quem deseja buscar: ");

    if (chamadas.includes(buscar)) {
      console.log("Nome encontrado");
    } else {
      console.log("Nome não encontrado");
    }
  } else if (perg === 4) {
    console.log(
      `Nomes na lista: ${chamadas}, quantidade de nomes: ${chamadas.length}`,
    );
  } else {
    break;
  }
}

console.log(
  `Nomes na lista: ${chamadas}, quantidade de nomes: ${chamadas.length}`,
);
