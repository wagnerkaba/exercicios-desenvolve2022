### createGlobalStyle

A helper function to generate a special StyledComponent that handles global styles. Normally, styled components are automatically scoped to a local CSS class and therefore isolated from other components. **In the case of createGlobalStyle, this limitation is removed and things like CSS resets or base stylesheets can be applied.**

### [Note regarding css @import and createGlobalStyle](https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle)

At this time we do not recommend using @import within cGS due to some issues with how browsers process @import via the CSSOM APIs. Instead it's best to place these in your core index.html file (generated or static) within a typical <style> tag.

OBS: Por este motivo, a fonte do Google está no arquivo [index.html](../projeto/public/index.html)



# 03 Reset CSS

Em praticamente toda aplicação que vamos criar é necessário sobrescrever as configurações de estilos do navegador. Dessa forma garantimos uma experiência padronizada em todos os navegadores onde as pessoas podem acessar nossa aplicação.

Dentro do **Styled Componenets** utilizamos o método `createGlobalStyle` para conseguirmos aplicar esse reset CSS. O que essa função nos retorna quando chamamos ela?

## Resposta

Recebemos como retorno um novo componente estilizado que não possui as restrições de escopo para o CSS que aplicamos nele.

Isso mesmo! Normalmente quando criamos um componente estilizado as regras de CSS que aplicamos nele estão guardadas dentro do escopo daquele componente, dessa forma sabemos que elas não irão interferir com CSS de outros componentes. No caso do `createGlobalStyle` essa proteção é retirada e assim o CSS dele tem acesso global.


