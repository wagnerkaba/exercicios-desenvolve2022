// O professor criou esta interface para não precisar utilizar o tipo "any" no antigo método importaDados da classe NegociacaoController
// você pode ver o tipo "any" no arquivo antigo: negociacao-controller.old.ts
// OBS: o método importaDados foi transferido para o método obterNegociacoesDoDia() na classe NegociacoesService
// para maiores explicações, vide nota de aula "04.05 Definindo uma interface para a API"

export interface NegociacoesDoDia {
    montante: number;
    vezes: number;
}