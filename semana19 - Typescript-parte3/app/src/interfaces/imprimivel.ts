
export interface Imprimivel{
    paraTexto(): string;
}



// OBS: A classe Negociacao e Negociacoes implementam a interface Imprimivel
// O motivo é para que o método imprimir (vide imprimir.ts) possa funcionar com qualquer objeto "Imprimivel"
// ou seja, o método "imprimir" pode imprimir "Negociacao" e "Negociacoes"

// Para entender melhor, veja notas de aula: aula 05.06 - Interface em ação