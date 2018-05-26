import React from 'react';
import { Toast } from 'antd-mobile';

class ToastLoadingView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }

    componentDidMount() {
        console.log('ToastLoadding - Did Mount');
        if (this.props.loading) {
            Toast.loading(null, 0);
        } else {
            Toast.hide();
        }
    }
}

export default ToastLoadingView;
