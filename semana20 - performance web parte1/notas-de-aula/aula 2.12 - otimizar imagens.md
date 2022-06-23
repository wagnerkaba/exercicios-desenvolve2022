# Otimizar imagens

Vamos passar por mais um ponto, quando usamos câmeras digitais, normalmente, salvamos as fotos em jpeg e jogamos em algum flickr ou abrimos no computador. Essa foto possui uma série de informações adicionais além dela mesma, por exemplo, o horário, o modelo da câmera, o tamanho da abertura da lente, a orientação se for tirada pelo celular e etc. Isso é bacana para organizarmos nossos álbuns digitais e esse tipo de informação é chamada de metadados. Esses metadados são necessários em alguns momentos, mas totalmente desnecessários quando estamos falando de web performance. Pois, o que queremos é simplesmente mostrar a foto no site, não queremos que ninguém saiba essas informações adicionais e se deixarmos elas embutidas na imagem do site o que acontece é que ao acessar o site isso é algo a mais para ser baixado e algo a mais para pesar.

Vários dos formatos de arquivos possuem dentro do arquivo informações que são irrelevantes para desenhar na tela, então, é quase como se baixassemos ao em vez de um png, dois, o segundo sendo a miniatura do primeiro.

Então, o que podemos fazer?

Podemos otimizar essas imagens e existem vários sites na web que fazem esse tipo de otimização.



# 12 Projeto: otimizar imagens

Temos alguns arquivos PNG e JPG no projeto que não foram otimizados na hora de exportar. Podemos otimizá-los com alguma ferramenta online simples ou de forma automatizada. Escolha algumas das opções.

## Opção 1: Comprima online com Kraken.io e svgo

Abra o [Kraken](https://kraken.io/web-interface) e selecione otimizações **Lossless**.

Arraste os arquivos PNG e JPG do projeto pra lá e aguarde a compressão. Compare os resultados. É possível obter até 60% de melhoria em certos arquivos.

Para os SVG, use o [svgomg](https://jakearchibald.github.io/svgomg/) online. Mesma coisa: jogue seus ícones SVG lá e faça a otimização.

**Baixe as versões otimizadas e substitua no projeto.**

Outras ferramentas online úteis são o [tinypng](http://tinypng.com/) e o [jpegmini](http://jpegmini.com/), que fazem outros tipos de otimização e podem dar resultados melhores em certas imagens.

## Opção 2: Automatize com Gulp Imagemin

Não é prático fazer otimizações online pra cada imagem que tivermos. O melhor talvez seja automatizar esse processo com alguma ferramenta.

O gulp é excelente pra isso e possui o plugin *gulp-imagemin*.

Vá no terminal e rode:

```
gulp imagemin
```

Ele otimiza JPGs, PNGs e SVGs de forma automática. E ainda te fala o quanto você economizou no total.

## Opção 3: Automação manual

As ferramentas usadas no kraken e no imagemin estão disponíveis para você rodar localmente também. Pode ser útil se você quiser otimizar na linha de comando com algum script próprio, sem usar gulp ou oitra ferramenta pronta.

Procure como instalar no seu sistema operacional o `jpegtran`, o `pngcrush` e o `svgo`. Aí poderá rodar comandos como:

```
jpegtran -progressive -optimize site/assets/img/aluno-adriano.jpeg > dist/assets/img/aluno-adriano.jpegpngcrush site/assets/img/icon-diferencial-1.png dist/assets/img/icon-diferencial-1.png
svgo site/assets/img/categoria-business.svg dist/assets/img/categoria-business.svg
```

Rode para todas as imagens para otimizar o projeto todo.

---

Independente de como fez as otimizações, **qual o impacto final que você obteve? Quanto melhorou o projeto?**

Minha opção preferida é o `gulp imagemin`. Rodando ele, obtive 37% de melhoria:

```
$ gulp imagemin
[16:05:07] Starting 'imagemin'...
[16:05:08] gulp-imagemin: Minified 53 images (saved 67.59 kB - 37.2%)
[16:05:08] Finished 'imagemin' after 1.47 s
```
