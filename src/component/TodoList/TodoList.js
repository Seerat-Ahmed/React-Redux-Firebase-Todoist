import React, { Component } from 'react';
import './todo-list.css';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem.js/TodoItem';

class TodoList extends Component {

    render() {
        return (
            <div className="todo-list">
                <ul className="list-group">
                    {
                        this.props.todos.map((item, index) => {
                            return <TodoItem key={index} todo={item} index={index} id={item} />
                        })
                    }
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps, null)(TodoList);