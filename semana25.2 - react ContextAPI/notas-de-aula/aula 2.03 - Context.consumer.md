# Context.consumer

Crie o contexto de usuário `UsuarioContext` dentro de `src/common/context/Usuario.js` (criando as pastas e arquivos necessários). Use o `Context.Provider` no arquivo de rotas com `nome`, `setNome` e `saldo`, `SetSaldo` (dois useStates) sendo enviados via a prop `value` do Provider e consuma esse contexto com `Context.Consumer` no componente de Login.



## Solução

No arquivo `src/common/context/Usuario.js`:

```
  import { createContext } from ‘react’;

  export const UsuarioContext = createContext();
```

No arquivo `src/routes.js`:

```
  import { UsuarioContext } from ‘common/context/Usuario’;
  ...   function Router(){
   const [nome, setNome] = useState(“”);
    const [saldo, setSaldo] = useState(0);
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path=”/”>
          <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }} >
            <Login  />
          </UsuarioContext.Provider/>
        </Route>        </Switch>
        ...
      </BrowserRouter>
    )
 }
```

No arquivo `src/pages/Login/index.js`:

```
  import { UsuarioContext } from ‘common/context/Usuario’;
  function Login(){
    ...
    return (
      <UsuarioContext.Consumer>
        {({nome, setNome, saldo, setSaldo}) => (
        <>
          ...
        </>         )}      </UsuarioContext.Consumer>
    )
  }
```

Com esse código estamos conseguindo criar, prover e consumir o contexto de usuário para o componente `Login`. Porém esse código tem dois “problemas”, sendo eles:

- Os estados de nome e saldo continuam dentro de `src/routes.js`, deixando a responsabilidade desses estados no nosso componente de rotas, sendo que o papel dele é apenas de gerenciar as rotas da nossa aplicação.
- O `UsuarioContext.Consumer` é funcional mas era como se consumia contextos com `class components`, e hoje temos formas mais elegantes de consumir um contexto.

O segundo não é necessáriamente um problema, mas imagina se você tivesse três contexto no seu componente e precisasse do Consumer para consumir os 3? Ficaria algo mais ou menos assim:

```
  function MeuComponente() {
    return (
     <ContextoUm.Consumer>
        {(variabelUm) => (
         <ContextoDois.Consumer>
            {(variavelDois) => (
              <ContextoTres.Consumer>
                 {(variavelTres) => (
                   <>
                     ...
                   </>                 )}              </ContextoTres.Consumer>
            )}
          </ContextoDois.Consumer>       )}      </ContextoUm.Consumer>
     )
  }
```

O código funciona, porém concorda comigo que ele está bem difícil de entender? Depois da versão 16.8 do React, os hooks foram criados e isso facilitou muitas coisas, e com o ContextAPI não foi diferente. Foi criado o `useContext`, que nos facilita muito a utilizar contextos sem ficar muito verboso, o código acima ficaria assim:

```
function MeuComponente() {
 const variavel1 = useContext(ContextoUm);
  const variavel2 = useContext(ContextoDois);
  const variavel3 = useContext(ContextoTres);
  return (
    <>
      ...
    </>
  )
}
```

Muito mais fácil de ler, certo? E é isso que vamos aprender no próximo vídeo!
