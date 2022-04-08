const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id));

    return botaoDeleta
}

const deletarTarefa = (atualiza, id) => { 

    const index = id;

    // pega a lista de tarefas do localStorage
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    // remove a tarefa deletada da lista de tarefas
    //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
    tarefasCadastradas.splice(index, 1);

    // salva a lista de tarefas no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    //faz com que a lista de tarefas atualizada fique visível ao usuário
    atualiza();


}

export default BotaoDeleta