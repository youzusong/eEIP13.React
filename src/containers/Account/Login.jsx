import React from 'react';
import {connect} from 'react-redux';
import fetch  from 'isomorphic-fetch';
import * as UserAction from 'root/redux/actions/UserAction';
import DefaultLayout from 'root/containers/Common/DefaultLayout';
import ErrorView from 'root/components/Common/ErrorView';
import LoginView from 'root/components/Account/LoginView';

class AccountLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            logging: false,
            error: null
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.errorCloseHandler = this.errorCloseHandler.bind(this);
    }

    render() {

        const {username, password, logging, error} = this.state;

        return (
            <DefaultLayout pageTitle="會員登入">
                <LoginView
                    username={username}
                    password={password}
                    logging={logging}
                    error={error}
                    errorCloseHandler={this.errorCloseHandler}
                    loginHandler={this.loginHandler}
                    changeUsernameHandler={this.changeUsernameHandler}
                    changePasswordHandler={this.changePasswordHandler}/>
            </DefaultLayout>
        );
    }

    componentWillMount() {
        // 如果已登入，则跳转到用户中心
        if (this.props.logged) {
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

        this.setState({logging: true});

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
                console.log('ss');
                this.setState({
                    logging: false,
                    error: json.error
                });
            } else {
                // dispatch
                this.props.login({
                    username: json.username
                });

                // 页面跳转
                let fromUrl = '';
                if (this.props.location.state != null)
                    fromUrl = this.props.location.state.from;

                if (!fromUrl) fromUrl = '/';
                this.props.history.push(fromUrl);
            }
        }).catch(err => {
            //console.log(err);
            this.setState({
                logging: false,
                error: '系統錯誤'
            });
        });
    }

    //關閉錯誤
    errorCloseHandler() {
        this.setState({error: null});
    }
}

function mapStateToProps(store) {
    return {
        user: store.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: UserAction.Events.login
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
