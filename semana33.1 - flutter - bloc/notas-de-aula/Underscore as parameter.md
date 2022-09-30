# What's the meaning of passing underscore _ "_" (_) when calling a function in dart/flutter?

PREFER using _, __, etc. for unused callback parameters.

Sometimes the type signature of a callback function requires a parameter, but the callback implementation doesn’t use the parameter. In this case, it’s idiomatic to name the unused parameter _. If the function has multiple unused parameters, use additional underscores to avoid name collisions: __, ___, etc.

```
futureOfVoid.then((_) {
  print('Operation complete.');
});
```

Fonte: [Effective Dart: Style](https://dart.dev/guides/language/effective-dart/style)

## Resposta do [StackOverflow](https://stackoverflow.com/questions/58299500/whats-the-meaning-of-passing-underscore-when-calling-a-function-in-da)

Underscore is normally an indication that you are not going to use that parameter inside the block it is just a good way to write code, for instance:
```
method(int useful, int useless) {
  // say I am only going to use 'useful' in this block 
}
```
Above code can also be written as:
```
method(int useful, int _) {
  // using '_' means I'm not going to use 2nd parameter in the block
}
```