#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 3 - Node Core Libraries

# Exercises
## Questions

1. Why is the fs core module important for Node development?
> It provides basic file system functionality needed by developers and apps, like the ability to read files, create files, update files, delete files, and rename files

2. What is the difference between sync and non-sync methods in the fs module?
> Syncronous means your code runs in sequential order waiting for each line of code to finish executing before moving on to the next. This is why sync code is called 'blocking' code, because execution of subsequent lines of code will be blocked from running until the current operation is complete. Asyncronous means your code does not wait for the current line to execute before moving on to run the next line, therefore called 'non-blocking' because it does not block subsequent lines from running waiting for the current operation to finish.

3. Why are modules used?
> Modules are the node equivalent of libraries on the front-end and help us deal with the complexity of large software programs and systems by decomposition into smaller pieces. Modules and libraries are also used to save time by leveraging the effort of other developers (not waste time reinventing the wheel when a perfectly good possibly better solution already exists). Instead of including everything upfront with a bloated program full of features and code we will never need, using a library/module approach allows us to only include those modules we need.

4. Why are libraries such as fs used in Node programming?
> This question seems redundant after answering questions 1 & 3, or at least needs more clarification about what is meant by "libraries like fs", but to what I have already said there let me add that many of these node Core Libraries are included to bridge the gap between operation of javaScript client-side in the browser and what we need to have it do in a server environment

## Code Practice
Create a Github repo called `simple-http-node-server`. Create an HTTP server on port 3000 with a request handler that creates a file named hello-world.txt. You will be using the fs module to do this. Write the content: "Hello to this great world" to the hello-world.txt file. Please submit your finished code in your submission.

```javascript
const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Writing file.....',
  fs.writeFile('hello-world.txt','Hello to this great world','utf8',
  (err) => {
    if (err) throw err;
  console.log('success')
  }
  ));
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
})
```
