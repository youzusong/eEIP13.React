import React from 'react';
import {connect} from 'react-redux';
import fetch  from 'isomorphic-fetch';
import * as UserActions from 'root/redux/constants/User';
import DefaultLayout from 'root/containers/Common/DefaultLayout';
import LoginView from 'root/components/Account/LoginView';

class AccountLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logging: false
        }

        this.loginHandler = this.loginHandler.bind(this);
    }

    render() {
        const {logging} = this.state;

        return (
            <DefaultLayout pageTitle="會員登入">
                <LoginView logging={logging} loginHandler={this.loginHandler} />
            </DefaultLayout>
        );
    }

    componentWillMount() {
        // 如果已登入，则跳转到用户中心
        if (this.props.logged) {
            this.props.history.push('/user/index');
        }
    }

    // 登入
    loginHandler(username, passowrd) {
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
    }
}

function mapStateToProps(store) {
    return {
        logged: store.user.logged
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userData) => {
            dispatch({type: UserActions.USER_LOGIN, userData: userData})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
