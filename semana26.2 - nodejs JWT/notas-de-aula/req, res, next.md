# What does *(req,res,next)* at bottom mean?

```javascript
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            req.flash('loginError', info.message);
            return res.redirect('/');
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }

            return res.redirect('/');
        });
    })(req, res, next);// <-- this line
});
```

I'm trying to learning passport package from online lecture. But, I don't get this (req,res,next) at bottom. Can anybody help me out what does it mean?



## Best response

`(...)` after any function declaration is the standard execution operator:

```javascript
const fn = function test() {
  return 'test';
}
```

will result in `fn` being a function.

```javascript
const fn = (function test() {
  return 'test';
})();
```

will result in `fn` being the string `test` because the declared function gets run *before* the assignment happens, similar to:

```javascript
const tempfunction = function() {
   return 'test';
};

const fn = tempFunction();
```

but without that intermediary `tempFunction` hanging around.

In that vein, the code you're showing is functionally equivalent to this:

```javascript
router.post("/login", isNotLoggedIn, (req, res, next) => {

  // declare a passport authentication handler
  const authFn = (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      req.flash("loginError", info.message);
      return res.redirect("/");
    }

    return req.login(user, loginError => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }

      return res.redirect("/");
    });
  };

  // call passport to generate an express middleware function
  const passportMiddleware = passport.authenticate("local", authFn);

  // run
  passportMiddleware(req, res, next);
});
```


