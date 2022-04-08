
import { criarTarefa } from "./componentes/criaTarefa.js";
import { carregaTarefa } from "./componentes/carregaTarefa.js";


const novaTarefa = document.querySelector('[data-form-button]')

// Cria uma tarefa a partir do momento que o usuário clica no botão "Novo item"
novaTarefa.addEventListener('click', criarTarefa);

// Faz com que a lista de tarefas fique visível ao usuário
carregaTarefa();