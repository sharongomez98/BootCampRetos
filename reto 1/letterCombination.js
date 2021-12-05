const entrada = "7294";

const map = new Map();
map.set("2", ["a", "b", "c"]);
map.set("3", ["d", "e", "f"]);
map.set("4", ["g", "h", "i"]);
map.set("5", ["j", "k", "l"]);
map.set("6", ["m", "n", "o"]);
map.set("7", ["p", "q", "r", "s"]);
map.set("8", ["t", "u", "v"]);
map.set("9", ["w", "x", "y", "z"]);

var letterCombinations = function(entrada) {
  if (verifyEntrada(entrada)) {
    console.log("input:", entrada);
    if (!entrada) {
      return [];
    } else {
      let resultadoAnterior = map.get(entrada[0]);

      for(let i = 1; i < entrada.length; i++) {
        const digit = entrada[i];
        const letters = map.get(digit);
        const tempArray = [];
        resultadoAnterior = resultadoAnterior.forEach(function(l1) {
          letters.forEach(function(l2) {
            tempArray.push(`${l1}${l2}`);
          });
        });
        resultadoAnterior = tempArray;
      }
      return resultadoAnterior;
    }
  }
}

/**
 *
 * @param {String} entrada
 */
function verifyEntrada(entrada) {
  let valid = false;

  //verify length:  <= 4
  valid = entrada.length <= 4;
  if (!valid) {
    console.log("La cadena debe contener como maximo 4 caracteres numericos.");
    return valid;
  }

  //verify each element is between 2 an 9 values.
  valid = entrada.split("").every(function (element) {
    return element >= 2 && element <= 9;
  });
  if (!valid) {
    console.log(
      "la cadena acepta unicamente los siguientes numeros digitos : [2, 3, 4, 5, 6, 7, 8, 9]"
    );
    return valid;
  }
  return valid;
}

result = letterCombinations(entrada);
console.log("output:" , result);
console.log("elementos:", result.length);

