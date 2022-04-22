import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formatarData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                        `;
        }).join('')}
                </tbody>

            </table>
        `;
    }
    // este é um método privado. Outras classes não precisam ter conhecimento deste método
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
