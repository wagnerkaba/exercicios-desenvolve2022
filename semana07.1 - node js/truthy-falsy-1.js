

// Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

a = []
b = 20
c = true 
d = ''

console.log ("======================================================");

if (!d) console.log("string vazia é falsy");

if (d==0) console.log("'' == 0 == falsy");

if (c==1) console.log("true == 1");
if (0==false) console.log("false == 0");


if (b===20 && c!=false && d==0) {
    console.log('verdade')
} else {
    console.log('falso');
}

console.log ("======================================================");
a? console.log('verdade') : console.log('falso');
([])? console.log('verdade') : console.log('falso');

if (a==0) 
{
    console.log('verdade')
} else {
    console.log('falso');
}
console.log ("======================================================");

if (d) 
{
    console.log('verdade')
} else {
    console.log('falso');
}

console.log ("======================================================");

// What's the double exclamation mark for in JavaScript?
// It converts Object to boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true.

console.log(!![])