#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 6 - Basic Node Operations

# Exercises
## Questions

1. Run the commands sort, wc and uniq on the commands.js file. Explain how they work and what the output was.
> - sort: Uses the Merge Sort Algorithm to sort then output the lines of its input or concatenation of all files listed in its argument list in sorted order. Sorting is done based on one or more sort keys extracted from each line of input like so using `sort command.js`:
```javascript




       });
   }
}
}
};
        }
        },
                break;
                break;
        case 'cat':
        case 'echo':
        'cat': function(fullPath) {
                commandLibrary.cat(userInputArray.slice(1));
                commandLibrary.echo(userInputArray.slice(1).join(' '));
const commandLibrary = {
        const command = userInputArray[0];
       const fileName = fullPath[0];
const fs = require('fs');
        const userInputArray = userInput.split(' ');
           done(data);
                done(userInput);
        'echo': function(userInput) {
       fs.readFile(fileName, (err, data) => {
function done(output) {
function evaluateCmd(userInput) {
           if (err) throw err;
module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
        //parses the user input to understand which command was typed
        process.stdout.write('\nprompt > ');
        process.stdout.write(output);
        switch (command) {
                //we will add the functionality of echo next within the object commandLibrary
//where we will store our commands
//where we will store the logic of our commands
//write out data
```
> - wc: wc (short for word count) reads either standard input or a list of files and generates one or more of the following statistics: newline count, word count, and byte count. If a list of files is provided, both individual file and total statistics are returned like so using `wc command.js`:
```
  40  113 1013 commands.js
```
> - uniq: when fed a text file, outputs the file with adjacent identical lines collapsed to one.Typically it is used after sort like so using `sort commands.js | uniq | wc`:
```
35     111     999
// 5 fewer lines, 2 fewer words, 14 fewer characters than before with the wc command
```

2. Using the pipe (|) connect at least two commands and run it on commands.js. Explain what the output was and why the specific data was outputted.
> `sort commands.js | uniq | wc`
> This piped command sorts `command.js`, removes any lines that are the same as the one adjacent, then returns a count of the lines, words, and byte count (depending on encoding this could also bethe character count). 5 fewer lines, 2 fewer words, 14 fewer characters than `wc commands.js`

## Programming Questions

3. Implement the head command in the commands.js file. The head command outputs the first n lines of a file (you may decide what n is). This function will be similar to cat in structure so it will be helpful to reference.

4. Implement the tail command in the commands.js file. The tail command is the inverse of the head command. It outputs the last n lines of a file (you may decide what n is).

5. It is possible that a user will input a non-existent command to our bash shell. Within commands.js create an errorHandler function which will output an error message if the command cannot be found.
>Hint: Use the default: case in your switch statement.

- bash.js
```javascript
const commands = require("./commands.js");

//prompt the user for input
process.stdout.write('prompt > ');

process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
//evaluateCmd is a function which will be implemented in commands.js
  commands.evaluateCmd(userInput);
 });
```

- commands.js
```javascript
const fs = require('fs');

//write out data
function done(output) {
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput) {
	//parses the user input to understand which command was typed
	const userInputArray = userInput.split(' ');
	const command = userInputArray[0];
	switch (command) {
	case 'echo':
		//we will add the functionality of echo next within the object commandLibrary
		commandLibrary.echo(userInputArray.slice(1).join(' '));
		break;
	case 'cat':
		commandLibrary.cat(userInputArray.slice(1));
		break;
	case 'head':
		commandLibrary.head(userInputArray.slice(1));
		break;
	case 'tail':
		commandLibrary.tail(userInputArray.slice(1));
		break;
	default:
      commandLibrary.errorHandler(userInputArray[0]);
	}
}

//where we will store the logic of our commands
const commandLibrary = {
  echo: function(userInput) {
    done(userInput);
  },
  cat: function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },
  head: function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      let dataArray = data.toString().split('\n');
      let lines = [];
      for (let i = 0; i < 5; i++) {
        lines.push(dataArray[i]);
      }
      data = lines.join('\n');
      done(data);
    });
  },
  tail: function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      let dataArray = data.toString().split('\n');
      let lines = [];
      for (let i = dataArray.length - 6; i < dataArray.length; i++) {
        lines.push(dataArray[i]);
      }
      data = lines.join('\n');
      done(data);
    });
  },
  errorHandler: function(userInput) {
    done('Error! ' + userInput + ' is not a command');
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
```

6. Given a string, reverse the order of characters in each word within a sentence while maintaining the original word order and whitespace and return the string.

```javascript
function reverseString(inputString) {
  var reversedWords = [];
  var reversedString = '';
  var splitArray = inputString.split(' ');
  splitArray.forEach(word => {
    reversedWords.push(reverseWords(word));
  });
  reversedString = reversedWords.join(' ');
  return reversedString;
}

function reverseWords(word) {
  var letters = [];
  var reverseWord = '';
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
  }
  return reverseWord;
}

reverseString('I go to Bloc Yippee!');
```
