import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import fetch  from 'isomorphic-fetch';

import DefaultLayout from 'root/containers/Common/DefaultLayout';
import LoginView from 'root/components/Account/LoginView';

import * as UserAction from 'root/redux/actions/UserAction';
import * as CommonAction from "root/redux/actions/CommonAction";

class AccountLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null, //登入帳號
            password: null, //登入密碼
            logging: false
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    render() {

        const {username, password, logging} = this.state;

        return (
            <DefaultLayout pageTitle="會員登入">
                <LoginView
                    username={username}
                    password={password}
                    logging={logging}
                    errorCloseHandler={this.errorCloseHandler}
                    loginHandler={this.loginHandler}
                    changeUsernameHandler={this.changeUsernameHandler}
                    changePasswordHandler={this.changePasswordHandler}/>
            </DefaultLayout>
        );
    }

    componentWillMount() {
        // 如果已登入，则跳转到用户中心
        if (this.props.user.logged) {
            this.props.history.push('/user/index');
        }
    }

    //更改登入帳號
    changeUsernameHandler(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            username: value
        });
    }

    //更改登入密碼
    changePasswordHandler(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            password: value
        });
    }

    //執行登入
    loginHandler() {
        if (this.state.logging)
            return;

        const postData = {
            username: this.state.username,
            password: this.state.password
        };

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
                Toast.fail(json.error, 2);
                //this.props.toggleError(json.error);
            } else {
                Toast.hide();

                //登入
                this.props.login({
                    username: json.username
                });

                //頁面跳轉
                let fromUrl = '';
                if (this.props.location.state != null)
                    fromUrl = this.props.location.state.from;

                if (!fromUrl) fromUrl = '/';
                this.props.history.push(fromUrl);
            }
        }).catch(err => {
            Toast.fail('登入失敗', 2);
        });
    }
}

function mapStateToProps(store) {
    return {
        user: store.user
    }
}

function mapDispatchToProps(dispatch) {
    return Object.assign({},
        bindActionCreators(UserAction.Events, dispatch),
        bindActionCreators(CommonAction.Events, dispatch)
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
