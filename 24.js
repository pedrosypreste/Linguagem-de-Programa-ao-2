const prompt = require("prompt-sync")();

let hospesdes = [];

let quartos = [];

let chaves = [];

let gastos = [];

let acesso = 0;

function busint(nome) {
  return hospesdes.indexOf(nome);
}

function checkin(nome) {
  let index1 = busint(nome);

  let quarto = Math.floor(Math.random() * 20) + 101;

  let chaveacesso = Math.floor(Math.random() * 9000) + 1000;

  if (quartos.length >= 20) {
    console.log("Hotel totalmente lotado!");
    return;}

  if (index1 !== -1) {
    console.log("Nome já cadastrado");
  } else {
    while (quartos.includes(quarto)) {
      quarto = Math.floor(Math.random() * 20) + 101;
    }

    hospesdes.push(nome);
    quartos.push(quarto);
    chaves.push(chaveacesso);
    gastos.push(0);

    console.log(`Quarto: ${quarto} || Senha: ${chaveacesso}`);
  }
}

function consumo(nome, chaveacesso, gasto) {
  let index = busint(nome);

  if (index === -1) {
    console.log("NOME NÃO CADASTRADO");
  } else if (chaves[index] !== chaveacesso) {
    console.log("CHAVE DE ACESSO INCORRETA");
  } else {
    gastos[index] += gasto;
    console.log(
      `Consumo registrado! Total acumulado de gastos: R$ ${gastos[index]}`,
    );
  }
}

function checkout(nome, chaveacesso) {
  let index = busint(nome);

  if (index === -1) {
    console.log("NOME NÃO CADASTRADO");
  } else if (chaves[index] !== chaveacesso) {
    console.log("CHAVE DE ACESSO INCORRETA");
  } else {
    let totalp = gastos[index] + 200;
    console.log(
      `Check-out realizado! Total a pagar (Consumo + R$ 200 diária): R$ ${totalp}`,
    );

    hospesdes.splice(index, 1);
    gastos.splice(index, 1);
    chaves.splice(index, 1);
    quartos.splice(index, 1);
  }
}

function painelocu() {
  console.log(
    `Hospedes: ${hospesdes} || Quartos: ${quartos} || Chaves de acesso: ${chaves} || Gastos: ${gastos}`,
  );
}

principal: while (true) {
  let senha = Number(prompt("Digite sua senha: "));

  if (acesso === 3) {
    break;
  }

  if (senha === 0) {
    break;
  }

  if (senha === 666) {
    acesso = 0;
    menu: while (true) {
      console.log("1 - Busca interna");
      console.log("2 - Check-In");
      console.log("3 - Consumo no Hotel");
      console.log("4 - Check-Out");
      console.log("5 - Painel de Ocupação");
      console.log("0 - Sair");
      console.log("Negativos - Volta ao menu de senha");
      console.log("");

      let perg = Number(prompt(""));

      if (perg === 1) {
        let nome = prompt("Digite algum nome a ser busacado: ");

        if (busint(nome) !== -1) {
          console.log(`${nome} está na posição ${busint(nome)}`);
        } else {
          console.log(`${nome} NÃO ETÁ CADASTRADO`);
        }
      }

      if (perg === 2) {
        let nome = prompt("Digite nome para o Check-In: ");

        checkin(nome);
      }

      if (perg === 3) {
        let nome = prompt("Digite nome para cadastrar consumo: ");

        let chaveacesso = Number(prompt("Digite sua chave de acesso: "));

        let gasto = Number(prompt("Digite seus gastos: "));

        consumo(nome, chaveacesso, gasto);
      }

      if (perg === 4) {
        let nome = prompt("Digite nome para check-out: ");

        let chaveacesso = Number(
          prompt("Digite chave de acesso para check-out: "),
        );

        checkout(nome, chaveacesso);
      }

      if (perg === 5) {
        painelocu();
      }

      if (perg === 0) {
        break principal;
      }

      if (perg < 0) {
        break;
      }
    }
  }

  acesso++;
}
