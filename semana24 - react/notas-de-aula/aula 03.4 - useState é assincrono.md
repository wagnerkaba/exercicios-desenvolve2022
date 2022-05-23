# 04 Código Assincrono

Dado o código abaixo:

```
function Pessoa(){
    const [idade, setIdade] = useState(25);

    function aniversario(){
        setIdade(idade+1);
        console.log(idade);        }

    return(<>....</>);

}
```

Qual o valor esperado de vermos no console ao chamarmos a função `aniversario`?

## Resposta

Veremos o valor **25**, já que a função `setIdade` é assíncrona e o componente não irá esperar a execução dela antes de ir para a próxima linha.  

Ou seja,  o valor esperado é o valor da variável `idade` antes dela ser alterada.



# React useState hook is asynchronous!

I would like to share something I recently got to know, so the background is, in my project I was using **useState** value right after updating it and I was getting previous value(not updated value) and to my surprise I found out that **useState hook is asynchronous**

## what it is?

Basically, the thing is you don't get update value right after updating *state*.

## What is the work around/solution?

We can use the **useEffect** hook and add our state in the dependence array, and we will always get the updated value.

## Show me the code 🤩🤩🤩

```
import { useState } from "react";

export default function CountWithoutEffect() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);
    const handleCount = () => {
        setCount(count + 1);
        setDoubleCount(count * 2); // This will not use the latest value of count
    };
    return (
        <div className="App">
            <div>
                <h2>Count Without useEffect</h2>
                <h3>Count: {count}</h3>
                <h3>Count * 2: {doubleCount}</h3>
                <button onClick={handleCount}>Count++</button>
            </div>
        </div>
    );
}
```

- Here we have very simple and stright forward component.
- On button click we are updating two states and one state is dependent on other state.
- The *doubleCount* will be one step behind *count*.
- Check out the [Live Demo](https://use-state-is-async.vercel.app/)

## Solving this issue 🧐🧐🧐

This can be easily solve with *useEffect* hook, let's see the code  

```
import { useState, useEffect } from "react";

export default function CountWithEffect() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);
    const handleCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setDoubleCount(count * 2); // This will always use latest value of count
    }, [count]);

    return (
        <div>
            <h2>Count with useEffect</h2>
            <h3>Count: {count}</h3>
            <h3>Count * 2: {doubleCount}</h3>
            <button onClick={handleCount}>Count++</button>
        </div>
    );
}
```

- Here, when ever count changes we are updating **doubleCount**
- Check out the [live Demo](https://use-state-is-async.vercel.app/)

Closing here 👋👋👋
