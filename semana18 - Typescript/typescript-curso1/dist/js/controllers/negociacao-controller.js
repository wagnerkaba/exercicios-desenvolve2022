import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        //inputData.value traz uma string do tipo "2022-04-13"
        console.log(this.inputData.value);
        //Date aceita como construtor uma string do tipo "2022,04,13"
        //Por isso é preciso converter inputData.value em um valor aceitável pelo Date
        const expressaoRegular = /-/g;
        const parametroDate = this.inputData.value.replace(expressaoRegular, ',');
        console.log(parametroDate);
        const data = new Date(parametroDate);
        console.log(data);
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
