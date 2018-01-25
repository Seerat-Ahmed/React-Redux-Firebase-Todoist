import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { _addTodoItem, _deleteTodoItem } from '../../store/action/todo-item-action';
import TodoList from '../TodoList/TodoList';
import TodoInput from '../TodoInput/TodoInput';

class App extends Component {
	render() {
		return (
			<div>
				<TodoInput />
				<TodoList />
			</div>
		);
	}

}


const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: () => dispatch(_addTodoItem()),
		deleteTodo: () => dispatch(_deleteTodoItem()),
	}
}

const mapStateToProps = (state) => {
	return {
		todo: state.todos,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);