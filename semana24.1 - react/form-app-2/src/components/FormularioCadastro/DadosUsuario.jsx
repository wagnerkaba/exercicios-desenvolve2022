import { TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    const [erros,validarCampos, possoEnviar] = useErros(validacoes);

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