import { combineReducers } from 'redux';
import setTodo from '../reducer/todo-item-reducer';

export default combineReducers({
    todos: setTodo,
});