# Redirecionamento de links

**Porque o redirecionamento de links pode ser uma vulnerabilidade em nossa aplicação?**

Ela pode vir a ser uma vulnerabilidade quando qualquer usuário pode alterar o redirecionamento para uma página de seu controle.

Por vezes o desenvolvedor pode colocar o redirecionamento na url e não se atentar pelo fato de que qualquer usuário pode alterar o redirecionamento. Dessa forma, um usuário mal intencionado pode alterar esse redirecionamento para uma página de sua preferência e começar a passar esse link para outros usuários. Uma vez que esses links são recebidos, a vítima muito provavelmente vai acreditar que é o link do site original, porque o início de fato é do site original e ao executar alguma ação no link, ela é redirecionada para a página falsa onde o usuário mal intencionado poderá roubar informações da vítima.

