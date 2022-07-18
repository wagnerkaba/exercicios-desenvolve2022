# Blacklist para tokens JWT

[00:00] Então, conseguimos criar Tokens que não duram para sempre, mas que ainda são válidos durante os 15 minutos de tempo de vida deles. Isso não é o suficiente para fazer um sistema de *logout*. O que queremos? Queremos que quando o usuário fizer uma requisição de *logout* para nosso servidor, consigamos quase que instantaneamente invalidar esse Token.

[00:26] Dessa forma quando o usuário fizer uma próxima requisição, se ele usar o mesmo Token, vamos rejeitar, mesmo que esteja dentro dos 15 minutos de vida do Token. Para fazer isso, vamos ter que guardar alguma informação no nosso servidor sobre esse Token, para saber se ele foi invalidado por *logout* ou não.

[00:48] Como podemos fazer isso? Podemos fazer isso por meio de uma lista de Tokens inválidos por *logout*. Essa lista vai funcionar da seguinte forma: quando o usuário faz uma requisição de *logout* no nosso servidor, ele vai enviar um Token, vamos pegar esse Token e colocar dentro dessa lista. Dessa forma, as próximas requisições que ele fizer, quando ele enviar um Token, vamos pegar esse Token e verificar se ele está dentro da lista ou não.

[01:20] Se estiver dentro da lista invalidamos o Token e rejeitamos a requisição, porque ele já havia sido invalidado em uma requisição anterior. Dessa forma, em todas as requisições dos nossos clientes, os Tokens vão passar por essa verificação. Se o Token enviado está dentro dessa lista de Tokens inválidos por *logout* ou não.

[01:45] Assim sempre terá mais uma camada de segurança, e verificação desses Tokens. Vocês podem pensar que se só adicionamos Tokens nessa lista, ela pode acabar crescendo infinitamente. Então precisamos criar um critério para remover esses Tokens da lista. E um critério válido é pensar que uma hora ou outra esse Tokens vão expirar, e quando eles expirarem, eles já vão ser rejeitados pelo jwt.verify.

[02:20] Então não precisamos tratá-los agora. Quando eles expiraram, podemos só removê-los da lista, e essa lista vai virar um conjunto de Tokens que foram invalidados por *logout*, mas que ainda estão dentro dos 15 minutos de vida deles. Vamos chamar essa lista de Blacklist, que vai ser nossa lista negra de Tokens.

[02:45] Agora entendemos como funciona, mas que estruturas de dados vamos usar para implementar isso. Precisamos de uma estrutura de dados eficiente para fazer esse tipo de consulta, uma opção para esse tipo de aplicação é usar “redis”. Essa é uma base de dados chave/valor em memória, muito famosa por ser super rápida.


