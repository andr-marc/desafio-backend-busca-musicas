# Desafio Backend: Busca por nomes de músicas

## Sobre o problema

O problema se trata da implementação de um sistema simples de busca de músicas, onde os resultados serão ordenados de acordo com um score atribuído a cada um deles. Este score leva em consideração algumas regras que são especificadas nas seções abaixo.

A entrada deve ser pelo stdin (entrada padrão), que irá receber o texto a ser buscado. De acordo com essa entrada, uma lista de itens deve ser retornada da stdout (saída padrão) em ordem decrescente de score. Os itens disponíveis são fixos e também estão disponíveis abaixo.

Sua tarefa é implementar um programa que retorne os 10 melhores resultados correspondentes à entrada fornecida.

## Regras

- Seu código deve ser em uma das seguintes linguagens: C, C++, Java, Go, PHP, Python, Rust ou JavaScript/NodeJS;

- **Não copiar** nenhuma solução de terceiros. Esperamos que você crie sua própria solução para o problema. Você está livre para acessar a Internet a fim de solucionar dúvidas relacionadas à plataforma para a qual você está desenvolvendo, estruturas de dados que você vier a utilizar, documentação da linguagem e da API, etc;

- O banco de músicas é fixo e informado abaixo. Considere que não existem músicas que não estejam no banco;

- A entrada pode receber acentos e letras maiúsculas/minúsculas. Porém, seu programa deve tratar para que esses caracteres sejam tratados com os acentos descartados e a letra minúscula (ex: a entrada "TrÉm bÃlà" dever dar natch com o item "Trem Bala");

- Acentuação, letras maiúsculas e minúsculas do banco de músicas também devem ser tratadas dentro do código (ex: a entrada "jo" deve dar match com o item "Jó");

- Uma **palavra** é definida **apenas** por separação de um ou mais espaços em branco;

- Exibir as 10 músicas com o **maior score** em ordem **decrescente**. Mostrar tanto o nome da música quanto o score correspondente àquele item. A ordem de exibição das músicas que tiverem o mesmo score deve seguir **ordem alfabética**;

- Você deve documentar qual a lógica utilizada no funcionamento do programa. Se alguma estrutura de dados especial tiver sido utilizada e for relevante no funcionamento do algoritmo, citá-la também;

- Um readme com o passo a passo para executar o programa também é bem-vindo.

## Cálculo de score

Seu programa irá comparar cada palavra do texto de entrada com cada palavra de cada música do banco de músicas. Considere que <span style="text-decoration: underline">X seja uma palavra do seu texto de entrada</span>, enquanto <span style="text-decoration: underline">Y seja uma palavra do banco de músicas</span>.

As regras de contabilização do score são as seguintes:

- +10 pontos: sempre que X casar perfeitamente com Y

- +1 ponto: para cada letra X que case perfeitamente com uma letra de Y, na mesma posição. Ou seja, comparar a primeira letra de X com a primeira letra de Y, depois a segunda letra de X com a segunda letra de Y e assim sucessivamente.

- -5 pontos: se o nome da música tiver uma palavra "feat", a menos que esta **palavra** também esteja presente no texto de entrada.

### **Exemplo 1**

```txt
Entrada: Fala dica
Música: Fica Tranquilo

Contabilização de letras: 5 pontos

 F a l a   d i c a   F a l a             d i c a
 F i c a   F i c a   T r a n q u i l o   T r a n q u i l o
 1,0,0,1   0,1,1,1   0,0,0,0,0,0,0,0,0   0,0,0,0,0,0,0,0,0

Contabilização de palavras idênticas: 0 pontos
Contabilização de feat: 0 pontos
Score da palavra: 5 pontos
```

### **Exemplo 2**

```txt
Entrada: Era
Música: Eu era

Contabilização de letras: 4 pontos

 E r a   E r a
 E u     e r a
 1,0,0   1,1,1

Contabilização de palavras idênticas: 10 pontos (palavra "era")
Contabilização de feat: 0 pontos
Score da palavra: 14 pontos
```

### **Exemplo 3**

```txt
Entrada: Havana
Música: Havana feat Young Thug

Contabilização de letras: 6 pontos

 H a v a n a   H a v a n a   H a v a n a   H a v a n a
 H a v a n a   f e a t       Y o u n g     T h u g
 1,1,1,1,1,1   0,0,0,0,0,0   0,0,0,0,0,0   0,0,0,0,0,0

Contabilização de palavras idênticas: 10 pontos (palavra "Havana")
Contabilização de feat: -5 pontos
Score da palavra: 11 pontos
```

### **Exemplo 4**

```txt
Entrada: Feat
Música: Featuring (feat)

Contabilização de letras: 4 pontos

 F e a t             F e a t
 F e a t u r i n g   ( f e a t )
 1,1,1,1,0,0,0,0,0   0,0,0,0,0,0

Contabilização de palavras idênticas: 0 pontos
Contabilização de feat: 0 pontos (não há a palavra "feat" no nome da música)
Score da palavra: 4 pontos
```

## Banco de músicas

"Que Tiro Foi Esse", "Deixe-me Ir", "Sobre Nós (Poesia Acústica #2)", "Apelido Carinhoso", "Tô Com Moral No Céu", "Lugar Secreto", "Jó", "Perfect", "Fica Tranquilo", "Capricorniana (Poesia Acústica #3)", "Amor da Sua Cama", "Nessas Horas", "Downtown (part. J Balvin)", "Você Vai Entender", "Aquieta Minh'alma", "Havana", "Havana feat Young Thug", "Vai Malandra (part. MC Zaac, Maejor, Tropkillaz e DJ Yuri Martins)", "Prioridade", "Trevo (Tu) (part. Tiago Iorc)", "Machika (part. Anitta y Jeon)", "Trem Bala", "Moça do Espelho", "Safadômetro", "Eu Cuido de Ti", "Too Good At Goodbyes", "Duro Igual Concreto", "Aquela Pessoa", "Rap Lord (part. Jonas Bento)", "Contrato", "IDGAF", "De Quem É a Culpa?", "Não Troco", "Quase", "Deus É Deus", "Anti-Amor", "Eu Era", "Cerveja de Garrafa (Fumaça Que Eu Faço)", "Não Deixo Não", "Rockstar feat 21 Savage", "New Rules", "Photograph", "Eu Juro", "Ninguém Explica Deus (part. Gabriela Rocha)", "Lindo És", "Bengala e Crochê", "Pirata e Tesouro", "A Libertina", "Pesadão (part. Marcelo Falcão)", "Aleluia (part. Michely Manuely)", "Eu Cuido de Ti", "Oi", "Céu Azul", "Never Be The Same", "My Life Is Going On", "Imaturo", "Gucci Gang", "Cuidado", "K.O.", "Échame La Culpa", "Échame La Culpa feat Luis Fonsi", "Tem Café (part. MC Hariel)", "Raridade", "Te Vi Na Rua Ontem", "Dona Maria (feat Jorge)", "Fica (part. Matheus e Kauan)", "9 Meses (Oração do Bebê)", "Muleque de Vila", "A Vitória Chegou", "Ar Condicionado No 15", "Vida Loka Também Ama", "Pegada Que Desgrama", "Transplante (part. Bruno & Marrone)", "Na Conta da Loucura", "Tem Café (part. Gaab)", "Apelido Carinhoso", "Perfect Duet", "Perfect Duet feat Beyoncé", "Coração de Aço", "Minha Morada", "Amar, Amei", "Regime Fechado", "O Escudo", "Minha Namorada", "Quero Conhecer Jesus (O Meu Amado é o Mais Belo)", "Me Leva Pra Casa", "Como é Que Faz? (part. Rob Nunes)", "The Scientist", "Bella Ciao", "O Que Tiver Que Ser Vai Ser", "Corpo Sensual (part. Mateus Carrilho)", "Cor de Marte", "Bom Rapaz (part. Jorge e Mateus)", "Vidinha de Balada", "Não Era Você", "Em Teus Braços", "De Trás Pra Frente", "All Of Me", "Believer", "A Música Mais Triste do Ano", "Rabiola", "Paraíso (part. Pabllo Vittar)", "Vem Pra Minha Vida"

## Exemplo

Você deve ler o texto de entrada a partir da entrada padrão e imprimir os resultados pela saída padrão de acordo com o formato abaixo.

Você pode utilizar linguagens C, C++, Java, Go, PHP, Python, Rust ou Javascript/NodeJS.

Dica: Os resultados mostrados nos exemplos são reais ;)

```txt
# Digite sua busca: Havana
#
# Resultados:
# 16 pontos, Havana
# 11 pontos, Havana feat Young Thug
# 7 pontos, Vai Malandra (part. MC Zaac, Maejor, Tropkillaz e DJ Yuri Martins)
# 5 pontos, Fica (part. Matheus e Kauan)
# 4 pontos, Me Leva Pra Casa
# 4 pontos, Vidinha de Balada
# 4 pontos, Pesadão (part. Marcelo Falcão)
# 3 pontos, Amor da Sua Cama
# 3 pontos, Tem Café (part. MC Hariel)
# 3 pontos, Vida Loka Também Ama
#
# -------------------------------------
```

## Critérios de avaliação

- Compila e executa sem crashar
- Funcionamento correto do programa
- Organização e clareza do código
- Performance do algoritmo
- Descrição do funcionamento do programa

## Solução

Para resolver esse teste, criei 3 funções `formatarString`, `buscarMusica` e `classificarMusica`.

`formatarString` é a função responsável por padronizar as Strings, removendo acentuação e caixa alta. Para isso, usei a função `normalize`, com atributo de decomposição.

Assim, um caractere acentuado, `é`, por exemplo, seria separado em `e + ´`. E para apagar os acentos, basta substituir todos os acentos por `""` (o que é feito com a função `replace`).

```js
function formatarString(string) {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
```

---

`buscarMusica` é a função que compara a busca com as músicas do banco e gera o score.

Para isso, a entrada é formatada e para cada música do banco (também formatada), separamos as palavras, verificamos se **"feat"** está no nome da música sem estar na busca do usuário, neste caso são deduzidos 5 pontos do score;

```js
if (!entrada.includes("feat") && banco.includes("feat")) score -= 5;
```

Verificamos se as letras da mesma posição pontuam, caso sim, adicionamos 1 ponto ao score. Além disso, é usado `palavraCount` para contar as letras idênticas, e se a contagem foi igual ao número de letras da palavra na busca e no banco de músicas, então a palavra é considerada igual;

```js
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
```

---

`classificarMusica` é a função usada para ordenar as músicas pela pontuação, e caso a pontuação seja igual, o quesito de desempate é a ordem alfabética do nome da música.

```js
function classificarMusica(pontuacao) {
  pontuacao.sort(function (a, b) {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1; // ordem alfabética crescente
    } else {
      return a[1] < b[1] ? 1 : -1; // ordem numérica decrescente
    }
  });
}
```
