import React from 'react';
import { Toast } from 'antd-mobile';
import fetch  from 'isomorphic-fetch';

import PwdStepOneView from 'root/components/Account/PwdStepOneView';

class PwdStepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            checking: false
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onCheckAccount = this.onCheckAccount.bind(this);
    }

    render() {
        return (
            <div>
                <PwdStepOneView
                    username={this.state.username}
                    email={this.state.email}
                    checking={this.state.checking}
                    onChangeUsername={this.onChangeUsername}
                    onChangeEmail={this.onChangeEmail}
                    onCheckAccount={this.onCheckAccount}
                />
            </div>
        );
    }

    onChangeUsername(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            username: value
        });
    }

    onChangeEmail(value) {
        value = value.replace(/\s/g, '');
        this.setState({
            email: value
        });
    }

    onCheckAccount() {
        if (this.state.checking) {
            return;
        }

        Toast.loading(null, 0);

        this.setState({checking: true});

        const postData = {
            username: this.state.username,
            email: this.state.email
        };

        setTimeout(() => {
            this.setState({checking: false,});

            Toast.fail('該帳號不存在', 2);

        }, 1000);

    }
}

export default PwdStepOne;
