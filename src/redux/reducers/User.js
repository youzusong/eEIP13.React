let initState = {
    isLogging: false,
    errorMsg: null,
    userData: null
};

function userReducer(state = initState, action) {
    switch (action.type) {

        case 'USER_LOGIN_REQUEST':
            return Object.assign({}, initState, {isLogging: true});

        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, initState, {isLogging: false}, {userData: action.userData});

        case 'USER_LOGIN_ERROR':
            return Object.assign({}, initState, {isLogging: false}, {errorMsg: action.errorMsg});

        default:
            return Object.assign({}, initState);
    }
}

export default userReducer;
