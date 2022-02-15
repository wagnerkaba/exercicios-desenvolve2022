const notas = [10, 8, 7, 5, 8];


// OBS: se fosse utilizado nota++ em vez de ++nota, a expressão abaixo não funciona
// The increment operator (++) increments (adds one to) its operand and returns a value.
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
const notasAtualizadas = notas.map(nota => nota == 10? nota : ++nota);


console.log(notasAtualizadas);


// JavaScript map vs. forEach:
// The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything. You can use the forEach method to mutate the source array, but this isn't really the way it's meant to be used.