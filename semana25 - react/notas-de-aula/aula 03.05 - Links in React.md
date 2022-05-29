## Links in React

In regular apps without a library like React, links are created with an anchor tag, as shown below.

```html
<a href="https://pluralsight.com">Visit Pluralsight</a>
```

Bear in mind that this also works in React. This method of routing causes a full page refresh, when in reality the only thing that changed on the new route might be just an image and some text. In some cases, a full page refresh is useful, but in most cases, it's not needed. React is a component-oriented library and implements a neat algorithm by keeping track of your elements as a tree and figuring out which components need re-rendering. Libraries such as React Router take advantage of this to help your app render components that need re-rendering based on a specified route. Very efficient, isn't it?

In short, if your app uses the same header and footer for all pages, you can ensure that only the body of your pages re-render while the header and footer remain intact.

# Utilizando Links no Blog do Petshop

No arquivo [Cabecalho.jsx](../petshop/src/components/Cabecalho.jsx) verifique que foram utilizadas as tags `<Link>` em vez de `<a href>`. 



Se fosse utilizado as tags `<a href>` isso causaria um "full page reload", conforme demonstrou o professor na aula 03.04 (para verificar, abra o "developer tools" do navegador e na aba "network"  verifique os arquivos que são recebidos). 



Utilizando a tag `<Link>` não há carregamentos desnecessários de arquivos.

# Questão aula 03.05

Durante o desenvolvimento do projeto, nós tivemos que trocar a tag `<a href=””>` do HTML para a tag `<Link to=””>` que pertence ao React. Mas por que foi necessária a troca?

Escolha a alternativa que melhor justifica essa mudança:

## Resposta

Nós estamos montando uma SPA (Single Page Application) e por isso ela só deveria fazer uma requisição. Quando utilizamos a tag `<a href=””>` esse princípio é quebrado.

A tag `<Link to=””>` do React simula o comportamento da tag `<a href=””>` mas sem fazer novas requisições para o servidor.


