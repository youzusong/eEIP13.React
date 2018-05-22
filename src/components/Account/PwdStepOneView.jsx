import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { InputItem, Button, WhiteSpace, WingBlank,Toast  } from 'antd-mobile';
require('../Common/Style.css');

class PwdStepOneView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: null
        };

        this.changeAccount = this.changeAccount.bind(this);
        this.checkAccount = this.checkAccount.bind(this);
    }

    render() {
        const {checking,checkResult} = this.props;

        return (
            <div>
                <WhiteSpace size="lg"/>

                <InputItem
                    type="text"
                    placeholder="請輸入用戶名"
                    value={this.state.account}
                    onChange={this.changeAccount}
                    clear
                >
                    帳號
                </InputItem>

                <WhiteSpace size="lg"/>

                <WingBlank>
                    <Button
                        type="primary"
                        size="large"
                        loading={checking}
                        disabled={checking}
                        onClick={this.checkAccount}
                    >
                        {
                            checking
                                ? '驗證中...'
                                : (checkResult == null ? '點擊完成驗證' : (checkResult ? '驗證成功' : '驗證失敗'))
                        }
                    </Button>
                </WingBlank>

            </div>
        );
    }

    changeAccount(value) {
        const account = value.replace(/\s/g, '');
        this.setState({
            account: account
        });
    }

    checkAccount() {
        this.props.checkAccountHandler(this.state.account);
    }
}

PwdStepOneView.propTypes = {
    checking: PropTypes.bool.isRequired,            //驗證中
    checkResult: PropTypes.bool,                    //驗證結果
    checkAccountHandler: PropTypes.func.isRequired  //驗證處理方法
};

export default PwdStepOneView;