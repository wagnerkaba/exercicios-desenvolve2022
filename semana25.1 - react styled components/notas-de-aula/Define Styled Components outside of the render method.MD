### Define Styled Components outside of the render method[](https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method)

It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.

Write your styled components the recommended way:

```
const StyledWrapper = styled.div`

 /* ... */

`;

const Wrapper = ({ message }) => {

 return <StyledWrapper>{message}</StyledWrapper>;

};
```

Instead of:
```
const Wrapper = ({ message }) => {

 // WARNING: THIS IS VERY VERY BAD AND SLOW, DO NOT DO THIS!!!

 const StyledWrapper = styled.div`

 /* ... */

 `;

 return <StyledWrapper>{message}</StyledWrapper>;

};
```
**Recommended reading**: [Talia Marcassa](https://twitter.com/talialongname) wrote a great review of real-world usage, featuring lots of solid practical insights and comparisons with alternatives, in [Styled Components: To Use or Not to Use?](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)
