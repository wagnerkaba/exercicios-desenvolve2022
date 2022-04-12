import { clienteService } from "../service/cliente-service.js";



const formulario = document.querySelector('[data-form');


addEventListener('submit', (evento)=>{
    evento.preventDefault(); //previne que o formulario seja enviado automaticamente
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;
    
    clienteService.criaCliente(nome, email)
        .then(()=>{
            // após a criação do cliente, redireciona o usuário para outra página
            window.location.href = '../telas/cadastro_concluido.html'
        })
})