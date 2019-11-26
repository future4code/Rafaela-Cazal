
// exercicio 1

arrayFour = [
    { nome: "Darvas", idade: 20 },
    { nome: "Goli", idade: 10 },
    { nome: "Paulinha", idade: 12 },
    { nome: "Artur", idade: 89 },
    { nome: "Soter", idade: 55 },
    { nome: "Miau", idade: 1 },
    { nome: "Lu", idade: 32 }
]

// // a. maiores de 20

function soadultos(arrayFour){

    let novoArray = arrayFour.filter((item) => {
        return item.idade >= 20
    })

    console.log(novoArray)
}

soadultos(arrayFour)

// //  b. menores de 20

function socrianca(arrayFour){

    let arrayCrianca = arrayFour.filter((item) => {
        return item.idade <= 20
    })

    console.log(arrayCrianca)
}

socrianca(arrayFour)
 

// exercicio 2 


const array = [1, 2, 3, 4, 5, 6]

// a.
function vezesDois(array) {

        array.forEach((element, index, array) => {
      element[index] *= 2
    })

}
// b.
function vezesTres(array) {

    array.forEach((element, index, array) => {
      element[index] *= 3
    })

}
//  c.
function definir(array) {
   array.forEach((element, index, array) => {
    if (element[index] % 2 == 0) {
        console.log(element[index] + " é par")
    } else {
        console.log(element[index] + " é impar")
    }
})
}
