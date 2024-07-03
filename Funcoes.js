//// JavaScript: Funções

// Mínimo e Máximo
function min(a, b) {
  return a < b ? a : a > b ? b : null;
}

function max(a, b) {
  return a > b ? a : a < b ? b : null;
}

function minMax() {
  const minOrMax = prompt("Quer usar a função min ou a max?").toLowerCase();
  if (!"minmax".includes(minOrMax)) {
    alert('Escreva "min" ou "max"');
    return;
  }

  const a = parseInt(prompt("Passe o primeiro número"));
  const b = parseInt(prompt("Passe o segundo número"));

  if (minOrMax === "min") {
    let result = min(a, b);
    if (result === null)
      alert("Os números são iguais");
    else
      alert(`${result} é menor`);
  } else if (minOrMax === "max") {
    let result = max(a, b);
    if (result === null)
      alert("Os números são iguais");
    else
      alert(`${result} é maior`);
  }
}

// Recursividade
function mod2(num) {
  if (num < 2)
    return num === 0;
  return mod2(num - 2);
}

function mod(num, _mod) {
  if (mod === 0) return true;

  if (num < _mod) 
    return num === 0;
  return mod(num - _mod, _mod);
}

function recursividade() {
  const num1 = parseInt(prompt("Informe um número positivo."));
  const num2 = parseInt(prompt("Informe um segundo número positivo."));

  console.log(`${num1} ${mod2(num1) ? "é" : "não é"} divisível por 2.`);
  console.log(`${num1} ${mod(num1, num2) ? "é" : "não é"} divisível por ${num2}.`);
}

// Contando caracteres
function countChars(frase, c) {
  let count = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === c)
      count++;
  }
  return count;
}

function contandoChars() {
  const frase = prompt("Informe a frase.");
  const c = prompt("Informe o caracter a ser contado.");
  
  console.log(`'${c}' aparece ${countChars(frase, c)} vezes em "${frase}"`);
}
