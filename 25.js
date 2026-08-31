const prompt = require("prompt-sync")();

// Módulos

let modulos = ["Oxigênio", "Escudos", "Motores", "Núcleo"];

let integridade = [100, 100, 100, 100];

// Módulos

// recurso

let Energia = 100;

let Peças = 10;

let TripulantesVivos = 5;

let reduz = false;

let dobra = false;

let dobraenerg = false;

let pontosdia = 3;

// recursos

// funções

function loc(nome) {
  return modulos.indexOf(nome);
}

function tempsolar() {
  if (dobra === false) {
    if (reduz === true) {
      Energia -= 15;
      integridade[loc("Escudos")] -= 10;
    } else {
      Energia -= 30;
      integridade[loc("Escudos")] -= 20;
    }
  } else {
    if (reduz === true) {
      Energia -= 30;
      integridade[loc("Escudos")] -= 20;
    } else {
      Energia -= 60;
      integridade[loc("Escudos")] -= 40;
    }
  }

  console.log("ALERTA!!! TEMPESTADE SOLAR DETECTADA");
}

function colasteroides() {
  if (dobra === false) {
    if (reduz === true) {
      integridade[loc("Motores")] -= 15;
      integridade[loc("Núcleo")] -= 7;
    } else {
      integridade[loc("Motores")] -= 30;
      integridade[loc("Núcleo")] -= 15;
    }
  } else {
    if (reduz === true) {
      integridade[loc("Motores")] -= 30;
      integridade[loc("Núcleo")] -= 15;
    } else {
      integridade[loc("Motores")] -= 60;
      integridade[loc("Núcleo")] -= 30;
    }
  }

  console.log("ALERTA!!! ASTEROIDES DETECTADOS");
}

function invciber() {
  if (dobra === false) {
    if (reduz === true) {
      Energia -= 12;
      Peças -= 1;
      integridade[loc("Oxigênio")] -= 12;
    } else {
      Energia -= 25;
      Peças -= 3;
      integridade[loc("Oxigênio")] -= 25;
    }
  } else {
    if (reduz === true) {
      Energia -= 25;
      Peças -= 3;
      integridade[loc("Oxigênio")] -= 25;
    } else {
      Energia -= 50;
      Peças -= 6;
      integridade[loc("Oxigênio")] -= 50;
    }
  }

  console.log("ALERTA!!! INVASÃO ESTÁ OCORRENDO");
}

function vazradiaç() {
  if (dobra === false) {
    if (reduz === true) {
      integridade[loc("Núcleo")] -= 10;
      TripulantesVivos -= 1;
    } else {
      integridade[loc("Núcleo")] -= 20;
      TripulantesVivos -= 1;
    }
  } else {
    if (reduz === true) {
      integridade[loc("Núcleo")] -= 20;
      TripulantesVivos -= 1;
    } else {
      integridade[loc("Núcleo")] -= 40;
      TripulantesVivos -= 2;
    }
  }

  console.log("ALERTA!!! RADIAÇÃO DETECTADA");
}

function repmod(perg1) {
  let indice = Number(perg1);
  if (indice >= 0 && indice <= 3 && indice !== 3) {
    integridade[indice] = Math.min(100, integridade[indice] + 25);
    pontosdia -= 1;
    Peças -= 2;
    console.log(`${modulos[indice]} reparado! +25% de integridade`);
  } else {
    console.log("Faça uma escolha válida (0-Oxigênio, 1-Escudos, 2-Motores)");
  }
}

function colrec(perg2) {
  if (perg2 === 1) {
    pontosdia -= 1;
    Energia += 20;
  }

  if (perg2 === 2) {
    pontosdia -= 1;
    Peças += 4;
  }
}
// funções

for (let dias = 0; dias < 12; dias++) {
  let desastre = Math.floor(Math.random() * 4);

  if (desastre === 0) {
    tempsolar();
  }

  if (desastre === 1) {
    invciber();
  }

  if (desastre === 2) {
    vazradiaç();
  }

  if (desastre === 3) {
    colasteroides();
  }

  if (integridade[loc("Núcleo")] <= 0) {
    break;
  }

  if (TripulantesVivos <= 0) {
    break;
  }

  if (integridade[loc("Escudos")] <= 0) {
    dobra = true;
  } else {
    dobra = false;
  }

  if (integridade[loc("Motores")] <= 0) {
    dobraenerg = true;
  } else {
    dobraenerg = false;
  }

  console.log(
    `Módulos: ${modulos}  || Porcentagem de cada módulo: ${integridade} || Tripulantes vivos: ${TripulantesVivos}`,
  );

  reduz = false;

  while (pontosdia >= 1) {
    console.log(
      "1 - Reparar Módulo (1 PA + 2 Peças): Recupera +25% de integridade do módulo escolhido menos o núcleo.",
    );
    console.log(
      "2 - Coletar Recursos (1 PA): Escolha entre ganhar +20 de Energia OU +4 Peças de Reparo.",
    );
    console.log(
      "3 - Reforçar Escudos (1 PA + 15 Energia): Reduz o dano do desastre do dia seguinte pela metade.",
    );
    console.log(
      "4 -Protocolo do Núcleo (2 PA + 30 Energia + 4 Peças): Recupera +20% do Núcleo.",
    );

    let perg = Number(prompt(""));

    if (dobraenerg === false) {
      if (perg === 1 && pontosdia >= 1 && Peças >= 2) {
        console.log("0 - Oxigênio");
        console.log("1 - Escudos");
        console.log("2 - Motores");
        let perg1 = prompt("Digite número do módulo para reparar: ");
        repmod(perg1);
      } else if (perg === 2 && pontosdia >= 1) {
        let perg2 = Number(prompt("1 - 20 Energia . 2 - 4 peças"));

        colrec(perg2);
      } else if (perg === 3 && pontosdia >= 1 && Energia >= 15) {
        pontosdia -= 1;
        Energia -= 15;

        reduz = true;
      } else if (perg === 4 && pontosdia >= 2 && Energia >= 30 && Peças >= 4) {
        pontosdia -= 2;
        Energia -= 30;
        Peças -= 4;

        integridade[loc("Núcleo")] = Math.min(
          100,
          integridade[loc("Núcleo")] + 20,
        );
      } else {
        console.log("Recursos insuficientes");
      }
    } else {
      if (perg === 1 && pontosdia >= 1 && Peças >= 2) {
        console.log("0 - Oxigênio");
        console.log("1 - Escudos");
        console.log("2 - Motores");
        let perg1 = prompt("Digite número do módulo para reparar: ");
        repmod(perg1);
      } else if (perg === 2 && pontosdia >= 1) {
        let perg2 = Number(prompt("1 - 20 Energia . 2 - 4 peças"));

        colrec(perg2);
      } else if (perg === 3 && pontosdia >= 1 && Energia >= 30) {
        pontosdia -= 1;
        Energia -= 30;

        reduz = true;
      } else if (perg === 4 && pontosdia >= 2 && Energia >= 60 && Peças >= 4) {
        pontosdia -= 2;
        Energia -= 60;
        Peças -= 4;

        integridade[loc("Núcleo")] = Math.min(
          100,
          integridade[loc("Núcleo")] + 20,
        );
      } else {
        console.log("Recursos insuficientes");
      }
    }
  }

  Energia -= 15 * (dobraenerg ? 2 : 1);

  if (Energia <= 0) {
    integridade[loc("Núcleo")] -= 15;
  }

  if (integridade[loc("Oxigênio")] <= 0) {
    TripulantesVivos -= 1;
  }

  pontosdia = 3;
}

if (integridade[loc("Núcleo")] > 0 && TripulantesVivos > 0) {
  console.log("Parabéms Você venceu");
} else {
  console.log("Você perdeu");
}
