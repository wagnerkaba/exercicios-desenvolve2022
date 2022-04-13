
//--------------------------------------------------------------------
// as funções foram declaradas como "const" ao invés de serem declaradas como "function"
// creio que se fossem declaradas como "function", a legibilidade seria bem melhor
// vide notas de aula: Constant confusion: why I still use JavaScript function statements
//--------------------------------------------------------------------



import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `<td class="td" data-td>${nome}</td>
                        <td>${email}</td>
                        <td>
                            <ul class="tabela__botoes-controle">
                                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                            </ul>
                        </td>`;
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id; //id para identificar o cliente
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir';
    if (ehBotaoDeletar) {

        try {

            //busca o elemento mais próximo do botão (closest), que é a linha que contém os dados a serem removidos
            // sobre o método closest(): https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
            const linhaCliente = evento.target.closest('[data-id');
            let id = linhaCliente.dataset.id;

            //remove cliente do banco de dados
            await clienteService.removeCliente(id)
            //após remover cliente no banco de dados, remove a linha do cliente no html
            linhaCliente.remove();
        }
        catch (erro) {
            console.log(erro);
            window.location.href = '../telas/erro.html';
        }
    }
})

const renderizarHTML = async () => {

    try {
        const listaClientes = await clienteService.listaClientes();
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
        })
    }
    catch (erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    }
}

renderizarHTML();


