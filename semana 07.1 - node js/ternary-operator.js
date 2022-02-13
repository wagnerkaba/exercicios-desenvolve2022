
// Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

// a linguagem java também trabalha com operadores ternários com a seguinte sintaxe: variable = Expression1 ? Expression2: Expression3


const idadeMinima = 18;
const idadeJoao = 16;
const idadeAndre = 21;

//               CONDIÇÃO                   TRUE            FALSE
console.log(idadeJoao >= idadeMinima ? "bebe cerveja": "bebe suco");


idadeAndre >= idadeMinima ? console.log("bebe cerveja") : console.log("bebe suco");