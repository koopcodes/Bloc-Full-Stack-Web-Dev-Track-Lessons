<p style="text-align: center; font-weight:bold">WDT Module 2 - Frontend Frameworks<br>Project: Frontend Web Development - Bloc Jams React<br>Checkpoint 4 - Landing</p>

# Exercises
**E1: There are two front-end frameworks that compete with React: [Angular](https://angular.io/) and [Vue.js](https://vuejs.org/). Research these alternative frameworks to identify the differences between the three (React, Angular, and Vue). In the checkpoint submission, explain the differences, list the pros and cons of each framework, and include links to reference articles to back up your assertions.**

> Differences between React/Angular/Vue
* SCOPE:
**React** is a not a **Framework**, it is a view oriented **Library** and needs other **libraries** and tools in order to make a production app. With **React** one has total control over those tools which is good (how to set up routing, how to manage state), but the stack of libraries and tools you chose will need to be duplicated and mastered by successors and collaborants. Since there are few requirements but also little guuidance with **React** every project requires a decision regarding its architecture and things can go wrong more easily.
**Angular** is a true **Framework**, a collection of libraries and tools already assembled and capable of doing more out of the box that **React**, but a price is paid in having to adhere to Angular's strong opinions on how your application should be structured as well as storage/overhead for all the features included that you want plus those you do not.
**Vue** sounds like it is in the middle of React and Angular: It is a full-fledged framework providing more functionality out of the box than React and precludes the need to make a choice about dev stack, but has a smaller lighter weight footprint than **Angular**  while preserving developer flexibility on structure, logic, and data flow. **Vue**’s companion libraries for state management and routing (among other concerns) are all officially supported and kept up-to-date with the core library. **React** instead chooses to leave these concerns to the community, creating a more fragmented ecosystem.

* EASE OF USE: **React** focuses on the use of Javascript ES6 and JSX. **Vue** uses Javascript ES5 or ES6 but JSX too if needed. **Angular** relies on TypeScript and lots of unique ng syntax.
One the one hand **React** and JSX has enough JS in it for me to recognize, but it really needs ES6 and it's arrow functions and is totally tied to Babel. I had some trouble with **React** at first and it's seems to me things that are together in my mind (read: more traditional HTML and CSS and Jquery) are spread out in different files in **React**. I read in the "Why we chose **Vuejs** over **React**" link below that JSX and React's philosophy force too much modulization, over modulization and pre-modulization, and it disrupts "developer flow" as a result of not being able to use JSX for simple logic from within an HTML doc but instead need to change bits in potentially many different files in an attempt to have each component do only one thing. This this makes it harder to implement business logic and read **React** code but is a benefit to large teams in terms of maintenance, upgrades, and testing. Modularization and JSX-ification of CSS sounds eve worse.
**Angular** relies on TypeScript in order to make it worth using, which may not be a huge jump for C# developers but will present the steepest learning curve for most javaScript developers along with, apparently, a large amount of **Angular** specific syntax and commands which ever further delays full utilization of **Angular**'s features. Also Angular makes a lot of decisions for you and far as structure, and also has the larest footprint of the three projects I compare here.  On the plus side Angular enables all types of features out of the box, can use templates and more tradtional HTML/CSS/JS developer skills. What was the phrase? "React is ES6 with HTML sprinkled in, and Angular is more like HTML with JS sprinkled in"?  Something like that..
**Vue** again seems to be borrowing the best of **React** and **Angular**. You can still use JSX if you need/want, but you can also work with your HTML/CSS/JS files in a tradtional manner like **Angular** plus stuff like Templates. **Vue** is not as opinionated as **Angular** about how to do things, but provides a more support than basic React as build tools, routing, state management, are built in but also probably with your favorite React dev stack as well.
* Hows: **React** and **Vue** use a VirtualDOM. **Angular** still uses a direct DOM manipulation but it has been optimized by splitting the DOM rendering to the Browser's thread with a separate service worker thread handling build out and compiling and is now perhaps the fastest of the three. **React** being a library as discussed, is fairly focused in scope and tool set. Beyond what **React** offers **Vue** also includes directives, mixins, filters, and dependancy injection. In addition to what **Vue** has **Angular** also adds services which makes business logic easier to encode.
* Learning Curve: Easiest to Hardest **Vue**, then **React**, then **Angular**

| Tool          | Pro         |   Con   |
| ------------- |:------------|:--------|
| React         | Lightweight | Too Much Freedom? |
|               | Freedom (build tools) | JSX     |
|               | Big Community | Difficult business logic |
| Angular       | Backed by big players    | special ng systax |
|               | Templates   | need to learn TS |
|               | Full Featured            | Larger footprint |
| Vue           | Easiest to Learn | Doesn't have everything Angular has   |
|               | Flexiblity | Has more than React has        |
|               | Best of React and Angular? | Smaller community/Smaller Dev team  |

Sources
https://vuejs.org/v2/guide/comparison.html
https://itnext.io/angular-5-vs-react-vs-vue-6b976a3f9172
https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176
https://medium.freecodecamp.org/angular-2-versus-react-there-will-be-blood-66595faafd51
https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4
http://pixeljets.com/blog/why-we-chose-vuejs-over-react/
