


/**
 * Comece seu exercício aqui! :D
 */

//  * EXERCÍCIO 1
//  * Exercícios de interpretação de código
//  * 
//  * O codígo realiza o teste de confirmação se um numero é divisível por 2 de resto 0, ou seja, um número par. Caso esse número for par, a resposta no console será "Passou no teste." caso o número for impar o console imprime "Não passou no teste."
//  * 
//  * EXERCÍCIO 2
//  * 
//  * a. O código serve para declarar o preço de algumas frutas citadas no próprico código. Demais frutas custariam 5.
//  * b. O preço da fruta  Maçã  é  R$  2.25 
//  * c. Sairia por  R$  24.25.
//  * d. O preço da fruta  Pêra  é  R$  5
//  * 
//  * EXERCÍCIO 3 
//  * 
//  * O console printou um erro de variável mensagem não foi definida. Ocorreu esse erro porque o console.log estava fora do escopo que ele foi solitiado para printar no console, logo ele não teria nada para printar.
//  * Para que não ocorra novamente basta inserir o console.log dentro do escopo pai antes do fechamento da última chave para printar ambas as respostas.
//  * 
// -----------------------------------------------------------------------
// * Exercícios de escrita de código
// *
// * 1.  

const numero1 = Number(prompt("Digite o primeiro número."));
const numero2 = Number(prompt("Digite um segundo número"));
const numero3 = Number(prompt("Digite um terceiro número"));

if(numero1 > 0 && numero2 < 9 && numero3 >0 <9) {
  let mensagem
  if(numero1 > numero2 < numero3) {
    mensagem = "Na ordem decrescente o " + numero1 + " aparece na frente do " + numero2 + ' e do ' + numero3
  }  else (numero1 === numero2 === numero3); {
      mensagem = " nao podem ser números iguais ou em ordem crescente"

  }
  console.log(mensagem)
}
// * c. console printava undefined 
// * 
// * 2. 

