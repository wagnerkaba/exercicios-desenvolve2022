# 07 Responsabilidade única

No vídeo anterior, aprendemos a criar hooks customizados para manter a responsabilidade de manutenção do contexto fora dos componentes, dando a eles apenas a responsabilidade de renderizá-los. Com isso, utilizamos um conceito muito interessante de um dos princípios mais conhecidos da programação chamado SOLID, sendo o S significando *Single Responsibility Principle* (Princípio da Responsabilidade Única).

Mas, Luiz, o que isso faz? O código já não funcionava antes? Realmente funcionava, mas imagina se você precisar, daqui 2 anos, fazer manutenção de um código seu ou pior, mexer em um código de outra pessoa que manteve um componente com mais de 10 responsabilidades… Será muito difícil entender qual é a responsabilidade do componente, e provavelmente as responsabilidades vão ficar uma em cima da outra, o que torna muito difícil de ler, interpretar e fazer manutenção. O princípio da responsabilidade única deixa o código menor (o componente, no caso) e conseguimos entender com mais facilidade (lembrando de sempre deixar o nome da função de fácil entendimento) e sendo mais fácil de manutenção, pois se precisamos remover a funcionalidade de adicionar produto, por exemplo, podemos removê-lo apenas excluindo uma linha e sem precisar entender tudo que o código faz pra não quebrar nada.

Sobre o hook, ele não é a única forma de externalizar uma funcionalidade, pois você pode, por exemplo:

- Criar uma função utilitária (que não é um hook)

```
  function adicionarProduto(){
    ...
  } 
```

Dessa forma, você consegue externalizar a lógica de adicionar produto, porém, como a função não é um hook, você não consegue utilizar nada do React aqui dentro, então você não poderá utilizar o `setCarrinho` por exemplo, apenas retornar o array com o produto adicionado.

- Colocar no próprio Provider!

```
  function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    function adicionarProduto() {
      ...
    }
   return (
     <CarrinhoContext.Provider
        value={{
          carrinho,
          setCarrinho,
          adicionarProduto          }}
       >
          {children}
      </CarrinhoContext.Provider>
   )
 }
```

Com isso seria só colocar na prop `value` a função que você criou. Isso até pode economizar algumas linhas de código, porém, como citado acima, o Provider vai ter a responsabilidade de prover o contexto e de fazer manutenção no contexto! Não necessariamente colocar as funções no Provider vai estar sempre errado, pois nem sempre o nosso contexto será gigantesco, porém se o contexto começar a ficar muito complexo, você promete que vai criar um hook para poder separar a responsabilidade, beleza? ;)
