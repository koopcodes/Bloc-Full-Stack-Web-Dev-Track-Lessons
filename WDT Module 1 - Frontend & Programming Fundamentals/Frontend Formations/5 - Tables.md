**_Questions_**

> What are table headings?

A: The titles at the top of each column tell you the category or meaning of the values directly underneath it

> What are table rows?

A: Table rows are collections of data points about or describing a particular thing.

> What are table cells?

A: Table cells hold the individual values of the data categories (by table heading) that are all related to the same thing (by table row)

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
                  <th>Food</th>
                  <th>Description</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td>Salad</td>
              <td>Fresh, delicious Cobb Salad</td>
              <td>$7.99</td>
              </tr>
              <tr>
                <td>Burger</td>
                <td>1/4 lb grass-fed burger with choice of cheese</td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td>Chicken Salad Sandwich</td>
                <td>Our world famous chicken salad on a bagel with homemade pickles</td>
                <td>$8.99</td>
              </tr>
              <tr>
                <td>Buffalo Chicken Sandwich</td>
                <td>Spicy fried chicken on a brioche bun</td>
                <td>$10.99</td>
              </tr>
              <tr>
                <td>Fries</td>
                <td>Hand cut potatoes lightly fried and seasoned</td>
                <td>$1.99</td>
              </tr>
              <tr>
                <td>Soda</td>
                <td>Regular, diet, orange, or root beer</td>
                <td>$1.00</td>
              </tr>
          </tbody>
      </table>
    </section>
    <footer>This is where any content in the footer would go</footer>
  </body>
</html>
```