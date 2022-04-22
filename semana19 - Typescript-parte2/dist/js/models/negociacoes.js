export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        console.log('lista');
        // negociacoes é um Array, mas o typescript converte em ReadonlyArray na hora do return
        return this.negociacoes;
    }
}
