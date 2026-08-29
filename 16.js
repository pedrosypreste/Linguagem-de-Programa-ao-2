const prompt = require("prompt-sync")();

let carro = [];

let catalogo = [];

principal: while (true) {
  let senha = Number(prompt("Digite sua senha: "));

  if (senha === 0) {
    break;
  }

  if (senha === 777) {
    painel: while (true) {
      console.log("1 - Cadastrar Jogo");
      console.log("2 - Desfazer cadastro");
      console.log("3 - Buscar no Catálogo");
      console.log("4 - Comprar Jogo");
      console.log("5 - Remover do carrinho");
      console.log("6 - Relatório Completo");
      console.log("7 - Sair");
      console.log("");

      let perg = Number(prompt(""));

      if (perg === 1) {
        let perg1 = prompt("Digite jogo para ir ao catalogo: ");

        if (catalogo.includes(perg1)) {
          console.log("jogo já está no catalogo");
        } else {
          catalogo.push(perg1);
          console.log(`${perg1} adicionado ao catalogo`);
        }
      }

      if (perg === 2) {
        let retirado = catalogo.pop();

        console.log(retirado, "foi tirado do catalogo");
      }

      if (perg === 3) {
        let perg2 = prompt("Digite um jogo a ser buscado: ");

        if (catalogo.includes(perg2)) {
          console.log("Está no catálogo: ");
        } else {
          console.log("Não está no catálogo: ");
        }
      }

      if (perg === 4) {
        let perg3 = prompt("Digite jogo a ser comprado ? ");

        if (catalogo.includes(perg3)) {
          carro.push(perg3);
          console.log("Jogo comprado");
        } else {
          console.log("Jogo não está no catalogo");
        }
      }

      if (perg === 5) {
        let retirado = carro.pop();
        console.log(`${retirado} foi retirado do carrinho`);
      }

      if (perg === 6) {
        console.log(
          `jogos no catalago ${catalogo} e quantidade ${catalogo.length} || jogos no carrinho ${carro} e quantidade ${carro.length}`,
        );
      }

      if (perg === 7) {
        break principal;
      }
    }
  }
}

console.log(
  `jogos no catalago ${catalogo} e quantidade ${catalogo.length} || jogos no carrinho ${carro} e quantidade ${carro.length}`,
);
