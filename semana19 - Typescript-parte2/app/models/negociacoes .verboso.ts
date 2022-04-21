


//----------------------------------------------------------------
// Este arquivo é a mesma coisa que negociacoes.ts
// Porém, está escrito de forma mais verbosa
//----------------------------------------------------------------


import { Negociacao } from "./negociacao.js";


export class Negociacoes {

    //Duas formas de declarar um array de Negociacao:
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = []; 

    

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // O método lista() retorna um ReadonlyArray que é um tipo próprio do Typescript
    // A razão é impedir que alguém consiga alterar o array que foi retornado
    //The ReadonlyArray type describes Arrays that can only be read from. Any variable with a reference to a ReadonlyArray can’t add, remove, or replace any elements of the array.
    lista(): ReadonlyArray<Negociacao>{
        console.log('lista');
        // negociacoes é um Array, mas o typescript converte em ReadonlyArray na hora do return
        return this.negociacoes;
    }
}