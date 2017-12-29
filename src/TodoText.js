import React, { Component } from 'react';
import './TodoText.css';

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.state = { task: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ task: event.target.value });
    }

    onSubmit(event) {
        let text = this.state.task;
        event.preventDefault();
        if (text.length > 0) {
            this.props.addTodo(text);
            this.setState({ task: '' });
        }
    }

    render() {
        return (
            <div className="todo-text">

                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    className="form-control" />

                <button onClick={this.onSubmit} className=" btn btn-primary input">Add Todo</button>

            </div>
        );
    }
}

export default TodoInput;