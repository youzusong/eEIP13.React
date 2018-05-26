import { combineReducers } from 'redux';
import commonReducer from './CommonReducer';
import userReducer from './UserReducer';

export default combineReducers({
    common: commonReducer,
    user: userReducer
});
