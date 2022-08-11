## Express default error handler

Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.

If you pass an error to `next()` and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace. The stack trace is not included in the production environment.

Set the environment variable `NODE_ENV` to `production`, to run the app in production mode.

When an error is written, the following information is added to the response:

- The `res.statusCode` is set from `err.status` (or `err.statusCode`). If this value is outside the 4xx or 5xx range, it will be set to 500.
- The `res.statusMessage` is set according to the status code.
- The body will be the HTML of the status code message when in production environment, otherwise will be `err.stack`.
- Any headers specified in an `err.headers` object.

If you call `next()` with an error after you have started writing the response (for example, if you encounter an error while streaming the response to the client) the Express default error handler closes the connection and fails the request.

So when you add a custom error handler, you must delegate to the default Express error handler, when the headers have already been sent to the client:

```javascript
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
```

Note that the default error handler can get triggered if you call `next()` with an error in your code more than once, even if custom error handling middleware is in place.

## Writing error handlers

Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: `(err, req, res, next)`. For example:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

You define error-handling middleware last, after other `app.use()` and routes calls; for example:

```javascript
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use((err, req, res, next) => {
  // logic
})
```

Responses from within a middleware function can be in any format, such as an HTML error page, a simple message, or a JSON string.

For organizational (and higher-level framework) purposes, you can define several error-handling middleware functions, much as you would with regular middleware functions. For example, to define an error-handler for requests made by using `XHR` and those without:

```javascript
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)
```

In this example, the generic `logErrors` might write request and error information to `stderr`, for example:

```javascript
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
```

Also in this example, `clientErrorHandler` is defined as follows; in this case, the error is explicitly passed along to the next one.

Notice that when *not* calling “next” in an error-handling function, you are responsible for writing (and ending) the response. Otherwise those requests will “hang” and will not be eligible for garbage collection.

```javascript
function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}
```

Implement the “catch-all” `errorHandler` function as follows (for example):

```javascript
function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}
```

If you have a route handler with multiple callback functions you can use the `route` parameter to skip to the next route handler. For example:

```javascript
app.get('/a_route_behind_paywall',
  (req, res, next) => {
    if (!req.user.hasPaid) {
      // continue handling this request
      next('route')
    } else {
      next()
    }
  }, (req, res, next) => {
    PaidContent.find((err, doc) => {
      if (err) return next(err)
      res.json(doc)
    })
  })
```

In this example, the `getPaidContent` handler will be skipped but any remaining handlers in `app` for `/a_route_behind_paywall` would continue to be executed.
