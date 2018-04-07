**_Questions_**

> What are other words for anchor tags?

A: _Hyperlinks_, or just _links_.

>What is the _blank attribute on anchor tags used for?

A: Adding `target = '_blank'` will cause the linked item to open in a new browser window/tab.

> What are the two different types of lists?

A: Ordered `<ol>` and Unordered `<ul>`

> Why do we use the <nav> tag?

A: Because links are the essence of the WWW and without a way to properly organize and display available links it would be really hard to get around!

> Is the following tag a link to something on the same page or a different page? <a href='#foo'>

A: The inclusion of the `#` indicates the link is to content on that same page

```
<!DOCTYPE html>
<html>
  <head>
    <title>My First Site</title>
  </head>
  <body>
    <header>
        <nav>
            <ul>
                <li><a href='/index.html'>Home</a></li>
                <li><a href='/about.html'>About</a></li>
                <li><a href='/contact.html'>Contact</a></li>
                <li><a href='/prices.html'>Best Prices in Town</a></li>
            </ul>
        </nav>
    </header>
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