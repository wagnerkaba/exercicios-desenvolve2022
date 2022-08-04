

# Modelo de verificação de e-mails

Neste curso, foi apresentado o seguinte modelo de verificação de e-mails:

- Uma pessoa se registra no Blog do Código;
- Por isso, um *e-mail de verificação* deverá ser mandado para o *endereço de e-mail cadastrado*;
- Em seguida, se o *servidor* receber uma requisição da *URL enviada pelo e-mail* então podemos confiar que o endereço de e-mail existe e a pessoa é dona dele.

Como esse sistema consegue garantir que o e-mail cadastrado seja confiável?



### Esse sistema consegue garantir a confiabilidade do e-mail a não ser que a URL gerada seja fácil de adivinhar.

Correto! Com uma URL fácil de chutar, uma pessoa que estivesse fraudando seu endereço de e-mail conseguiria adivinhar a rota onde deverá fazer uma requisição. Dessa forma, o sistema não poderia garantir a confiabilidade do e-mail.



### Para garantir que a URL não seja lida no transporte do e-mail, esse sistema precisa usar algum tipo de [criptografia](https://support.google.com/transparencyreport/answer/7381230?hl=pt) no envio.

Correto! Em produção, é extremamente necessário o uso de [criptografia no envio de e-mails](https://support.google.com/transparencyreport/answer/7381230?hl=pt). Caso contrário, qualquer atacante poderia ler as mensagens em texto puro, que estariam circulando na rede. O protocolo mais comum para isso é o [*Transport Layer Security*](https://pt.wikipedia.org/wiki/Transport_Layer_Security) (TLS).

Não falamos muito sobre isso até agora no curso, mas é uma boa oportunidade para ficar de olho nesses diversos conceitos.



### Com esse sistema, só a pessoa dona do e-mail conseguiria receber a URL gerada dinamicamente. Dessa forma, se uma requisição for feita para esse endereço podemos confiar (dentro dos limites do método) que um atacante não forjou o e-mail no cadastro.

Correto! Se recebemos uma requisição para a URL gerada, significa que a pessoa que se cadastrou no Blog do Código é dona do e-mail e recebeu o endereço. Mesmo assim, até um sistema de verificação de e-mails perfeito tem limites. Se um atacante tem acesso ao e-mail da pessoa (através de uma senha insegura, por exemplo), esse método de verificação de e-mails se torna ineficaz.
