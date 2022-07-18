# Util.promisify() in Node.js

If you have ever worked with Javascript you must have experienced callbacks. Javascript is known for its inbuilt asynchronous philosophy. From standard inbuilt modules to other frameworks and libraries, callbacks are everywhere. That’s how asynchronous programming is done in Javascript. But there is a dark side of Callbacks. It’s called Callback Hells - [What is Callback Hells?](./callback%20hell.md)



The solution to callback hell is [Promises](https://www.blogger.com/blog/post/edit/6272868078097930872/2686213485825330267#). Instead of returning a value synchronously or passing result through a callback, we can return a promise that we are going to return some value or error in future.  
To use promises there are a number of good libraries like [Bluebird](https://www.blogger.com/blog/post/edit/6272868078097930872/2686213485825330267#) and [Q](https://www.blogger.com/blog/post/edit/6272868078097930872/2686213485825330267#). But inbuilt modules and lot of other libraries don’t utilize Promises. Although these libraries are able to convert traditional callback methods into promises, we have an official way to promisify callback methods in Node v8. It is `util.promisify`. According to Node.js’s [documentation](https://www.blogger.com/blog/post/edit/6272868078097930872/2686213485825330267#):

`util.promisify` *takes a function following the common Node.js callback style, i.e. taking a (err, value) => … callback as the last argument, and returns a version that returns promises.*

Take a look at traditional example:

```
const fs = require('fs');
fs.readFile('./index.js', 'utf8', (err, text) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log(text);
    }
});
```



Now this example can be written with Promises as following:



```
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
readFile('./index.js', 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
          console.log('Error', err);
    });       c
```



Here we used `util.promisify` to convert fs.readFile into a promise based method. Now instead of taking a callback, the readFile method gives as a Promise. Promise has two methods, `then` and `catch`. `then` is used to get the result if the function call was successful. Whereas `catch` is used to catch the error if occurred. The advantage of Promise is that we can chain asynchronous calls without falling into callback hell.

# Async & Await

This is the most fun part I like. Promises can become a lot easier to deal with when combined with async & await keywords. Even chaining of promises can look nasty when it gets bigger. Async & Await make it look cleaner. Here is the above example with Async & Await:



```
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
async function doFile() {
    try {
        const text = await readFile('./index.js', 'utf8');
        console.log(text);
    } catch (err) {
        console.log('Error', err);
    }
}
doFile();
```
