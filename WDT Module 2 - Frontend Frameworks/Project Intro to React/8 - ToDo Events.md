# WDT Frontend Frameworks
## Project - Intro to React
### Checkpoint 8 - ToDo Events
#### Exercises

**Q1: Read React's documentation on [Forms](https://facebook.github.io/react/docs/forms.html).**

**Q2: Our to-do app is missing one key feature: The ability to delete to-do items. Add this feature to your app. Make sure to:**
* Add a delete button to the ToDo component.
* Define a deleteTodo method on the App component. This method should call this.setState() and pass it a new array that doesn't have the to-do item being deleted. Consider using the .filter() array method to accomplish this without mutating state – do not use .splice(), which is a mutable method, unless making a copy of the array first.
Pass the deleteTodo method to the ToDo component as a prop.
* Add an onClick event listener to the delete button, and have it call deleteTodo, passing it the index of the to-do.

```
import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { description: "Walk the cat", isCompleted: true },
                { description: "Throw the dishes away", isCompleted: false },
                { description: "Buy new dishes", isCompleted: false }
            ],
            newTodoDescription: ''
        };
    }

    deleteTodo(index) {
        const list = this.state.todos.slice();
        const newList = list.filter((todo, i) => i !== index);
        this.setState({ todos: newList });
    }

    handleChange(e) {
        this.setState({ newTodoDescription: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newTodoDescription) { return }
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
        this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
    }

    toggleComplete(index) {
        const todos = this.state.todos.slice();
        const todo = todos[index];
        todo.isCompleted = todo.isCompleted ? false : true;
        this.setState({ todos: todos });
    }

    render() {
        return (
            <div className="App">
                <h1>To Do List</h1>
                <ol>
                    {this.state.todos.map((todo, index) =>
                        <ToDo
                            key={index}
                            description={todo.description}
                            isCompleted={todo.isCompleted}
                            toggleComplete={() => this.toggleComplete(index)}
                            deleteTodo={() => this.deleteTodo(index)}
                        />
                    )}
                </ol>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <input type="text" placeholder="Add your To-Do's here" value={this.state.newTodoDescription} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Add" />
                </form>

            </div>
        );
    }
}

export default App;
```
```
import React, { Component } from 'react';

class ToDo extends Component {

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.isCompleted} onChange={this.props.toggleComplete} />
                <span>{this.props.description}</span>
                <button name="deleteTodo" onClick={this.props.deleteTodo}>X</button>
            </li>
        );
    }
}

export default ToDo;

```