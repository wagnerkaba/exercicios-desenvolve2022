import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { agrupaTarefasPelaData } from "./agrupaTarefasPelaData.js";


//--------------------------------------------------
// Faz com que a lista de tarefas fique visível ao usuário
//--------------------------------------------------
export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []; // VIDE NOTA DE AULA SOBRE short-circuit evaluation

    lista.innerHTML = " "; //limpa o que tiver dentro de lista. Se não houvesse limpeza, a lista poderia mostrar valores duplicados

    // cada grupo de tarefas que contenham a mesma data devem ficar agrupadas
    // por este motivo é preciso descobrir quais são as datas que não se repetem
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);

    ordenaDatas(datasUnicas);

    //a partir de cada data única, são agrupadas as tarefas do dia respectivo
    datasUnicas.forEach((dia) => {
        lista.appendChild(agrupaTarefasPelaData(dia));
    })

}