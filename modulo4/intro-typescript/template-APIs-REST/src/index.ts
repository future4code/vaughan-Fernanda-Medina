function checaTriangulo(a: number, b: number, c:number) :string{
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(1,2,3))

  function imprimeTresCoresFavoritas() :void {
    const cor1 :string = process.argv[2]
    const cor2 :string = process.argv[3]
    const cor3 :string = process.argv[4]
    console.log([cor1, cor2, cor3])
 }

 imprimeTresCoresFavoritas()

 function checaAnoBissexto(ano :number) {
    const cond1 :boolean = if (ano % 400 === 0) => {
        return true
    }
    const cond2 :boolean = if ( (ano % 4 === 0) && (ano % 100 !== 0) =>{
        return false
    }
    )
    return cond1 || cond2
 }

 checaAnoBissexto()



 function comparaDoisNumeros(num1 :number , num2 :number) :number {
    let maiorNumero :number;
    let menorNumero :number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca :number = maiorNumero - menorNumero;
  
    return diferenca 
  }

  