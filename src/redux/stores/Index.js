import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from '../reducers/Index';
import thunk from 'redux-thunk';

const getPreState = () => {
    return {

    };
};

const preState = getPreState();

const appStore = createStore(
    appReducers,
    preState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default appStore;