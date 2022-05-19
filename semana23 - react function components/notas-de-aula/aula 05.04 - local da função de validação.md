# 04 Como organizar o código

Ao criarmos a função de validação do nosso formulário, preferimos deixar ela fora do componente formulário. Qual o beneficio de organizarmos nosso código dessa maneira?

## Resposta
Deixando a função de validação fora do formulário, podemos alterar as validações dependendo da parte do projeto que estamos trabalhando o que torna esse componente mais reutilizável.

Ou seja, recebendo a função de validação por propriedades (props) conseguimos fazer com que nosso formulário seja mais flexível.