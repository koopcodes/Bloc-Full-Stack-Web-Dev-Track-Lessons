### Module 4 Server Side js
### Section 3 Bloccit
### Checkpoint 7 - Node Quiz 2

QUIZ SUBMISSION
Aug 20, 2018 @ 10:44pm
QUIZ SCORE: 11/11

1. On what kinds of datasets would you use binary search?
- Small datasets.
- Datasets represented as linked lists.
- Unsorted datasets.
- Sorted datasets. <----correct

EXPLANATION
Binary search is used on sorted sets; otherwise you would not be able to remove half of the dataset each time.
Covered in: Deploying to Production

2. What kind of functionality does Sequelize provide?
- Defining models.
- Generating migrations.
- Running SQL queries.
- All of the above. <----correct

EXPLANATION
With Sequelize we can do tasks such as defining models, setting up associations between models, generate migrations and run raw SQL queries.
Covered in: Deploying to Production

3. What is TDD?
- A paradigm to minimize redundant code.
- A process of testing before writing code.<----correct
- A design technique to make websites user-friendly.
- All of the above.

EXPLANATION
Test-Driven Development is the process of writing tests before writing production code. Testing early and often allows developers to catch bugs earlier, preventing difficult problems later when the program is large and tedious to debug.
Covered in: Deploying to Production

4. Which of the following statements is true?
- BDD utilizes natural language constructs like English to explain the behavior of the code.
- BDD focuses on unit testing and acceptance testing.
- BDD is a technique which extends TDD by testing for behavior rather than just implementation.
- All of the above.<----correct

EXPLANATION
Behavior-Driven Development focuses on tests concerned with the behavior of the code within a program. BDD extends TDD by testing for behavior rather than just implementation.
Covered in: Deploying to Production

5. What is a Jasmine spec?
- An individual test in a Jasmine suite.<----correct
- A file that provides tests to run.
- A JavaScript library.
- A Jasmine spec is synonymous with a Jasmine suite.

EXPLANATION
A Jasmine spec is an individual test in a Jasmine suite. It takes two arguments, the title of the spec and the implementation of the spec.
Covered in: Deploying to Production

6. What does it mean for data to “persist”?
- The data controls the flow of the application.
- The data will disappear once the program terminates.
- The data can be used between different applications.
- The data will remain available after the program is closed.<----correct

EXPLANATION
By persisting data, the data will remain available even after the program has been closed.
Covered in: Deploying to Production

7. What does ORM allow a programmer to do that SQL does not?
- An ORM minimizes the size of a program.
- An ORM improves the speed of an application.
- An ORM allows programmers to use the language of their choice rather than SQL.<----correct
- All of the above.

EXPLANATION
Object Relational Mapping or ORM allows programmers to use the language of their choice and have it translated to SQL.
Covered in: Deploying to Production

8. Why did we use Express.js in our Bloccit application?
- Because Express.js is the industry standard.
- Because Express.js provides a robust set of features for web and mobile applications.<----correct
- Because Express.js optimizes Node applications.
- All of the above.

EXPLANATION
Express allowed us to handle HTTP requests, routing and plugin middleware. Rather than writing these ourselves, which would be time-consuming, we used Express, a framework that provides all of the needed functionality.
Covered in: Deploying to Production

9. What is the tag <%= %> used for?
- RJX
- Sequelize
- ORM
- EJS<----correct

EXPLANATION
The <%= %> is known as an EJS tag. EJS uses JavaScript to generate HTML. Everything between the tag is evaluated and returned to the document.
Covered in: Deploying to Production

10. Fill in the blank:

In our Bloccit application, the technology used to implement the model was _ and the technology used to implement the view was __.

- Sequelize, EJS<----correct
- React, EJS
- Sequelize, React
- Passport, Express

EXPLANATION
Sequelize was used as the ORM in Bloccit and to implement the model in the MVC. EJS was used to implement the view in the MVC.
Covered in: Deploying to Production

11. What kind of relationship exists between the two tables below and why?

```
CREATE TABLE customers (
    customer_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
);

CREATE TABLE orders (
    order_id INT NOT NULL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);
```

- One-to-one
- One-to-many<----correct
- Many-to-one
- None of the above

EXPLANATION
One-to-many because one customer can place multiple orders, but one order cannot be assigned to multiple customers.
Covered in: Deploying to Production
