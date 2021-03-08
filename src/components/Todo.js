import React from "react";

class Todo extends React.Component {
    click = (e) => {
        e.preventDefault();
        this.props.toggleItem(this.props.todo.id);
    };

    render() {
        return (
            <div
                style={{
                    textDecoration: `${
                        this.props.todo.completed ? "line-through" : "none"
                    }`,
                }}
                onClick={this.click}>
                <h2>{this.props.todo.task}</h2>
            </div>
        );
    }
}
export default Todo;
