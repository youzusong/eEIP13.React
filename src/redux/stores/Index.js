import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from '../reducers/Index';
import thunk from 'redux-thunk';

const initState = {};

const appStore = createStore(
    appReducers,
    initState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default appStore;