// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let numero of array){
      if (numero % 2 === 0 ){
          numerosPares.push(numero)
      }
  }  
  return numerosPares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
//    console.log (numerosPares)
//     let numerosPares = array.filter ((numero) => {
//         if (numero % 2 == 0){
//         return numerosPares.push(numero)
//     })
//    let numerosElevados = []
//     for (let valor of array )  {
//        let numerosAoQuadrado = Math.pow( valor,2)
//         numerosElevados.push(numerosAoQuadrado)

//     }
//     return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = Math.max(...array)
    return numeroMaior 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
//     let objeto = {maiorNumero:,
//      maiorDivisivelPorMenor:,
//      diferenca:,
//     }
// for (const numeros of num1,num2){
//     if (num1 > num2 && num1 )
// }    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}