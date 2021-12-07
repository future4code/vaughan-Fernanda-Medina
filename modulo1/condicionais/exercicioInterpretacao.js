// EXERCICIO 1 DE INTERPRETAÇÃO
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a) Explique o que o código faz. Qual o teste que ele realiza? 
// --Ele confere se o resto da divisão do numero inserido por dois é igual a 0,
//se for imprime passou no teste, se não imprime não passou
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Números pares 
//c) Para que tipos de números a mensagem é "Não passou no teste"?
//Números impares
//------------------------------------------------------------------------------
//Exercicio 2 DE INTERPRETAÇÃO
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a) Para que serve o código acima?
//- Para conferir se há o produto e qual seu valor
//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//- O preço da fruta Maçã é R$2,25
//c) Considere que um usuário queira comprar uma Pêra, 
//qual seria a mensagem impressa no console se retirássemos o break 
//que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//-- 3.5, 2.25, 0.30, 5.5
//----------------------------------------------------------------------------------
//Exercicio 3 Interpretaçao
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
//a) O que a primeira linha está fazendo?
//-- Está pedindo para o usuario digitar um número, e ja transformando a possivel string em Number
//b) Considere um usuário digitou o número 10.
// Qual será a mensagem do terminal? E se fosse o número -10?
// 10 (Esse número passou no teste) / -10 (Essa mensagem é secreta)
//c)c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//-Desculpa eu rodei o código quando respondi a letra b para verificar, mas sim apareceu um erro,
// ao que parece é porque eles definiram uma variavel dentro do bloco da condição, sem colocar um else
// e sem nenhuma referência fora dela também, ela não esta no escopo global?