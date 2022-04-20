//----------------------------------------------------------------
// Este arquivo é a mesma coisa que negociacao.ts
// Porém, está escrito de forma mais verbosa
//----------------------------------------------------------------
//Esta é uma maneira mais verbosa de declarar variaveis e construtor 
export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
