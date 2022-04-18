# Exemplos de abreviações EMMET utilizadas no projeto Apeperia

## Exemplo 1

Abreviação EMMET:

```
section.destaques.container>h2.destaques__titulo+(a*2>figure.destaques__painel>img.destaques__painel-imagem+figc.destaques__painel-texto)+a.destaques__botao
```

Código resultante:

```
<section class="destaques container">
    <h2 class="destaques__titulo"></h2>
    <a href="">
        <figure class="destaques__painel">
            <img src="" alt="" class="destaques__painel-imagem">
            <figcaption class="destaques__painel-texto"></figcaption>
        </figure>
    </a>
    <a href="">
        <figure class="destaques__painel">
            <img src="" alt="" class="destaques__painel-imagem">
            <figcaption class="destaques__painel-texto"></figcaption>
        </figure>
    </a><a href="" class="destaques__botao"></a>
</section>
```



## Exemplo 2

Abreviação EMMET:

```
footer.rodape.container>img.rodape__logo+(ul.rodape__social>li*3>a.rodape__midia)+nav>ul.rodape__navegacao>li*6.rodape__link>a
```

Código resultante:

```
        <footer class="rodape container">
            <img src="" alt="" class="rodape__logo">
            <ul class="rodape__social">
                <li><a href="" class="rodape__midia"></a></li>
                <li><a href="" class="rodape__midia"></a></li>
                <li><a href="" class="rodape__midia"></a></li>
            </ul>
            <nav>
                <ul class="rodape__navegacao">
                    <li class="rodape__link"><a href=""></a></li>
                    <li class="rodape__link"><a href=""></a></li>
                    <li class="rodape__link"><a href=""></a></li>
                    <li class="rodape__link"><a href=""></a></li>
                    <li class="rodape__link"><a href=""></a></li>
                    <li class="rodape__link"><a href=""></a></li>
                </ul>
            </nav>
        </footer>
```