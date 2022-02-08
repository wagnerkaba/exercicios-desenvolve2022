# Exemplos de abreviações EMMET utilizadas no projeto Apeperia

## Exemplo 1

Abreviação EMMET

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