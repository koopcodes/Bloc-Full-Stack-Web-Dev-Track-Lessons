<p style="font-weight: bold; text-align: center">WDT Frontend & Programming Fundamentals<br>
Programming with JS<br>
Checkpoint 14 - Advanced DOM Manipulation</p>

> **Q1: What is the difference between `document.querySelector()` and `document.querySelectorAll()`?**

**A1:** `document.querySelector()` will return the first element that matches the specified selector(s).  `document.querySelectorAll()` returns an `array` containing _ALL_ the elements that match the specified selector(s).

> **Q2: What is the difference between `getElement(s)By` and `querySelector(All)`?**

**A2:** The `getElement(s)By` methods are often faster in the browser and are preferred when possible, but each comes with various restrictions like they will only work on a single id, or will work on multiple classes || multiple elements, but not multiple elements && multiple classes all together at one time. So we use `querySelector`'s when we need the extra flexibility to find the exact combination of classes and elements (even an id) that will get us quickly to the code block we want to modify

> **Q3: What do JavaScript event handlers do and what is an example of one?**

**A3:** Event handlers are a set of functions which "handle" what happens when an event is triggered using code that lots of times consists of "on" + the name of the event, e.g., `document.getElementById("mybutton").onclick = function(event) { ... }`

**Code Practice**
```
var list = document.getElementById("list").getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
	list[i].addEventListener('click', doStuff, false);
}
function doStuff() {
	console.log(this.innerHTML);
}
```
