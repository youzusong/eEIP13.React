import React from 'react';
import PropTypes from 'prop-types';
import { InputItem, Button, WhiteSpace, WingBlank  } from 'antd-mobile';

class LoginPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            disabled: true
        };

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.login = this.login.bind(this);
    }

    render() {

        const {logging} = this.props;

        return (
            <div>
                <WhiteSpace size="lg"/>

                <InputItem
                    type="text"
                    placeholder="請輸入用戶名"
                    value={this.state.username}
                    onChange={this.changeUsername}
                    clear
                >
                    帳號
                </InputItem>
                <InputItem
                    type="password"
                    value={this.state.password}
                    placeholder="請輸入密碼"
                    onChange={this.changePassword}
                    clear
                >
                    密碼
                </InputItem>

                <WhiteSpace size="lg"/>

                <WingBlank>
                    <Button
                        type="primary"
                        size="large"
                        disabled={this.state.disabled || logging}
                        loading={logging}
                        onClick={this.login}
                    >
                        登入
                    </Button>
                </WingBlank>

                <WhiteSpace size="lg"/>

                <WingBlank>
                    <a>快速註冊</a>
                    <a>找回密碼</a>
                </WingBlank>

            </div>
        );
    }


    changeUsername(value) {
        const username = value.replace(/\s/g, '');
        const password = this.state.password;
        this.setState({
            username: username,
            disabled: !username || !password
        });
    }

    changePassword(value) {
        const password = value.replace(/\s/g, '');
        const username = this.state.username;
        this.setState({
            password: password,
            disabled: !username || !password
        });
    }

    login() {

        this.props.loginHandler(this.state.username, this.state.password);
    }
}

LoginPanel.propTypes = {
    logging: PropTypes.bool.isRequired,     //是否登入中
    loginHandler: PropTypes.func.isRequired //登入处理方法
};

export default LoginPanel;
