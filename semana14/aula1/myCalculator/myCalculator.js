//  exercicio 1 
const calculate = process.argv[2]
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let totalValue = 0;

switch(calculate){
    case "add":
        totalValue = num1 + num2
        break
    case "sub": 
        totalValue = num1 - num2
        break
    case "mult":
        totalValue = num1 * num2
        break
    case "div":
        totalValue = num1 / num2
        break
    default: console.log( " operação não encontrada")
}

console.log("Resposta: ", totalValue)