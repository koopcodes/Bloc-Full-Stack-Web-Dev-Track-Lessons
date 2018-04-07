var newListItem = document.createElement("li");
var text = document.createTextNode("Mens T-Shirt");
var list = document.getElementById("list");
newListItem.appendChild(text);
newListItem.id = "new item";
list.appendChild(newListItem);
