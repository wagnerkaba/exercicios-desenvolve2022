

# Simulando uma função

Na aula 4.07 foi criado o seguinte [teste](../projeto/src/conta/Conta.test.js):

```
    it('Chama a função de realizar transação, quando o botão é clicado', ()=>{

        // You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.
        const funcaoRealizarTransacao = jest.fn();
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao}/>);

        // simula um clique no botão 'Realizar operação'
        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransacao).toHaveBeenCalled();
    })

```

Este teste verifica se uma função mock é chamada quando o botão "Realizar operação" é clicado.

Usamos um mock de função para saber quando uma função foi chamada.

Um mock de função é uma função genérica criada pelo jest. Nosso intuito no teste é checar se ela está sendo executada pelo componente. Também podemos testar quantas vezes ela foi chamada utilizando expect(mockFuncao).toHaveBeenCalledTimes(quantidade)

No mock de função não estamos testando sua implementação. Como é uma função genérica e não a que escrevemos na aplicação, ela não tem as mesmas atribuições que definimos no código. Para testar a implementação de uma função devemos criar um teste unitário.

## Como verificar se o teste está funcionando?

Veja o seguinte código no arquivo [Conta.js](../projeto/src/conta/Conta.js)

```
    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span data-testid="saldo-conta" className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <form onSubmit={handleSubmit}>
```
Se `onSubmit={handleSubmit}` for retirado, a função mock não será chamada. E assim, o teste irá falhar.

```
    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span data-testid="saldo-conta" className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <form >
```