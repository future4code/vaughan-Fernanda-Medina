// Exercicio 1
//Pergunte ao usuário quantos bichinhos de estimação ele tem 
//e guarde esse dado em uma variável
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
// um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console

const perguntaPet = Number (prompt("Quantos pets você tem?"));
const listaPet = []
if (perguntaPet === 0){
    console.log ('Que pena!Você pode adotar um pet!');

} else {
    perguntaNome = prompt('Quais os nomes do(s) seu(s) pet(s)')
    let i = 0 
    for(let = i; perguntaNome <= perguntaPet; i++){
        
        listaPet = perguntaNome.push(i).length
           
           
    }
}
console.log (perguntaNome)
console.log(listaPet)