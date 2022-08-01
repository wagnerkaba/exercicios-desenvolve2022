# Desvantagens da rota de logout

Num contexto de sessões, é esperado existir uma operação de logout em conjunto com a de login. Entretanto, ao utilizar Json Web Tokens, é necessário criar uma *blocklist* para permitir essa operação e fazer consultas nessa base a cada uso do token.

Por isso, num sistema com muitos acessos, essa consulta pode sobrecarregar o servidor. Assim, pode ser interessante remover essa operação, eliminando a necessidade de consultar uma base a cada requisição, mesmo que seja em memória como o Redis.

Além disso, é possível remover essa rota e ainda simular uma operação de logout através da plataforma que consumiria a API. Por exemplo, um aplicativo mobile poderia guardar o token JWT no momento de login e, quando a pessoa executasse a operação de logout, esse token seria apagado da memória. Com isso, uma pessoa que possuísse esse token ainda poderia fazer requisições com ele mas quem estivesse usando o aplicativo da forma usual teria a ilusão de que o token foi invalidado. Ainda, o tempo de expiração do token deve ser diminuído para dificultar ataques.

Fonte: [Curso de Node.js: Refresh Tokens e confirmação de cadastro](https://cursos.alura.com.br/course/nodejs-refresh-tokens-confirmacao-cadastro/task/80240)


