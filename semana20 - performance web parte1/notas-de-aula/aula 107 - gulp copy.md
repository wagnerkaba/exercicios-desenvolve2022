# 07 Projeto: gulp copy

Após fazer a minificação, você tentou abrir o arquivo `dist/index.html` no navegador?

Se tentar agora vai ver que estão faltando coisas. Em especial, as imagens e fontes do projeto. Isso porque o processo de minificação só copiou o JS, CSS e HTML. Para copiar o restante do projeto precisamos rodar também `gulp copy`.

Ou se preferir, em execuções futuras, fazer tudo de uma vez com `gulp copy minify`.

Faça isso e teste agora abrir a página gerada na pasta `dist` no navegador. Tudo continua funcionando?

O projeto é funcionalmente idêntico ao anterior, mas muito menor após a minificação.

Quanto ecominizamos, aliás?
