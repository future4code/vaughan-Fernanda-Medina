let pergunta = Number(prompt("Quantos bichinhos de estimaçao você tem?"))
let i = 0
let listaPronta = []
while (i <= pergunta) {
    if (pergunta === 0) {
        console.log("Que pena você deve adotar um pet")
    } else {
        while (i < pergunta) {
            let listaDogs = prompt("Digite o nome dele(s), um por vez, por favor")           
            listaPronta.push(listaDogs)            
            i++
        }
    }
    i++
}
console.log(listaPronta)

let arrayOriginal = [30,29,60,77,98,12]

function chamaTodosNumeros(array) {
for ( numeros of array){
    console.log (numeros)
}
}
 
chamaTodosNumeros(arrayOriginal) 

function dividePorDez (array){
    for( numeros of array){
        numeros = numeros / 10
        console.log(numeros)
    }
}

dividePorDez(arrayOriginal)

function valorPar (array){
    let numerosPares = []
    for (numeros of array){
        if (numeros %2 === 0){
            numerosPares.push(numeros)
            console.log(numeros)
        }       
    }
}

valorPar(arrayOriginal)

function escreveFrase(array) {
    arrayDeSimbolos = []
    i= 0
    for ( numeros of array){
        arrayDeSimbolos.push(`O elemento do índex ${i} é: ${numeros}.`)
       
        i++
    }
     console.log(arrayDeSimbolos)
    }

escreveFrase(arrayOriginal)    

