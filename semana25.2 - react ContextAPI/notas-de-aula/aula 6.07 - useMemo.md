# 07Para saber mais: useMemo

useMemo é um hook menosprezado por iniciantes no React, porém ele é muito útil quando se trata de performance! O papel dele é memorizar duas variáveis externas e apenas executar certa operação quando essas variáveis mudarem, ou seja, se tivermos por exemplo:

```
  const somaDeAComB = a + b;
```

Vamos considerar que esse `a` e `b` vem de fora do componente via props ou via context. Da forma como está, esse cálculo será feito sempre que o componente for atualizado! Para resolver esse problema, o useMemo foi criado!

```
  const somaDeAComB = useMemo(() => a + b, [a,b]);
```

Dessa forma o useMemo irá memorizar os valores de `a` e `b`, e só se eles mudarem a função será executada e a variável `somaDeAComB` será atualizada! Claro que nesse exemplo não fará muita diferença ou talvez até piore a performance pois, como useMemo é uma função, ele irá precisar executar a memorização e como a funcionalidade de soma é muito fácil de fazer, pode ser mais trabalhoso memorizar do que somar!

Mas imagina se existir cálculos gigantes e pesados que necessitam ser executados com a mudanças dessas variáveis? Nesse caso o useMemo é ideal! Pois bem, sempre pense em casos em que o useMemo pode ser útil, e se achar que ele será, utilize ele sem medo! Caso ele não seja necessário nos seus projetos atuais, só mantenha ele no seu cinto de utilidades!

Caso tenha curiosidade sobre o assunto, deixo aqui a [documentação do React sobre useMemo](https://pt-br.reactjs.org/docs/hooks-reference.html#usememo).









## *useMemo()* hook

`useMemo()` is a built-in React hook that accepts 2 arguments — a function `compute` that computes a result and the `depedencies` array:

```
const memoizedResult = useMemo(compute, dependencies);
```

During initial rendering, `useMemo(compute, dependencies)` invokes `compute`, memoizes the calculation result, and returns it to the component.

If during next renderings the dependencies don't change, then `useMemo()` *doesn't invoke* `compute` but returns the memoized value.

But if dependencies change during re-rendering, then `useMemo()` *invokes* `compute`, memoizes the new value, and returns it.

That's the essence of `useMemo()` hook.

### Exemplo

No arquivo [Carrinho/index.js](../projeto/src/pages/Carrinho/index.js) há o seguinte código:

```
const total = saldo - valorTotalCarrinho;
```

O problema deste código é que toda vez que o carrinho for atualizado, o total será calculado.

Para evitar isso, podemos utilizar `useMemo`.

```
const total = useMemo(()=>saldo - valorTotalCarrinho, [saldo, valorTotalCarrinho]);
```

Assim, o total somente será calculado quando `saldo` ou `valorTotalCarrinho` for atualizado.
