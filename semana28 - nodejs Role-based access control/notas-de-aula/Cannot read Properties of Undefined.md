# [Solve - Cannot read Properties of Undefined](https://bobbyhadz.com/blog/javascript-cannot-read-property-of-undefined#solve---cannot-read-properties-of-undefined)

**There are 3 main reasons the "Cannot read properties of undefined" error occurs:**

1. Accessing a property on a variable that stores an `undefined` value.
2. Accessing a property on DOM element that doesn't exist.
3. Inserting the JS script tag above the HTML where the DOM elements are declared.



## Accessing a property on a variable that stores an `undefined` value.

Most commonly, the error occurs if you try to access a property on a variable that has a value of `undefined`.



```
const person = undefined;

// ⛔️ Cannot read properties of undefined (reading 'name')
person.name;`
```



**To solve the "Cannot read properties of undefined" error, use the optional chaining operator to check if the variable is not nullish before accessing it, e.g. `person?.name`. If the variable is `undefined` or `null`, the operator short-circuits instead of throwing an error.**

```
const person = undefined;

// ✅ Using optional chaining
console.log(person?.name); // 👉️ undefined
console.log(person?.name?.first); // 👉️ undefined

// ✅ Using if / else
if (person?.name) {
 console.log(person.name);
} else {
 // 👇️ this runs
 console.log('person.name not found');
}

// ✅ Using logical AND (&&) operator
console.log(person && person.name); // 👉️ undefined`
```





The [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator allows us to access a property on an object without throwing an error if the reference is invalid.

Instead of throwing an error, the optional chaining (?.) operator short-circuits returning `undefined` if the reference is equal to `undefined` or `null`.

The last example uses the [logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) operator, which doesn't evaluate the value to the right if the value to the left is falsy (e.g. `undefined`).

You often get `undefined` values when trying to access an array element at an index that doesn't exist.

```
const arr = [];

// ⛔️ Cannot read properties of undefined (reading 'name')
console.log(arr[0].name); // ❌ Bad

console.log(arr[0]?.name); // ✅ Good

console.log(arr[0] && arr[0].name); // ✅ Good
```



Make sure the variable you are accessing has been `declared` in your code before you try to access it, otherwise you will get the "X is not defined" error.
