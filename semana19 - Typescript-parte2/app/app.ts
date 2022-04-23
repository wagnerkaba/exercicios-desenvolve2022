import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');

//form pode retornar um valor nulo. Caso form seja null, então lança um erro
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw new Error("Não foi possível iniciliazar a aplicação. Verifique se 'form' existe");
    
}




