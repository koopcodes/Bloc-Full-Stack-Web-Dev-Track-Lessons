**_Questions_**

> Why do we use CSS?

A: Because it has more formatting options, allows consistency in design, is easier to maintain and update, storing in a linked document gives faster download times, the search engine optimization benefits, greater accesilibily, and relating to the previous accesilibilty you can present different styles to different viewers.

> What is the proper CSS selector for a class?

A: I am almost sure this was a question in the previous checkpoint, and if it wasn't it belongs there.  Regardless, class selectors are denoted by a `.` infront of the class name like `.iamaclass`

> What is the proper CSS selector for an Id?

A: Again, was asked last checkpoint or should have been but whatever. The ID selector is `#` like `#iamanid`

> What CSS property would you use to center text?

A: I would use the `text-align` property with a value of `center` like: `text-align: center;` for horizontal centering.  If you mean up and down then `vertical-align: middle` to center vertically

> What is the box model?

A: The lesson does not mention this or cover it at all.  What's up with that? Again, as above, whatever.

The box model is based on the idea that all HTML elements can be considered as boxes and we use CSS essentially as wrappers around that box that apply formats to margins, borders, padding, and the actual content ![Box Model Pic](https://www.codeproject.com/KB/HTML/567385/boxmodel-image.png)  For styling, the rotation of sides is clockwise, i.e., Top, Right, Bottom, Left in that order when naming property values that vary by side (else enter just one value if all four sides get the same value).

**_Code_**

**HTML**
```
//<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>What's all this then?</title>
  <link rel="stylesheet" ref="index.css">
</head>

<body>
  <div class="button">
    Save
  </div>
</body>

</html>
```

**CSS**
```
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

.button {
      color: #FFFFFF;
      background:  blue;
      width: 50px;
      height: 20px;
      text-align: center;
      vertical-align: middle;
      padding: 20px;
      border: 10px double #BBBBBB;
      border-radius: 30px;
      font-family: 'Inconsolata', cursive;
      box-shadow: 5px 5px #888888;
      text-shadow: 2px 2px #000000;
      text-decoration-line: overline underline;
      text-decoration-style: single;
      cursor: not-allowed; <!--Ha ha ha lol no button for you-->
    }
```
```
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

.button {
      color: #FFFFFF;
      background:  blue;
      width: 50px;
      height: 20px;
      text-align: center;
      vertical-align: middle;
      padding: 20px;
      border: 10px double #BBBBBB;
      border-radius: 30px;
      font-family: 'Inconsolata', cursive;
      box-shadow: 5px 5px #888888;
      text-shadow: 2px 2px #000000;
      text-decoration-line: overline underline;
      text-decoration-style: single;
      cursor: not-allowed; /* Ha ha LOL */
    }
```