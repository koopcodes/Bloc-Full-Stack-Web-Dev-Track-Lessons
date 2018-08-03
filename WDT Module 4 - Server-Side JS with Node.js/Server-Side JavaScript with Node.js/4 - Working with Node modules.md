#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 4 - Working with Node modules

# Exercises
## Questions

1. How do you import a module?
> To import a module one can either:
> - manually add the module as a dependency to the package.json, then run `npm install`
> - run `npm install ./path/to/module/folder --save`
>
> Both ways will install the module and place it in the node_modules folder, but the second method is nice because it adds the dependency to package.json automatically

2. What JavaScript statement do you use to export a module?
> The `module` object has a special property, called `exports`. To export (make available for import) any value or function or other object we would like to export we attach it as a property of the module.exports object:
`module.exports.whatIWantToExport = whatIWantToExport;`
or use the `exports` shortcut, just don't reassign the `exports` variable iyself just it's properties:
`exports.whatIWantToExport = whatIWantToExport;`

## Online Research Questions

1. Are there other ways to export a module?
> I'm not sure I understand the question. `module.exports`, `exports` shortcut as I mentioned.  I've been looking and I found nothing on Google that does not use one of the two.

2. What are ES6 modules and how do they differ from the module we created in this checkpoint?
> ES6 modules are based on the same idea as other module formats: allow us to compose bigger programs out of smaller pieces. JavaScript has had modules for a long time. However, they were implemented via libraries, not built into the language. ES6 is the first time that JavaScript has built-in modules.
>
> The modules used in Node.js follow a module specification known as the CommonJS specification. Exports of a CommonJS module are defined dynamically while being evaluated, and imported using `require`.
>
> ES6 uses a different module system where exports are defined lexically when the code is being parsed (before it is actually evaluated), and imported using `import`

## Code Challenge
Create a Github repository called Terminal Command and add the code from this checkpoint. Implement the touch and mkdir commands to the terminal-commands module:
```javascript
const fs = require('fs');
const filename = 'newTextFile.txt';
const directory = './path/';


module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
    return `${acc} ${file} `;
    }, '');
  console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.closeSync(fs.openSync(filename, 'a'));
};

module.exports.mkdir = () => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    console.log('Directory created');
  } else {
    console.log('Directory already exists');
  }
};
```
