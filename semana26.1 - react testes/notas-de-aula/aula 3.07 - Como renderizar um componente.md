

# 07 Como renderizar um componente?

Quando vamos escrever um teste de um componente React, precisamos de alguma forma, criá-los no ambiente de testes para que seja possível acessar seus elementos e valores na execução dos testes.

Com o React Testing Library temos uma forma definida de fazer isso, usando:



## Resposta

Render e screen

```
render(<Conta saldo={1000} />)
screen.getByText(''R$1000,00"’)
```

O `render` é uma função que o React Testing Library nos fornece para renderizar o componente como um elemento do DOM. Por padrão, esse elemento é renderizado dentro de um elemento raíz, chamado container. Já para acessar um componente, a biblioteca nos fornece o objeto `screen`, que possui todas as possíveis queries suportadas para buscar elementos no DOM.
