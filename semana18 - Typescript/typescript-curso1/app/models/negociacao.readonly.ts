
//Este arquivo é outra forma de escrever negociacao.ts
//Deste modo, não é preciso criar um monte de getters para ler as variaveis
//E as variaveis não podem ser modificadas fora da classe

export class Negociacao {
    
    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }
}