var potencia = function (s) {
    if (!s.length) return 0;
    //se espera que siempre venga al menos 1 caracter
    var max = 1;
    var contador = 1;
    for (let i = 1; i < s.length; i++) {
        const c = s[i];
        if (c === s[i-1]) {
            contador++;
            max = Math.max(max, contador);
        } else {
            contador = 1;
        }
    }
    return max;
}

console.log("Para 'leetcode' la potencia es ", potencia("leetcode"));
console.log("Para 'abbcccddddeeeeeabcde' la potencia es", potencia("abbcccddddeeeeeabcde"));
console.log("Para 'tourist' la potencia es ", potencia("tourist"));
console.log("para '' la potencia es ", potencia(""));