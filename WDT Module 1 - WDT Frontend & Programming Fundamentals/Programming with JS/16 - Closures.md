<p style = "font-weight: bold; text-align: center">WDT Frontend & Programming Fundamentals<br>Programming in JS<br>Checkpoint 16 - Closures</p>

# Questions
**Q1: What does "lexical scope" mean in JavaScript?**
> **A1:** Lexical scope, or statically scoped, is when the scope of an identifier is fixed at compile time to some region in the source code containing the identifier's declaration. This contrasts with dynamic scope where the scope depends on the nesting of procedure and function calls at run time. A lexically scoped function's scope is not created by where it is called, but by where the function itself is created, i.e., functions are executed using the scope chain that was in effect when they were defined not when it's called.

**Q2: What is an advantage of a programming language that uses lexical scoping?**
> **A2:**
> * **Use as a factory for creating functions** that are somehow related. Using closures as function factories is a great way to keep your JavaScript DRY. Five lines of code allow us to create any number of functions with similar but unique purposes.
> * **Namespacing private functions** since JavaScript does not have the ability to declare methods Public or Private, but we arew able to emulate this functionality through the use of closures, which is known as the module pattern. Doing so keeps more general namespaces clean, preventing naming collisions
> * **Asynchrony**. Let's say you want to perform a task that will take a while, and then do something when it's done. You can either make your code wait for it to be done, which blocks further execution and can make your program unresponsive, or call your task asynchronously and say "begin this long task in the background, and when it completes, execute this closure", where the closure contains the code to execute when it's done.
> * **Callbacks**. If you have a customizable object that, at certain well-defined points, will execute an event which runs a closure passed in by the code that sets it up. For example, in your program's UI you might have a button, and you give it a closure that holds the code to be executed when the user clicks on the button.

**Q3: What is a closure?**
> Any function that uses a variable outside of its scope is a closure. Closures are nothing but functions with preserved data.

**Q4: What would be a use case of a closure?**
> * information-hiding
> * binding event handlers to elements
> * you can use a closure anywhere that you might normally use an object with only a single method

# Code Practice
I don't believe the instructions for this exercise are complete. "Create a closure of and see if it works". **???????** That's a pretty huge typo.  Here is my best guess at what Bloc wants.  I hope you are appropriately lenient given the incomprehensibility of the instructions
 ```
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}
 ```