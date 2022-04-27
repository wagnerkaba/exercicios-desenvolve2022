import { Imprimivel } from "../interfaces/imprimivel.js";

// função que recebe como parâmetro objetos (que implementam interface Imprimivel) e invoca o método para Texto desses objetos
export function imprimirNoConsole(...objetos: Imprimivel[]) //  Imprimivel[] e Array<Imprimivel> é a mesma coisa
{
    for(let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}