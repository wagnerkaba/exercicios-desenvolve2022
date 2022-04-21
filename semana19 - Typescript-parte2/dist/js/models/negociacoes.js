export class Negociacoes {
    constructor() {
        //veja outra forma de declarar array de negociacao em nogociacoes.verboso
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //veja outra forma de declarar que o retorno é um ReadonlyArray em negociacoes.verboso
    lista() {
        console.log('lista');
        // negociacoes é um Array, mas o typescript converte em ReadonlyArray na hora do return
        return this.negociacoes;
    }
}
