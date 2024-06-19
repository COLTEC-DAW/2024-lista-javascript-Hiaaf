//// Objetos & Arrays

// Trabalhando com intervalos
function range(min, max, i) {
  let arr = [];
  for (let j = min; j < max; j += i)
    arr.push(j);
  return arr;
}

function intervalo() {
  const min = parseInt(prompt("Informe um valor mínimo."));
  const max = parseInt(prompt("Informe um valor máximo."));
  const i = parseFloat(prompt("Informe um intervalo de variação."));

  console.log(range(min, max, i));
}

// Revertendo um array
function reverseArray(arr) {
  let rra = [];
  for (let i = 0; i < arr.length; i++) {
    rra.push(arr[arr.length - 1 - i]);
  }
  return rra;
}

function yarrAesrever() {
  const arr = prompt("Inform os itens da array separados por vírgula espaço (, )").split(', ');
  console.log(reverseArray(arr));
}
