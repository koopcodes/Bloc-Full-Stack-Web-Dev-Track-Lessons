# WDT Frontend Frameworks
## Project - Intro to React
### Checkpoint 4 -Props and States
#### Exercises

**E1: In your own words, explain the essential differences between props and state in React. Which is immutable or read-only, and which changes? Discuss the answer with your mentor.**
>A1:
`state` consists of properties and attributes that are _internal to and controlled by the component_. State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.`state` is used so that a component can keep track of information in between any renders. Normally components don’t have `state` and so are referred to as stateless. A component using `state` is known as stateful
>
> `props` are properties and attributes that are _external to the component and controlled by whatever renders the component_. Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed. Props flow downwards from the parent component unless have default props where you set `props`even if a parent component doesn’t pass props down.

**E2: Read the React official documentation on components and `props`, and brush up on JavaScript ES6 `classes`**

>A2: So classes are like object "factories", in a way?

**E3:Built upon your component from the assignment after checkpoint 3, add in `state` and `props` to make sure you have fully mastered these core React properties.**
https://github.com/koopdev/bloc-tack-toe.git