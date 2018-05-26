import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, InputItem, Button, WhiteSpace, WingBlank  } from 'antd-mobile';
require('../Common/Style.css');

class LoginView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {username, password, logging, error} = this.props;
        const disabeld = !username || !password;

        console.log('LoginView - Render');

        return (
            <div>
                <WhiteSpace size="lg"/>

                <InputItem
                    type="text"
                    placeholder="請輸入用戶名"
                    value={username}
                    onChange={this.props.changeUsernameHandler}
                    clear
                >
                    帳號
                </InputItem>
                <InputItem
                    type="password"
                    value={password}
                    placeholder="請輸入密碼"
                    onChange={this.props.changePasswordHandler}
                    clear
                >
                    密碼
                </InputItem>

                <WhiteSpace size="lg"/>

                <WingBlank>
                    <Button
                        type="primary"
                        size="large"
                        disabled={disabeld || logging}
                        loading={logging}
                        onClick={this.props.loginHandler}
                    >
                        登入
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

LoginView.propTypes = {
    //logging: PropTypes.bool.isRequired,     //是否登入中
    //loginHandler: PropTypes.func.isRequired //登入处理方法
};

export default LoginView;
