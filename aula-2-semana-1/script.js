  /**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 */
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

/**
 * EXERCÍCIO 2
 */
// a. array é uma variável especial que pode guardar dentro dela diversos valores.
// b. 0
// c. usando .length
// d. 
  // I.  undefined
  // II.  null
  // III.  11
  // IV.  3 e  4
  // V.  19 e  9
  // VI.  3
  // VII. 1
/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 * 
 * EXERCÍCIO 1
 */
  let fahrenreit = 77; 
  const ConverterFemKelvin = (fahrenreit - 32)*5/9 + 273.15
  console.log(ConverterFemKelvin)

// ------------------------

  let celsius = 80; 
  const ConverterCemFahrenreit = (celsius)*9/5 + 32
  console.log(ConverterCemFahrenreit)

// ------------------------
  let Celsius =  30;
  const ConverterFahrenheit = (Celsius)*9/5 + 32
  const ConverterKelvin = (Celsius - 32)*5/9 + 273.15

  console.log(ConverterFahrenheit)
  console.log(ConverterKelvin)

//  const calcular = Number(prompt('Insira um valor em Celcius para ser convertido em Fahrenheit'))
  //console.log(calcular)



// ------------------------


/**
 * EXERCÍCIO 2
 */

const nome = prompt('Qual o seu nome?')
console.log(nome)

const pet = prompt('Nome do seu pet')
console.log(pet)

const welcome = alert('bem-vind@ ' + nome + '!')
console.log(welcome)

const TotalLetras = confirm('A soma do seu nome e o do seu pet tem ' + nome.length + pet.length + ' letras.')
console.log(TotalLetras)  

const bye = alert( 'Até mais!')
console.log(bye)

/**
 * EXERCÍCIO 3
 */

let salariom = 998

const valorquiloH = salariom / 5
console.log(valorquiloH)
 
const consumo = valorquiloH * 280
console.log(consumo)

const desconto = consumo * 0.15
console.log(desconto)
