## [How to call a Function inside an Object in JavaScript](https://bobbyhadz.com/blog/javascript-call-function-inside-object#call-a-function-inside-an-object-in-javascript)

**You can call a function inside an object by declaring the function as a property on the object and invoking it, e.g. `obj.sum(2, 2)`. An object's property can point to a function, just like it can point to a string, number or other values.**

```

`const obj = {
  sum(a, b) {
    return a + b;
  },
};

console.log(obj.sum(10, 10)); // 👉️ 20
console.log(obj.sum(10, 20)); // 👉️ 30` 
```

We declared a `sum` property on an object. The property points to a function.

```

`const obj = {
  sum(a, b) {
    return a + b;
  },
};

console.log(typeof obj.sum); // 👉️ "function"` 
```

We can access the object's property using dot `.` or bracket `[]` notation to call the function.

We used a shorthand property to define the function in the object.

When reading older code, you might see the following more verbose and outdated approach being used.

```

`const obj = {
  sum: function (a, b) {
    return a + b;
  },
};

console.log(obj.sum(10, 10)); // 👉️ 20
console.log(obj.sum(10, 20)); // 👉️ 30` 
```

The first approach is more concise and easier to read.

You can use the `this` keyword to access the object's properties inside of the function.

```

`const obj = {
  num: 100,
  sum(a, b) {
    return a + b + this.num;
  },
};

console.log(obj.sum(1, 1)); // 👉️ 102` 
```

In this particular context, the `this` keyword refers to the object.

You could also add a function to the object after it has been declared.

```

`const obj = {
  num: 100,
};

obj.sum = function (a, b) {
  return a + b + this.num;
};

console.log(obj.sum(10, 10)); // 👉️ 120` 
```

Notice that we used the `function` keyword to define the function. Had we used an arrow function, the value of the `this` keyword would not be correctly bound and would point to the enclosing scope (not the object).

```

`const obj = {
  num: 100,
};

obj.sum = (a, b) => {
  console.log(this); // 👉️ {}
  return a + b + this.num;
};

console.log(obj.sum(10, 10)); // 👉️ NaN` 

```

Arrow functions don't have their own `this` keyword like named functions do. Instead, arrow functions use the `this` context of the enclosing scope.
