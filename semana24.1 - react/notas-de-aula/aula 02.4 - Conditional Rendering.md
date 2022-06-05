# Conditional Rendering

No exercício anterior, utilizamos uma das formas para se utilizar renderização condicional no React, mas existem várias formas de se fazer isso!

Uma delas é a que já vimos, sendo:

```
function FormularioCadastro() {
  function formularioAtual(etapa) {
    switch(etapa) {
      case 0:
        return <> ... </>      ...      default:        return <> ... </>
    }
  }
  return (
    <>
      {formularioAtual(etapaAtual)}
    </>
  )
}
```

Dessa forma, utilizamos uma função dentro do JSX para podermos executar essa função, para que isso aconteça, você deve se atentar a alguns pré-requisitos para que isso funcione:

- A função deve ser executada de imediato (formularioAtual()), pois se você não executar a função, o React entende que você tá querendo renderizar uma variável e não o retorno dessa função, por isso, não funcionará.
- A função deve retornar alguma coisa, normalmente se retorna uma string ou um outro JSX.
- Caso esteja usando alguma variável que está no escopo do componente, a função deve estar dentro do próprio componente ou ser passada para a função via parâmetro.

Essa normalmente é usada quando precisa-se ter inúmeras condicionais para renderizar algo.

Outra forma bem conhecida de renderização condicional dentro do JSX é utilizando ternário! podemos fazer dessa forma:

```
function FormularioCadastro() {
  return (
    <>
      {condicao1 ? "caiu na condição 1" : "não caiu na condição"}
    </>
  )
}
```

Essa é a forma conhecida de se utilizar apenas uma condição, pois, imagine se precisássemos utilizar ternário para 3 condições por exemplo? Ficaria algo assim:

```
function FormularioCadastro() {
  return (
    <>
      {condicao1 ? "caiu na condição 1" : condicao2 ? "caiu na condição 2" : condicao3 ? "caiu na condição 3" : "não caiu em nenhuma condição"}
    </>
  )
}
```

Dessa forma será quase impossível de ler a condição, certo?

Outra forma de utilizar renderização condicional é antes do próprio return do componente! sabia dessa?

```
function FormularioCadastro() {
  if(condicao1) {
    return "caiu na condição 1"
  } else if(condicao2) {
    return "caiu na condição 2"
  } else if(condicao3) {
    return "caiu na condição 3"
  }

  return (
    <>
      "não caiu em nenhuma condição"
    </>
  )
}
```

Dessa forma, o retorno desses ifs é considerada o retorno do próprio componente! Logo, o código abaixo do retorno acionado será ignorado. Essa não é a forma mais bonita de se ter uma condicional, mas ela pode ser usada para loading ou erro por exemplo:

```
function Componente(erro, carregando) {
  if(erro) {
    return "Componente deu erro!"
  } else if(carregando) {
    return "Componente carregando..."
  }

  return "Componente funcionando!"
}
```

Dessa forma, o return de "Componente funcionando" só terá o código do componente quando ele não está carregando ou funcionando, então fica mais fácil de ler, porém não é muito utilizado/recomendado.

E se quisermos renderizar só se a minha condição for verdadeira? Com ternário fica assim:

```
function FormularioCadastro() {
  return (
    <>
      {condicao1 ? "Renderizou o que eu quero" : null}
    </>
  )
}
```

Dá para fazer dessa forma, mas tem uma forma muito mais limpa de escrever isso, que é com o operador AND (&&)

```
function FormularioCadastro() {
  return (
    <>
      {condicao1 && "Renderizou o que eu quero"}
    </>
  )
}
```

Dessa forma ele só mostrará caso a condição for verdadeira!

Beleza! Eu já sei executar dessas formas, mas eu quero ver algo novo, eu quero executar a função dentro do JSX! tem como?

E lá vai . . . . . . Tem sim!!! Utilizando um palavrão chamado Immediately [Invoked Function Expression (ou IIFE)](https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE), é raríssimo ver isso sendo usado, mas é possível!! Dessa forma você cria uma função que se executa imediatamente!!

A sintaxe dessa função é: (função a ser executada)(parâmetro que essa função receberá). Como a função estará dentro do componente, todo o escopo dele estará dentro dessa função, então, ficaria assim:

```
function FormularioCadastro() {
  return (
    <>
      {(() => {
          if(condicao1) {
            return "caiu na condição 1"
          }
          return "não caiu na condição"
      })()}
    </>
  )
}
```

Dessa forma dá pra usar qualquer tipo de JS dentro do JSX!! Mas como não é bonito, por que não utilizar funções, ternários ou operadores não é mesmo?

Então é isso, fico por aqui e bons estudos! :D
