import { Tarefa } from "./criaTarefa.js";

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; // VIDE NOTA DE AULA SOBRE short-circuit evaluation

    const dataMoment = moment(data, 'DD/MM/YYYY');
    const dataTopo = document.createElement('li');
    const conteudo = `<p class='content-data'>${dataMoment.format('DD/MM/YYYY')}</p>`;
    dataTopo.innerHTML = conteudo;

    tarefas.forEach((tarefa, id) => {

        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');

        // diff é um método de moment.js que compara dois moments
        // se os dois moments forem iguais, o método retorna zero. veja exercicios-extras para mais detalhes.
        const diff = dataMoment.diff(dia);
        if(diff === 0) {
            dataTopo.appendChild(Tarefa(tarefa, id));

        }
    })
    return dataTopo;
}