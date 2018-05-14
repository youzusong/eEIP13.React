import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from './redux/stores/Index';

import HomeIndex from './containers/home/HomeIndex';
import UserLogin from './containers/user/UserLogin';
import UserIndex from './containers/user/UserIndex';

import UserRoute from './routes/UserRoute';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={appStore}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={HomeIndex} />
                <Route path='/user/login' component={UserLogin} />
                <UserRoute path='/user/index' component={UserIndex} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);