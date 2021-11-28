const entrada = [1, 2, 3, 9, 9, 9];
//const entrada = ["1", "2", "3"];
//const entrada = ["4", "3", "2", "1"];
//const entrada = ["0"];
//const entrada = ["9"];

/**
 *
 * @param {Array} listado
 */
function addOne(entrada) {
  if (verifyEntrada(entrada)) {
    console.log("input:[", entrada.toString(), "]");
    // get final string with join, parse result to int and add 1.
    // finally get string from result.
    const finalEntry = (parseInt(entrada.join("")) + 1).toString();
    //console.log(finalEntry, typeof(finalEntry));
    const result = finalEntry.split("").toString();
    console.log("output:[", result, "]");
  }
}

/**
 *
 * @param {Array} listado
 */
function verifyEntrada(entrada) {
  let valid = false;

  //verify length: 1 <= entrada.length <= 100
  valid = entrada.length >= 1 && entrada.length <= 100;
  if (!valid) {
    console.log(
      "El array debe contener 1 elemento como minimo y 100 elementos como maximo"
    );
    return valid;
  }

  //verify each element is between 0 an 9 values.
  valid = entrada.every(function (element) {
    return element >= 0 && element <= 9;
  });
  if (!valid) {
    console.log(
      "Cada elemento del array acepta unicamente numeros digitos positivos: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
    );
    return valid;
  }

  //verify each element size is exactly 1.
  // this apply only if array has string elements. 
  valid = entrada.every(function (element) {
    return element.toString().length == 1;
  });
  if (!valid) {
    console.log("Cada elemento del array debe tener solo 1 digito");
    return valid;
  }
  return valid;
}
