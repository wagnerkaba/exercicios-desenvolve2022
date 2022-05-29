# React useEffect Hooks

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

Quando a função [busca](../petshop/src/api/api.js) é chamada, o efeito colateral é renderizar um componente. Para isso, temos que usar o `useEffect` (conforme aula 04.05).