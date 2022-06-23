# 06 Projeto: Minificação

Vamos minificar os arquivos do projeto, como vimos em aula.

Você pode fazer manualmente usando serviços online [como esse](http://refresh-sf.com/) ou mesmo instalando ferramentas locais como [uglifyjs](https://github.com/mishoo/UglifyJS2). Mas, na prática, o recomendado é **automatizar o processo de minificação**. Não queremos estragar nossos arquivos originais então vamos gerar novos arquivos minificados apenas antes de colocar em produção.

Eu sugiro a automação com gulp, por isso temos já um **gulpfile.js** preparado no projeto.

## Minificando com Gulp

Vá no terminal e entre na pasta do projeto: `cd performance-web`

Rode `gulp minify-js` para minificar todos os JavaScripts do projeto usando o uglifyjs de forma automática. O resultado é colocado em uma nova pasta `dist`.

Rode também `gulp minify-css` e `minify-html`. Observe os resultados na pasta `dist`.

(Você pode executar também apenas `gulp minify` que faz as 3 minificações de uma vez)

### Erro: primordials is not defined

Esse erro "primordials is not defined" acontece devido a uma incompatibilidade entre as versões do NodeJS e do Gulp.

Você pode realizar um downgrade do NodeJS, e para fazer isso pode utilizar uma ferramenta para gerenciar multiplas versões na sua maquina, o [NVM](https://github.com/nvm-sh/nvm).

**Se você não quiser fazer o downgrade do NodeJS**, não tem problema também! Vá até o arquivo `package.json` e adicione esse código:

```
"scripts": {
    "preinstall": "npx npm-force-resolutions"
  },
  "resolutions": {
    "graceful-fs": "^4.2.4"
  }
```

E então, na pasta "performance-web", rode o comando `npm install` novamente. Isso deve arrumar o problema, e você pode utilizar `gulp minify` novamente que o erro não voltará acontecer.

A ideia é economizar bytes removendo coisas desnecessárias para execução dos códigos.

Conseguiu rodar o gulp sem problemas? Observe a nova pasta dist e os arquivos JS, CSS e HTML minificados.

Se tiver problemas pra rodar, abra um tópico no fórum!

---

*Para saber mais sobre Gulp e como funciona o gulpfile, veja o [curso de Gulp do Alura](https://www.alura.com.br/curso-online-gulp).*

