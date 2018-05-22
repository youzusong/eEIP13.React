import React from 'react';
import { Toast } from 'antd-mobile';
import DefaultLayout from 'root/containers/Common/DefaultLayout';
import PwdStepOneView from 'root/components/Account/PwdStepOneView';

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checking: false,
            checkResult: null
        };

        this.checkAccountHandler = this.checkAccountHandler.bind(this);
    }

    render() {
        return (
            <DefaultLayout pageTitle="找回密碼">
                <PwdStepOneView
                    checking={this.state.checking}
                    checkResult={this.state.checkResult}
                    checkAccountHandler={this.checkAccountHandler}/>
            </DefaultLayout>
        )
    }

    checkAccountHandler(account) {
        if (this.state.checking) {
            return;
        }

        if (!account) {
            Toast.info('請輸入帳號', 2);
            return;
        }

        this.setState({
            checking: true
        });

        setTimeout(() => {
            this.setState({
                checking: false,
                checkResult: false
            });

            Toast.fail('該帳號不存在', 2);
        }, 2000);
    }
}

export default Password;