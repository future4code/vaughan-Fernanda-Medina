// const perguntaIdade = Number(prompt("Qual sua idade?"))

// if (perguntaIdade >= 18) {
//     console.log ("Você pode dirigir :), se tiver carteira claro kk")
// } else {
//     console.log ("Você não pode dirigir, ainda :(")
// }

// const perguntaTurno = prompt("Digite M,V ou N, de acordo com o turno que você estuda, por favor").toLocaleUpperCase()
// console.log(perguntaTurno)

// if(perguntaTurno === "M"){
//     console.log("Bom dia!!")
// } else if ( perguntaTurno === "V"){
//     console.log( "Boa tarde!!")
// } else if (perguntaTurno === "N"){
//     console.log ("Boa noite!!")

// } else {
//     console.log ("Você digitou errado, tente novamente.")
// }

// switch(perguntaTurno){
//     case "M":
//         console.log("Bomdia!!")
//         break
//     case "V":
//         console.log("Boa tarde!!")
//         break
//     case "N":
//         console.log("Boa noite!!")
//         break
//     default: 
//         console.log("Você digitou errado, tente novamente.")     
//         break        
// }

const genero = prompt("Qual genêro de filme vamos assistir?")
const valor = Number(prompt("E qual o valor do ingresso?"))

if (valor > 15){
    console.log ("Escolha outro filme")
} else if (genero === "fantasia"){
    const lanchinhos = prompt("Quais snacks vai comprar para assistir o filme?")
    console.log (`Bom filme e aproveite o seu ${lanchinhos}!!`)
} else {
    console.log("Escolha outro filme :(")
}

// desafio 

const perguntaNome = prompt('Olá, qual seu nome?')
const tipoJogo = prompt('Qual tipo de jogo ira assistir? Digite IN, para internacional e DO para doméstico')
const etapaJogo = prompt('Qual etapa ira assistir? Digite SF, para semifinal, DT, para decisão de 3 lugar ou FI, para final')
const categoriaJogo = prompt('Qual categoria gostaria? Digite 1,2,3 ou 4')
const quatidadeIngressos = Number(prompt("Quantos ingressos precisa?"))


