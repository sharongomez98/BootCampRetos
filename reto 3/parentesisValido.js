const mappedCharacters = {
    "}" : "{",
    "]" : "[",
    ")" : "("
}

const isValid = (s) => {
    const pilaApertura = [];

    for(let c of s) {
        switch (c) {
            case '(':
            case '{':
            case '[':
                pilaApertura.push(c);
                break;
            default:
                const last = pilaApertura.pop();
                if(last !== mappedCharacters[c]) return false;
        }
    }
    return !pilaApertura.length;
}

console.log(isValid("()"));
console.log(isValid("{"));
console.log(isValid("{[("));
console.log(isValid("{}([])"));