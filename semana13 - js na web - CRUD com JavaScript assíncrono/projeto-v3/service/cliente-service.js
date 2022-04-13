
const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`);
    if (resposta.ok) {
        return resposta.json();
    }
    //se ocorrer algum erro durante o "fetch", será lançado um erro
    throw new Error('Não foi possível listar os clientes');


}

const criaCliente = async (nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    if (resposta.ok) {
        return resposta.body;
    }
    //se ocorrer algum erro durante o "fetch", será lançado um erro
    throw new Error('Não foi possível criar um cliente');


}

const removeCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
    if (!resposta.ok) {
        //se ocorrer algum erro durante o "fetch", será lançado um erro
        throw new Error('Não foi possível remover um cliente');
    }
    return resposta.body
}

const detalhaCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`);

    if (resposta.ok) {
        return resposta.json();
    }
    //se ocorrer algum erro durante o "fetch", será lançado um erro
    throw new Error('Não foi possível detalhar o cliente');

}

const atualizaCliente = async (id, nome, email) => {

    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    if (resposta.ok) {
        return resposta.json();
    }
    //se ocorrer algum erro durante o "fetch", será lançado um erro
    throw new Error('Não foi possível atualizar o cliente');

}


export const clienteService = {

    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}



