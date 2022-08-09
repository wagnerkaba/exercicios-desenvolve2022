//Fonte: https://www.educative.io/answers/function-composition-in-javascript

// function composition using pipe of any number of functions
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function pipe
var output_final = pipe(square, double)(2);
console.log(output_final);