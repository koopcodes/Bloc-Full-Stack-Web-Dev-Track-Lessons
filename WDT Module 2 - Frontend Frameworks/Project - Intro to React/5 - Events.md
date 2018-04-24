# WDT Frontend Frameworks
## Project - Intro to React
### Checkpoint 5 - Events
#### Exercises

**E1: In your own words, explain the React core concept of encapsulation. Discuss why this React principle is important in application development**
>A1: Encapsulation, sometimes called “data-hiding”, a good coding practice born out of a desire to avoid writing code that is difficult to maintain, error-prone, and easy to break by maintaining control of how and when internal data is accessed and modified. More technically the data of an object should not be directly exposed and calls invoked by methods rather than accessing the data directly. So we use closures and take advantage of functional scope to create a private namespace and hide some data and methods while making others public through the usual Getters and Setters where we can control what is accessed and how it is mutated. Besides allowing for validation logic if we at a later date wish to modify how restore or constructive value, for example split full name into first name and last name, we can modify the internal data structure without breaking other access or calls somewhere else in the application


**E2: Read the React Official Document on handling events`**

>A2:

* Camelcase naming
* and `{}`
* cannot return `false` to prevent default behavior, you must call `preventDefault` explicitly
* `SyntheticEvent`
* bind `this.handleClick` and pass it to `onClick`
* OR use `class` fields to correctly bind callbacks
* OR use an arrow function in the callback (no `this`)
