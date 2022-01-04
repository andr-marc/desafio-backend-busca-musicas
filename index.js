var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bancoDeMusica = [
  "Que Tiro Foi Esse",
  "Deixe-me Ir",
  "Sobre Nós (Poesia Acústica #2)",
  "Apelido Carinhoso",
  "Tô Com Moral No Céu",
  "Lugar Secreto",
  "Jó",
  "Perfect",
  "Fica Tranquilo",
  "Capricorniana (Poesia Acústica #3)",
  "Amor da Sua Cama",
  "Nessas Horas",
  "Downtown (part. J Balvin)",
  "Você Vai Entender",
  "Aquieta Minh'alma",
  "Havana",
  "Havana feat Young Thug",
  "Vai Malandra (part. MC Zaac, Maejor, Tropkillaz e DJ Yuri Martins)",
  "Prioridade",
  "Trevo (Tu) (part. Tiago Iorc)",
  "Machika (part. Anitta y Jeon)",
  "Trem Bala",
  "Moça do Espelho",
  "Safadômetro",
  "Eu Cuido de Ti",
  "Too Good At Goodbyes",
  "Duro Igual Concreto",
  "Aquela Pessoa",
  "Rap Lord (part. Jonas Bento)",
  "Contrato",
  "IDGAF",
  "De Quem É a Culpa?",
  "Não Troco",
  "Quase",
  "Deus É Deus",
  "Anti-Amor",
  "Eu Era",
  "Cerveja de Garrafa (Fumaça Que Eu Faço)",
  "Não Deixo Não",
  "Rockstar feat 21 Savage",
  "New Rules",
  "Photograph",
  "Eu Juro",
  "Ninguém Explica Deus (part. Gabriela Rocha)",
  "Lindo És",
  "Bengala e Crochê",
  "Pirata e Tesouro",
  "A Libertina",
  "Pesadão (part. Marcelo Falcão)",
  "Aleluia (part. Michely Manuely)",
  "Eu Cuido de Ti",
  "Oi",
  "Céu Azul",
  "Never Be The Same",
  "My Life Is Going On",
  "Imaturo",
  "Gucci Gang",
  "Cuidado",
  "K.O.",
  "Échame La Culpa",
  "Échame La Culpa feat Luis Fonsi",
  "Tem Café (part. MC Hariel)",
  "Raridade",
  "Te Vi Na Rua Ontem",
  "Dona Maria (feat Jorge)",
  "Fica (part. Matheus e Kauan)",
  "9 Meses (Oração do Bebê)",
  "Muleque de Vila",
  "A Vitória Chegou",
  "Ar Condicionado No 15",
  "Vida Loka Também Ama",
  "Pegada Que Desgrama",
  "Transplante (part. Bruno & Marrone)",
  "Na Conta da Loucura",
  "Tem Café (part. Gaab)",
  "Apelido Carinhoso",
  "Perfect Duet",
  "Perfect Duet feat Beyoncé",
  "Coração de Aço",
  "Minha Morada",
  "Amar, Amei",
  "Regime Fechado",
  "O Escudo",
  "Minha Namorada",
  "Quero Conhecer Jesus (O Meu Amado é o Mais Belo)",
  "Me Leva Pra Casa",
  "Como é Que Faz? (part. Rob Nunes)",
  "The Scientist",
  "Bella Ciao",
  "O Que Tiver Que Ser Vai Ser",
  "Corpo Sensual (part. Mateus Carrilho)",
  "Cor de Marte",
  "Bom Rapaz (part. Jorge e Mateus)",
  "Vidinha de Balada",
  "Não Era Você",
  "Em Teus Braços",
  "De Trás Pra Frente",
  "All Of Me",
  "Believer",
  "A Música Mais Triste do Ano",
  "Rabiola",
  "Paraíso (part. Pabllo Vittar)",
  "Vem Pra Minha Vida",
];

/**
 * Remove acentuação e caixa alta das strings
 */
function formatarString(string) {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 *
 * @param   {String} entrada               Nome da música a ser buscada.
 * @returns {Array<Array<String, number>>} Array com nome da música e sua respectiva pontuação
 */
function buscarMusica(entrada) {
  entrada = formatarString(entrada).split(" ");

  classificacao = [];

  for (let index = 0; index < bancoDeMusica.length; index++) {
    let score = 0;

    let banco = formatarString(bancoDeMusica[index]).split(" ");

    // se "feat" estiver na palavra, mas não na busca, são tirados 5 pontos
    if (!entrada.includes("feat") && banco.includes("feat")) score -= 5;

    entrada.forEach((palavraEntrada) => {
      banco.forEach((palavraBanco) => {
        let palavraCount = 0;
        for (let index = 0; index < palavraEntrada.length; index++) {
          // se as letras comparadas nos index forem iguais, adiciona 1 ponto e o contador de letras iguais
          if (palavraEntrada[index] === palavraBanco[index]) {
            score++;
            palavraCount++;
          }
        }
        // se o contador foi igual a quantidade de letra na palavra busca e na palavra do banco, confirma a palavra igual e adiciona 10 pontos
        if (
          palavraCount == palavraEntrada.length &&
          palavraCount == palavraBanco.length
        )
          score += 10;
      });
    });

    classificacao.push([bancoDeMusica[index], score]);
  }

  return classificacao;
}

/**
 *
 * @param {Array<Array<String,number>>} pontuacao Array contendo nome e pontuação de cada música
 * @returns {Array<Array<String,number>>} Array ordenado da maior a menor pontuação
 */
function classificarMusica(pontuacao) {
  pontuacao.sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1; // ordem alfabética crescente
    } else {
      return a[1] < b[1] ? 1 : -1; // ordem numérica decrescente
    }
  });
}

rl.question("# Digite sua busca: ", function (musica) {
  let pontuacao = buscarMusica(musica);

  classificarMusica(pontuacao);

  console.log("#");
  console.log("# Resultados:");
  for (let index = 0; index <= 9; index++) {
    console.log(`# ${pontuacao[index][1]} pontos, ${pontuacao[index][0]}`);
  }
  console.log("#");
  console.log("# -------------------------------------");

  rl.close();
});
