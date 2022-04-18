### 

# EMMET CHEAT SHEET

EMMET é uma ferramenta para agilizar a escrita de códigos disponível no VS CODE.

Aqui estão alguns exemplos de uso do Emmet. Fonte: [Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### HTML

Digite `!`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```



### Child: >

nav>ul>li

```
<nav>
    <ul>
        <li></li>
    </ul>
</nav>
```



### Sibling: +

div+p+bq

```
<div></div>
<p></p>
<blockquote></blockquote>
```



### Climb-up: ^

div+div>p>span+em^bq

```
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```



div+div>p>span+em^^bq

```
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```



### Grouping: ()

div>(header>ul>li*2>a)+footer>p

```
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>

```



(div>dl>(dt+dd)*3)+footer>p

```
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```



### Multiplication: *

ul>li*5

```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```



### Item numbering: $

ul>li.item$*5

```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```
































