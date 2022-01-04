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
  const mensagemAltura = prompt("Digite a altura de um retângulo,por favor.")
  const mensagemLargura = prompt("Agora digite a largura desse retângulo,por favor.")
  const areaRetangulo = mensagemAltura * mensagemLargura
  console.log (areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Olá em que ano estamos?')
  const anoNascimento = prompt ("E qual ano você nasceu?")
  const idadeCalculada = anoAtual - anoNascimento
  console.log (idadeCalculada)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    return peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt ("Olá qual seu nome?")
  const idadeUsuario = prompt ("E qual sua idade?")
  const emailUsuario = prompt ("Digite seu email por favor.")
  console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt ("Olá qual sua cor favorita número 1?")
  const cor2 = prompt ("Olá qual sua cor favorita número 2?")
  const cor3 = prompt ("Olá qual sua cor favorita número 3?")
  const arrayCor = [cor1,cor2,cor3]
  console.log (arrayCor)  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toLocaleUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  primeiroItem= array.shift()
  ultimoItem = array.pop()
  trocarPrimeiroItem= array.splice(0,1,ultimoItem)
  trocarSegundoItem = array.push(primeiroItem)
  return trocarSegundoItem
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const primeiraString = string1.toLocaleUpperCase() 
  const segundaString =  string2.toLocaleUpperCase()
  return primeiraString.length === segundaString.length
  

}

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