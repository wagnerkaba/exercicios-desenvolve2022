# Type Casting

**Summary**: in this tutorial, you will learn about type castings in TypeScript, which allow you to convert a variable from one type to another type.

JavaScript doesn’t have a concept of type casting because variables have dynamic types. However, every variable in TypeScript has a type. Type castings allow you to convert a variable from one type to another.

In TypeScript, you can use the `as` keyword or `<>` operator for type castings.

## Type casting using the as keyword

The following selects the first input element by using the `querySelector()` method:

```let input = document.querySelector('input["type="text"]');```



Since the returned type of the `document.querySelector()` method is the `Element` type, the following code causes a compiler error:

```console.log(input.value);```



The reason is that the value property doesn’t exist in the Element type. It only exists on the `HTMLInputElement` type.

To resolve this, you can use type casting that cast the Element to `HTMLInputElement` by using the `as` keyword like this:

```let input = document.querySelector('input[type="text"]') as HTMLInputElement;```



Now, the `input` variable has the type `HTMLInputElement`. So accessing its value property won’t cause any error. The following code works:

```console.log(input.value);``` 



Another way to cast the `Element` to `HTMLInputElement` is when you access the property as follows:

```let enteredText = (input as HTMLInputElement).value;```



Note that the `HTMLInputElement` type extends the `HTMLElement` type that extends to the `Element` type. When you cast the `HTMLElement` to `HTMLInputElement`, this type casting is also known as a down casting.

It’s also possible to carry an down casting. For example:

```
let el: HTMLElement;
el = new HTMLInputElement();
```



In this example, the `el` variable has the `HTMLElement` type. And you can assign it an instance of `HTMLInputElement` type because the `HTMLInputElement` type is an subclass of the `HTMLElement` type.

The syntax for converting a variable from `typeA` to `typeB` is as follows:

```
let a: typeA;
let b = a as typeB;
``` 



## Type Casting using the <> operator

Besides the `as` keyword, you can use the `<>` operator to carry a type casting. For example:

```
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);
``` 



The syntax for type casting using the `<>` is:

``` 
let a: typeA;
let b = <typeB>a;
```  



## Summary

- Type casting allows you to convert a variable from one type to another.
- Use the `as` keyword or `<>` operator for type castings.
