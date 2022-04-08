const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id));

    return botaoConclui

}

const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    // se "concluida" é falso, então agora "concluida" deve ser verdadeiro, pois o usuário clicou no botão "concluir"
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
}

export default BotaoConclui

