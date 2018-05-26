import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'antd-mobile';

class ErrorView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }

    componentDidMount() {
        Toast.fail(this.props.message, 2, this.props.closeHandler);
    }
}

ErrorView.propTypes = {
    message: PropTypes.string.isRequired,       //錯誤訊息
    closeHandler : PropTypes.func.isRequired    //关闭后回调
};

export default ErrorView;