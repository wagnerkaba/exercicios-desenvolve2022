import { clienteService } from "../service/cliente-service.js";

const pegaURL = new URL(window.location);
//para entender o que é "pegaURL", veja o console do browser após clicar no botão "editar"
console.log(pegaURL);
//recupera o id do cliente selecionado para edição
const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

clienteService.detalhaCliente(id)
    .then(dados => {
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    })

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
        .then(()=>{
            window.location.href = "../telas/edicao_concluida.html";
        })

})

