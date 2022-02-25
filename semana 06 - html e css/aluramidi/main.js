function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let tecla of listaDeTeclas){

    // se vc escrever listaDeTeclas[1].classList no console do browser, vai aparecer todas as classes css do elemento listaDeTeclas[1]. 
    // No caso de listaDeTeclas[1].existem duas classes: 'tecla', 'tecla_clap'
    // classList[1] é o segundo elemento que aparece nessa lista de classes
    const instrumento = tecla.classList[1];
    const idInstrumento = `#som_${instrumento}`;


    // RELACIONA EVENTO tecla.onclick À FUNÇÃO QUE TOCA SOM
    // porque usar função anônima que apenas invoca tocaSom()? Vide resposta no fim deste arquivo.
    tecla.onclick = function () {
        tocaSom(idInstrumento);
    }


    // Quando o usuário aperta uma tecla, o javascript faz com que seja adicionada a classe CSS 'ativa' a essa tecla
    // A classe 'ativa' faz com que a tecla tenha aparência de que foi apertada (ela fica vermelha)
    tecla.onkeydown = function(evento) {

        //para fins didáticos: verifique no console, o que há dentro de "evento"
        console.log(evento);


        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }


    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}



//=========================================================================
// porque usar função anônima que apenas invoca tocaSom()?
//=========================================================================




// o motivo é que tecla.onclick não pode invocar uma função com parênteses
    
// onclick deve apenas receber a referência à função (vide texto no fim da pagina: Why do we call the functions without parentheses)
        
// Why do we call the functions without parentheses i.e. '()'?

// Calling a JavaScript function without the parens passes that function’s definition as a reference. It is one of the fundamentals to programming in JavaScript known as callbacks.

// Without parentheses you're not actually calling the function. A function name without the parentheses is a reference to the function.

// We don't use the parentheses in that code because we don't want the function to be called at the point where that code is encountered.