//--------------------------------------------------------------------
// O código abaixo faz uso de JavaScript Immediately-invoked Function Expressions (IIFE)
// Para saber mais vide notas de aula: JavaScript Immediately-invoked Function Expressions (IIFE)
//--------------------------------------------------------------------


import { clienteService } from "../service/cliente-service.js";

(async () => {
    const pegaURL = new URL(window.location);
    //para entender o que é "pegaURL", veja o console do browser após clicar no botão "editar"
    console.log(pegaURL);
    //recupera o id do cliente selecionado para edição
    const id = pegaURL.searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    try {
        const dados = await clienteService.detalhaCliente(id);
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    }
    catch (erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    }

    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault();

        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = "../telas/edicao_concluida.html";
        }
        catch (erro) {
            console.log(erro);
            window.location.href = '../telas/erro.html';
        }

    })

})();



