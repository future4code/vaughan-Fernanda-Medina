/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".    
console.log ('Boas vindas ao jogo de BlackJack')
//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
//3 - Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou"
//4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.
const carta = comprarCarta(); {
console.log(carta.texto) 
console.log(carta.valor) 
}

function compraCartaComputador() => {
   carta

}
if(confirm("Quer iniciar uma nova rodada?")) {
   const carta = comprarCarta(); 
   console.log(carta.texto) 
   console.log(carta.valor) 
} else {console.log("O jogo acabou")
	// o que fazer se o usuário clicar "cancelar"
}
