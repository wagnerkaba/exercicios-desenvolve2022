// https://www.codewars.com/kata/57eaeb9578748ff92a000009/

function sumMix(x) {


  // The + operator returns the numeric representation of the object. 
  // https://stackoverflow.com/questions/6682997/what-is-the-purpose-of-a-plus-symbol-before-a-variable
  let arrayConvertidoEmNumeros = x.map(a => +a);
  return arrayConvertidoEmNumeros.reduce((a, b) => a + b);

  // o código acima pode ser reduzido à linha abaixo:
  // return x.map(a => +a).reduce((a, b) => a + b);



}

console.log(sumMix([9, 3, '7', '3']))