# Formulário criado com REACT - PARTE 2

Formulário com validação de CPF criado com React e Material UI.

## Tópicos importantes
* [Conditional Rendering in React Applications](https://reactjs.org/docs/conditional-rendering.html)
* [useEffect()](https://reactjs.org/docs/hooks-effect.html) - O fato de useState ser assíncrono [pode ser contornado utilizando useEffect](./notas-de-aula/aula%2003.4%20-%20useState%20%C3%A9%20assincrono.md).
* [prop drilling](./notas-de-aula/aula%2004.4%20-%20prop%20drilling.md) - O padrão de passar uma `props` para outro componente que esteja mais em baixo na árvore de componentes é chamado de `prop drilling`.
* `useContext`- Vide [nota de aula 04.4](./notas-de-aula/aula%2004.4%20-%20prop%20drilling.md) para saber a razão de usar useContext. A pasta form-app-2 contém o sistema modificado para utilização de `useContext`
* [Context.Provider](https://reactjs.org/docs/context.html#contextprovider) - Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. Um exemplo de `Provider` está no arquivo [App.js](./form-app-2/src/App.js)
* [Custom Hooks](./notas-de-aula/aula%2005.4%20-%20Custom%20Hooks.md) - Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

## Tecnologias
* React
* [Material UI](https://mui.com/pt/)

## Setup

Para iniciar o servidor, entre na pasta "form-app" e digite:

``
npm start
``
