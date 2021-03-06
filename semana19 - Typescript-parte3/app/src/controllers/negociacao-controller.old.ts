import { inserirDOM } from '../decorators/inserirDOM.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {

    // Sobre o decorator @inserirDOM:
    // Na parte 2 do curso, o construtor de NegociacaoController era responsável para atribuir elementos DOM a inputs. 
    // Por exemplo: this.inputData = <HTMLInputElement>document.querySelector('#data');
    // Agora esta tarefa ficou a cargo do decorator @inserirDOM
    @inserirDOM('#data')
    private inputData: HTMLInputElement;
    @inserirDOM('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @inserirDOM('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }


    @logarTempoDeExecucao()
    public adiciona(): void {


        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();


    }

    public importaDados(): void {
        fetch('http://localhost:8080/dados')
            // obs: Em uma arrow function de apenas uma linha, a palavra "return" não é necessária, pois está subentendida
            .then(resposta => resposta.json())
            // obs: any[] é a mesma coisa que Array<any>
            .then((dados: any[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante)
                })
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
