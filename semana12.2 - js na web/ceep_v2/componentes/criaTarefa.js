import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';
import { carregaTarefa } from './carregaTarefa.js';


export const criarTarefa = (evento) => {
    evento.preventDefault();


    // captura 'tarefas' de localStorage 
    // como localStorage apenas armazena strings, é preciso tranformar 'tarefas' em um objeto por meio de JSON.parse
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; // VIDE NOTA DE AULA SOBRE short-circuit evaluation
    //Em document.querySelector estou indicando o que vou buscar. 
    //Repare que usamos o data-attributes para localização do elemento. As classes deixamos somente para estilo.
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value); // moment() é uma função da biblioteca moment.js

    const dataFormatada = data.format('DD/MM/YYYY');

    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        concluida
    }


    tarefas.push(dados);

    // OBSERVAÇÃO 1:
    //The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies.
    //The two mechanisms within Web Storage are as follows:
    //sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores)
    //localStorage does the same thing, but persists even when the browser is closed and reopened.
    // OBSERVAÇÃO 2:
    // o LocalStorage só aceita guardar informações no formato de strings. Por isso, é preciso tranformar dados em string através de JSON.stringfy
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    input.value = " ";

    carregaTarefa();
}

export const Tarefa = ({ valor, dataFormatada, concluida }, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`

    if (concluida) {
        tarefa.classList.add('done');
    } 
    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta())

    return tarefa;


}