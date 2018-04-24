# WDT Frontend Frameworks
## Project - Intro to React
### Checkpoint 6 - Components
#### Exercises

**E1: Read [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) to understand how to turn a concept for an app into a set of React components.**
**E2: Read [React Without JSX](https://facebook.github.io/react/docs/react-without-jsx.html).**
**E3: In your own words, explain what happens behind the scenes when you use JSX.**
> **A3: Each JSX element is basically just syntactic sugar for calling React.createElement(component, props, ...children). When using JSX, creating the ReactElement objects are handled for us. Instead of calling React.createElement for each element, the equivalent structure in JSX is: `var boldElement = <b>Text (as a string)</b>;` where boldElement is now a ReactElement. The JSX parser will read that string and call React.createElement for us. JSX is transformed into JavaScript by using a pre-processor build-tool before we load it with the browser. When we write JSX, we pass it through a transpiler that converts the JSX to JavaScript. The most common tool for this is babel. JSX is transformed into function calls and those function calls create a simple "Virtual" DOM tree. You can declare JSX per-file or per-function to tell your transpiler (eg: Babel) the name of a function that should be called at runtime for each node so we can mix JavaScript with our JSX markup. This lets us add logic inline with our views.**
