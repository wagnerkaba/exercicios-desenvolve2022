

# 05 - Migrando componentes



Alice está migrando uma aplicação em **React** para utilizar a biblioteca de `styled components`. Em seu projeto ela tem o seguinte componente declarado:

```
const Botao = ({children})=>{
  return(<button className="botao-geral">children</button>)
}
```

E o estilo css desse botão é

```
.botao-geral{
    background-color: #3f51b5;
    color: white;
    padding: 10px;
    border: none;
}
```

Ao transformar esse elemento em um `Styled Component` como ficará o código de Alice?

## Resposta

```
const Botao = styled.button`    
  background-color: #3f51b5;    
  color: white;    
  padding: 10px;    
  border: none;`;
```

Exatamente! Essa biblioteca nos ajuda a ter menos código quanto temos componentes muito simples além de evitar os conflitos com nomes de classes.
