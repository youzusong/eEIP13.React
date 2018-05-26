import * as UserActions from 'root/redux/constants/User';

let initState = {
    logging: false,
    logged: false,
    error: null,
    data: null
};

function userReducer(state = initState, action) {
    switch (action.type) {

        case UserActions.LOGIN_REQUEST:
            return Object.assign({}, state, {logging: true, logged: false});

        case UserActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {logging: false, logged: true, data: action.payload});

        case UserActions.LOGIN_ERROR:
            return Object.assign({}, state, {logging: false, logged: false, error: action.payload});

        default:
            return Object.assign({}, state);
    }
}

export default userReducer;
