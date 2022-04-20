export class Negociacoes {
    constructor() {
        //Duas formas de declarar um array de Negociacao:
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // O método lista() retorna um ReadonlyArray que é um tipo próprio do Typescript
    // A razão é impedir que alguém consiga alterar o array que foi retornado
    //The ReadonlyArray type describes Arrays that can only be read from. Any variable with a reference to a ReadonlyArray can’t add, remove, or replace any elements of the array.
    lista() {
        console.log('lista');
        // negociacoes é um Array, mas o typescript converte em ReadonlyArray na hora do return
        return this.negociacoes;
    }
}
