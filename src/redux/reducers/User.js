let initState = {
    isLogging: false,
    loginError: null,
    userData: null
};

function userReducer(state = initState, action) {
    switch (action.type) {

        case 'USER_LOGIN_REQUEST':
            return Object.assign({}, state, {isLogging: true});

        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, state, {isLogging: false}, {userData: action.userData});

        case 'USER_LOGIN_ERROR':
            return Object.assign({}, state, {isLogging: false}, {loginError: action.loginError});

        default:
            return Object.assign({}, state);
    }
}

export default userReducer;
