/**
 * EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
 *
 * EXERCÍCIO 1
 *  
 * - Inicialmente o sum valia zero e o i também valia 0 e adiciona mais 1 até i chegar ao valor 11. 
 * - printou 55
 */

/**
 * EXERCÍCIO 2
 * a. esse comando adciona itens 
 * b. (5) [10, 15, 20, 25, 30]
 * c. o console imprimiu a mesma coisa com a variavel numero valendo 3 e imprimiu (5) [12, 15, 18, 27, 30] com a variável numero valendo 4 
 * 
 * EXERCÍCIO 3 
 * O console imprime 
 * 0
   00
   000
   0000
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 4
 */
/** a. 
  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
  let maior = arrayOriginal[0]

  for(let i = 0; i < arrayOriginal.length ; i++) {
      const elemento = arrayOriginal[i]
      if ( elemento > maior){
          maior = elemento
      }
  }
  console.log(maior)


  b. 
  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let divididos = []

for(let numeros of arrayOriginal) {
    if( numeros /= 10){
        divididos.push(numeros)
    }
}
console.log(divididos)

c.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let Nimpares = []

for( let numeros of arrayOriginal) {
    if( numeros % 2 !== 0){
        Nimpares.push(numeros)
    }
}
console.log(Nimpares)
*/

// d.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 
let msg = []

for( let elemento of arrayOriginal){
    elemento = (" O elemento do index i é: " + elemento)

     msg.push(elemento)
}
 console.log(msg)
