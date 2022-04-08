import { Tarefa } from "./criaTarefa.js";

//--------------------------------------------------
// pega uma data recebida como parâmetro e agrupa todas as tarefas dessa data em um mesmo grupo
//--------------------------------------------------
export const agrupaTarefasPelaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; // VIDE NOTA DE AULA SOBRE short-circuit evaluation

    const dataRecebida = moment(data, 'DD/MM/YYYY');
    const tarefasAgrupadasPorData = document.createElement('li');
    const conteudo = `<p class='content-data'>${dataRecebida.format('DD/MM/YYYY')}</p>`;
    tarefasAgrupadasPorData.innerHTML = conteudo;

    tarefas.forEach((tarefa, id) => {

        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');

        // diff é um método de moment.js que compara dois moments
        // se os dois moments forem iguais, o método retorna zero. veja exercicios-extras para mais detalhes.
        const diff = dataRecebida.diff(dia);
        if(diff === 0) {
            tarefasAgrupadasPorData.appendChild(Tarefa(tarefa, id));

        }
    })
    return tarefasAgrupadasPorData;
}