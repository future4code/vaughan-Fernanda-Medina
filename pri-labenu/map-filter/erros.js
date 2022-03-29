const nomePets = pets.filter ((pet)=>{
    return pets.nome 
})
console.log(nomePets)
// aqui errei o return coloquei pets, ao inves de pet que é o parametro dado

const nomePets = pets.filter ((pet)=>{
    return pet.nome 
})
console.log(nomePets)
// aqui retornou o array completo



const pokeEmOrdem = [... new Set(pokemons.tipo)]