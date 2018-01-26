import constant from '../constant';

export default (state = false, action) => {
    switch (action.type) {
        case constant.SET_LOGIN_STATE:
            return action.payload.flag;
        default:
            return state;
    }
}