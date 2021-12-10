//EXERCICIO 1 INTERPRETAÇÃO
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//O que o código abaixo está fazendo? Qual o resultado impresso no console?
//-- Ele está procurando números menores que 5,será impresso 1,2,3,4 / Após dar o comando
//OBS: Não faço ideia do porque deu 10, o que significa +=? podes me explicar essa iza?

//----------------------------------------------------------------
// EXERCICIO 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
//a) O que vai ser impresso no console?
// - 19,21,23,25,27,30,
//b) Se eu quisesse acessar o índice de cada elemento dessa lista,
//for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// - Eu não entendi bem a pergunta, mas sim o for of é utilizavel para acessar cada indice, 
// se for o que eu estou pensando, seria apenas necessário tirar o if
//-------------------------------------------------------------------
//Exercicio 3 
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// -1,2,3,4, (ah ta entendi, ele deu o valor de linha equivalente a "*")

