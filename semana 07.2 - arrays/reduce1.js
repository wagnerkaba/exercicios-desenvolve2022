const salaJS = [7,8,6,4,9,5,3,5]
const salaJava = [7,6,5,9,6,4,7]
const salaPython = [9,5,8,6,7,9]

const valorInicial = 0; // obs: o valor inicial é um parametro opcional do método reduce
//sintaxe: reduce(callbackFn, initialValue)

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce(
        (total, atual) => total + atual, valorInicial

    )
    return somaDasNotas/notasDaSala.length
}

// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.
//sintaxe: reduce(callbackFn, initialValue)

console.log(`Media da sala de Javascript: ${mediaSala(salaJS)}`);
console.log(`Media da sala de Java: ${mediaSala(salaJava)}`);
console.log(`Media da sala de Python: ${mediaSala(salaPython)}`);

