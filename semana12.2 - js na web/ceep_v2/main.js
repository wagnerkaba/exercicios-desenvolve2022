
import { criarTarefa } from "./componentes/criaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa);