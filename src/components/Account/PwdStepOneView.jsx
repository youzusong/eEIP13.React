import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { InputItem, Button, WhiteSpace, WingBlank,Toast  } from 'antd-mobile';
require('../Common/Style.css');

const PwdStepOneView = (props) => {

    return (
        <div>
            <WhiteSpace size="lg"/>

            <InputItem
                type="text"
                placeholder="請輸入帳號"
                value={props.username}
                onChange={props.onChangeUsername}
                clear
            >
                帳號
            </InputItem>
            <InputItem
                type="text"
                placeholder="請輸入信箱"
                value={props.email}
                onChange={props.onChangeEmail}
                clear
            >
                信箱
            </InputItem>

            <WhiteSpace size="lg"/>

            <WingBlank>
                <Button
                    type="primary"
                    size="large"
                    disabled={props.checking || !props.username || !props.email}
                    onClick={props.onCheckAccount}
                >
                    {props.checking ? '驗證中...' : '完成驗證'}
                </Button>
            </WingBlank>

        </div>
    );
};

PwdStepOneView.propTypes = {
    username: PropTypes.string,           //用戶名
    email: PropTypes.string,              //信箱
    checking: PropTypes.bool,             //驗證中
    onChangeUsername: PropTypes.func,     //更改用戶名
    onChangeEmail: PropTypes.func,        //更改信箱
    onCheckAccount: PropTypes.func        //驗證處理方法
};

export default PwdStepOneView;