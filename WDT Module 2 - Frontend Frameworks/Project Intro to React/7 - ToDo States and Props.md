# WDT Frontend Frameworks
## Project - Intro to React
### Checkpoint 7 - ToDo States and Props
#### Exercises

**Q1: Read React's documentation on [Lifting State Up](https://facebook.github.io/react/docs/lifting-state-up.html).**

**Q2: Read [Why does React emphasize on unidirectional data flow and Flux architecture?](https://hashnode.com/post/why-does-react-emphasize-on-unidirectional-data-flow-and-flux-architecture-ciibz8ej600n2j3xtxgc0n1f0) on Hashnode.**

**Q3: Why does React only allow information to be passed down in the hierarchy? What are the advantages and disadvantages of this approach? Discuss this topic with your mentor.**

> **A3: React allows information to only be passed down the hierarchy to enforce unidirectional data flow. This avoids issues with multi-direcional data flows in complex apps leading to cascading updates with one change in one model triggering more updates which in turn trigger more updates. It also makes for a good way to _encapsulate_ our data (as props and states) and limit what is available to which components for what purposes**