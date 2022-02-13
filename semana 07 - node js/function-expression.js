// Function Expression  allows us to create an anonymous function which doesn’t have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined. A function expression has to be stored in a variable and can be accessed using variableName.  With the ES6 features introducing Arrow Function, it becomes more easier to declare function expression.

//Example 2: Code for Function Expression (anonymous) 

var calSub = function (x, y) {
    let z = x - y;
    return z;
}

console.log("Subtraction : " + calSub(7, 4));

//Example 3: Code for Function Expression (named) 

var calMul = function Mul(x, y) {
    let z = x * y;
    return z;
}

console.log("Multiplication : " + calMul(7, 4));



