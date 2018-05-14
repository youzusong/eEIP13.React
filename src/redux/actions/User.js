
export function login(userData) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        userData: userData
    }
}



export function logout() {
    return {
        type: 'USER_LOGOUT'
    }
}
