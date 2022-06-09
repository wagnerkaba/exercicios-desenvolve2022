# HTML5: `async`, `defer`

In HTML5, you can tell browser when to run your JavaScript code. There are 3 possibilities:

```xml
<script       src="myscript.js"></script>

<script async src="myscript.js"></script>

<script defer src="myscript.js"></script>
```

1. Without `async` or `defer`, browser will run your script immediately, before rendering the elements that's below your script tag.

2. With `async` (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.

3. With `defer`, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)



Fonte: [javascript - Script Tag - async &amp; defer - Stack Overflow](https://stackoverflow.com/questions/10808109/script-tag-async-defer)


