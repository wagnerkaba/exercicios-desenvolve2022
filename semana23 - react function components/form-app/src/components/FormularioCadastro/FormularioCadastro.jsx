import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(nome + sobrenome)
    }}>
      <TextField
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome" label="Nome" margin="normal" fullWidth />
      <TextField
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome" label="Sobrenome" margin="normal" fullWidth />
      <TextField id="cpf" label="CPF" margin="normal" fullWidth />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
