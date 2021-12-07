// Exercicio 1 de Interpretação
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//A) O que vai ser impresso no console? - 10 e 50 
//B) b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse
// a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 
// - Não apareceria nada pois ela não está no escopo Global

//Exercicio 2 de Interpretação
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//- Ela irá deixar os caracteres da frase do usuario em caixa baixa, e trará um boolean se no texto possui a palavra cenoura
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura - eu gosto de cenoura, true
// ii.  CENOURA é bom pra vista - cenoura é bom pra vista, true 
// iii. Cenouras crescem na terra - cenouras crescem na terra - true
// Rodei o código e não entendi pq nao retornou a frase, apenas a resposta da boolean, se puder me esclarecer quando der aprovador o PR
//--------------------------------------------------------------------------------------------------------------

console.log("Eu sou Fernanda, tenho 26 anos, moro em Curitiba e sou desocupada")
