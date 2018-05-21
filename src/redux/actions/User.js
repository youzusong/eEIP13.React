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
