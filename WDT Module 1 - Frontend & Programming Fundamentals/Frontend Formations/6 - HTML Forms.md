**_Questions_**

> What is a good use of the `<form>` tag, what are its available methods?

A: It tells the browser where the form starts and ends, and acts as a parent container element for the other child form element tags like `<input>` & `<label>`.  It's available methods (ways to transfer form data) are either `method="post"` or `method="get"`

> List and explain of at least 3 different `<input>` types

A:  •`<input type='hidden'>` = Lets us include data that cannot be seen or modified by users when a form is submitted

•`<input type='color'>` = Gives a UI element allowing choice of color (hex#, simple colors only)

•`<input type="password">` = Allows secure password entry replacing characters with `*` or `•`

```
<!DOCTYPE html>
<html>
    <head>
        <title>My First Site</title>
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href='/index.html'>Home</a></li>
                    <li><a href='/about.html'>About</a></li>
                    <li><a href='/contact.html'>Contact</a></li>
                    <li><a href='/prices.html'>Best Prices in Town</a></li>
                </ul>
            </nav>
        </header>
    <aside>
        <p>This is sidebar text!</p>
        <p>This is sidebar text!</p>
    </aside>
    <section>
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Food</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="https://s3.amazonaws.com/bloc-foo/salad.jpg" alt="Yummy Salad Picture"></td>
                    <td>Salad</td>
                    <td>Fresh, delicious Cobb Salad</td>
                    <td>$7.99</td>
                </tr>
                <tr>
                    <td><img src="https://s3.amazonaws.com/bloc-foo/hamburger.jpg" alt="Juicy Burger Picture"></td>
                    <td>Burger</td>
                    <td>1/4 lb grass-fed burger with choice of cheese</td>
                    <td>$6.99</td>
                </tr>
                <tr>
                    <td><img src="https://s3.amazonaws.com/bloc-foo/chicken_salad_sandwich.jpg" alt="Chicken Salad Sammy Picture"></td>
                    <td>Chicken Salad Sandwich</td>
                    <td>Our world famous chicken salad on a bagel with homemade pickles</td>
                    <td>$8.99</td>
                </tr>
                <tr>
                    <td><img src="https://s3.amazonaws.com/bloc-foo/buffalo_chicken_sandwich.jpg" alt="Spicy Buffalo Chicken Picture"></td>
                    <td>Buffalo Chicken Sandwich</td>
                    <td>Spicy fried chicken on a brioche bun</td>
                    <td>$10.99</td>
                </tr>
                <tr>
                    <td><img src="https://s3.amazonaws.com/bloc-foo/fries.jpeg" alt="Hand Cut Fries Picture"></td>
                    <td>Fries</td>
                    <td>Hand cut potatoes lightly fried and seasoned</td>
                    <td>$1.99</td>
                </tr>
                <tr>
                        <td><img src="https://s3.amazonaws.com/bloc-foo/soda.jpeg" alt="Thirst Quenching Soda Picture"></td>
                    <td>Soda</td>
                    <td>Regular, diet, orange, or root beer</td>
                    <td>$1.00</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section>
        <form action="/form.php" method="post">
            <fieldset>
            <legend>Reservation Form</legend>
                <label for="firstName" style="text-align:left">First Name</label>
                <input type="text" id="firstName" style="float:right"><br>
                <label for="lastName" style="text-align:left">Last Name</label>
                <input type="text" id="lastName" style="float:right"><br>
                <label for="email" style="text-align:left">Email Address  </label>
                <input type="email" id="email" style="float:right"><br>
                <label for="tel" style="text-align:left">Telephone Number  </label>
                <input type="tel" id="tel" style="float:right"><br>
                <select name="restimes" style="float:left">
                    <option selected disabled>Pick an available time</option>
                    <option value="1">Tuesday @ 6PM</option>
                    <option value="2">Tuesday @ 7PM</option>
                    <option value="3">Wednesday @ 5PM</option>
                    <option value="4">Wednesday @ 9PM</option>
                </select><br>
            <textarea col="180" row="25" style="float:right">Additional Comments or Requests Here
            </textarea>
            <input type="submit" value="Submit">
            </fieldset>
        </form>
    </section>
    <footer>This is where any content in the footer would go</footer>
  </body>
</html>
```