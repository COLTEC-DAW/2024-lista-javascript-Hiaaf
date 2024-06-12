function Triangulo() {
  let numLinhas = parseInt(prompt("Número de linhas para o triângulo?"));

  let tri = "";
  for (let i = 0; i < numLinhas; i++) {
    for (let j = 0; j <= i; j++) {
      tri += "#";
    }
    tri += "\n";
  }
  console.log(tri);
}
