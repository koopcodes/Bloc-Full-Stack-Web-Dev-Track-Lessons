<p style="text-align: center; font-weight:bold">WDT Module 2 - Frontend Frameworks<br>Project: Frontend Web Development - Bloc Jams React<br>Checkpoint 1 - Introduction</p>

# Exercises
**E1: Read How to better organize your React applications? and How to Structure a React Project?. Based on these articles, what would an ideal file structure look like for a React project, in your opinion? In the checkpoint submission, use a bulleted list with indentation to model that file structure.**

>R1: Based on my readings of those articles, in my opinion the best file structure for a React project depends on it's purpose. A small app could get away with being a single file, and cases could be made for diffewrent structure philosophies forsmall. medium, large, and XL codebases. But IN GENERAL the conventional wisdom, especially when you get to working on large apps or with teams, is to organize files according to feature and take modularity to the nth degree so that each feature (component, service, scene/view) has everything it needs to work on its own: styles, images, translations, actions, tests, etc. Each component should do one thing...if it can do THIS or THAT then the component should be split into smaller bits. It takes a while longer to set up but will pay dividends later when it comes time to add/change/remove a feature as well as making testing a breeze:

```
app
??? __tests__
??? config
?   ??? routes.js
??? screens
?   ??? App
?       ??? components
?       ?   ??? __tests__
?       ?   ??? AppView.test.js
?       ??? screens
?       ?   ??? Admin
?       ?   ?   ??? components
|       |   |   |   ??? __tests__
?       ?   ?   ??? screens
?       ?   ?   ?   ??? Reports
?       ?   ?   ?   ?   ??? components
|       |   |   |   |   |   ??? __tests__
?       ?   ?   ?   ?   ??? stores
?       ?   ?   ?   ?   ?   ??? ReportsStore.js
?       ?   ?   ?   ?   ??? index.js
?       ?   ?   ?   ??? Users
?       ?   ?   ?       ??? components
|       |   |   |       |   ??? __tests__
?       ?   ?   ?       ??? index.js
?       ?   ?   ??? shared
?       ?   ?   ?   ??? stores
?       ?   ?   ?       ??? AccountStore.js
?       ?   ?   ?       ??? UserStore.js
?       ?   ?   ??? index.js
?       ?   ??? Course
?       ?       ??? components
|       |       |   ??? __tests__
?       ?       ??? screens
?       ?       ?   ??? Assignments
?       ?       ?       ??? components
|       |       |       |   ??? __tests__
?       ?       ?       ??? index.js
?       ?       ??? index.js
?       ??? shared
?       ?   ??? components
|       |       |   ??? __tests__
?       ?       ??? Avatar.js
?       ?       ??? Icon.js
?       ??? index.js
??? shared
?   ??? util
?       ??? createStore.js
??? index.js
```