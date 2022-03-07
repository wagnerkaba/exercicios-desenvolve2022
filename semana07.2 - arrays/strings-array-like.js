const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA


// In JavaScript are strings arrays-like objects?

// The term "array-like" usually refers to an object having an integer-valued .length property and correspondingly many elements stored in integer-keyed properties, so that we can access them by index like an array. Strings certainly fulfill that requirement.

// No, strings do not have all the methods that arrays have. They don't inherit from Array.prototype, they are not real arrays - they're just array-like. You can however trivially convert a string to an array, either by ….split('') or by Array.from(…).

// Fonte: https://stackoverflow.com/questions/51821964/in-javascript-are-strings-arrays-like-objects