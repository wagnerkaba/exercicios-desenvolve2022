# Criando o contexto de Carrinho

Crie o contexto de carrinho `CarrinhoContext` e um componente para prover o contexto `CarrinhoProvider` dentro de `src/common/context/Carrinho.js`. Dentro de `CarrinhoProvider`, coloque um estado chamado `carrinho` com o valor inicial de um array vazio. Coloque o componente `CarrinhoProvider` no arquivo `src/routes.js` acima do componente `Route` com o `path="/feira"` e consuma esse contexto com `useContext` no componente de Feira.



No arquivo `src/common/context/Carrinho.js`:

```
  import { createContext } from ‘react’;

  export const CarrinhoContext = createContext();

  export const CarrinhoProvider({ children }) {
   const [carrinho, setCarrinho] = useState([])
    return (
      <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
        {children}
      </CarrinhoContext.Provider>
    )
  }
```

No arquivo `src/routes.js`:

```
  import { CarrinhoContext } from ‘common/context/Carrinho;
  ...   function Router(){
    return (
      <BrowserRouter>
        ...
        <Switch>
        <Route path=”/carrinho”>
          <CarrinhoProvider>
            <Feira  />
          </CarrinhoProvider>        </Route>
        </Switch>        ...      </BrowserRouter>
    )
 }
```

No arquivo `src/components/Produto/index.js`:

```
  import { CarrinhoContext } from ‘common/context/Carrinho’;

  function Produto(){
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    …
  }
```

Agora, diferente da Aula 2, temos um código muito mais limpo! Com o arquivo `src/routes.js` sem ter nenhuma responsabilidade de manter nenhum estado por causa do componente CarrinhoProvider e o contexto sendo consumido via useContext!
