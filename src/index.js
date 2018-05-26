import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from './redux/stores/Index';

import HomeIndex from './containers/Home/Index';
import ProductSearch from './containers/Product/Search';
import ProductDetail from './containers/Product/Detail';
import AccountLogin from './containers/Account/Login';
import AccountRegister from './containers/Account/Register';
import AccountPassword from './containers/Account/Password';
import UserIndex from './containers/User/Index';

import HomeTest from './containers/Home/Test';
import UserRoute from './routes/UserRoute';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Provider store={appStore}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={HomeIndex} />

                <Route path='/search' component={ProductSearch} />
                <Route path='/prod/:id' component={ProductDetail} />

                <Route path='/account/login' component={AccountLogin} />
                <Route path='/account/register' component={AccountRegister} />
                <Route path='/account/password' component={AccountPassword} />

                <UserRoute path='/user/index' component={UserIndex} />
                <UserRoute path='/home/test' component={HomeTest} />

            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);