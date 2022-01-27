//Exercicio 1
let numero = prompt("Digite um número")

if (numero % 2 === 0) {
    console.log("É par")
} else {
    console.log("É impar")
}

// Exercicio 2

let usuarioPet = prompt("Escreva algum animalzinho").toLocaleLowerCase()

switch (usuarioPet) {
    case 'cachorro':
        console.log('Au Au')
        break
    case 'gato':
        console.log('Miauu')
        break
    case 'vaca':
        console.log('Muuuu')
        break
    default:
        console.log('Sem barulho reconhecido')
        break     
}

