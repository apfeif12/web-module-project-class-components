import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
    { task: "eat", id: "1", completed: false },
    { task: "sleep", id: "2", completed: false },
    { task: "study", id: "3", completed: false },
    { task: "clean", id: "4", completed: false },
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: todo,
        };
    }

    addItem = (itemName) => {
        this.setState({
            todo: [
                ...this.state.todo,
                { task: itemName, id: Date.now(), completed: false },
            ],
        });
    };

    toggleItem = (itemId) => {
        this.setState({
            todo: this.state.todo.map((task) => {
                if (itemId === task.id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            }),
        });
    };
    toggleComplete = (e) => {
        this.setState({
            todo: this.state.todo.filter((item) => {
                return !item.completed;
            }),
        });
    };

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <TodoForm addItem={this.addItem} />
                <TodoList
                    toggleComplete={this.toggleComplete}
                    toggleItem={this.toggleItem}
                    todo={this.state.todo}
                />
            </div>
        );
    }
}

export default App;
