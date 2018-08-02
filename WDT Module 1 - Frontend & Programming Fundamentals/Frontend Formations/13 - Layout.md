**_Questions_**

**1.** List the three different wats to create layouts for a site.
> A:
* The box model
* The flexbox model
* The grid model
* List the steps one could use to use the Chrome Developer
* Tools to alter a websites CSS.
**2.** List the steps one could use to use the Chrome Developer Tools to alter a websites CSS.
> A:
1. Right click on a web page in Chrome
2. Select Inspect OR
Instead of steps 1 & 2
3. Press ctrl+shift+I

* Once DevTools comes up select the Styles tab on the right side of the Element panel
* Select an Element in the DOM tree in the Element panel
* In the Styles tab you can toggle CSS properties of the selected elements on & off, as well as edit their attributes

** Code Practice**

HTML
```
<html>

<head>
    <link rel="stylesheet" type="text/css" href="blocwdt-mod1-chkpt11-Layout.css">
</head>

<body>
    <header>
        <h1>Welcome to Bloc.io Tac.ios!</h1>
    </header>

    <div id='column-1'>
        <nav>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/contact.html">Contact Us</a></li>
                <li><a href="/about.html">About Us</a></li>
            </ul>
        </nav>
        <section id="form">
            <form action="/form.js" method="post">
                <fieldset>
                    <legend>Reservations</legend>
                    <!--<label for="firstName" style="text-align:left">First Name</label>-->
                    <input type="text" id="firstName" placeholder="First Name">
                    <!--<label for="lastName" style="text-align:left">Last Name</label>-->
                    <input type="text" placeholder="Last Name" id="lastName">
                    <!--<label for="email" style="text-align:left">Email Address</label>-->
                    <input type="email" id="email" placeholder="Email">
                    <!--<label for="tel" style="text-align:right">Telephone Number</label>-->
                    <input type="tel" id="tel" placeholder="Telephone">
                    <select class="drop" name="restimes">
                    <option selected disabled>Pick an available time</option>
                    <option value="1">Tuesday @ 6PM</option>
                    <option value="2">Tuesday @ 7PM</option>
                    <option value="3">Wednesday @ 5PM</option>
                    <option value="4">Wednesday @ 9PM</option>
                </select>
                    <textarea cols=5 rows=2 class="request" placeholder="Comments or Requests"></textarea>
                    <input id="button" type="submit" value="Submit" id="submit">
                </fieldset>
            </form>
        </section>
        <div id="slogan">
            <p>We only make tacos but they are THE BEST so be prepared to wait unless you have a reservation</p>
            <img src="https://cdn.theatlantic.com/assets/media/img/mt/2015/01/RTX18UYN-1/lead_large.jpg?1430147176" alt="Expect Long Lines">
            <p>FREE Taco Delivery for Late Night Coders ONLY</p>
        </div>
    </div>

    <div id='column-2'>
        <section class="om">Our Menu</section>
        <table>
            <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Bloc.io Tac.io<img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"></td>
                <td>$4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Bloc.io Tac.ios<img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"><img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"></td>
                <td>$7</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Bloc.io Tac.ios<img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"><img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"><img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png"
                     alt="Taco"></td>
                <td>$10</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Bloc.io Tac.ios<img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"><img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"><img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png"
                     alt="Taco"><img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_1280.png" alt="Taco"></td>
                <td>$12</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Bloc.io Tac.io Mega Pack (100 Tac.ios)<img src="https://cdn.pixabay.com/photo/2014/12/21/23/35/quesadilla-575610_1280.png" alt="Tacos"></td>
                <td>$100</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Bloc.io Tac.io Mega Pack (200 Tac.ios)<img src="https://cdn.pixabay.com/photo/2014/12/21/23/35/quesadilla-575610_1280.png" alt="Tacos"><img src="https://cdn.pixabay.com/photo/2014/12/21/23/35/quesadilla-575610_1280.png" alt="Tacos"></td>
                <td>$175</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Bloc.io Tac.io Mega Pack (300 Tac.ios)<img src="https://cdn.pixabay.com/photo/2014/12/21/23/35/quesadilla-575610_1280.png" alt="Tacos"><img src="https://cdn.pixabay.com/photo/2014/12/21/23/35/quesadilla-575610_1280.png" alt="Tacos"><img src="https://cdn.pixabay.com/photo/2014/12/21/23/35/quesadilla-575610_1280.png" alt="Tacos"></td>
                <td>$225</td>
            </tr>
        </div>
            <footer>
                <!-- <p>Koop Codes &copy 2018</p> -->
            </footer>
            <script type="text/javascript" src="index.js"></script>
    </body>
</html>
```
CSS
```
@import url("https://fonts.googleapis.com/css?family=Inconsolata");
html {
  font-family: Inconsolata, Helvetica, serif;
}

body {
  width: 1080px;
}

header {
  //width: 100%;
  height: 300px;
  background: url("https://www.publicdomainpictures.net/pictures/250000/velka/taco-sign.jpg#.WqNwVuNJQo4.link");
  background-position: 38% 89%;
  background-repeat: no-repeat;
  background-color: white;
  margin: 0px 0px 0px 0px;
}

h1 {
  text-shadow: 5px 5px #aaaaaa;
  color: white;
  font-size: 100pt;
  padding: 0px 0px 0px 0px;
  text-align: center;
}

nav {
  width: 100px;
  padding: 5px 10px 10px 0px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li a {
  display: block;
}

a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: black;
  text-decoration: none;
}

a:hover {
  color: blue;
  text-decoration: none;
}

a:active {
  color: red;
  text-decoration: none;
}

#column-1 {
  float: left;
  width: 200px;
  background-color: white;
}

#form {
  width: 100%;
  font-size: 12px;
  float: left;
  background: #aaaaaa;
  padding: 5px;
  margin: 0px 0px 0px 0px;
}
#tel, #email, #lastName, #firstName {
  width: 100%;
}

.request {
  float: left;
  width: 100%;
  font-size: 12pt;
  text-align: center;
  cursor: pointer;
  margin: 0px;
}

#button {
  color: #696969;
  cursor: pointer;
  width: 100%;
  font-size: 12pt;
  box-shadow: 0 5px #999
}

#button:hover {
  background-color: #000000;
  color: #ffffff;
}

.drop {
  color: #808080;
  background-color: white;
  border-radius: 0px;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  //text-align: center;
}

#slogan {
  width: 195px;
  padding: 0px 10px 0px 10px;
  text-shadow: #000000 1px 2px 1px;
}

#slogan img {
  max-width: 195px;
}

#column-2 {
  float: right;
  background: white;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}

.om {
  font-size: 18pt;
  padding: 5px 0px 0px 0px;
}

table {
  table-layout: auto;
  width: 800px;
  margin: 0px 0px 0px 0px;
  padding 0px 0px 0px 0px;
}

td:last-child {
  text-align: right;
}

td:first-child {
  text-align: center;
}

td img {
  max-height: 20px;
  margin: 0px 0px 0px 20px;
}

td,
th {
  border: 3px solid #aaaaaa;
  text-align: left;
  padding: 10px;
}

tr:nth-child(even) {
  background-color: #aaaaaa;
}

/*footer {
  padding: 10px;
  color: black;
  text-align: center;
  position: auto;
  right: 10px;
  bottom: 10px;
  height: 80px;
  width: 100px;
  background-color: #aaaaaa;
  background-image: radial-gradient(white, black);
}
```
Casey Bennington
 CHECKPOINT APPROVED
Mar 13, 2018 @ 10:55pm
Well done Brent!

While not specifically part of this checkpoint, when making tables, make sure to have your tr that contains the th cells put inside of a thead element.

Casey

Grading Team Member