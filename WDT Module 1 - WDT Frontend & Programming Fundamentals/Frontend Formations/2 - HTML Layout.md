**_Questions_**
> Explain why the `<br>` tag should be used minimally if at all

    A: Well, for one, it is not descriptive or Semantic except in cases where the line break _is part of_ the data being sent. For another, it's just not a very exact tool for spacing blocks of text with `<p></p>` + CSS providing more flexibility in spacing. It is really properly used only for poetry, song lyrics, or mailing addresses.

> What are the differences between the `<div>`, `<section>`, and `<aside>` tags?

    A: The main difference is Semantic, with `<div>` being a "pure", unstyled, generic container for grouping content for which there are no more appropriate semantic elements like `<article>`, or `<nav>`. The tag `<section>` can be considered a more specific form of `<div>` tag defining content that should logically appear in the outline of a document, i.e., usually sections have a heading and use `<h1>` - `<h6>`. Use of an `<aside>` element is for a part of the document whose content is only indirectly related to the docs main content and usually used for sidebars and call-out boxes.

> Why are there multiple kinds of `<h>` tags?

    A: People skim pages by its headings so they make content easier to find.  Having different "weights" or "flavors" of `<h>` tags allows a visual representation of the relative importance or order of the headings. Also `<h>`'s allow user agents to contruct a table of contents automatically.
```
<!DOCTYPE html>
<html>
  <head>
    <title>My First Site</title>
  </head>
  <body>
    <header>This is where the logo or top navigation would go!</header>
    <aside>
      <p>This is sidebar text!</p>
      <p>This is sidebar text!</p>
    </aside>
    <section>
      <p>Hello World!</p>
      <p>This is the main section</p>
    </section>
    <footer>This is where any content in the footer would go</footer>
  </body>
</html>
```