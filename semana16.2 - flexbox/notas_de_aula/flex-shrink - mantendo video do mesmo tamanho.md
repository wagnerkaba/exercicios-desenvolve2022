# 06 Mantendo o vídeo do mesmo tamanho

Imagine que no nosso site temos um `video` do Youtube, imagine que mesmo se o usuário diminuir a tela, o nosso video não deva diminuir de tamanho. Como podemos fazer isso?

Imagine que nosso vídeo é um `flex item` e que o código HTML é o que segue:

```
<section class="videoSobre">
<div class="container">
    <iframe class="videoSobre-video" width="560" height="315" src="https://www.youtube.com/embed/bIl"></iframe>

    <div class="videoSobre-sobre">
      <h2 class="videoSobre-sobre-title">Vantagens do Alurinha</h2>
      <ul class="videoSobre-sobre-list">
        <li class="videoSobre-sobre-item">Estude onde quiser</li>
        <li class="videoSobre-sobre-item">Novos cursos todos os meses</li>
        <li class="videoSobre-sobre-item">Cursos compatíveis com o mercado</li>
      </ul>
      <button class="videoSobre-button">Cadastre-se já</button>
    </div>
  </div>
</section>
```

## Resposta

Podemos simplesmente colocar a propriedade `flex-shrink` no elemento, por exemplo:

```
.videoSobre-video {
  flex-shrink: 0
}
```
