import React from 'react';
import { Picker, List, Flex, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
require('../Common/Style.css');

const identityItems = [
    {
        value: 'Personal',
        label: '個人'
    },
    {
        value: 'Company',
        label: '公司'
    }
];

class RegisterFormView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldProps } = this.props.form;
        const { formData } = this.props;

        return (
            <div>
                <Picker data={identityItems} cols={1} {...getFieldProps('identity')}>
                    <List.Item arrow="horizontal">使用身份</List.Item>
                </Picker>

                <InputItem
                    type="text"
                    placeholder="請輸入帳號"
                    value={formData.username}
                    onChange={this.props.onChangeUsername}
                    clear
                >
                    帳號
                </InputItem>
                <InputItem
                    type="password"
                    value={formData.password}
                    placeholder="請輸入密碼"
                    onChange={this.props.onChangePassword}
                    clear
                >
                    密碼
                </InputItem>
                <InputItem
                    type="password"
                    value={formData.email}
                    placeholder="請輸入信箱"
                    onChange={this.props.onChangeEmail}
                    clear
                >
                    信箱
                </InputItem>

            </div>
        );
    }
}

export default createForm()(RegisterFormView);
