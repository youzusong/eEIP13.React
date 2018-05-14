import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AccountLogin extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {

        return (
            <div>

                <input type="text" ref="username"/>
                <br/>
                <input type="password" ref="password"/>

                <button type="button" onClick={this.login}>登入</button>
            </div>
        );
    }

    componentWillMount() {
        if (this.props.logged) {
            this.props.history.push('/user/index');
        }
    }

    login() {
        const {username, password} = this.refs;

        try {
            // 执行异步登入...
            this.props.login({
                uname: username.value
            });

            // 页面跳转
            let fromUrl = '';
            if (this.props.location.state != null)
                fromUrl = this.props.location.state.from;

            if (!fromUrl) fromUrl = '/';
            this.props.history.push(fromUrl);
        }
        catch (ex) {

        }
    }
}

function mapStateToProps(store) {
    return {
        logged: store.user.userData != null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userData) => {
            dispatch({type: 'USER_LOGIN_SUCCESS', userData: userData})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
