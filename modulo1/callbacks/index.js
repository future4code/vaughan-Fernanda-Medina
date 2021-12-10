
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos
 const arrayNomePet = pets.map((item,index,array) =>{
   return item.nome
 })

 console.log (arrayNomePet)

// b) Crie um novo array apenas com os cachorros salsicha
const arraySalsicha = pets.filter ((item,index,array) => {
    return item.raca === "Salsicha"
})

console.log (arraySalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes
// que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

    
 const somentePoodles = pets.filter ((animal) =>{
     if(animal.raca === "Poodle"){
         return true
     }
     return false
 })

 const nomeDosPoodles = 
 somentePoodles.map ((nomeAnimal) => nomeAnimal.nome)
 if (nomeDosPoodles [0] === "Madame"){
     console.log ("Você ganhou um cupom de desconto de 10% para tosar a Madame!")
 }else console.log("Você ganhou um cupom de desconto de 10% para tosar o Fluffy")
 


//  const animal1 = nomedosPoodles [0]
//  const animal2 = nomedosPoddle [1]
//   const arrayMensagem =  [`Você ganhou um cupom de desconto de 10% para tosar o/a ${animal1} `,`Você ganhou um cupom de desconto de 10% para tosar o/a ${animal2} ` ]
//   console.log(arrayMensagem)


// Iza eu sei que provavelmente ta errado, pq não ta em um array kkk
//Mas fiquei pensando, essa mensagem seria enviada já para a pessoa, ou ficaria só armazenada? 