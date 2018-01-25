import constant from '../constant';


export default (state = [], action) => {
    switch (action.type) {
        case constant.ADD_TODO_ITEM:
            {
                let todos = [...state, action.payload.todo]
                return todos;
            }
        case constant.DELETE_TODO_ITEM:
            {
                let id = action.payload.id;
                let todos = state.splice(id, 1)
                return [...todos];
            }
        case constant.DELETE_ALL:
            {
                return [];
            }
        default:
            return state;
    }
}