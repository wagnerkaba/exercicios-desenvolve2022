# React useEffect Hooks

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

Quando a função [busca](../petshop/src/api/api.js) é chamada, o efeito colateral é renderizar um componente. Para isso, temos que usar o `useEffect` (conforme aula 04.05).



# useEffect syntax

`useEffect()` hook accepts 2 arguments:

``` 
useEffect(callback[, dependencies]);
```



- `callback` is the function containing the side-effect logic. `callback` is executed right after changes were being pushed to DOM.
- `dependencies` is an optional array of dependencies. `useEffect()` executes `callback` only if the dependencies have changed between renderings.

*Put your side-effect logic into the `callback` function, then use the `dependencies` argument to control when you want the side-effect to run. That's the sole purpose of `useEffect()`.*

Para maiores explicações, vide [A Simple Explanation of React.useEffect()](A%20Simple%20Explanation%20of%20React.useEffect().pdf): 
> https://dmitripavlutin.com/react-useeffect-explanation/