

// Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.


console.log("Listar os 7 valores falsy")
0 ? console.log("truthy") : console.log("falsy") // zero é falsy
0n ? console.log("truthy") : console.log("falsy") // zero BigInt é falsy
null ? console.log("truthy") : console.log("falsy") // nulo é falsy
undefined ? console.log("truthy") : console.log("falsy") // indefinido é falsy
false ? console.log("truthy") : console.log("falsy") // false é falsy
NaN ? console.log("truthy") : console.log("falsy") // Not a Number é falsy
"" ? console.log("truthy") : console.log("falsy")  // string vazia é falsy


console.log("Alguns valores truthy")
true ? console.log("truthy") : console.log("falsy")  // true é truthy
({}) ? console.log("truthy") : console.log("falsy") // objeto vazio é truthy
([]) ? console.log("truthy") : console.log("falsy") // array vazio é truthy
1n ? console.log("truthy") : console.log("falsy") // 1n é truthy
17 ? console.log("truthy") : console.log("falsy") // número !== de 0 é truthy
new Date() ? console.log("truthy") : console.log("falsy") // objeto é truthy
3.4 ? console.log("truthy") : console.log("falsy") // número decimal é truthy
-99 ? console.log("truthy") : console.log("falsy") // número negativo é truthy
Infinity ? console.log("truthy") : console.log("falsy") // infinito positivo é truthy
-Infinity ? console.log("truthy") : console.log("falsy") // infinito negativo é truthy
"Rocketseat" ? console.log("truthy") : console.log("falsy") // String com valor é truthy
"🚀 💺" ? console.log("truthy") : console.log("falsy") // Mesmo exemplo de cima!
" " ? console.log("truthy") : console.log("falsy") // String com espaço em branco é truthy (cuidado)!