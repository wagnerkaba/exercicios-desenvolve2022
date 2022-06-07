

const teste = ["Maria", "João", "Alexandre", "Ricardo"];

console.log('O index 0 do array contém a seguinte pessoa: ' + teste[0]);

console.log('Eliminando Maria....')
teste.splice(0,1);

console.log("Novo array: " + teste);
console.log('O index 0 do array agora contém a seguinte pessoa: ' + teste[0]);
