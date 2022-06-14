# [Using Children in React](https://welearncode.com/use-children-react/)


* [Video sobre este conteúdo](https://www.youtube.com/watch?v=JpM9hiQTlAk)
* A implementação do código apresentado no video está na pasta "extra2".



You can use props.children in React in order to access and utilize what you put inside the open and closing tags when you are creating an instance of a component.

For example, if I have a Button component, I can create an instance of it like this: `<Button>HI!<Button>` and then inside of the Button component, I could access that text with props.children. You can also use this to create components that wrap other components -- `<Container><Button /></Container>` for example.

```js
function Button (props) {
  return <button>{props.children}</button>
}
```

I can then instantiate the component with `<Button>Click Me!</Button>` and then a button with the text click me would display on the page.

For a layout, I could do something like:

```js
function Container ({ children }) {
  return <div style={{ maxWidth: 800px, margin: 0 auto }}>{children}</div>
}
```

Note: in this example, I'm destructuring the props object, so I can use children directly.

And then to instantiate it I could do:

```js
<Container>
  <h1>Welcome to my App</h1>
  <p>Hello, hi, this is my paragraph</p>
</Container>
```

Normally in order to pass props from one component to another, you need to do `<Button label="hello" />` and then use `props.label` in the component, but React children is more flexible and allows you to mirror HTML more closely within your JSX.
