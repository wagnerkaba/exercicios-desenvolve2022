import { TextField, Button } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";


function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

    const validacoes = useContext(ValidacoesCadastro);

    // OBS: as functions validarCampos e possoEnviar estão repetidas em DadosPessoais.jsx e DadosUsuario.jsx. Isso viola o princípio DRY (Don't repeat yourself)
    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }
    
    function possoEnviar(){
        let posso =true;
        for(let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;

    }



    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                name="email"
                id="email"
                label="email"
                type="email"
                margin="normal"
                fullWidth
                required
            />

            <TextField
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                onBlur={validarCampos}
                error={!erros.senha.valido} //mostra caixa de senha em vermelho para indicar erro
                helperText={erros.senha.texto} // mostra texto de erro para senha
                name="senha"
                id="senha"
                label="senha"
                type="password"
                margin="normal"
                fullWidth
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;