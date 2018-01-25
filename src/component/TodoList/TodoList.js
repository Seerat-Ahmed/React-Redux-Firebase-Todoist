import React, { Component } from 'react';
import './todo-list.css';
import { connect } from 'react-redux';
import { _addTodoItem, _deleteTodoItem } from '../../store/action/todo-item-action';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(event) {
        this.props.deleteTodo(event.target.id);
    }

    render() {
        return (
            <div className="todo-list">
                <ul className="list-group">
                    {
                        this.props.todos.map((todo, index) => {
                            return (<li key={index} className="list-group-item">
                                {todo}
                                <span className="action">
                                    <button className="btn btn-success">Edit</button>
                                    <button id={index} onClick={ this.deleteTodo }className="btn btn-danger">Delete</button>
                                </span>
                            </li>)
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
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);