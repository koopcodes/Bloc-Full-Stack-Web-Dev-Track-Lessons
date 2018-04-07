<p style="text-align:center; font-weight:bold">WDT Frontend & Programming Fundamentals<br>Becoming a Developer<br>Checkpoint 2 - Consuming API's</p>

# Questions
**Q1: Explain the difference between the request/response cycle.**
> **A1:** The difference between the request/response cycle and what?. Between request and response?  Resquests are what get SENT to the server, Responses are what is RETURNED from the server.

**Q2: List common response codes and their groupings.**
> **A2:**
* 200s indicate the request was received and processed successfully.
* 300s: indicate a redirect occured
* 400s: The requestor made a mistake - most common is "404: Not Found"
* 500s: The server made a mistake - The server is down or some code on the server threw an error

**Q3: Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.**
> **A3:**
* GET: The most common, used to retrieve served resources. What happens with a URL in a browser or a click on a link.
* POST: Creates a new object on the server. Used, for example, when submitting a form to join a mailing list
* PATCH: Updates an existing object, like when you update your password
* PUT: Replace an existing object on the server. Like PATCH but should only be used when sending a complete object replacement
* DELETE: Deletes an object from the server

**Q4: Explain the difference between synchronous and asynchronous code.**
> **A4:** Synchronous means you must wait for a task or process to finish before moving on to the next. Asynchronous means you can move on to another task before the first finishes.  Most code is run syncronously, and while asyncronous execution has obvious benefit we need to be careful to avoid race conditions

**Q5: Explain what a JavaScript promise is.**
> **A5:** When you make an asyncronous request you will get back a `promise`, essentially the stack sort of promises you it won't forget about your request while it works on other things waiting for your async req to complete.  We can append a `.then` call and insert a function to execute upon a successfully kept promise and a `.catch` call to run in case the "promise is broken" and we don't get a reesponse to our request

**Q6: Explain why CORS exists and how we can work around it.**
> **A6:** CORS = **C**ross-**O**rigin **R**esource **S**haring allows for one web page to request resources from another page outside of the original pages domain. I don't believe we need to 'work around' CORS, we need to work around the disallowance of CORS in modern browsers to avoid the abuse of CORS by malicdious third-parties who could trick our browsers into downloading all kinds of nasty stuff. We can work around the browser blocking of CORS by using a proxy site though the lesson does not explain why CORS from a proxy is allowed but others aren't, or why a proxy makes CORS any safer?

**Q7: Create a fetch request in JavaScript.**
> **A7:**
```
var url = "https://api.nasa.gov/planetary/apod?api_key=vWURPmrZI0GGBQd6PUZoDs5LKtBFfSoUi3ZSfpsT";

fetch(url)
  .then(
    // the response has a .json() method to expose all the data
    r => {
      return r.json();
    } // .json() will return another promise
  )
  .then(
    // take the promised data from .json() and console.log it
    data => {
      console.log(data);
    }
  )
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });
```

**Q8: It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there.<br> A. Go to News API and click 'Get API Key' sign up for a free API key.<br> B. Use your API key to create a fetch using this URL: https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE><br> C. Loop through the result data, and for each story on HackerNews, create an `<li>` tag that contains the contents of the story.**
> **A8:**
```
var url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=c4a6beea36ac43b2998b0502e946ea5b";

fetch(url)
	.then(
		r => {
			return r.json();
		})
	.then(data => {
		let results = data.articles;
		//console.log(results);
		let list = document.createElement("ul");
		let body = document.querySelector("body");
		body.appendChild(list);
		results.map(news => {
			let newsItem = document.createElement("li");
			newsItem.innerHTML =
				'<a href="' + news.url + '">' + news.title + "<br>" + news.description + "</a>";
			list.appendChild(newsItem);
		});
	})
	.catch(e => {
		console.log(`An error occurred: ${e}`);
	});
```