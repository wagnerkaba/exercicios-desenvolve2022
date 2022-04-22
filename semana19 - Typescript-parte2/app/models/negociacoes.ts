import { Negociacao } from "./negociacao.js";


export class Negociacoes {

    private negociacoes: Negociacao[] = []; 

    

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }


    lista(): readonly Negociacao[]{
        console.log('lista');
        // negociacoes é um Array, mas o typescript converte em ReadonlyArray na hora do return
        return this.negociacoes;
    }
}