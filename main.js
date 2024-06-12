function Triangulo() {
  const numLinhas = parseInt(prompt("Número de linhas para o triângulo?"));

  let tri = "";
  for (let i = 0; i < numLinhas; i++) {
    for (let j = 0; j <= i; j++) {
      tri += "#";
    }
    tri += "\n";
  }
  console.log(tri);
}

function Xadrez() {
  const NumLinhas = parseInt(prompt("Número de linhas para o xadrez?"));
  const NumColunas = parseInt(prompt("Número de colunas para o xadrez?"));

  let xad = "";
  for (let l = 0; l < NumLinhas; l++) {
    if (l % 2 == 1)
      xad += " ";
    for (let c = 0; c < NumColunas; c++) {
      xad += "# ";
    }
    xad += "\n";
  }
  console.log(xad);
}
