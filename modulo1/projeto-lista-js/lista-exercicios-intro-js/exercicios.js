// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const msg1 = prompt('Escolha um número')
  const msg2 = prompt('Escolha outro número')

  console.log (msg1 * msg2)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Em que ano estamos?')
  const anoNascimento = prompt('Em que ano você nasceu?')

  console.log (anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

seuNome = prompt ('Qual seu nome?')
suaIdade = prompt ('Qual sua idade?')
seuEmail = prompt ('Qual seu email?')
console.log `Meu nome é, ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${email}`  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
cor1 = prompt ('Qual sua cor favorita numero 1?')
cor2 = prompt ('Qual sua cor favorita numero 2?')
cor3 = prompt ('Qual sua cor favorita numero 3?')
array = [cor1, cor2, cor3]
console.log (array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()
console.log(string)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
primeiroNumero = array [0]
ultimoNumero = array.pop()
trocarPrimeiroNumero = array.splice(0,1,ultimoNumero)
trocarSegundoNumero = array.splice(3,1,primeiroNumero)

return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
frase1 = string1.toUpperCase
frase2 = string2.toUpperCase 

return string1 === string2
}
// sei lá que que tá errado aqui
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}