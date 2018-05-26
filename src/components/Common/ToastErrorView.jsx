import React from 'react';
import { Toast } from 'antd-mobile';

class ToastErrorView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }

    componentDidMount() {
        console.log('ToastError - DidMount');
        const {error} = this.props;
        if (error) {
            Toast.fail(error, 2, this.props.onCloseHandler);
        }
    }

}

export default ToastErrorView;
