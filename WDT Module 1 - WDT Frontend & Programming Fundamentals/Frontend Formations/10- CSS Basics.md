> What is the difference between inline, internal, and external styling? Which will you most commonly use?

A: **Inline Styling** is when CSS is placed inside a tag, **Internal Styling** has the CSS inside the page's `<head>` element, and **External Styling** means the CSS is in a different file linked to the page using a `<link>` tag

> Why are id selectors inhibiting?

A: Because an ID must be unique and can only be used once per page

> Is the `<div>` with class `altfoo` an immediate child of the `<div>` with `foo`? Why or why not?

A: **Revised Answer** Yes, `<div class="altfoo">` is an immediate child of `<div id="foo">` because no other element surrounds `<div class="altfoo">` except `<div id="foo">`

  **Note on revision** I totally understand this being sent back to me.  As soon as I sat down it was immediately apparent where I had gone wrong and frankly don't know what I was thinking except it was late and maybe I should have just gone to bed before trying to turn this in first. Perhaps I can restate my understanding here and you can make sure I am clear:
  * Refering to my CodePen below [https://codepen.io/koopdev/pen/rdNZer]
  * `<div class="altfoo">` IS an immediate child of `<div id="foo">` as I stated above.
  * The `<p>`'s _inside_ `<div class="altfoo">`**are not** immediate children of `<div id="foo">`
  * I don't know why I was expecting `.foo>p{background:green}` to turn that `<p>` inside `<div class="altfoo">` green, it is clearly not meant to do so if my understanding of what an immediate child above is correct.
  * `.foo>.altfoo{background:green}` is what I believe grader Bill Tran meant when he said "try to grab the div instead of the p tag." when he sent this back for revision

  Do I have it correct now?


> Which element(s) will the following selector select? `.foo p {}`

A: That will select all `<p>` elements since they are all descendants of `<div id = "foo">`

> Which element(s) will the following selector select? `.foo > p{}`

A: That will select only the first two `<p>` elements, but not the third because it is not an immediate child of `<div id = "foo">`

> What psuedo-selector would you write to select the first `<p>` element?

A: `p:first-child {}`

**_Code_**
```
h2{
  color:fuchsia
}
#idselector{
  background:turquoise
}
.selectorclass{
  opacity:0.5
}
div.selectorclass {
  border-style:solid
}
```