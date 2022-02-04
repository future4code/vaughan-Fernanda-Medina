const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 

 const nomePets = pets.map((pet) => {
     return pet.nome
 })
 console.log(nomePets)

 const apenasSalsicha = pets.filter((pet)=>{
     return pet.raca === "Salsicha"

 })
 console.log(apenasSalsicha)

 const apenasPoodle = pets.filter((pet)=>{
    return pet.raca === "Poodle"

})
console.log (apenasPoodle)

const arrayCumpom = apenasPoodle.map((pet)=>{
    return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)

})



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const apenasNomes = produtos.map((prod)=>{
    return prod.nome

})

console.log(apenasNomes)

const desconto = produtos.map((produto)=>{
    return { nome: produto.nome, preco: (produto.preco*0.95)}
})
console.log(desconto)

const bebidas = produtos.filter ((lista)=>{
    return lista.categoria === "Bebidas"

})
console.log (bebidas)

const ype = produtos.filter ((lista)=>{
    return lista.nome.includes("Ypê")
})
console.log (ype)

const divulgaYpê = ype.filter((prod)=>{
    return console.log(`Compre ${prod.nome} por ${prod.preco}`)

})

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const pokeTipo = pokemons.map((poke) =>{
     return poke.tipo
 })

 const pokeEmOrdem =  [... new Set(pokeTipo)]
 console.log ("teste", pokeEmOrdem)

// Isaaa tentei de varias formas colocar o new Set, já na lista de poketipo, mas nao ia nem com reza kkk dicas por favor

// ex 4 e 5 da lista 

const arrayDeNumero = [ 2,3,4,15,88,77,100]

function verificaPar(array){
    let arrayDePares = []
    for (numeros of array){
        if (numeros %2 === 0 ){
            arrayDePares.push(numeros)
            console.log (arrayDePares)
        }
    }
}

verificaPar(arrayDeNumero)

const elevaNumero = arrayDeNumero.filter((item)=>{
    return item %2 === 0     
})Math.pow(item,2)



console.log(elevaNumero)



console.log ("teste",elevaNumero)