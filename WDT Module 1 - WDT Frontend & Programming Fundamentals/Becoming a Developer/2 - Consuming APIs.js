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