# TypeScript functions optional parameters

Have you ever been in a situation where you want a function with same name but with different parameters? Yeah I’m talking about function overloading..

Function overloading helps you defining a function with same name but with different signatures. But do JavaScript supports function overloading? No. There’s no function overloading in JavaScript, and thus TypeScript also doesn’t support it. Although in JavaScript, every parameter is optional.

Then how do create functions in TypeScript with same name and different parameters? You don’t.

You create functions with optional parameters. If you’re familiar with C#, or ES6 [(Which now officially supports optional / default parameters in JavaScript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), you must be knowing what I’m talking about.

TypeScript provides following syntax for optional parameters:

```
// Optional Parameters  
sayHello(hello?: string) {   
    console.log(hello);   
}sayHello(); // Prints 'undefined'sayHello('world'); // Prints 'world'
```

And for default parameters:

```
// Default Parameters  
sayHello(hello: string = 'hello') {   
    console.log(hello);   
}sayHello(); // Prints 'hello'sayHello('world'); // Prints 'world'
```

So what happened above? Both above allow us to call functions without parameters. Optional parameter takes makes value of parameters to ‘*undefined*’, while Default parameters provides default value to parameter if you don’t provide it any value.

But be cautious, passing ‘*null*’ to TypeScript function’s default parameter will not result to what you expect. Passing ‘*null’* will cause the function to take ‘*null*’ as a value of that parameter. You must be thinking why it that? For that we need to dig in the transpiled JavaScript code.

Go ahead to [TypeScript Playground](https://www.typescriptlang.org/play/index.html) and write following code:

```
class Greeter {  
    greet(str: string = 'aa') {  
        return "Hello, " + str;  
    }  
}let greeter = new Greeter();let button = document.createElement('button');  
button.textContent = "Say Hello";  
button.onclick = function() {  
    alert(greeter.greet(null));  
}document.body.appendChild(button);
```

Now if you look at the generated function here:

```
Greeter.prototype.greet = function (str) {  
    // TypeScript added following line for optional parameter  
    if (str === void 0) { str = 'aa'; }  
    return "Hello, " + str;  
};
```

Now if you look at ‘*void 0’.* What is that? In JavaScript ‘*void*’ is an operator which takes a value as a parameter and always returns ‘*undefined*’.

So now, if you already know, in JavaScript ‘*null === undefined*’ is always false, therefore when we provide ‘*null*’ to parameter, it’ll never provide ‘*str*’ to it’s default value. You can read more about ‘*void 0’* [here](https://stackoverflow.com/questions/7452341/what-does-void-0-mean).

If you’ve found this article useful, please share, clap and comment. Thanks! :)
