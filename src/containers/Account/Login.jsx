import React from 'react';
import {connect} from 'react-redux';
import fetch  from 'isomorphic-fetch';
import * as UserActions from 'root/redux/actions/User';
import DefaultLayout from 'root/containers/Common/DefaultLayout';
import LoginView from 'root/components/Account/LoginView';

class AccountLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    render() {

        const {logging, error} = this.props.user;
        const{username,password}=this.state;

        return (
            <DefaultLayout pageTitle="會員登入">
                <LoginView
                    username={username}
                    password={password}
                    logging={logging}
                    error={error}
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

    changeUsernameHandler(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            username: value
        });
    }

    changePasswordHandler(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            password: value
        });
    }

    // 登入
    loginHandler() {
        const {username, password} = this.state;
        this.props.loginAysnc({
            username: username,
            password: password
        });

        /*
        if (this.state.logging)
            return;

        const postData = {
            username: username,
            password: passowrd
        };

        this.setState({
            logging: true
        });

        try {
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
                    alert(json.error);
                    this.setState({
                        logging: false
                    });
                } else {
                    alert(json.username + '登入成功');

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
                alert(err);
                this.setState({
                    logging: false
                });
            });
        }
        catch (ex) {
            console.log(ex);
        }
        */
    }
}

function mapStateToProps(store) {
    return {
        logged: store.user.logged,
        user: store.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginAysnc: (data) => {
            console.log('mapDispatchToProps - loginAsync');
            dispatch(UserActions.loginAysnc(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
