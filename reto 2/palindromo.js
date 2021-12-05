//numero entero
const numero = 1232133;

var isPalindrome = function(num) {
    
    const numString = num.toString();
    console.log("input", numString);
    const invertNumString = numString.split("").reverse().join("");
    if (numString == invertNumString) {
        console.log("Explanation: De derecha a izquierda es", invertNumString, " por lo tanto es un palíndromo.")
    } else {
        console.log("Explanation: De derecha a izquierda es", invertNumString, " por lo tanto no es un palíndromo.")
    }
    return numString == invertNumString;
}

const palindrome = isPalindrome(numero);
console.log(palindrome);
