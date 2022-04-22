

export class Negociacao {
    
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number){
    }

    get data(): Date{
        // Porque não escrever apenas: return: this._date?
        // o código abaixo é exemplo de "programação defensiva"
        // o código abaixo impede que outro programador altere a data chamando por ex: negociacao.data.setDate(24);
        // vide: https://cursos.alura.com.br/course/typescript-evoluindo-javascript/task/91985
        return new Date(this._data.getTime());

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