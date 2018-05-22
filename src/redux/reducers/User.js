import * as UserActions from 'root/redux/constants/User';

let initState = {
    logged: false,
    userData: null
};

function userReducer(state = initState, action) {
    switch (action.type) {

        case UserActions.USER_LOGIN:
            return Object.assign({}, state, {logged: true}, {userData: action.userData});

        case UserActions.USER_LOGOUT:
            return Object.assign({}, state, {logged: false, userData: null});

        default:
            return Object.assign({}, state);
    }
}

export default userReducer;
