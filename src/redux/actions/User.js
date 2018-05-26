import * as UserActions from 'root/redux/constants/User';

export function login(userData) {
    return {
        type: UserActions.USER_LOGIN,
        action: userData
    }
}

export function logout() {
    return {
        type: UserActions.USER_LOGOUT
    }
}

export function loginAysnc(data) {
    return (dispath, getState) => {

        console.log('登入名稱：' + data.username);
        console.log('登入密碼：' + data.password);

        dispath({type: UserActions.LOGIN_REQUEST});
        setTimeout(() => {
            try {
                throw new Error('test');
                dispath({type: UserActions.LOGIN_SUCCESS, payload: {username: '123456'}});
            }
            catch(ex) {
                dispath({type: UserActions.LOGIN_ERROR, payload: '登入失敗'});
            }
        }, 2000);

    };
}
