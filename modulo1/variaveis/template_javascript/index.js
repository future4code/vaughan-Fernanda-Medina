/* Resposta do exercicío 1 de Interpretação: 
10
10, 5
--------
Resposta do exercicío 2: 
20, 10, 10
(Errei por conta da ordem das alteraçoes ?)
--------------
Resposta do exercicío 3:
 let qtasHorasTrabPorDia = prompt("Quantas horas você trabalha por dia?")
    let qtoVcRecebePorDia = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${qtasHorasTrabPorDia/qtoVcRecebePorDia} por hora`)

------------------------------------------------------------------------------------------*/




/*let nome;
let idade;
console.log (typeof nome);
console.log (typeof idade);*/
// Foi impresso a variavel undefined, pois não houve um valor ou resposta para a variavel

let nome = prompt ('OLÁ, QUAL SEU NOME?');
let idade = prompt ('Quantos anos você tem?');
console.log (nome);
console.log (idade);
console.log (typeof nome);
console.log (typeof idade);
// As duas variaveis são strings, pois são respostas de texto e não foi atribuido o valor numero a variação idade
console.log ("Olá", nome, "você tem", idade, "anos");

let pergunta1 = prompt ('Você quer brincar na neve?');
let pergunta2 = prompt ('Um boneco quer fazer?');
let pergunta3 = prompt ('Já assistiu Frozen?');
console.log ('Você quer brincar na neve?', pergunta1);
console.log ('Um boneco quer fazer?', pergunta2);
console.log ('Já assistiu frozen?', pergunta3);
console.log (typeof pergunta1);
console.log (typeof pergunta2);
console.log (typeof pergunta3);

let a = 8
let b = 18
c = a 
a = b
console.log ("O novo valor de a é:", b)
console.log ("O novo valor de b é:", c)


// Espero que esteja certo kkk

//---------------------------------------------- Tentando fazer o desafio
let resposta1 = prompt ("Quantos ml de água você bebe por dia?"); 

let resposta2 = prompt ("Quantos ml de xixi você faz por dia?");

const enigma1 = Number (resposta1) + Number (resposta2);
const enigma2 = Number (resposta1) * Number (resposta2);

console.log ("O valor de x é =", enigma1, "ml");
console.log ("O valor de y é =", enigma2, "ml");
