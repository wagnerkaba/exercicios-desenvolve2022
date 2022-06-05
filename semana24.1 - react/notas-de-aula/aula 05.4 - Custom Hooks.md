
# 04 Lógica duplicada

Vimos que muito da lógica entre os componentes do formulário estava duplicada e precisávamos fazer uma refatoração para extrair essa lógica. Para isso criamos um hook customizado dentro do nosso projeto. Por que precisamos de um hook e não podemos usar uma função JS padrão para isso?


## Resposta

Precisamos de um hook customizado porque precisávamos utilizar o `useState` e isso só é possível dentro de componentes React ou hooks customizados.

 Se não fizéssemos isso a abstração criada teria que receber tudo a partir de parâmetros e o código ficaria mais complicado do que usando essa abordagem.