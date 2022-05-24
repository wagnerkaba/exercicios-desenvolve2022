
import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import '@fontsource/roboto';
import { validarCPF, validarSenha } from "./models/cadastro"
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography>

        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>

          <FormularioCadastro aoEnviar={aoEnviarForm} />

        </ValidacoesCadastro.Provider>

      </Container>

    );

  }

}


// Quando o usuário submete os dados do formulário, eles são impressos no console.log
function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
