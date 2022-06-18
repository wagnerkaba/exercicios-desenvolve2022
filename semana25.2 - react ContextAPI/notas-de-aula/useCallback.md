# useCallback

No projeto "react-performance-2" existe o mesmo problema do "react-performance-1". Ou seja, "Maria" e "José" estavam sendo renderizados sem necessidade.

Isso acontece porque o arquivo [ListaPessoas](../extra/react-performance-2/src/ListaPessoas/index.js) estava enviando a função "deletarPessoas" como props para [Pessoa](../extra/react-performance-2/src/ListaPessoas/Pessoa/index.js). E cada vez que um componente é renderizado, suas funções são recriadas:

> This is because of something called "referential equality". Every time a component re-renders, its functions get recreated.

Fonte: [w3schools](https://www.w3schools.com/react/react_usecallback.asp)

Para solucionar este problema, usamos `useCallback`.



Código anterior em [ListaPessoas](../extra/react-performance-2/src/ListaPessoas/index.js):

```
    const deletarPessoa = (id)=>{
        setPessoas(ListaAnterior => ListaAnterior.filter((pessoa, indexAnterior) => indexAnterior !== id));
    };
```

Código alterado para usar `useCallback`:

```
    const deletarPessoa = useCallback((id)=>{
        setPessoas(ListaAnterior => ListaAnterior.filter((pessoa, indexAnterior) => indexAnterior !== id));
    },[]);
```

## useMemo

The `useCallback` and `useMemo` Hooks are similar. The main difference is that `useMemo` returns a memoized value and `useCallback` returns a memoized function. Para saber mais sobre useMemo: [Aula 6.07](../notas-de-aula/aula%206.07%20-%20useMemo.md)