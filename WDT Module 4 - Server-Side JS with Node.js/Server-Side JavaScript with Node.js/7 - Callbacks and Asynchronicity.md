#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 7 - Callbacks and Asyncronicity

# Exercises
## Questions

**1. What is the difference between readdirSync and readdir?**
> Both are `fs` commands to read the contents of a directory and return an array of filenames excluding `.` and `..`. The difference is `readdir` is the **asyncronous** non-blocking version of the command and `readdirSync` is the **syncronous** blocking version (for use in development but generally not in production). The asyncronous `readdir` has a callback as an arguement so it can be removed from the execution stack while the request completes unblocking the stack to execute other code while we wait. Once the directory contents are returned the callback is triggered, the pending operation moves to the event queue and once it is its turn it will eventually finally be moved back to the execution stack for final disposition.

**2. What is the event loop and how does it handle asynchronous requests?**
> I guess I got a bit ahead of myself in my last answer because I sort explained how the event loop works. The best explaination is [here in this Phillip Roberts video](https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en) but to paraphrase Phil and add to what I have already stated:
- Function calls form a stack of frames.
- Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory
- A JavaScript runtime uses a message queue, which is a list of messages to be processed. The message is removed from the queue and its corresponding function is called creating a new stack frame for that function's use
- The processing of functions continues until the stack is once again empty; then the event loop will process the next message in the queue (if there is one)

**3. Given the following code, specify whether the program is asynchronous and non-blocking or synchronous and blocking or synchronous and non-blocking.**

```
const fs = require('fs');
const file = fs.readFileSync('foo.txt');
console.log(file.toString());
```
> **Synchronous and Blocking**.  `fs.readFileSync` is the syncronous version of `fs.readFile`, there is no callback, and reading files is a relatively long and blocking operation so while `fs.readFileSync` sits in the stack waiting for the file to be read nothing else can be done in the meantime, even browser page renders! `console.log` is syncronous as well but it completes so quickly it is considered non-blocking even so.

**4. Given the following code, specify whether the program is asynchronous and non-blocking or synchronous and blocking or synchronous and non-blocking.**

```
const fs = require('fs');
fs.readFile('foo.txt', (err, file) => {
 if (err) throw err;
 console.log(file.toString());
});
console.log("test");
```
Tough call becsuse we have the **asyncronous** `fs.readFile` as the main and most important part of our program BUT we also the technically **syncronous** `console.log`.  Does the presense of one syncronous line make the whole function syncronous?  I suppose it does so I will call this **Synchronous and Non-blocking** because even though `console.log` is syncronous as well but it completes so quickly it is considered non-blocking

**5. In what order will the console.log statements execute in the code below?**

```
const fs = require('fs');
fs.readFile('foo.txt', (err, file) => {
 if (err) throw err;
 console.log("A");
 console.log("B")
});
console.log("C");
```
> "C", then "A" then "B"

**6. setTimeout is a JavaScript function which calls a function after a set amount of milliseconds. Given the following code, explain in what sequence the functions will run and why.**

```
function greeting() {
 setTimeout(() => {
   console.log("friend");
 }, 100);
}

function hello(){
 console.log("hello");
}

greeting();
hello();
```
> Due to the `setTimeout` the `greeting` call will get held for at least 100ms then pushed to the queue, clearing the stack for `hello` to execute, after which `greeting` will move from queue to stack and execute. Output

```
hello
friend
```

**7. Create a function which utilizes a callback. Make sure to add console.log statements to understand when your callback function is called.**

```javascript
function doSomething(callback) {
  console.log('doSomething called');
  callback('stuff', 'goes', 'here');
  console.log('doSomething finished');
}

function foo(a, b, c) {
  console.log('foo called')
  console.log(a + " " + b + " " + c);
  console.log('Callback to foo finsished');
}

doSomething(foo);
```
