import constant from '../constant';


export default (state = [], action) => {
    switch (action.type) {
        case constant.ADD_TODO_ITEM:
            {
                let todos = [...state, action.payload.todo]
                return todos;
            }
        case constant.DELETE_BY_KEY:
            {
                state.map((todo, index) => {
                    if (todo.key === action.payload.key) {
                        state.splice(index, 1);
                        console.log(todo);
                        return [...state];
                    }
                });
                return [...state];
            }
        case constant.DELETE_TODO_ITEM:
            {
                let id = action.payload.id;
                state.splice(id, 1)
                return [...state];
            }
        case constant.DELETE_ALL:
            {
                return [];
            }
        case constant.GET_TODO_LIST:
            {
                let todo = {
                    todo: action.payload.todo,
                    key: action.payload.key,
                }
                return [...state, todo];
            }
        case constant.EDIT_TODO:
            {
                let todo = action.payload.todo;
                let id = action.payload.id;
                state.splice(id, 1, todo);
                return [...state];
            }
        default:
            return state;
    }
}