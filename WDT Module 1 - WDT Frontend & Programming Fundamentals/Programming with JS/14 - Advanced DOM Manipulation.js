/*
var newListItem = document.createElement("li");
var text = document.createTextNode("Mens T-Shirt");
var list = document.getElementById("list");
newListItem.appendChild(text);
newListItem.id = "new item";
list.appendChild(newListItem);
*/
var list = document.getElementById("list").getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
	list[i].addEventListener('click', doStuff, false);
}
function doStuff() {
	console.log(this.innerHTML);
}