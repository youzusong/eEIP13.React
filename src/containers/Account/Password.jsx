import React from 'react';
import DefaultLayout from '../Common/DefaultLayout';
import PwdStepOne from './Partial/PwdStepOne';

class Password extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultLayout pageTitle="找回密碼">

                {/* 步驟一 */}
                <PwdStepOne/>

            </DefaultLayout>
        )
    }
}

export default Password;
