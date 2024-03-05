function inverterString(str) {
    var resultado = "";
    
    for (var i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}

var string = "Teste entrevista Target!!";
var stringInvertida = inverterString(string);
console.log(stringInvertida);