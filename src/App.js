import React, { Component } from 'react';
import TodoText from './TodoText';
import { firebase } from '@firebase/app';
import './App.css';
import TodoItem from './TodoItem';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.addTodo = this.addTodo.bind(this);
		this.retrieveTodo = this.retrieveTodo.bind(this);
		this.addToArray = this.addToArray.bind(this);
		this.retrieveTodo();
	}

	addTodo(text) {
		firebase.database().ref('/todos').push({	
			todo: text
		})
			.then(() => { console.log('Successful') })
			.catch(() => { console.log('Error') });
	}

	addToArray(obj, key) {
		let object = obj;
		object.key = key;
		let todos = this.state.todos;
		todos.key = key;
		todos.push(object);
		this.setState({ todos: todos });
		}

	retrieveTodo() {
		let db = firebase.database().ref('/todos');
		db.on('child_added', (snapshot) => {
			let obj = snapshot.val();
			let pk = snapshot.key;
			this.addToArray(obj, pk);
		});
	}

	extractId(str) {
		let index = str.indexOf(" ");
		let obj = {
			id: str.slice(0, index),
			key: str.slice(index + 1)
		}
		return obj;
	}

	removeFromDb(key) {
		firebase.database().ref('/todos/' + key).remove()
			.then(() => { console.log('Successful') })
			.catch(() => { console.log('Failed to save') });
	}

	remove(event) {
		let obj = this.extractId(event.target.id);
		let id = obj.id;
		let key = obj.key;
		this.removeFromDb(key);
		this.removeFromTodos(id, event);
	}

	removeFromTodos(id, event) {
		let todos = this.state.todos;
		todos.splice(id, 1);
		this.setState({ todos: todos });
	}

	// edit(event) {
	// 	let obj = this.extractId(event.target.id);
	// 	let id = obj.id;
	// 	let key = obj.key;
	// }

	render() {
		return (
			<div className="card">
				<div className="card-header">
					<h2>Hello Todoist</h2>
				</div>
				<div className="card-content">
					<TodoText addTodo={this.addTodo} />
				</div>
				<ul>
					{
						this.state.todos.map((todo, index) => {
							return (<TodoItem todo={todo.todo} pk={todo.key} id={index} key={index} remove={this.remove.bind(this)} />)
						})
					}
				</ul>
			</div>
		);
	}
}

export default App;