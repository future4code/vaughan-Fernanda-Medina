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
    function comparaNumeros(a, b) {
        return a - b
    }
    return array.sort(comparaNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numeroPar = array.filter((numero) => {
        if (numero % 2 === 0) {
            return true
        } else {
            return false
        }
    })
    return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((numero) => {
        if (numero % 2 === 0) {
            return true
        } else {
            return false
        }
    })
    return elevados = pares.map(num => Math.pow(num, 2))
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = Math.max.apply(null, array);
    return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    // const maiorNumero = 0
    // if (num1 > num2) {
    //     maiorNumero = num1
    // } else {
    //     maiorNumero = num2
    // }

    // const menorNumero = 0
    // if (num1 < num2) {
    //     menorNumero = num1
    // } else {
    //     menorNumero = num2
    // }

    // const divisivel = 0
    // if (maiorNumero % menorNumero === 0) {
    //     return true
    // } else {
    //     return false
    // }

    // const diferenca = maiorNumero - menorNumero
    // let objetoFinal = {
    //     maiorNumero: maiorNumero,
    //     maiorDivisivelPorMenor: divisivel,
    //     diferenca: diferenca
    // }
    // return 



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