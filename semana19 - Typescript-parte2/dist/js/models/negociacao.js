export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
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
    static criaNegociacao(dataString, quantidadeString, valorString) {
        const expressaoRegular = /-/g;
        const parametroDate = dataString.replace(expressaoRegular, ',');
        console.log(parametroDate);
        const data = new Date(parametroDate);
        console.log(data);
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
