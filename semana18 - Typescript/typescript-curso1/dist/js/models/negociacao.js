//Esta é uma maneira mais concisa de declarar variaveis e construtor que é aceito pelo typescript
//Para ver a maneira mais verbosa, veja negociaco.verboso.ts
//Veja o video da aula 05.02 (Declaração no próprio construtor) para entender melhor
export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        // Porque não escrever apenas: return: this._date?
        // o código abaixo é exemplo de "programação defensiva"
        // o código abaixo impede que outro programador altere a data chamando por ex: negociacao.data.setDate(24);
        // vide: https://cursos.alura.com.br/course/typescript-evoluindo-javascript/task/91985
        return new Date(this._data.getTime());
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
