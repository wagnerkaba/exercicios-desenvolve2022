import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

let tarefas = [];

const criarTarefa = (evento) => {
    evento.preventDefault();

    //Em document.querySelector estou indicando o que vou buscar. 
    //Repare que usamos o data-attributes para localização do elemento. As classes deixamos somente para estilo.
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value); // moment() é uma função da biblioteca moment.js

    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }

    const elementoDomTarefa = criarElementoDomTarefa(dados);
    
    lista.appendChild(elementoDomTarefa);

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


}

const criarElementoDomTarefa = ({ valor, dataFormatada }) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa;


}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa);