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

  console.log("Crescente:", bubble(arr, (a, b) => b < a));
  console.log("Decrescente:", bubble(arr, (a, b) => b > a));
  console.log("Crescente ímpares:", bubble(arr, (a, b) => (a % 2 === b % 2 && b < a) || (a % 2 === 0 && b % 2 === 1)));
  console.log("Decrescente pares:", bubble(arr, (a, b) => (a % 2 === b % 2 && b > a) || (a % 2 === 1 && b % 2 === 0)));
}

// Criptografia
function cripto(str, criterio) {
  let strCripto = "";

  for (let i = 0; i < str.length; i++) {
    strCripto += criterio(str[i]);
  }

  return strCripto;
}

function testCripto() {
  function createCesar(numCasas) {
    return char => {
      const alfabeto = "abcdefghijklmnopqrstuvwxyz";
      let charIndex = alfabeto.indexOf(char);
      if (charIndex === -1) return char;

      charIndex += numCasas;
      if (charIndex < 0) charIndex = alfabeto.length + charIndex;
      else charIndex %= alfabeto.length;

      return alfabeto[charIndex];
    }
  }

  const cesar0 = createCesar(0);
  const cesar2 = createCesar(2);
  const cesarM2 = createCesar(-2);

  console.log("Cesar 0 casas:", cripto("hiago", cesar0));
  console.log("Cesar 2 casas:", cripto("hiago", cesar2));
  console.log("Cesar -2 casas:", cripto("hiago", cesarM2));
}

// Verificando um número
function verify(num, criterio) {
  return criterio(num);
}

function testVerify() {
  const maxNum = 10;

  for (let num = 0; num <= maxNum; num++) {
    console.log(num, "é par:", verify(num, n => n % 2 === 0));
    console.log(num, "é ímpar:", verify(num, n => n % 2 === 1));
    console.log(num, "é primo:", verify(num, n => {
      if (num < 2) return false;
      for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return false;
      }
      return true;
    }));
  }
}
