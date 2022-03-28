function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    // OBS 1: como a professora descobriu que "elemento.localName" deve ser igual a audio?
    // ela deu console.log(elemento) e verificou as propriedades do elemento no console do firefox
    
    // OBS 2: "elemento != null" e "elemento" possuem o mesmo resultado booleano
    // Vide texto no final da página: Remember that there are only a few values in JavaScript that are falsy
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido");
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let tecla of listaDeTeclas) {

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
    tecla.onkeydown = function (evento) {

        //para fins didáticos: verifique no console, o que há dentro de "evento"
        console.log(evento);


        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }


    tecla.onkeyup = function () {
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


//=========================================================================
// Remember that there are only a few values in JavaScript that are falsy:
//=========================================================================

// In JavaScript, a value is truthy if JavaScript's built-in type coercion converts it to true. Every value is either truthy or falsy, so any value that isn't falsy must be truthy.

// Remember that there are only a few values in JavaScript that are falsy:

// false
// 0 : The Number zero (so, also 0.0, etc., and 0x0).
// -0 : The Number negative zero (so, also -0.0, etc., and -0x0).
// 0n: The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.
// '': Empty string
// null
// undefined
// NaN
// document.all : Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot.That slot only exists in document.all and cannot be set using JavaScript.


// Every other value is truthy. For example, even a Boolean object containing false is truthy.VEJA O CÓDIGO ABAIXO:

function exemploTruthy() {
    const v = new Boolean(false);

    // Will print! All JavaScript objects are truthy.
    if (v) {
        console.log('v is truthy!');
    }

}