import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import fetch  from 'isomorphic-fetch';

import * as UserAction from 'root/redux/actions/UserAction';
import RegisterFormView from 'root/components/Account/RegisterFormView';

class  RegisterForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: null,
                password: null,
                email: null
            }
        }
    }

    render(){
        return(
            <div>
                <RegisterFormView formData={this.state.formData} />
            </div>);
    }
}

export default RegisterForm;
