import React from 'react';
import { bindActionCreators } from 'redux';
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
        this.props.logout();
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions.Events, dispatch);
}

export default connect(null, mapDispatchToProps)(UserIndex);
