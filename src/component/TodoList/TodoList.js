import React, { Component } from 'react';
import './todo-list.css';
import { connect } from 'react-redux';
import { _addTodoItem, _deleteTodoItem, _update } from '../../store/action/todo-item-action';

class TodoList extends Component {

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
    }


    cancel() {
        this.toggleEdit();
        this.setState({ todo: '' });
    }

    deleteTodo(event) {
        this.props.deleteTodo(event.target.id);
    }

    toggleEdit(event) {
        if(!this.state.isEdit)
            this.setState({ todo: event.target.id });
        else
            this.setState({ todo: '' });

        this.setState({ isEdit: !this.state.isEdit });
    }

    handleChange(event) {
        this.setState({ todo: event.target.value });
        console.log(this.state.todo);
    }

    updateTodo(event) {
        this.props.editTodo(this.state.todo, event.target.id);
        this.setState({ isEdit: !this.state.isEdit });
    }

    render() {
        return (
            <div className="todo-list">
                <ul className="list-group">
                    {
                        this.props.todos.map((todo, index) => {
                            return (
                                (!this.state.isEdit) ?
                                    <li key={index} className="list-group-item">
                                        {todo}
                                        <span className="action">
                                            <button id={todo} onClick={this.toggleEdit} className="btn btn-success">Edit</button>
                                            <button id={index} onClick={this.deleteTodo} className="btn btn-danger">Delete</button>
                                        </span>
                                    </li>
                                    :
                                    <li key={index} className="list-group-item">
                                        <input type="text" value={this.state.todo} onChange={this.handleChange} ref={el => this.textinput = el} className="form-control" />
                                        <span className="action">
                                            <button id={index} onClick={this.updateTodo} className="btn btn-success">Save</button>
                                            <button id={index} onClick={this.cancel} className="btn btn-danger">Cancel</button>
                                        </span>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(_addTodoItem(todo)),
        deleteTodo: (id) => dispatch(_deleteTodoItem(id)),
        editTodo: (todo, id) => dispatch(_update(todo, id)),
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);