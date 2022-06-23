# 11 - Projeto: redimensionar imagens



*Vamos seguir as otimizações em cima do nosso projeto anterior, já minificado. Se preferir, você pode [baixar a versão do projeto como deveria estar no final do capítulo anterior](https://github.com/alura-cursos/performance-web/archive/792d0ff4a4847f23d40b023542c7efae96b01ba8.zip).*

A primeira otimização importante com relação às imagens é **usar o tamanho correto** dos arquivos. Temos fotos jpeg de 3 alunos nos depoimentos do site que são exibidos em 50x50. Mas os arquivos originais têm absurdos 1000x1000px. *Um imenso desperdício de bytes e de processamento do navegador.*

**Redimensione as 3 imagens jpeg na pasta `assets/img/` para terem 50x50px.**

Você pode fazer isso de várias formas. Pode abrir no Photoshop ou outro editor de imagens e simplesmente redimensionar.

Ou, se preferir a versão *hacker*, pode fazer na linha de comando em um comando bem simples. É bem útil se você tiver muitas imagens e quer redimensionar todas de uma vez rapidamente. Usando o [ImageMagick](http://www.imagemagick.org/) basta usar o comando `mogrify`. Por exemplo:

```
mogrify -resize 50x50 site/assets/img/aluno-*
```

Independente da forma que você fizer o redimensionamento, no final não esqueça de copiar as versões otimizadas também para a pasta `dist`. Usando o gulp, basta rodar `gulp copy`

**Após redimensionar as 3 fotos o quanto melhorou o site? Analise no DevTools o impacto dessa melhoria. Como foi?**

O impacto é absurdo. Os 3 arquivos originais têm mais de 400KB. No fim, ficam com 5KB. É muita economia.

*Sempre* use as imagens do tamanho correto na página.


