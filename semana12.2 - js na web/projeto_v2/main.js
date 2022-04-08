import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';


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