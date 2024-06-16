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

function xadrez() {
  const NumLinhas = parseInt(prompt("Número de linhas para o xadrez?"));
  const NumColunas = parseInt(prompt("Número de colunas para o xadrez?"));

  let xad = "";
  for (let l = 0; l < NumLinhas; l++) {
    for (let c = 0; c < NumColunas; c++) {
      let space = l % 2 === 1 && c % 2 === 0 || l % 2 === 0 && c % 2 === 1;
      xad += space ? ' ' : '#';
    }
    xad += '\n'
  }
  console.log(xad);
}

function palindromo() {
  const Palavra = prompt("Palavra (ou frase) para checar se é palindromo").toLowerCase();

  let palavraContrario = Palavra.split("").reverse().join("");
  console.log(`${Palavra} ${Palavra === palavraContrario ? "é" : "não é"} um palíndromo.`);
}
