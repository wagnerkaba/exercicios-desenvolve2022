# React.memo

If your component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

`React.memo` only checks for prop changes.

## Exemplo

Na pasta "extra", o projeto "react-performance-1" mostra o uso de "memo".

Veja o arquivo [Pessoa](../extra/react-performance-1/src/ListaPessoas/Pessoa/index.js).

```
function Pessoa({nome}){

    console.log(`Pessoa ${nome} renderizado`);
    return (
        <li>
            {nome}
        </li>
    )
}

export default Pessoa;
```

Ao executar o projeto "react-performance", o arquivo [ListaPessoas](../extra/react-performance-1/src/ListaPessoas/index.js) envia os nomes "Maria" e "João" para [Pessoa](../extra/react-performance-1/src/ListaPessoas/Pessoa/index.js). 



No console, é possível verificar quantas vezes esses nomes foram renderizados.



Ao clicar no botão "Adicionar Pessoa", ListaPessoas envia o nome "José" para Pessoa.



O react então renderiza "José". O problema é que "Maria" e "João" também são renderizados novamente.



Para evitar que "Maria" e "José" sejam renderizados novamente, utiliza-se o React.memo, conforme exemplo abaixo:



```
import { memo } from "react";

function Pessoa({nome}){

    console.log(`Pessoa ${nome} renderizado`);
    return (
        <li>
            {nome}
        </li>
    )
}

export default memo(Pessoa);
```
