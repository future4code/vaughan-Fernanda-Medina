// EXERCICIO 1 ESCRITA
const pergunta1 =  prompt('Qual sua idade ?');
const resposta1 = Number (pergunta1);
function verificaIdade (idade, anoLiberado) {
    if (idade >= 18) {
        console.log ("Você pode dirigir")
    } else {
        console.log ('Você não pode dirigir')
    }
}
verificaIdade(resposta1, 18)
// -----------------------------------------------------------
//EXERCICIO 2 ESCRITA

const confereTurno = prompt("Olá se você estuda de manha digite M, de tarde V, de noite M").toLocaleUpperCase()

function confereLetra (turno, letra) {
if (confereTurno === "M") {
    console.log ("Bom dia")
} else if (confereTurno === "V") {
    console.log ("Boa tarde")
} else if (confereTurno === "N"){
    console.log ("Boa noite")
} else {
    console.log ("Você provavelmente digitou a letra errada")
}
}
confereLetra(confereTurno)
//-------------------------------------------------------------
//EXERCICIO 3 ESCRITA

const perguntaTurno = prompt("Olá se você estuda de manha digite M, de tarde V, de noite M").toLocaleUpperCase()

switch (perguntaTurno){
    case "M":
        console.log("Bom djea")
        break
    case "V":
        console.log ("Boa tardje")
        break
    case "N":
        console.log ("Boa noitche")
        break
    default:
        console.log("Você provavelmente digitou a letra errada")
        break             
}

//------------------------------------------------------------
//EXERCICIO 4 ESCRITA

const perguntaGenero = prompt("Olá, qual o gênero do filme que assistirão?").toLocaleLowerCase()

const perguntaValor = Number (prompt("E qual o valor do ingresso para esse filme, apenas os números por favor?"))

function topaOuNaoTopa (genero, valor) {
    if (genero === "fantasia", valor <= 15) {
        console.log ("Bom Filme!")
    } else {
        console.log ("Escolha outro filme =(")
    }
}

topaOuNaoTopa (perguntaGenero, perguntaValor)