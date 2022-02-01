console.log("Bora jogar")
const falaNumero = prompt("Digite um número para seu amigo adivinhar.")



let numeroCerto 
let tentativas = 0 
let numeroChutado = 0

console.log(numeroCerto)
while ( numeroCerto != falaNumero){
    numeroChutado = Number(prompt("Tente adivinhar o numero do seu amigo"))
    tentativas ++
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroChutado > falaNumero){
        console.log( "ERRRR,você errou, o número é menor")
    }else if (numeroChutado < falaNumero) {
        console.log( "ERR, você errou, o número é maior")
    }else if (numeroChutado === numeroCerto) 
        console.log("Aeeee, acertou")
        console.log (`O número de tentativas foi ${tentativas}`)
    
}




console.log("Bora jogar")
const numeroAleatorio = Math.floor(Math.random() * 10 + 1)


let numeroCerto = false
let tentativas = 0 
let numeroChutado = 0


while ( !numeroCerto){
    numeroChutado = Number(prompt("Tente adivinhar o numero do seu amigo"))
    tentativas ++
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroChutado > numeroAleatorio){
        console.log( "ERRRR,você errou, o número é menor")
      
    }else if (numeroChutado < numeroAleatorio) {
        console.log( "ERR, você errou, o número é maior")
        
    }else if (numeroChutado === numeroAleatorio) 
        console.log("Aeeee, acertou")
        console.log (`O número de tentativas foi ${tentativas}`)
       
        
    
}
// IZA NAO CONSEGUI DE JEITO NENHUM PARAR DE SER UM LOOP, ELE FICA PEDINDO UM NUMERO MESMO APÓS ACERTAR, 

