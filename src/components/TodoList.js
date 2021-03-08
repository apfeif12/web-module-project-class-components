import React from "react";
import Todo from "./Todo.js";
class TodoList extends React.Component {
    click = (e) => {
        e.preventDefault();
        this.props.toggleComplete();
    };
    render() {
        return (
            <div>
                {this.props.todo.map((todo) => (
                    <Todo
                        toggleItem={this.props.toggleItem}
                        todo={todo}
                        toggleComplete={this.props.toggleComplete}
                    />
                ))}
                <button onClick={this.click}>clear complete</button>
            </div>
        );
    }
}
export default TodoList;
