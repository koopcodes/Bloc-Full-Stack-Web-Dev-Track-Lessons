<p style="text-align: center">**WDT Frontend & Programming Fundamentals**<br>
**Programming with JS**<br>
**Checkpoint 12 - Document Object Model**</p>
> **Q1:  What does the acronym DOM stand for and explain in your own words what it is?**

**A1: ** Essentially it is an API that creates a tree structure out of an HTML, XHTML, or XML where each node is an object representing a part of the document. Like other objects, DOM nodes can be manipulated and any visible changes made get reflected in the display of the document (like a web page).


> **Q2: How does the DOM make web programming more efficient?**

**A2: ** It provides built in functions that allow us to quickly find and access particular elements or groups of elements. It would be tedious in the extreme to use dot notation in order to access deeply nested elements or individually accessing all `<p>` elements in a very long document.

**Code Practice**
```
var newListItem = document.createElement("li");
var text = document.createTextNode("Mens T-Shirt");
var list = document.getElementById("list");
newListItem.appendChild(text);
newListItem.id = "new item";
list.appendChild(newListItem);
```
