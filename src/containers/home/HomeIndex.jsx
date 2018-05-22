import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import fetch  from 'isomorphic-fetch';
import * as RoutePath from 'root/constants/RoutePath';
import RouteUtil from 'root/utils/RouteUtil';

class HomeIndex extends React.Component {

    constructor(props) {
        super(props);
        this.clickSearch = this.clickSearch.bind(this);
    }

    render() {
        return (
            <div>
                首頁

                <br/>
                <input type="text" placeholder="商品搜索" onClick={this.clickSearch}/>

                <br/>
                <Link to='/user/index'>個人中心</Link>
                <br/>
                <Link to='/home/test'>Test Page</Link>
                <br/>
                <Link to='/user/login'>User Login</Link>

                <h2>{RouteUtil.BuildPath(RoutePath.PROD_DETAIL, {id: 123, name: 'zzz'})}</h2>

            </div>
        );
    }

    clickSearch() {
        this.props.history.push('/search');
    }

}

export default withRouter(HomeIndex);
