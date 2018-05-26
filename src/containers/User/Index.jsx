import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as UserActions from 'root/redux/actions/UserAction';

class UserIndex extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    render(){
        return(
            <div>
                用戶中心

                <br />

                <Link to='/'>返回首页</Link>

                <br />
                <button type="button" onClick={this.logout}>登出</button>

            </div>
        );
    }

    logout() {
        alert('sss');
        this.props.logout();
    }

}

function mapDispatchToProps(dispatch) {
    return {
        logout: UserActions.Events.logout
    }
}

export default connect(null, mapDispatchToProps)(UserIndex);
