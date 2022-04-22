import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
        const negociacao = this.criaNegociacao();

        //negociação deve ser feita apenas em dias úteis
        //caso a data fornecida não seja dia útil, a negociação não é adicionada
        if (!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias útes são aceitas');
            return;
        } 
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();

    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private criaNegociacao(): Negociacao{
                //inputData.value traz uma string do tipo "2022-04-13"
                console.log(this.inputData.value);
                //Date aceita como construtor uma string do tipo "2022,04,13"
                //Por isso é preciso converter inputData.value em um valor aceitável pelo Date
                const expressaoRegular = /-/g;
                const parametroDate = this.inputData.value.replace(expressaoRegular, ',')
                console.log(parametroDate);
                const data = new Date(parametroDate);
                console.log(data);
        
                const quantidade = parseInt(this.inputQuantidade.value);
                const valor = parseFloat(this.inputValor.value);
                return new Negociacao(data, quantidade, valor);
    }

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView():void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!')

    }
}