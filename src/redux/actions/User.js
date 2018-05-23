import * as UserActions from 'root/redux/constants/User';

export function login(userData) {
    return {
        type: UserActions.USER_LOGIN,
        userData: userData
    }
}

export function logout() {
    return {
        type: UserActions.USER_LOGOUT
    }
}

export function loginAysnc(data) {
    return (dispath, getState) => {
        dispath({type: 'LOGIN_REQUEST'});
        setTimeout(() => {
            try {
                dispath({type: 'LOGIN_SUCCESS', userData: {username: '123456'}});
            }
            catch {
                dispath({type: 'LOGIN_ERROR', errorMsg: '登入失敗'});
            }
        }, 2000);

    };
}
