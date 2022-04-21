import { Negociacao } from "./negociacao.js";


export class Negociacoes {

    //veja outra forma de declarar array de negociacao em nogociacoes.verboso
    private negociacoes: Negociacao[] = []; 

    

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //veja outra forma de declarar que o retorno é um ReadonlyArray em negociacoes.verboso
    lista(): readonly Negociacao[]{
        console.log('lista');
        // negociacoes é um Array, mas o typescript converte em ReadonlyArray na hora do return
        return this.negociacoes;
    }
}