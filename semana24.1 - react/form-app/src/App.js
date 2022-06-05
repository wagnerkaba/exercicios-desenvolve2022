
import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import '@fontsource/roboto';
import {validarCPF, validarSenha} from "./models/cadastro"

class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}/> 
        {/* OBS 1: {cpf:validarCPF, senha:validarSenha, nome:validarSenha} é um objeto literal que está sendo passado como props */}
        {/* OBS 2: nome está utilizando a mesma validação de senha. No mundo real, deveria ser criado uma validação diferente para nome e senha*/}
      </Container>

    );

  }

}


// Quando o usuário submete os dados do formulário, eles são impressos no console.log
function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
