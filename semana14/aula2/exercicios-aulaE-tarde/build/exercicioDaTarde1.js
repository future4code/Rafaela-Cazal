const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function calculaOsDadosDoArray(arrayDeNumeros) {
    let quantidadeNumerosImpares = 0;
    let somatoriaTotal = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] % 2 !== 0) {
            quantidadeNumerosImpares = quantidadeNumerosImpares + 1;
        }
        somatoriaTotal = somatoriaTotal + arrayDeNumeros[i];
    }
    const resposta = {
        quantidadeDeNumeros: arrayDeNumeros.length,
        numerosImpares: quantidadeNumerosImpares,
        somaDosNumeros: somatoriaTotal,
    };
    return resposta;
}
const resultadoDosCalculos = calculaOsDadosDoArray(arrayDeNumeros);
console.log(resultadoDosCalculos);
//# sourceMappingURL=exercicioDaTarde1.js.map