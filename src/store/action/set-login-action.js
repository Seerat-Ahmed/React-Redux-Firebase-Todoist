import constant from '../constant';

export function _setLoginState(flag) {
    const action = {
        type: constant.SET_LOGIN_STATE,
        payload: {
            flag: flag
        }
    }
    return action;
}