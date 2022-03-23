// - ** Exercício 1 **

//     a)como fazemos para acessar os parâmetros passados na linha de comando para o Node ?
//         Criamos uma const com o process argv e sua posiçao, e digitamos npm run e o nome do arquivo onde esta esse argv

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv [2]
const idade = process.argv [3]
const frase = `Olá ${nome}! Você tem ${idade} anos`
const idadeMaisSete = Number(idade) + 7
const frase2 = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSete} anos`
console.log(frase2)