//// JavaScript: Funções de Alta Ordem

// Ordenação
function bubble(array, criterio) {
  let trocado;

  do {
    trocado = false;
    
    for (let i = 0; i < array.length - 1; i++) {
      if (criterio(array[i], array[i+1])) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        trocado = true;
      }
    }
  } while (trocado);

  return array;
}

function testBubble() {
  const arr = [4, 2, 3, 5, 7, 9, 6, 1, 8];

  console.log("Crescente: ", bubble(arr, (a, b) => b < a));
  console.log("Decrescente: ", bubble(arr, (a, b) => b > a));
  console.log("Crescente ímpares: ", bubble(arr, (a, b) => (a % 2 === b % 2 && b < a) || (a % 2 === 0 && b % 2 === 1)));
  console.log("Decrescente pares: ", bubble(arr, (a, b) => (a % 2 === b % 2 && b > a) || (a % 2 === 1 && b % 2 === 0)));
}

// Criptografia
function cripto(str, criterio) {
  let strCripto = "";

  str.forEach(char => {
    console.log(char);
  });
}

function testCripto() {
  console.log(cripto("hiago", (a) => a));
}