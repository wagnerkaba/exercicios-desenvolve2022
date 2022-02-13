//ordem dos parametros 

function apresentacao (nome, idade) {
    return `meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(apresentacao(2021-1989, "Carla"));

// What Is a Default Parameter in a Function?
// A JavaScript function can have default parameter values. Using default function parameters, you can initialize formal parameters with default values. If you do not initialize a parameter with some value, then the default value of the parameter is undefined.

function multiplicaComParametrosDefault(numero1 = 3, numero2 = 2){
    return numero1 * numero2;
}


// chamando a função com dois parametros

console.log(`O resultadode multiplicaComParametrosDefault(6,6) é: ${multiplicaComParametrosDefault(6,6)}`);

// chamando a função com apenas um parametro

console.log(`O resultadode multiplicaComParametrosDefault(6) é: ${multiplicaComParametrosDefault(6)}`);


// chamando a função sem usar nenhum parametro

console.log(`O resultado de multiplicaComParametrosDefault sem usar nenhum parametro: é ${multiplicaComParametrosDefault()}`);



// exemplo da função multiplica sem parametros default

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

resultado = multiplica(6);

console.log(`O resultado é ${resultado}`);