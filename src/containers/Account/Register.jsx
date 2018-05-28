import React from 'react';
import DefaultLayout from '../Common/DefaultLayout';
import RegisterForm from './Partial/RegisterForm';

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <DefaultLayout pageTitle="會員註冊">
                <RegisterForm/>
            </DefaultLayout>
        )
    }
}

export default Register;