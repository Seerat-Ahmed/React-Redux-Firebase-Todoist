import constant from '../constant';


export function _getUserinfo(name, email, uid) {
    const action = {
        type: constant.GET_USER_INFO,
        payload: {
            user: { name, email, uid },
        }
    }
    return action;
}