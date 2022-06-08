Você está trabalhando em uma aplicação com rotas e precisa compartilhar estados entre elas. Como deve ser feito esse compartilhamento?

Assinale a alternativa correta:



**a) Coloque o estado no arquivo src/routes.js e compartilhe os estados via props para os componentes que utilizam esse estado, evitando que componentes renderizem desnecessariamente.**

Errado. Dessa forma, rotas que não utilizam o estado terão esse estado mesmo sem recebermos eles via props, causando problema de performance e de *Prop Drilling*.



**b) Coloque o estado no arquivo src/index.js e compartilhe os estados via props.**

Errado. Dessa forma, sempre que o estado mudar toda a nossa aplicação irá mudar, tendo problemas de performance e de *Prop Drilling*.



**c) Cria um contexto para armazenar e compartilhar os estados.**

Alternativa correta! Criando o contexto resolvemos o problema de *Prop Drilling* e provemos nossos estados para os componentes que realmente o utilizam!



**d) Coloque o estado no arquivo src/routes.js e compartilhe os estados via props para todos os componentes.**

Errado. Dessa forma, rotas que não utilizam terão esses estados mesmo sem recebermos eles via props, causando problema de performance e de *Prop Drilling*.


