import * as UserAction from '../actions/UserAction';

let initState= {
    logged: false,
    data: null
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case UserAction.Types.USER_LOGIN:
            return Object.assign({}, state, {logged: true, data: action.payload});

        case UserAction.Types.USER_LOGOUT:
            return Object.assign({}, state, {logged: false, data: null});

        default:
            return Object.assign({}, state);
    }
};

export default userReducer;
