# BEM (Block, Element, Modifier)



The **Block, Element, Modifier** methodology (commonly referred to as [BEM](https://en.bem.info/method)) is a popular *naming convention* for classes in HTML and CSS. [Developed by](https://en.bem.info/) the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

Here’s an example of what a CSS developer writing in the BEM style might write:

```css
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```

In this CSS methodology a **block** is a top-level abstraction of a new component, for example a button: `.btn { }`. This block should be thought of as a parent. Child items, or **elements**, can be placed inside and these are denoted by two underscores following the name of the block like `.btn__price { }`. Finally, **modifiers** can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like `btn--orange`.

The markup might then look like this:

```html
<a class="btn btn--big btn--orange" href="https://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>
```

If another developer wrote this markup, and we weren’t familiar with the CSS, we should still have a good idea of which classes are responsible for what and how they depend on one another.
