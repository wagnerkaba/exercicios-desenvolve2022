import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({aoEnviar, validarCPF}) 
//em vez de "{aoEnviar, validarCPF}", poderia ter colocado apenas "props" como parâmetro
// se tivesse usado "props", dai para chamar a função "aoEnviar" seria necessário usar "props.aoEnviar"
// usando "{aoEnviar, validarCPF}" estamos fazendo um "Destructuring assignment"
{
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});



  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome" label="Nome" margin="normal" fullWidth />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome" label="Sobrenome" margin="normal" fullWidth />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}

        onBlur={(event)=>{
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido});
        }}

        error={!erros.cpf.valido} //mostra caixa de CPF em vermelho para indicar erro
        helperText={erros.cpf.texto} // mostra texto de erro para cpf
        id="cpf" 
        label="CPF" 
        margin="normal" 
        fullWidth />

      <FormControlLabel
        label="Promoções"
        control={<Switch
          checked={promocoes}
          onChange={(evento) => { setPromocoes(evento.target.checked) }}
          name="promocoes"
          
          color="primary" />
        } />

      <FormControlLabel
        label="Novidades"
        control={<Switch
          checked={novidades}
          onChange={(evento) => { setNovidades(evento.target.checked) }}
          name="novidades"

          color="primary" />
        } />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
