//saber se o número é impar ou par
let numeros = 20
//mod "%" é o resto da divisão
for(let contador=0; contador<=numeros; contador = contador + 3){
  if(contador % 2 == 0){
     console.log(contador + " é par")
  }
  else{
      console.log(contador + " é impar")
    }
}