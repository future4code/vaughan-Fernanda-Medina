//EXERCICIO 1 INTERPRETAÇÃO
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console? "Matheus Nachtergaele" - Virginia Cavendish - ''Globo" "14h"
//--------------------------------------------------------------------------------------------------

//EXERCICIO 2 INTERPRETAÇÃO
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) O que vai ser impresso no console?
// - Juca, 3, SRD
//- Juba, 3, SRD
//- Jubo, 3, SRD
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Ela copia o objeto referenciado após os 3 pontos e permite alterar.
//--------------------------------------------------------------------------------------------------
//EXERCICIO 3 INTERPRETAÇAO
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//- "false"
//- altura - undefined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//- False pq backender era falso, e undefined pq não havia a propriedade altura
//------------------------------------------------------------------------------------------------------
// EXERCICIO 1 DE ESCRITA
// Crie um objeto.
// Ele deve conter duas propriedades: nome (string) e apelidos
const pessoa = {
    nome: "Fernanda",
    apelido: ["Fer", "Fê", "Nanda"],
    
}

console.log(`Oi, eu sou a ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido}.`)

const novoApelido = {...pessoa, apelido:["Ferzinha", "Fefê", "Féfis"]}

console.log(`Oi, eu sou a ${novoApelido.nome}, mas pode me chamar de ${novoApelido.apelido}.`) 

//------------------------------------------------------------------------------------------------------
//Exercicio 2 Escrita
 
const cidadao1 = {
    nome1: "João",
    idade1: 25,
    profissao1: "comediante",

}
const cidadao2 = {
    nome2: "Joseph",
    idade2: 24,
    profissao2: "Frontender",

}

function contaCaracteres(cidadao) {
    return [cidadao.nome1, cidadao.nome1.length, cidadao.idade1,cidadao.profissao1, cidadao.profissao1.length]
}

function conta2 (pessoa) {
    return [pessoa.nome2, pessoa.nome2.length, pessoa.idade2, pessoa.profissao2, pessoa.profissao2.length]
}

console.log (contaCaracteres(cidadao1))
console.log (conta2(cidadao2))

//---------------------------------------------------------------------------------------------------
//EXERCICIO 3 DE ESCRITA

let carrinho = [ ]
const fruta1 = {
    nome: "Pitaya",
    disponibilidade: true,
}

const fruta2 = {
    nome: "Carambola",
    disponibilidade: false,
}

const fruta3 = {
    nome: "Acerola",
    disponibilidade: true,
}

function frutaNoCarrinho (fruta)  {
    carrinho.push(fruta)
    return fruta
}

console.log ([frutaNoCarrinho(fruta1), frutaNoCarrinho(fruta2), frutaNoCarrinho(fruta3)])
