import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import fetch  from 'isomorphic-fetch';

import * as UserAction from 'root/redux/actions/UserAction';
import LoginFormView from 'root/components/Account/LoginFormView';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null, //登入帳號
            password: null, //登入密碼
            logging: false  //登入中
        };

        this.onLogin = this.onLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    render() {

        const {username, password, logging} = this.state;

        return (
            <div>
                <LoginFormView
                    username={username}
                    password={password}
                    logging={logging}
                    onChangeUsername={this.onChangeUsername}
                    onChangePassword={this.onChangePassword}
                    onLogin={this.onLogin}
                />
            </div>
        );
    }

    //獲取來源URL
    getFromUrl() {
        let fromUrl = '';
        if (this.props.location.state != null)
            fromUrl = this.props.location.state.from;

        if (!fromUrl) fromUrl = '/';
        return fromUrl;
    }

    //更改登入帳號
    onChangeUsername(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            username: value
        });
    }

    //更改登入密碼
    onChangePassword(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            password: value
        });
    }

    //執行登入
    onLogin() {
        if (this.state.logging)
            return;

        const postData = {
            username: this.state.username,
            password: this.state.password
        };

        this.setState({logging: true});
        Toast.loading(null, 0);

        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(res => {
            return res.json();
        }).then(json => {

            if (json.error) {
                this.setState({logging: false});
                Toast.fail(json.error, 2);
            } else {
                Toast.hide();

                //登入
                this.props.login({
                    username: json.username
                });

                //頁面跳轉
                const fromUrl = this.getFromUrl();
                this.props.history.push(fromUrl);
            }
        }).catch(err => {
            this.setState({logging: false});
            Toast.fail('登入失敗', 2);
        });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserAction.Events, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
