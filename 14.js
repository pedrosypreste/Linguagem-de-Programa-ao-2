const prompt = require("prompt-sync")();

carrinho = [];

menu: while (true) {
  console.log("1 - Adicionar produto");
  console.log("2 - Remover último produto");
  console.log("3 - Buscar produto");
  console.log("4 - Exibir carrinho");
  console.log("Sair");
  console.log("");

  let perg = Number(prompt(""));

  if (perg === 2) {
    let removido = carrinho.pop();
console.log(`O produto ${removido} foi removido.`);1
  } else if (perg === 1) {
    let perg2 = prompt("Digite o produto: ");
    carrinho.push(perg2);
  } else if (perg === 3) {
    let perg3 = prompt("Digite produto a ser buscado ");
    if (carrinho.includes(perg3)) {
      console.log("Produto encontrado no carrinho!");
    } else {
      console.log("Produto não está no carrinho.");
    }
  } else if (perg === 4) {
    console.log(`Itens do carrinho ${carrinho} quantidade ${carrinho.length}`);
  } else if (perg === 5) {
    break;
  }
}

console.log(`Itens do carrinho ${carrinho} quantidade ${carrinho.length}`);
