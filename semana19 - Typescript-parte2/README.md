# Typescript - Parte 2

## Tópicos em destaque

* [Data Modifiers: public, private and protected.](./notas-de-aula/TypeScript%20-%20Data%20Modifiers.md)
* [Generic Classes](./notas-de-aula/TypeScript%20-%20Generic%20Classes.md)
* Abstract Class
* Enum in Typescript
* TypeScript Static Methods
* [TypeScript functions optional parameters](./notas-de-aula/TypeScript%20functions%20optional%20parameters.md)
* [Type Casting](./notas-de-aula/Type%20Casting.md)

## Alterações na [configuração](./tsconfig.json) do compilador Typescript:
* `removeComments`: Remove comentários do código js gerado.
* `StrictNullChecks`: Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. Inclusive o StrictNullChecks obrigará o desenvolvedor a tratar todos os pontos de acesso a valores null em sua aplicação, forçando que o desenvolvedor pondere com cuidado cada cenário.


## Setup

Script para rodar compilador typescript com parâmetro `-w` e o servidor [lite-server](https://www.npmjs.com/package/lite-server).

```
npm run start
```
Para maiores detalhes, vide notas de aula.

