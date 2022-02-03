// const arrayDeNumeros = [11,15,18,14.12,13]

// // let i = 0
// let numeroMaior = -Infinity
// // while (i < arrayDeNumeros.length){
// //     if (arrayDeNumeros[i] > numeroMaior){
// //         numeroMaior = arrayDeNumeros[i]
// //     }
// //     i++
// // }

// // console.log (numeroMaior)

// for (let i = 0; i < arrayDeNumeros.length; i++ ){
//     if (arrayDeNumeros[i] >numeroMaior){
//         numeroMaior = arrayDeNumeros[i]
//     }
// }
// console.log (numeroMaior)

// for (let numero of arrayDeNumeros){
//     if (numero > numeroMaior){
//         numeroMaior = numero 
//     }
// }
// console.log (numeroMaior)


const aluna = {
    nome: "Fernanda Freitas",
    idade: 26,
    aulasFront: true, 
    aulasBack: false,
    jogosFavoritos: ["Counter Strike", "League of Legends", "Crash"],
    contaPiada: () => console.log("E as namoradinha?Usando muito creme?"),
    pet: {
        nome: "Cleitin",
        especie: "Gato",
        raca: "SDR",
        snacksFavoritos: ["sache", "salame", "amarrador de cabelo"]
    }
}


const verificaAula = (aula) => {
    if (aula) {
        return 'Estudei'
    } else {
        return'Não estudei'
    }

}

let aulasBack = verificaAula(aluna.aulasBack)
let aulasFront = verificaAula(aluna.aulasFront)

let jogos = []

for (let i = 1; i <= aluna.jogosFavoritos.length; i++){
    jogos.push(`${i}) ${aluna.jogosFavoritos[i-1]}`)
}

let fraseCompleta = `Oi eu me chamo ${aluna.nome} e tenho ${aluna.idade} anos.
${aulasBack} aulas de Back, ${aulasFront} aulas de front.
Meus jogos favoritos são:
${jogos}
Tenho um ${aluna.pet.especie} chamado ${aluna.pet.nome} que gosta de comer ${aluna.pet.snacksFavoritos[0]}
`
console.log(fraseCompleta)
aluna.contaPiada()


