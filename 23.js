const prompt = require("prompt-sync")();

let nomes = [];

let saldos = [];

let senhas = [];

function buscint(nome) {
  return nomes.indexOf(nome);
}

function abertconta(nome, saldo, senha) {
  if (buscint(nome) !== -1) {
    console.log(`${nome} JÁ ESTÁ COMO TITULAR DE UMA CONTA`);
  } else {
    nomes.push(nome);
    saldos.push(saldo);
    senhas.push(senha);

    console.log("Conta aberta com sucesso");
  }
}

function dep(nome, saldo) {
  let index = buscint(nome);

  if (index !== -1) {
    saldos[index] = saldos[index] + saldo;

    console.log("Depósito feito com sucesso");
  } else {
    console.log("ERRO");
  }
}

function saqval(nome, senha, saldo) {
  let index1 = buscint(nome);

  if (index1 !== -1 && senha === senhas[index1] && saldo <= saldos[index1]) {
    let saldoant = saldos[index1];
    saldos[index1] -= saldo;

    console.log(
      `Saque de ${saldo} foi feito || Valor na conta antes do saque = ${saldoant}. Valor na conta atualmente = ${saldos[index1]}`,
    );
  } else {
    console.log("ERRO");
  }
}

function transfcont(origem, senha, destino, valor) {
  let indexOrigem = buscint(origem);
  let indexDestino = buscint(destino);

  if (indexOrigem === -1) {
    console.log("Conta de origem não cadastrada.");
  } else if (indexDestino === -1) {
    console.log("Conta de destino não cadastrada.");
  } else if (senhas[indexOrigem] !== senha) {
    console.log("Senha incorreta.");
  } else if (saldos[indexOrigem] < valor) {
    console.log("Saldo insuficiente.");
  } else {
    saldos[indexOrigem] -= valor;
    saldos[indexDestino] += valor;

    console.log(
      `Transferência de R$ ${valor} realizada de ${origem} para ${destino} com sucesso!`,
    );
  }
}

function patribanco() {
  let valort = 0;
  for (let i = 0; i < nomes.length; i++) {
    valort = valort + saldos[i];
  }

  console.log(`Patrimonio total do banco: ${valort}`);
}

principal: while (true) {
  console.log("1 - Busca Interna");
  console.log("2 - Abertura de Conta");
  console.log("3 - Depósito");
  console.log("4 - Saque com Validação");
  console.log("5 - Transferência entre Contas");
  console.log("6 - Patrimônio do Banco");
  console.log("0 - SAIR");
  console.log("");

  let perg = Number(prompt(""));

  if (perg === 1) {
    let nome = prompt("Digite nome a ser buscado : ");

    if (buscint(nome) !== -1) {
      console.log("Conta existente");
    } else {
      console.log("Conta não existente");
    }
  }

  if (perg === 2) {
    let nome = prompt("Digite titular da nova conta: ");
    let senha = Number(prompt("Digite senha da nova conta: "));
    let saldo = Number(prompt("Digite o saldo da sua nova conta"));

    abertconta(nome, saldo, senha);
  }

  if (perg === 3) {
    let nome = prompt("Digite conta para depósito");

    let saldo = Number(prompt("Digite o quanto a ser depósitado: "));

    dep(nome, saldo);
  }

  if (perg === 4) {
    let nome = prompt("Digite conta para sacar: ");

    let senha = Number(prompt("Digite senha da conta: "));

    let saldo = Number(prompt("Digite o saque: "));

    saqval(nome, senha, saldo);
  }

  if (perg === 5) {
    let origem = prompt("Digite conta de tranferencia de origem: ");

    let destino = prompt("Digite conta de tranferencia de destino: ");

    let senha = Number(prompt("Digite senha da conta de origem: "));

    let valor = Number(prompt("Digite valor de transferência: "));

    transfcont(origem, senha, destino, valor);
  }

  if (perg === 6) {
    patribanco();
  }

  if (perg === 0) {
    break;
  }
}
