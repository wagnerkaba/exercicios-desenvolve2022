import {useState} from "react";

function useErros(validacoes) {

    // cria um estado inicial para o useState
    const estadoInicial = criarEstadoInicial(validacoes);

    //What do we pass to useState as an argument? 
    //The only argument to the useState() Hook is the initial state. 
    //Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need.
    const [erros, setErros] = useState(estadoInicial);

    
    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }
    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {};
    for(let campo in validacoes){
        estadoInicial[campo] = {valido: true, texto: ""}
    }
    return estadoInicial;
}

export default useErros;