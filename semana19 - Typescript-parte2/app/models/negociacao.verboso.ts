
//----------------------------------------------------------------
// Este arquivo é a mesma coisa que negociacao.ts
// Porém, está escrito de forma mais verbosa
//----------------------------------------------------------------


//Esta é uma maneira mais verbosa de declarar variaveis e construtor 
export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date{
        return this._data;
    }
    get quantidade(): number{
        return this._quantidade;
    }
    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }
}