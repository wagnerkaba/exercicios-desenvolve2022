const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id));

    return botaoConclui

}

const concluirTarefa = (atualiza, id) => {

    // pega a lista de tarefas do localStorage
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    // se "concluida" é falso, então agora "concluida" deve ser verdadeiro, pois o usuário clicou no botão "concluir"
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    // salva a lista de tarefas no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    //faz com que a lista de tarefas atualizada fique visível ao usuário
    atualiza();
}

export default BotaoConclui

