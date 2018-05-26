import * as CommonAction from '../actions/CommonAction';

let initState= {
    error: null,
    loading: false
};

const commonReducer = (state = initState, action) => {
    switch (action.type) {
        case CommonAction.Types.TOGGLE_ERROR:
            return Object.assign({}, state, {error: action.payload});

        case CommonAction.Types.TOGGLE_LOADING:
            return Object.assign({}, state, {loading: action.payload});

        default:
            return Object.assign({}, state);
    }
};

export default commonReducer;
