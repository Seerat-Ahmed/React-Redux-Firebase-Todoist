import constant from '../constant';

export default (state = {}, action) => {
    switch (action.type) {
        case constant.GET_USER_INFO:
            return action.payload.user;
        default:
            return state;
    }
}