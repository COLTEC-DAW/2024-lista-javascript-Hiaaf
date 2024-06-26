//// JavaScript: Conceitos Básicos

// Desenhando um triângulo
function triangulo() {
  const NumLinhas = parseInt(prompt("Número de linhas para o triângulo?"));

  let tri = "";
  for (let i = 0; i < NumLinhas; i++) {
    for (let j = 0; j <= i; j++) {
      tri += "#";
    }
    tri += "\n";
  }
  console.log(tri);
}

// Tabuleiro de Xadrez
function xadrez() {
  const NumLinhas = parseInt(prompt("Número de linhas para o xadrez?"));
  const NumColunas = parseInt(prompt("Número de colunas para o xadrez?"));

  let xad = "";
  for (let l = 0; l < NumLinhas; l++) {
    for (let c = 0; c < NumColunas; c++) {
      xad += (l + c) % 2 === 1 ? ' ' : '#';
    }
    xad += '\n'
  }
  console.log(xad);
}

// Verificando Palíndromos
function palindromo() {
  const Palavra = prompt("Palavra (ou frase) para checar se é palindromo").toLowerCase();

  let palavraContrario = Palavra.split("").reverse().join("");
  console.log(`${Palavra} ${Palavra === palavraContrario ? "é" : "não é"} um palíndromo.`);
}

// Um programa diferente...
function diferente() {
  const NumLinhas = 100;

  for (let i = 1; i <= NumLinhas; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
      continue;
    }

    let str = '';
    if (i % 3 === 0)
      str += "Fizz";
    if (i % 5 === 0)
      str += "Buzz";

    console.log(str);
  }
}
