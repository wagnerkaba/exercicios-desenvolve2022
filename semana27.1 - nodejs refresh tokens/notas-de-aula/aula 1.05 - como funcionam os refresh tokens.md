

# Como funcionam os refresh tokens?



[00:00] Nós agora já sabemos que nós vamos precisar usar um segundo token para autenticação, mas como efetivamente ele vai ser usado? Para entender isso, vamos pensar numa situação que o usuário tem o *access token* expirado.

[00:15] O que ele vai querer fazer é acessar uma rota enviando ele para o servidor e o servidor vai devolver para o usuário falando que o *access token* está expirado, que ele vai precisar de um *access token* válido.

[00:27] É nesse momento que o *refresh token* entra em jogo, o usuário tendo *refresh token* válido, ele vai enviar isso para o servidor numa segunda rota, uma rota de atualização de token.

[00:39] O servidor vai ver, vai conferir se o *refresh token* está válido ou não, estando válido, vai devolver para o usuário dois novos tokens como na rota de *login*. Então o usuário vai conseguir ter um *access token* novo e realizar a requisição novamente.

[00:56] Por que eu também gero um novo *refresh token*, sendo que o anterior já era válido? Ainda estava dentro do tempo de expiração?

[01:05] Esse é um ponto muito importante, nesse esquema, os *refresh token* são de uso único, ou seja, sempre quando o usuário usa um *refresh token* para gerar dois novos tokens para atualizar o *access token* dele.

[01:18] O *refresh token* anterior, o que foi usado tem que ser invalidado, por isso que nós sempre temos que gerar um novo *refresh token* para substituir o antigo. Uma das vantagens dessa dinâmica é que ela permite a criação de um sistema de identificação de roubo de *refresh tokens*.

[01:34] Nós não vamos ver nesse curso, mas pode ser muito útil, dependendo da sua aplicação. Então é dessa forma que o *refresh token* vai funcionar dentro do nosso novo sistema de autenticação que nós vamos criar.

[01:49] É assim que o *refresh token* vai ser usado na nossa aplicação, mas como isso tudo é implementado? Como é a cara de um *refresh token*? A uma primeira vista, pode ser interessante implementar o *refresh token* como nós fizemos com o *access token*, como um token de JWT.

[02:07] Dessa forma, qualquer um vai conseguir ler o seu conteúdo e garantir a sua validade, sem ter que olhar no banco de dados. O problema é que um token JWT é valido durante todo o seu tempo de expiração.

[02:21] Então, se nós queremos invalidar ele antes disso, nós vamos ter que usar uma *blacklist*, só que o ‘’refresh token” é algo que no melhor dos casos vai estar sempre sendo invalidado dentro do seu tempo de expiração porque um *access token* tem um tempo de vida bem menor, em relação ao *refresh token*.

[02:41] E nós usamos um *refresh token* no momento que o *access token* expira e nós vamos gerar um novo *refresh token* e invalidar o antigo, ou seja, a cada 15 minutos, nós vamos estar gerando um novo par de tokens e invalidando o *refresh token* antigo, sempre que o *access token* expira.

[03:03] Como o *refresh token* pode ter um tempo de expiração bem grande na escala de dias, nós podemos ter potencialmente dezenas ou centenas de tokens por usuário, por dispositivo conectado e isso não é algo muito eficiente.

[03:20] Dessa forma, nós precisamos de uma nova solução e para resolver esse problema, nós podemos substituir a nossa *blacklist* que diz quais são os tokens inválidos por uma *whitelist*, que vai dizer quais são os tokens válidos, assim nós podemos consultar essa lista para saber quais são os tokens válidos dentro da nossa aplicação.

[03:42] Aliás, essa lista vai ser a única fonte de verdade sobre quais tokens são válidos e quais não são, mas então como nós já vamos ter que olhar a nossa lista de qualquer forma, nós não precisamos passar o *payload* a todo o momento pela rede e deixar ele na responsabilidade do usuário.

[04:04] Nós podemos pegar e também guardar o *payload* nessa lista usando o *refresh token* como chave, assim nós deixamos o *payload* apenas guardado dentro do nosso servidor.

[04:15] E como o *payload* vai estar seguro dentro do nosso servidor, nós não vamos precisar de uma assinatura para comprovar que os dados que o usuário tem em mãos são verdadeiros e nós não vamos precisar de cabeçalhos para ajudar nessa segurança.

[04:32] Então nós podemos substituir o *refresh token* que nós tínhamos construído como um Json do token para uma *string* aleatória, o *bytes* aleatório é difícil de [ininteligível] e que vai servir única e exclusivamente para ser a chave dessa lista, para nós podermos recuperar o *payload* e descobrir sobre qual usuário que essa aquisição está sendo feita.

[04:53] Então é dessa forma que nós vamos construir o nosso *refresh token* e nós conseguimos ver que o *refresh token* é bem diferente do *access token*, que está implementado como Json token porque um Json [ininteligível] qualquer pessoa pode pegar, decodificar ele [ininteligível] e ler o conteúdo dele que está em Json.

[05:17] Então qualquer pessoa pode pegar, ler o *payload*, entender o que está por dentro desse token, mas isso já não acontece com o *refresh token* porque ele apenas é uma senha aleatória, ele só faz sentido dentro do nosso servidor.

[05:32] E essa é a grande característica desse token e é por isso que ele é chamado de **Token Opaco** ou **Opaque Token** porque ele é um token que só faz sentido dentro do servidor e qualquer outro serviço, ele não vai ter nenhum significado.

> **Token Opaco** (Opaque Tokens) - *The opaque token is a random unique string of characters issued by the authorization server. It is one of the possible formats that access tokens or refresh tokens can take. The opaque token does not pass any identifiable information on the user so it’s impossible for the resource server to make any authorization decisions based on the opaque token itself. The opaque contains an identifier to information stored on the authorization server. To validate the token and retrieve the information on the token and the user, the resource server calls the authorization server and requests the token introspection.*

[05:49] Então é por isso que na nossa aplicação, nós vamos ter dois tipos de tokens, *token JWT e tokens opacos*. Outra coisa que é importante nós falarmos são sobre dois termos que nós usamos nesse curso e no curso anterior, que é *blacklist e whitelist*.

[06:08] Esses dois termos são termos antigos e o mesmo que a sentença da sua verdadeira origem, elas ainda colaboram para a manutenção daquele símbolo de que a dicotomia preto e branco está relacionada com ruim e bom.

[06:21] E como programadoras e programadores exercem esse papel de grande impacto na sociedade é importante nós tentarmos quebrar esses costumes ruins e numa tentativa de quebrar esses costumes ruins, nós vamos substituir os termos *blacklist* e *whitelist* por *blocklist* que é lista de bloqueio no inglês e *allowlist*, que é lista de permissões.

[06:46] Dessa forma, além de ajudar a quebrar esse símbolo ruim, nós ainda vamos estar usando nomes potencialmente mais significativos, principalmente para quem não conhecia os termos anteriores.

[06:59] Dessa forma, vamos ver como que nós conseguimos implementar *refresh token* usando uma *allowlist*.
