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

// Trabalhando com listas
function toList(arr) {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list.value = arr[i];
    if (i !== 0) {
      if (i === arr.length - 1)
        list.rest = null;
      let temp = {};
      temp.value = undefined;
      temp.rest = list;
      list = temp;
    }
  }
  return list;
}

function list() {
  const arr = prompt("Inform os itens da array separados por vírgula espaço (, )").split(', ');
  console.log(toList(arr));
}

// DeepEquals
function deepEquals(obj1, obj2) {
  const obj1keys = Object.keys(obj1).sort();
  const obj2keys = Object.keys(obj2).sort();

  if (obj1keys.length !== obj2keys.length) return false;

  for (let i = 0; i < obj1keys.length; i++) {
    if (obj1keys[i] !== obj2keys[i]) return false;
  }
  return true;
}

function testDeepEquals() {
  const obj1 = {
    "nome": "nome",
    "idade": 254,
    "cpf": 12312312312
  };

  const obj2 = {
    "carro": "sou um carro",
    "bibi": "fom fom",
    "quebrei": true
  };

  const obj3 = {
    "nome": "sobrenome",
    "idade": 2,
    "cpf": 0
  };

  console.log(`deepEquals(obj1, obj2) -> ${deepEquals(obj1, obj2)}`);
  console.log(`deepEquals(obj1, obj3) -> ${deepEquals(obj1, obj3)}`);
}
