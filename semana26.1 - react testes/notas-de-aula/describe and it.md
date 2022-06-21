# describe(name, fn)



`describe(name, fn)` creates a block that groups together several related tests. For example, if you have a `myBeverage` object that is supposed to be delicious but not sour, you could test it with:

```
const myBeverage = {  delicious: true,  sour: false,};describe('my beverage', () => {  test('is delicious', () => {    expect(myBeverage.delicious).toBeTruthy();  });  test('is not sour', () => {    expect(myBeverage.sour).toBeFalsy();  });});
```

This isn't required - you can write the `test` blocks directly at the top level. But this can be handy if you prefer your tests to be organized into groups.

Fonte: https://jestjs.io/docs/api#describename-fn



# [What is the difference between describe and it in Jest?](https://stackoverflow.com/questions/32055287/what-is-the-difference-between-describe-and-it-in-jest)

When writing a unit test in `Jest` or `Jasmine` when do you use `describe`?

When do you use `it`?

I usually do

```javascript
describe('my beverage', () => {
  test('is delicious', () => {
  });
});
```

When is it time for a new `describe` or a new `it`?



## Best Answer

`describe` breaks your test suite into components. Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality.

You can also nest describes to further subdivide the suite.

`it` is where you perform individual tests. You should be able to describe each test like a little sentence, such as "it calculates the area when the radius is set". You shouldn't be able to subdivide tests further-- if you feel like you need to, use `describe` instead.

```javascript
describe('Circle class', function() {
  describe('area is calculated when', function() {
    it('sets the radius', function() { ... });
    it('sets the diameter', function() { ... });
    it('sets the circumference', function() { ... });
  });
});
```
## 'test' e 'it'

OBS: É possível substituir 'it' por 'test' sem problemas

```javascript
describe('Circle class', function() {
  describe('area is calculated when', function() {
    test('sets the radius', function() { ... });
    test('sets the diameter', function() { ... });
    test('sets the circumference', function() { ... });
  });
});
```