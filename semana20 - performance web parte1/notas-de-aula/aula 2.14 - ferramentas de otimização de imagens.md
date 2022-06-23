# 14 Para saber mais: ferramentas de otimização de imagens

Nas aulas eu mostrei algumas ferramentas simplificadas para otimizar imagens. Mas existem várias outras mais hardcore para quem quiser elevar seu nível nerd em otimização de imagens.

Relembrando algumas das online que mostrei: [kraken](https://kraken.io/web-interface), [tinypng](https://tinypng.com/), [jpegmini](http://www.jpegmini.com/) e [svgomg](https://jakearchibald.github.io/svgomg/).

Também falei de versões Desktop de duas ferramentas famosas: [ImageOptim](https://imageoptim.com/pt-br.html) (Mac) e [RIOT](http://luci.criosweb.ro/riot/) (Windows).

Mas em linha de comando **um mundo de possibilidades se abre**. Algumas que acho bem promissoras:

- [mozjpeg](https://github.com/mozilla/mozjpeg) - Recompressor de JPEG feito pela Mozilla que gera arquivos bem menores e com melhor qualidade, ainda mantendo compatibilidade com o JPEG ([mais aqui](http://calendar.perfplanet.com/2014/mozjpeg-3-0/) e [versão online aqui](https://imageoptim.com/mozjpeg)).

- [pngnq](https://sourceforge.net/projects/pngnqs9/) / [pngquant](https://pngquant.org/) - Mudam um PNG pra PNG8 com palheta fixa de 256 cores. É uma compressão lossy com *excelentes* resultados em desenhos menos complexos (como ícones). Tem uma GUI excelente chamada [ImageAlpha](https://pngmini.com/) (Mac).

E indo além de apenas otimizar as imagens:

- [ZorroSVG](http://quasimondo.com/ZorroSVG/) - Permite criar "JPEGs com transparência". Muita gente usa foto em PNG por causa da transparência mas isso é **péssimo** pra performance. O zorro usa filtros SVG pra separar a layer de transparência em uma mask separada. Na prática, JPEG com transparência.
