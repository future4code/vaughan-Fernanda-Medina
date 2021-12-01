// EXERCICIO 1 INTERPRETAÇÃO
// // const bool1 = true
// // const bool2 = false
// // const bool3 = !bool2

// // let resultado = bool1 && bool2
// // console.log("a. ", resultado)
// A = false
// // resultado = bool1 && bool2 && bool3 
// // console.log("b. ", resultado) 
// B = FALSE
// // resultado = !resultado && (bool1 || bool2) 
// // console.log("c. ", resultado)
// C= FALSE / DEPOIS DE RODAR VI QUE ERA TRUE, NÃO PRESTEI ATENÇÃO NAS ||
// // console.log("d. ", typeof resultado)
// D = BOOLEAN 

// EXERCICIO 2 INTERPRETAÇÃO
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// ESTA ERRADO POIS O QUE VEM DO PROMPT É STRING 
// SERÁ IMPRESSO NaN - Not a Number

// EXERCICIO 3 INTERPRETAÇÃO 
// O CODIGO SERIA : const soma = Number (primeiroNumero) + Number (segundoNumero)
//----------------------------------------------------------------------------------------
//Exercicio 1 ESCRITA
const userIdade = prompt ("Olá, Qual sua idade?");
const amigaIdade = prompt ("E qual a idade da sua melhor amiga");
const maisVelho = Number(userIdade) === Number (amigaIdade);
const diferencaIdade = Number (userIdade) - Number(amigaIdade);
console.log ("Sua idade é maior do que a da sua melhor amiga?", maisVelho);
console.log ("A diferença de idade de vocês é:", diferencaIdade);

//---------------------------------------------------------------
// EXERCICIO 2 ESCRITA
const numeroPar = prompt ("Olá, insira um número par, por favor");
const restoDivisao = Number (numeroPar) % 2 
console.log ("O resto da divisão do número escolhido por 2 é:", restoDivisao );
// o resultado será sempre zero, pois números pares divido por 0 não sobra nada, já quando inserido um número negativo,
// as vezes pode ser 1 ou 0: 0 pois há alguns números que divididos por 2 por mais que sejam impares ainda há uma divisão exata, 
//já outros o resultados que sejam 1 são dos números onde não há divisão perfeita por 2.
//------------------------------------------------------------------
// EXERCICIO 3 ESCRITA
// não vejo necessidade em criar outra linha perguntando idade, se já foi perguntado no exericicio 1.
const idadeEmMeses = Number (userIdade) + 12 ;
const idadeEmDias = Number (userIdade) * 365.25;
const idadeEmHoras = idadeEmDias * 24   
console.log ("Sua idade em meses é:", idadeEmMeses, "meses." );
console.log ('Sua idade em dias é:', idadeEmDias, 'dias.');
console.log ('Sua idade em horas é:', idadeEmHoras, "horas.");
//----------------------------------------------------------------------
//EXERCICIO 4 ESCRITA
const numero1 = prompt('Agora escolha um número aleatório.');
const numero2 = prompt('Mais um número por favor, rapidinho eu prometo.');
const pergunta1 = Number (numero1) > Number (numero2);
const pergunta2 = Number (numero1) === Number (numero2);
const pergunta3 = Number (numero1) % Number (numero2) === 0;
const pergunta4 = Number (numero2) % Number (numero1) === 0;

console.log ('O primeiro número é maior que o segundo?', pergunta1);
console.log ('O primeiro número é igual ao segundo?', pergunta2);
console.log ('O primeiro número é divisivel pelo segundo?', pergunta3);
console.log ('O segundo número é divisivel pelo primiero?', pergunta4);