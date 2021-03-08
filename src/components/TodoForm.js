import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
        };
    }
    changes = (e) => {
        this.setState({
            input: e.target.value,
        });
    };
    submit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.input);
    };
    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    value={this.state.input}
                    onChange={this.changes}
                    type="text"
                    name="todo"
                />
                <button>ADD</button>
            </form>
        );
    }
}

export default TodoForm;
