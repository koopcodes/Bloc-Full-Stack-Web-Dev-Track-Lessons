#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 2 - Node.js Environment Setup

# Exercises

1. What is npm and what does it do?
> `npm` is the Node.js Package Manager. It installs and manage the tools that come with Node and manages dependencies. It even helps test and deploy apps.

2. What kind of information does package.json hold?
> package.json lists the packages that your project depends on, allows you to specify the versions of a package that your project can use using semantic versioning rules, and makes your build reproducible therefore much easier to share with other developers.  You can also specify test scripts to be run, modules to export, and information to help you share and other find your project.

3. Google another Node package. Using the demo directory run npm install <theNameOfThePackage> --save. Check the contents of your package.json file to make sure that the dependencies list the name of the Node package.
> Installed Grunt as a Dev Dependency:
```
{
  "name": "demo",
  "version": "1.0.0",
  "description": "BlocDemo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/koopdev/demo.git"
  },
  "keywords": [
    "demo"
  ],
  "author": "koop",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/koopdev/demo/issues"
  },
  "homepage": "https://github.com/koopdev/demo#readme",
  "dependencies": {
    "express": "^4.16.3"
  },
  "devDependencies": {
    "grunt": "^1.0.3"
  }
}
```
