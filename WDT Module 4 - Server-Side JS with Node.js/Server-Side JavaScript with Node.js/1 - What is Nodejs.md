#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 1 - What is Node.js?

# Exercises
1. In your own words highlight the differences in functionality and purposes Client-Side and Server-Side code serves in a full-stack web application.
> The differences in purpose are basic.  At it's heart the purpose of the client-side (browser) is to render web pages and all their dynamic goodies. The purpose of the server is serve the code for those pages. In terms of function, the client-side sends requests to the server, retrieves data from it, and interacts with local storage(cookies) while the server responds to requests, processes user input, and interacts with permanent storage(database). The browser has window and document objects, the server does not. The client-side interfaces with HTML and the DOM, the server does not. The client-side use AJAX to make HTTP requests, the server makes them directly.

2. What explains Node's rise in popularity and use? What does "Isomorphic JavaScript programming" mean? Provide some real-world examples not listed in this checkpoint of companies using Node.js.
> Node's rise in use is due to improved developer satisfaction and productivity, and increased application performance. Coding in the same language frontend and backend eliminates handling and translating date and currency formatting, form validations, and routing logic written in a different language. Sending fully rendered pages from the server to the client cut Twitter's percieved load time 80%.
>
>"Isomorphic JavaScript programming" means JavaScript applications built to run both on the client-side and the server-side. Now that there is node server-side the appropriate abstractions can be made to write application logic that will run on both the server and the client, and should be able to render any view on either the server or the client, dependent on what the application needs.
>
> Companies using node.js: Netflix, LinkedIn, Uber, PayPal, eBay, and NASA.

3. Draw a diagram of a full-stack web application and its key components
[Link to Koop's Full Stack Web App Components Diagram](https://github.com/koopdev/Bloc-Full-Stack-Web-Dev-Track-Lessons/blob/master/WDT%20Module%204%20-%20Server-Side%20JS%20with%20Node.js/Server-Side%20JavaScript%20with%20Node.js/Full%20Stack%20Web%20App%20Components%20Diagram.png)
