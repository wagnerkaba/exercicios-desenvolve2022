var express = require('express');
var app = express();

app.use(function frontControllerMiddlewareExecuted(req, res, next){
  console.log('(1) this frontControllerMiddlewareExecuted is executed');
  next();
});

app.all('*', function(req, res, next){
  console.log('(2) route middleware for all method and path pattern "*", executed first and can do stuff before going next');
  next();
});

app.all('/hello', function(req, res, next){
  console.log('(3) route middleware for all method and path pattern "/hello", executed second and can do stuff before going next');
  next();
});

app.use(function frontControllerMiddlewareNotExecuted(req, res, next){
    console.log('(4) this frontControllerMiddlewareNotExecuted is executed if declared above all route handlers');
    next();
  });


app.get('/hello', function(req, res){
  console.log('(5) route middleware for method GET and path patter "/hello", executed last and I do my stuff sending response');
  res.send('Hello World');
});

app.use(function frontControllerMiddlewareNotExecuted(req, res, next){
    console.log('(6) this frontControllerMiddlewareNotExecuted is executed if declared above all route handlers');
    next();
  });

app.listen(8080);