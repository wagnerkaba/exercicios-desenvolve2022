import {valida} from './validacao.js';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    // cria uma máscara de validação para dinheiro utilizando a biblioteca simple mask money
    // https://github.com/codermarcos/simple-mask-money
    // Como a máscara não aplica nenhum tipo de validação, não faria sentido colocar ela dentro do arquivo validacao.js. 
    if(input.dataset.tipo === 'preco'){
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }


    // A função valida() é chamada sempre que ocorre o evento 'blur' em algum input
    // The blur event fires when an element has lost focus.
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
    input.addEventListener('blur', (evento)=> {
        valida(evento.target);
    })
})