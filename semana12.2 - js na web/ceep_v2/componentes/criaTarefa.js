import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';
import { carregaTarefa } from './carregaTarefa.js';

//--------------------------------------------------
// Cria uma tarefa a partir do momento que o usuário clica no botão "Novo item"
//--------------------------------------------------
export const criarTarefa = (evento) => {
    evento.preventDefault();


    // recupera os dados salvos no localStorage
    // como localStorage apenas armazena strings, é preciso tranformar 'tarefas' em um objeto por meio de JSON.parse
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; // VIDE NOTA DE AULA SOBRE short-circuit evaluation
    
    //######## CAPTURA OS DADOS DO INPUT 
    //Em document.querySelector estou indicando o que vou buscar. 
    //Repare que usamos o data-attributes para localização do elemento. As classes deixamos somente para estilo.
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value); // moment() é uma função da biblioteca moment.js

    const horario = data.format('HH:mm');

    const dataFormatada = data.format('DD/MM/YYYY');

    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    // pega os dados capturados no input e coloca no array de tarefas
    tarefas.push(dados);

    // SALVA TAREFAS NO LOCALSTORAGE
    // OBSERVAÇÃO 1: localStorage serve para armazenar dados no browser que são persistidos mesmo quando o brower é fechado.
    // Para saber mais: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
    // OBSERVAÇÃO 2: o LocalStorage só aceita guardar informações no formato de strings. Por isso, é preciso tranformar dados em string através de JSON.stringfy
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    input.value = " ";

    //faz com que a lista de tarefas atualizada fique visível ao usuário
    carregaTarefa();
}

//--------------------------------------------------
// Cria o elemento dom que contém cada tarefa
//--------------------------------------------------
export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${horario} - ${valor}</p>`

    if (concluida) {
        // se a tarefa está marcada como "concluida", então deve ter formatação especial no css
        tarefa.classList.add('done');
    } 
    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

    return tarefa;


}