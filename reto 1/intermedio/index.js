const entrada = "97";

const map = new Map();
map.set("2", ["a", "b", "c"]);
map.set("3", ["d", "e", "f"]);
map.set("4", ["g", "h", "i"]);
map.set("5", ["j", "k", "l"]);
map.set("6", ["m", "n", "o"]);
map.set("7", ["p", "q", "r", "s"]);
map.set("8", ["t", "u", "v"]);
map.set("9", ["w", "x", "y", "z"]);

//logica utilizada para un string de 4
//se utilizan los arrays: 2, 3, 4 y 5.

//ad ae af ag ah ai aj ak al    9
//bd be bf bg bh bi bj bk bl    9
//cd ce cf cg ch ci cj ck cl    9 27

//dg dh di dj dk dl             6
//eg eh ei ej ek el             6
//fg fh fi fj fk fl             6 18

//gj gk gl                      3 
//hj hk hl                      3
//ij ik il                      3  9

//total: 27+18+9= 54

/**
 *
 * @param {String} entrada
 */
function generate(entrada) {
  if (verifyEntrada(entrada)) {
    console.log("input:", entrada);
    if (entrada.length == 0) {
      console.log("output:[]");
      console.log("elementos:", entrada.length);
    } else if (entrada.length == 1) {
      console.log("output:[", map.get(entrada).toString(), "]");
      console.log("elementos:", map.get(entrada).length);
    } else {
      let output = [];
      const entradaArray = entrada.split("");
      //console.log(entradaArray);
      let allElements = [];
      entradaArray.forEach(function (element) {
        allElements = allElements.concat( map.get(element));
      });
      let cont = 0;
      entradaArray.forEach(function(element) {
        const elementArray = map.get(element);
        //console.log((elementArray.length + cont));
        const tempArray = allElements.slice((elementArray.length + cont));
        //console.log("other elements ", tempArray);
        cont = cont + elementArray.length;
        let result = elementArray.flatMap((v, i) => tempArray.map((w) => v + w));
        //console.log("r ", result);
        output = output.concat(result);

      })
      console.log("output:[", output.toString(), "]");
      console.log("elementos:", output.length);
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
