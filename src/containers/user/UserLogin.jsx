import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetch  from 'isomorphic-fetch';

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
            fetch('http://localhost:3000/user/login', {
                method: 'POST',
                mode: 'cors',
                body: 'username=' + username.value +'&password=' + password.value,
                //body: {'username' : username.value, 'password' : password.value },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    //'Content-Type': 'application/json'
                }
            }).then(res => {
                return res.json();
            }).then(json => {
                console.log(json);
            }).catch(err => {
                alert(err);
            });

            return;


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
