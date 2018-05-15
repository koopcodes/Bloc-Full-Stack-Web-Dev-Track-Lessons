# WDT Frontend Frameworks
## Project - Intro to React
### Checkpoint 2 -Intro to React
#### Exercises

**E1: In your own words, explain React's Virtual DOM. What gives React its fast performance?**
>A1: Updating the real DOM is (relatively) slow. React updates the virtual DOM first, the new virtual DOM gets diffed against a snapshot of the virtual DOM from just before the update, and the changed objects in the virtual DOM **_and only the changed objects_** get updated in the real DOM.  Much faster and efficient than traditional DOM manipulation

**E2: In your own words, describe React's core concept of uni-directional data flow. Draw diagrams to illustrate. Discuss the answer with your mentor in your next session.
PROGRAMS**
>A2: All data in React applications flow in a single direction flowing down the tree from parent to child. This makes tracking the source and destination easy compared to two-way data binding where data coming from many parts of the application can cause cascading updates and changing one model may trigger more updates and since the state can be mutated by both controller and view, sometimes the data flow becomes unpredictable with two-way data binding.

> Simple Diagrams
Two-way Data Binding: `View` <> `State`
Unideirectional Data Flows: `Action` -> `Store` -> `View`