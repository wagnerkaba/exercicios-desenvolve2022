# Style inheritance

We can inherit the styling of a styled component by simply passing it to the `styled` function.

```
import styled from "styled-components"
const Div = styled.div` 
    padding: 10px;
    color: palevioletred; `
```

Here we have a `Div` styled component. Let’s create another div element to inherit the styling from this component.

```
const InheritedDiv = styled(Div)` 
    border: 1px solid palevioletred; `
```

This `InheritedDiv` will have the styling of the `Div` component as well as its own styling.

```
padding: 10px;
color: palevioletred;
border: 1px solid palevioletred;
```


## Exemplo

No arquivo [index.jsx](../projeto/src/Components/Conta/index.jsx):

```
    const IconeMargin = styled(Icone)`
    margin-top: 2px;
    `;
```



