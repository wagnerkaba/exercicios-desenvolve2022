# [Express.js Middleware Tutorial](http://qnimate.com/express-js-middleware-tutorial/)

Developers who are new to Express often get confused with the difference between route handler and middleware. Therefore they also get confused with the difference between `app.use()`, `app.all()`, `app.get()`, `app.post()`, `app.delete()` and `app.put()` methods.

In this tutorial I will explain the exact difference between a middleware and route handler. And also how to use the `app.use()`, `app.all()`, `app.get()`, `app.post()`, `app.delete()` and `app.put()` methods correctly.

### Route Handler

`app.all()`, `app.get()`, `app.post()`, `app.delete()` and `app.put()` methods are all used to define routes. A route is used to handle a HTTP request. A route is a combination of a path and callback, which is executed when a request’s path is matches. The callback is called as the route handler.

The difference between `app.all()`, `app.get()`, `app.post()`, `app.delete()` and `app.put()` methods is that they handle different types of HTTP requests. For example: `app.get()` handlers only GET requests whereas `app.all()` can handle GET, POST and so on.

Here is an example of how to define a route:

```
var app = require("express")();  

app.get("/", function(httpRequest, httpResponse, next){  
    httpResponse.send("Hello World!!!!");  
});  

app.listen(8080);

```

Every route handler get a reference to the request and response object of the HTTP request that is currently being served.

There can be multiple route handlers executed for a single HTTP request. Here is an example:

#### exemplo2.js

```
var app = require("express")();  

app.get("/", function(httpRequest, httpResponse, next){  
    httpResponse.write("Hello");  
    next();  
});  

app.get("/", function(httpRequest, httpResponse, next){  
    httpResponse.write(" World !!!");  
    httpResponse.end();  
});  

app.listen(8080);

```

Here the first handle writes some response and then calls next(). The next() method is used to call the next route handler match the route path.

**A route handler must end the request or call the next route handler.**

We can also pass multiple route handlers to a single call to `app.all()`, `app.get()`, `app.post()`, `app.delete()` and `app.put()` methods. Here is an example to demonstrate this:

#### Exemplo3.js

```
var app = require("express")();  

app.get("/", function(httpRequest, httpResponse, next){  
    httpResponse.write("Hello");  
    next();  
}, function(httpRequest, httpResponse, next){  
    httpResponse.write(" World !!!");  
    httpResponse.end();  
});  

app.listen(8080);

```

### Middleware

A Middleware is a callback that sits on top of the actual request handlers. It takes the same parameters as a route handler.

To understand middleware let’s take an example site which has a dashboard and profile page. To visit these pages the user must login. Requests to these pages are also logged. Here is how the route handler for these pages would look like:

#### Exemplo4.js

```
var app = require("express")();  

function checkLogin()  
{  
    return false;  
}  

function logRequest()  
{  
    console.log("New request");  
}  

app.get("/dashboard", function(httpRequest, httpResponse, next){  

    logRequest();  

    if(checkLogin())  
    {  
        httpResponse.send("This is the dashboard page");  
    }  
    else  
    {  
        httpResponse.send("You are not logged in!!!");  
    }  
});  

app.get("/profile", function(httpRequest, httpResponse, next){  

    logRequest();  

    if(checkLogin())  
    {  
        httpResponse.send("This is the dashboard page");  
    }  
    else  
    {  
        httpResponse.send("You are not logged in!!!");  
    }  
});  

app.listen(8080);

```

Here the problem is that there is a lot of repeating code i.e., we had to `logRequest()` and `checkLogin()` function calls multiple time. This also makes it difficult to update code. So to deal with this problem we can write a common route for these two paths. Here is the rewritten code:

#### Exemplo5.js

```
var app = require("express")();  

function checkLogin()  
{  
    return false;  
}  

function logRequest()  
{  
    console.log("New request");  
}  

app.get("/*", function(httpRequest, httpResponse, next){  
    logRequest();  
    next();  
})  

app.get("/*", function(httpRequest, httpResponse, next){  

    if(checkLogin())  
    {  
        next();  
    }  
    else  
    {  
        httpResponse.send("You are not logged in!!!");  
    }  
})  

app.get("/dashboard", function(httpRequest, httpResponse, next){  

        httpResponse.send("This is the dashboard page");  

});  

app.get("/profile", function(httpRequest, httpResponse, next){  

        httpResponse.send("This is the dashboard page");  

});  

app.listen(8080);

```

Here is the code looks a lot cleaner and is easier to maintain and update. Here the first two defined route handler are called as middleware because they are not handling the request rather responsible for pre-processing of the request.

Express provides us `app.use()` method which is specifically used to define middlewares. `app.use()` method may seem similar to `app.all()` but there are a lot of differences between them which makes `app.use()` perfect for declaring middlewares. Let’s see how `app.use()` method works:

#### app.use()

Here are the difference between `app.use()` and `app.all()`:

##### CALLBACK

`app.use()` takes only one callback whereas `app.all()` can take multiple callbacks.

##### PATH

`app.use()` only see whether url starts with specified path where `app.all()` will match complete path.

Here is an example to demonstrate this:

```
app.use( "/product" , mymiddleware);  
// will match /product  
// will match /product/cool  
// will match /product/foo  

app.all( "/product" , handler);  
// will match /product  
// won't match /product/cool   <-- important  
// won't match /product/foo    <-- important  

app.all( "/product/*" , handler);  
// won't match /product        <-- Important  
// will match /product/cool  
// will match /product/foo

```

##### NEXT()

`next()` call inside a middleware invokes the next middleware or route handler depending on whichever is declared next. But `next()` call inside a route handler invokes the next route handler only. If there is a middleware next then it’s skipped. Therefore middlewares must be declared above all route handlers.

Here is an example to demonstrate this:

#### Exemplo6.js

```
var express = require('express');  
var app = express();  

app.use(function frontControllerMiddlewareExecuted(req, res, next){  
  console.log('(1) this frontControllerMiddlewareExecuted is executed');  
  next();  
});  

app.all('*', function(req, res, next){  
  console.log('(2) route middleware for all method and path pattern "*", executed first and can do stuff before going next');  
  next();  
});  

app.all('/hello', function(req, res, next){  
  console.log('(3) route middleware for all method and path pattern "/hello", executed second and can do stuff before going next');  
  next();  
});  

app.use(function frontControllerMiddlewareNotExecuted(req, res, next){  
  console.log('(4) this frontControllerMiddlewareNotExecuted is not executed');  
  next();  
});  

app.get('/hello', function(req, res){  
  console.log('(5) route middleware for method GET and path patter "/hello", executed last and I do my stuff sending response');  
  res.send('Hello World');  
});  

app.listen(80);

```

Now we saw the the uniqueness of the `app.use()` method and why it is used to declare middlewares. Let’s rewrite our example site code:

#### exemplo7.js

```
var app = require("express")();

function checkLogin()
{
    return false;
}

function logRequest()
{
    console.log("New request");
}

app.use(function(httpRequest, httpResponse, next){
    logRequest();
    next();
})

app.use(function(httpRequest, httpResponse, next){

    if(checkLogin())
    {
        next();
    }
    else
    {
        httpResponse.send("You are not logged in!!!");
    }
})

app.get("/dashboard", function(httpRequest, httpResponse, next){

        httpResponse.send("This is the dashboard page");

});

app.get("/profile", function(httpRequest, httpResponse, next){

        httpResponse.send("This is the dashboard page");

});

app.listen(8080);
```
