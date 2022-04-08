const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id));

    return botaoDeleta
}

const deletarTarefa = (atualiza, id) => { 

    const index = id;

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
    tarefasCadastradas.splice(index, 1);

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    atualiza();


}

export default BotaoDeleta