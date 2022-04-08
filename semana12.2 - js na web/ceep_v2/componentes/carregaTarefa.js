import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []; // VIDE NOTA DE AULA SOBRE short-circuit evaluation

    lista.innerHTML = " "; //limpa o que tiver dentro de lista. Se não houvesse limpeza, a lista poderia mostrar valores duplicados

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);

    ordenaDatas(datasUnicas);

    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia));

    })

}