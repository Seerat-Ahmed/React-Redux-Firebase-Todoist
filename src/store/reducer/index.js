import { combineReducers } from 'redux';
import setTodo from '../reducer/todo-item-reducer';
import setLogIn from '../reducer/set-login-reducer';
import getUser from '../reducer/get-user-info-reducer';

export default combineReducers({
    todos: setTodo,
    isLoggedIn: setLogIn,
    user: getUser,
});