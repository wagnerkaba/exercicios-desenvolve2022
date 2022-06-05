import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({ aoEnviar, validacoes })
//em vez de "{aoEnviar, validarCPF}", poderia ter colocado apenas "props" como parâmetro
// se tivesse usado "props", dai para chamar a função "aoEnviar" seria necessário usar "props.aoEnviar"
// usando "{aoEnviar, validarCPF}" estamos fazendo um "Destructuring assignment"
{
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" }, nome: { valido: true, texto: "" }});

  // OBS: as functions validarCampos e possoEnviar estão repetidas em DadosPessoais.jsx e DadosUsuario.jsx. Isso viola o princípio DRY (Don't repeat yourself)
  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    let posso = true;
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;

  }




  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }
    }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        name="nome"
        id="nome"
        label="Nome"
        margin="normal"
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}

        name="sobrenome"
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
        fullWidth />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido} //mostra caixa de CPF em vermelho para indicar erro
        helperText={erros.cpf.texto} // mostra texto de erro para cpf
        name="cpf"
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
