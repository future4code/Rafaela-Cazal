
if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
 console.log("Bem vindo ao jogo de Blackjack!")

} else {
	// o que fazer se o usuário clicar "cancelar"
  console.log("O jogo acabou")
}

import comprarCarta from './naoMexer.js'

const carta1DoUsuario = comprarCarta();
const carta2DoUsuario = comprarCarta();
const pontuacaoUsuario = (carta1DoUsuario.valor + carta2DoUsuario.valor )

console.log("Usuário - cartas: " + carta1DoUsuario.texto + carta2DoUsuario.texto + "- pontuação " + pontuacaoUsuario)

const carta1DoComputador = comprarCarta();
const carta2DoComputador = comprarCarta();
const pontuacaoComputador = (carta1DoComputador.valor + carta2DoComputador.valor )

console.log("Computador - cartas: " + carta1DoComputador.texto + carta2DoComputador.texto + "- pontuação " + pontuacaoComputador)

if(pontuacaoUsuario > pontuacaoComputador ){
  alert( " O usuário venceu!")
} else if ( pontuacaoUsuario < pontuacaoComputador){
  alert( " O Computador venceu!")
} else {  
  alert(" Empatou")
}
