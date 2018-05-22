import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from './redux/stores/Index';

import HomeIndex from './containers/home/HomeIndex';
import ProductSearch from './containers/product/Search';
import ProductDetail from './containers/product/Detail';
import UserLogin from './containers/user/UserLogin';
import UserIndex from './containers/user/UserIndex';

import HomeTest from './containers/home/HomeTest';
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
                <Route path='/user/login' component={UserLogin} />

                <UserRoute path='/user/index' component={UserIndex} />
                <UserRoute path='/home/test' component={HomeTest} />

            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);