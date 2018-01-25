import constant from '../constant';


export function _addTodoItem(todo) {
    const action = {
        type: constant.ADD_TODO_ITEM,
        payload: {
            todo: todo,
        }
    }

    return action;
}

export function _deleteTodoItem(id) {
    const action = {
        type: constant.DELETE_TODO_ITEM,
        payload: {
            id: id,
        }
    }

    return action;
}

export function _deleteAll() {
    const action = {
        type: constant.DELETE_ALL,
    }

    return action;
}

export function _update(todo, id) {
    const action = {
        type: constant.EDIT_TODO,
        payload: { todo, id }
    }

    return action;
}