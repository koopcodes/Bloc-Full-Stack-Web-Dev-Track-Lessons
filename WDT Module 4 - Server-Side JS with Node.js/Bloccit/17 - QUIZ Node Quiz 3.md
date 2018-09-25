Sep 24, 2018 @ 5:31pm
QUIZ SCORE: 9/9

1. What is eager loading?
When a query retrieves data from a database as well as associations.<---correct
The inverse of lazy loading.
When a query retrieves data from a database.
When an association is defined in Sequelize.

EXPLANATION
Eager loading is when there is a query that retrieves data from a database, and the associations are also retrieved.
Covered in: Deploying to Production

2. What is a function of a Sequelize hook?
To allow for the database to communicate with the application.
To provide a means to retrieve data.
To make code more readable.
To wait for certain events to occur and then execute a function.<---correct

EXPLANATION
Hooks are functions that are called either before or after certain events and then run a request.
Covered in: Deploying to Production

3. What is the SQL equivalent of the following code?
SELECT * FROM Project;
SELECT deleted FROM Project;
SELECT * FROM Project WHERE deleted = false;
SELECT * FROM Project WHERE deleted = true;<---correct

EXPLANATION
SELECT * FROM Project WHERE deleted = true;
Covered in: Deploying to Production

4. What is a validation?
An optimization technique for a Node application.
A technique for an application to know when a user has signed on.
A constraint to ensure data meets given criteria.<---correct
A constraint to ensure there are no data leaks.

EXPLANATION
Validations are constraints enforced to ensure data meets a certain criteria. Validations prevent bad data from entering an application.
Covered in: Deploying to Production

5. What does CRUD stand for?
Crumble, Reduce, Understand, Diminish.
Create, Register, Understand, Delete.
Create, Read, Update, Delete.<---correct
Create, Read, Update, Deprecate.

EXPLANATION
CRUD stands for Create, Read, Update and Delete.
Covered in: Deploying to Production

6. What is a good practice when implementing validations?
Communicate to the user what constraints are put in place.<---correct
Minimize code.
Create an input field.
To hide the validations on a webpage.

EXPLANATION
It is important to communicate to the user the constraints before the input is received. The small tag can be used below an input field to let users know what validations are being asked for.
Covered in: Deploying to Production

7. What is the basic request cycle for authentication?
Server sends resource, Client provides credentials, Server requests for authentication, Client makes  request to an endpoint.
Client makes request to an endpoint, Server requests for authentication, Client provides credentials, Server sends resource.<---correct
Client makes request to an endpoint, Client provides credentials, Server requests for authentication, Server sends resource.
Server requests for authentication, Client provides credentials, Server sends resource, Client makes  request to an endpoint.

EXPLANATION
The basic request cycle for authentication is: the client makes a request to an endpoint that requires authentication, the server sends a request for authentication to the client, then once the client provides the proper credentials the server checks the credentials against the client identity. If everything aligns, the server sends over the resource.
Covered in: Deploying to Production

8. What is Passport.js used for in Bloccit?
To optimize the application.
To provide a means to write to a database.
To provide an authentication system.<---correct
To provide a bootstrap for the user interface.

EXPLANATION
Passport.js is a stateful session-based authentication system that can be used in any Express-based application. It provides functionality for an application to know when a user has already been authenticated.
Covered in: Deploying to Production

9. What does bcrypt do?
Encrypts the database.
Provides a password for the client.
Provides a hash table data structure to use.
Provides a password hashing function.<---correct

EXPLANATION
bcrypt provides a password hashing function that allows the storage of a hashed version of a password rather than the password itself.
Covered in: Deploying to Production
