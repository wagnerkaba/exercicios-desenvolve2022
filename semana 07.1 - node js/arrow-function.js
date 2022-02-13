

// arrow function com uma linha

const soma = (num1, num2) => num1 + num2;

console.log(soma(2,3));

//arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1>10 || num2 >10){
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(4,3));
console.log(somaNumerosPequenos(20,3));
