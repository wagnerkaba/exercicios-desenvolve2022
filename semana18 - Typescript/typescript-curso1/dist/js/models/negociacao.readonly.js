//Este arquivo é outra forma de escrever negociacao.ts
//Deste modo, não é preciso criar um monte de getters para ler as variaveis
//E as variaveis não podem ser modificadas fora da classe
export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
