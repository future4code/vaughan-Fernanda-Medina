//Exercicio 1 de interpretação
// let array
// console.log('a. ', array)
// Resultado - a. undefined

// array = null
// console.log('b. ', array)
// Resultado = b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// Resultado = c. 11

// let i = 0
// console.log('d. ', array[i])
// Resultado = d. 3 

// array[i+1] = 19
// console.log('e. ', array)
// Resultado = e. Não faço ideia kkkk

// const valor = array[i+6]
// console.log('f. ', valor)
// Resultado = f. 9

// EXERCICIO 2 DE INTERPRETAÇAO
//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Resposta = SUBA NUM ÔNIBUS EM MIRROCOS, 27
// ----------------------------------------------------------------------

//EXERCICIO 1 ESCRITA
const nomeUsuario = prompt ("Olá qual seu nome?");
const emailUsuario = prompt ("E qual seu email?");
const exercicio1 = 'Exercicío 1 de escrita'
console.log(exercicio1)
const frase1 = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`;
console.log (frase1);

//----------------------------------------
//EXERCICIO 2 ESCRITA

const comidasFavoritas = ["Parmeggiana", "Macarronada", "Pizza", "Pavê", "Pudim"];

const exercicio2 = 'Exercicío 2 de escrita'
console.log(exercicio2)

console.log(comidasFavoritas);

console.log('Essas são minhas comidas favoritas:');
console.log(comidasFavoritas [0]);
console.log(comidasFavoritas [1]);
console.log(comidasFavoritas [2]);
console.log(comidasFavoritas [3]);
console.log(comidasFavoritas [4]);

const comidaUsuario = prompt ("Qual sua comida preferida?");
const novalista = comidasFavoritas [1] = comidaUsuario;
console.log(comidasFavoritas);

//----------------------------------
//EXERCICIO 3 ESCRITA 

let listaDeTarefas

const perg1 = prompt("Cite uma tarefa que precisa fazer todo dia");
const perg2 = prompt("Cite mais uma tarefa que precisa fazer todo dia");
const perg3 = prompt("Cite só mais uma  tarefa que precisa fazer todo dia");

listaDeTarefas = [perg1, perg2, perg3];

const exercicio3 = 'Exercicío 3 de escrita'
console.log(exercicio3)

console.log(listaDeTarefas [0], listaDeTarefas [1], listaDeTarefas [2]);

const tarefaFeita = prompt ("Você já fez a tarefa 1,2 ou 3 hoje?Digite qual, pode mentir, mas escolha só uma");
const tarefaCerta = Number (tarefaFeita);
const resposta = listaDeTarefas.splice(tarefaCerta-1, 1);
console.log("Essas sao as tarefas que faltam ser feitas:", listaDeTarefas)

//MEU JESUS ESSE EU SUEIIII