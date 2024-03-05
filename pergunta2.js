function pertenceASequencia(numero) {
    let primeiro = 0;
    let segundo = 1;

    while (primeiro <= numero) {
        if (primeiro === numero) {
            return true;
        }

        let proximo = primeiro + segundo;
        primeiro = segundo;
        segundo = proximo;
    }

    return false; 
}

let numeroDesejado = prompt("Informe um número:");
numeroDesejado = parseInt(numeroDesejado);

if (pertenceASequencia(numeroDesejado)) {
    console.log(`${numeroDesejado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroDesejado} não pertence à sequência de Fibonacci.`);
}