

A expressão `await` faz com que uma função se comporte como se fosse síncrona, conforme o [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):

> Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. 