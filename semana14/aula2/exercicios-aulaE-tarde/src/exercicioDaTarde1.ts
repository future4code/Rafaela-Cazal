const arrayDeNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

type dados = {
    quantidadeDeNumeros: number,
    numerosImpares: number,
    somaDosNumeros: number
};

function calculaOsDadosDoArray(arrayDeNumeros: number[]): dados {
    
    let quantidadeNumerosImpares: number = 0;
    let somatoriaTotal: number = 0;

    for (let i: number = 0; i < arrayDeNumeros.length; i++) {
        if(arrayDeNumeros[i] % 2 !== 0){
            quantidadeNumerosImpares = quantidadeNumerosImpares +1;
        }
        somatoriaTotal = somatoriaTotal + arrayDeNumeros[i] 
    }

 
    const resposta = {
        quantidadeDeNumeros: arrayDeNumeros.length,
        numerosImpares: quantidadeNumerosImpares,
        somaDosNumeros: somatoriaTotal,
    }
    return resposta
}

const resultadoDosCalculos: dados = calculaOsDadosDoArray(arrayDeNumeros)
console.log(resultadoDosCalculos)

