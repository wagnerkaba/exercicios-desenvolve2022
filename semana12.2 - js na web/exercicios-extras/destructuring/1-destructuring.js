const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];
const numeros = [numerosPares, numerosImpares];
console.log(numeros);
const destructuring = [...numerosPares, ... numerosImpares];
console.log(destructuring);

console.log('-----------------------------------');

const [num1, num2, ...outrosNumeros] = [1,2, 3, 4, 5, 6];

console.log(num1, num2);
console.log(outrosNumeros);

console.log('-------------------------------------------');
console.log('Setting Default Values with JavaScript’s Destructuring')
console.log('With destructuring we can set defaults, or fallback values so that if an item is not in the object (or Array, Map, or Set) it will fall back to what you have set at the default.')
console.log('-------------------------------------------');

console.log('-------------------------------------------');

console.log("EXEMPLO 1");
console.log('-------------------------------------------');


const [nome1 = "Juliana"] = ['Marcos'];
console.log(nome1);

const [nome2 = "André"] = [];
console.log(nome2);

console.log('-------------------------------------------');
console.log("EXEMPLO 2");
console.log('-------------------------------------------');


const settings = {
    speed: 150
}
const { speed = 750, width = 500 } = settings;
console.log(speed); // 150 - comes from settings object
console.log(width); // 500 - fallback to default





