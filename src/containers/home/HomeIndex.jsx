import React from 'react';
import { Link } from 'react-router-dom';
import fetch  from 'isomorphic-fetch';

class HomeIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                首頁

                <br/>
                <Link to='/user/index'>個人中心</Link>
                <br/>
                <Link to='/home/test'>Test Page</Link>
                <br/>
                <Link to='/user/login'>User Login</Link>
            </div>
        );
    }

}

export default HomeIndex;
