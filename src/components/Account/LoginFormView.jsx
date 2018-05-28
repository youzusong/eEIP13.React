import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, InputItem, Button, WhiteSpace, WingBlank, Toast  } from 'antd-mobile';
require('../Common/Style.css');

class LoginFormView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {username, password, logging} = this.props;
        const loginDisabled = logging || !username || !password;

        return (
            <div>
                <WhiteSpace size="lg"/>

                <InputItem
                    type="text"
                    placeholder="請輸入用戶名"
                    value={username}
                    disabled={logging}
                    onChange={this.props.onChangeUsername}
                    clear
                >
                    帳號
                </InputItem>
                <InputItem
                    type="password"
                    value={password}
                    placeholder="請輸入密碼"
                    disabled={logging}
                    onChange={this.props.onChangePassword}
                    clear
                >
                    密碼
                </InputItem>

                <WhiteSpace size="lg"/>

                <WingBlank>
                    <Button
                        type="primary"
                        size="large"
                        disabled={loginDisabled}
                        onClick={this.props.onLogin}
                    >
                        {logging ? '登入中...' : '登入'}
                    </Button>
                </WingBlank>

                <WhiteSpace size="lg"/>

                <WingBlank>
                    <Flex>
                        <Flex.Item>
                            <div className="txt-left">
                                <Link to="/account/register" className="default">會員註冊</Link>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="txt-right">
                                <Link to="/account/password" className="default">找回密碼</Link>
                            </div>
                        </Flex.Item>
                    </Flex>
                </WingBlank>

            </div>
        );
    }
}

LoginFormView.propTypes = {
    username: PropTypes.string,          //登入帳號
    password: PropTypes.string,          //登入密碼
    logging: PropTypes.bool.isRequired,  //登入中
    onChangeUsername: PropTypes.func,    //更改登入帳號
    onChangePassword: PropTypes.func,    //更改登入密碼
    onLogin: PropTypes.func.isRequired   //執行登入
};

export default LoginFormView;
