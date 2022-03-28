const tela = document.querySelector('input[type=tel]');
const listaDeTeclas = document.querySelectorAll('input[type=button]');


for (let tecla of listaDeTeclas) {
    tecla.onclick = function () {
        tela.value = tela.value + tecla.value;

    }

    tecla.onkeydown = function(evento){

        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }


}