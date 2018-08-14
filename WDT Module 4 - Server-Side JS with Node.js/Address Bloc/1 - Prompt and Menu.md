#### WDT Module 4 Server-side JS with Node.js
### Section 2 - Address Bloc
## Checkpoint 1 - Prompt and Menu

# Exercises
Before You Begin: Create a new Git feature branch for this assignment. [See Git Checkpoint Workflow: Before Each Assignment](https://www.bloc.io/resources/git-checkpoint-workflow#before-each-assignment) for details.

1. Write an instance method in your MenuController class called getDate which, when called, will log the current time and date to the console in the format of your choosing.
```javascript
getDate() {
  function addZero(i) {if (i < 10) {i = "0" + i;} return i;}
  var currentDate = new Date();
  var hours = addZero(currentDate.getHours());
  var minutes = addZero(currentDate.getMinutes());
  var seconds = addZero(currentDate.getSeconds());
  var date = addZero(currentDate.getDate());
  var month = addZero(currentDate.getMonth() + 1);
  var year = currentDate.getFullYear();
  var dateString = 'It\'s ' + hours + ':' + minutes + ':' + seconds + ' on ' + (month) + '/' + date + '/' + year;
  console.log(dateString);
}
	```

2. Add a choice to the menu questions that will call getDate when requested and return to the main menu.
When You're Done: Commit your assignment work in Git. See [Git Checkpoint Workflow: After Each Assignment](https://www.bloc.io/resources/git-checkpoint-workflow#after-each-assignment) for details.
```javascript
main() {
  console.log('Welcome to AddressBloc!');
  inquirer
    .prompt(this.mainMenuQuestions)
    .then(response => {
      switch (response.mainMenuChoice) {
      case 'Add new contact':
        this.addContact();
        break;
      case 'Display Current Time and Date':
        this.clear();
        this.getDate();
        this.main();
        break;
      case 'Exit':
        this.exit();
      default:
        console.log('Invalid input');
        this.main();
      }
    })
    .catch(err => {
      console.log(err);
    });
}
```
