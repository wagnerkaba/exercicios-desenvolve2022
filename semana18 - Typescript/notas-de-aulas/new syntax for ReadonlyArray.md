

# A new syntax for ReadonlyArray

The ReadonlyArray type describes Arrays that can only be read from. Any variable with a reference to a ReadonlyArray can’t add, remove, or replace any elements of the array.

```
function foo(arr: ReadonlyArray<string>) {
  arr.slice(); // okay
  arr.push("hello!"); // error!
}
```

While it’s good practice to use ReadonlyArray over Array when no mutation is intended, it’s often been a pain given that arrays have a nicer syntax. **Specifically, number[] is a shorthand version of Array<number>, just as Date[] is a shorthand for Array<Date>.**

TypeScript 3.4 introduces a new syntax for `ReadonlyArray` using a new `readonly` modifier for array types.

```
function foo(arr: readonly string[]) {

arr.slice(); // okay

arr.push("hello!"); // error!

}
```




