let pergunta = Number(prompt("Quantos bichinhos de estimaçao você tem?"))
let i = 0
let  listaPronta = ""
while (i <= pergunta){
    if ( pergunta === 0 ){
        console.log("Que pena você deve adotar um pet")
    }else {
        while ( i < pergunta ){
           let listaDogs = prompt("Digite o nome dele(s), um por vez, por favor")
           
           listaPronta +=  listaDogs + ","
           
           console.log (listaPronta)

            i++
        }
    }
    i++
}



let arrayOriginal = [30,29,60,77,98,12]
let listaAleatoria = ""
let i = 0
while (i< arrayOriginal){
listaAleatoria +=i;
console.log(listaAleatoria)

i++
}


let arrayOriginal = [30,29,60,77,98,12]
let i = 0
while (i< arrayOriginal){
arrayOriginal += i
console.log(arrayOriginal)
i++
}


let arrayOriginal = [30,29,60,77,98,12]
let i = 0
2	
3 while ( i === arrayOriginal){
    console.log(i);
    i++
}

function escreveFrase(array) {
    arrayDeSimbolos = []
    
    for ( numeros of array){
        arrayDeSimbolos.push(`O elemento do índex ${i} é: ${numeros}.`)
       
    
        console.log(arrayDeSimbolos)
    }
     
    }

escreveFrase(arrayOriginal)   

function escreveFrase(array) {
    arrayDeSimbolos = []
    i= 0
    for ( numeros of array){
        arrayDeSimbolos.push(`O elemento do índex ${i} é: ${numeros}.`)
       
        i++
        console.log(arrayDeSimbolos)
    }
     
    }

escreveFrase(arrayOriginal)   


for (numero of falaNumero){
    const adivinhaNumero = Number(prompt("Tente adivinhar o numero do seu amigo"))
    if (adivinhaNumero > falaNumero){
        console.log(`O numero chutado foi ${adivinhaNumero}.
        ERRRR,você errou, o número é menor`)
        const adivinhaNumero = Number(prompt("Tente adivinhar o numero do seu amigo"))
    } else if (adivinhaNumero < falaNumero){
        console.log(`O numero chutado foi ${adivinhaNumero}.
        ERRRR,você errou, o número é maior`)
        const adivinhaNumero = Number(prompt("Tente adivinhar o numero do seu amigo"))
    } else ( adivinhaNumero === falaNumero)
    console.log(`O numero chutado foi ${adivinhaNumero}.
        Aeeee, você acertou, o número é menor`)
        
}

for (numero of falaNumero){
    const adivinhaNumero = Number(prompt("Tente adivinhar o numero do seu amigo"))
    if (adivinhaNumero > falaNumero){
        console.log(`O numero chutado foi ${adivinhaNumero}.
        ERRRR,você errou, o número é menor`)
        const adivinhaNumero = Number(prompt("Tente adivinhar o numero do seu amigo"))
    } else if (adivinhaNumero < falaNumero){
        console.log(`O numero chutado foi ${adivinhaNumero}.
        ERRRR,você errou, o número é maior`)
        const adivinhaNumero = Number(prompt("Tente adivinhar o numero do seu amigo"))
    } else ( adivinhaNumero === falaNumero)
    console.log(`O numero chutado foi ${adivinhaNumero}.
        Aeeee, você acertou, o número é menor`)
        
}
