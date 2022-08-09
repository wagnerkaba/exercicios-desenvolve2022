
// Fonte: https://www.educative.io/answers/function-composition-in-javascript

// function composition of any number of functions
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);