import React from 'react';
import { connect } from 'react-redux';

import * as RoutePath from 'root/constants/RoutePath';
import DefaultLayout from '../Common/DefaultLayout';
import LoginForm from './Partial/LoginForm';

class AccountLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <DefaultLayout pageTitle="會員登入">

                {/*登入框*/}
                <LoginForm/>

            </DefaultLayout>
        );
    }

    componentWillMount() {
        // 如果已登入，则跳转到用户中心
        if (this.props.user.logged) {
            this.props.history.push(RoutePath.USER_INDEX);
        }
    }
}

function mapStateToProps(store) {
    return {
        user: store.user
    }
}

export default connect(mapStateToProps, null)(AccountLogin);
