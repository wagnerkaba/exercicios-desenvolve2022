# 04 Validando a prioridade da mensagem

Nosso sistema conversa com um sistema de catalogo de produtos usando *SOAP*, abaixo podemos ver um exemplo de uma das mensagens:

```
<soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope"                soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

<soap:Body xmlns:m="http://www.caelum.com.br/produto">
  <m:GetStock>
    <p1> ... </p1>
  </m:GetStock>
</soap:Body>

</soap:Envelope>
```

Essas mensagens serão lidas por uma fila de mensagens que irá ordená-las pela tag de prioridade (`p1`, `p2`, `p3`, etc). Precisamos criar um filtro que valide essa tag de prioridade e uma das coisas que esse filtro precisará verificar é se a tag que abre é a mesma que está sendo fechada, evitando situações como: `<p1> ... </p3>`.

As prioridades variam de 1 (menor prioridade) até 9 (maior prioridade). Qual expressão regular podemos utilizar para garantir o fechamento de uma tag de qualquer prioridade?



## Resposta: <(p[1-9])>.*<\/\1>

- No primeiro grupo há uma tag de prioridade que pode ir de 1 até 9, por isso: `<(p[1-9])>`
- Podemos ter qualquer item no meio: `.*`
- E por último, usamos o *BackReference* para garantir que a tag será fechada com a mesma tag usada na abertura, escapando a barra de fechamento da tag: `<\/\1>`. Ou seja, se a tag foi aberta com `<p1>` deve ser fechada com `</p1>`. Por outro lado, se a tag foi aberta com `<p2>` deve ser fechada com `</p2>`. E assim por diante.
