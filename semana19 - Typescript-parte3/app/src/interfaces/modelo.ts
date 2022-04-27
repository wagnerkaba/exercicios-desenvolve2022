
// Interface criada como exemplo de que uma interface pode extender outras interfaces
// Neste caso, Modelo extende Comparavel e Imprimivel
// Quem implementar Modelo, vai ter que implementar os métodos de Comparavel e de Imprimivel

import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imprimivel.js";


export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}