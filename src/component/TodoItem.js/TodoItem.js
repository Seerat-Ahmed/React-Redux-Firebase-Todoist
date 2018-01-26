import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _update, _deleteTodoItem } from '../../store/action/todo-item-action';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            todo: '',
        };

        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.saveOnPressEnter = this.saveOnPressEnter.bind(this)
    }


    cancel() {
        this.toggleEdit();
        this.setState({ todo: '' });
    }

    deleteTodo(event) {
        this.props.deleteTodo(event.target.id);
    }

    toggleEdit(event) {
        if (!this.state.isEdit)
            this.setState({ todo: event.target.id });
        else
            this.setState({ todo: '' });

        this.setState({ isEdit: !this.state.isEdit });
    }

    saveOnPressEnter(event) {
        if (event.key === 'Enter')
            this.updateTodo(event)
    }

    handleChange(event) {
        this.setState({ todo: event.target.value });
    }

    updateTodo(event) {
        if (this.state.todo !== '')
            this.props.editTodo(this.state.todo, event.target.id);
        this.setState({ isEdit: !this.state.isEdit });
        this.setState({ todo: '' });
    }
    render() {
        return (
            (!this.state.isEdit) ?
                <li key={this.props.index} className="list-group-item">
                    {this.props.todo}
                    <span className="action">
                        <button id={this.props.todo} onClick={this.toggleEdit} className="btn btn-success">Edit</button>
                        <button id={this.props.index} onClick={this.deleteTodo} className="btn btn-danger">Delete</button>
                    </span>
                </li>
                :
                <li key={this.props.index} className="list-group-item">
                    <input type="text" id={this.props.index} value={this.state.todo} onKeyPress={this.saveOnPressEnter} onChange={this.handleChange} className="form-control" />
                    <span className="action">
                        <button id={this.props.index} onClick={this.updateTodo} className="btn btn-success">Save</button>
                        <button id={this.props.index} onClick={this.cancel} className="btn btn-danger">Cancel</button>
                    </span>
                </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(_deleteTodoItem(id)),
        editTodo: (todo, id) => dispatch(_update(todo, id)),
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);