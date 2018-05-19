import React from 'react';
import PropTypes from 'prop-types';

class LoginPanel extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {

        const {logging} = this.props;

        return (
            <div>
                <h1>會員登入</h1>

                <input type="text" ref="username" disabled={logging}/>
                <br/>
                <input type="password" ref="password" disabled={logging}/>
                <br/>

                <button type="button" onClick={this.login} disabled={logging}>
                    {logging ? '登入中...' : '登入'}
                </button>
            </div>
        );
    }

    login() {
        this.props.loginHandler(this.refs.username, this.refs.password);
    }
}

LoginPanel.propTypes = {
    logging: PropTypes.bool.isRequired,     //是否登入中
    loginHandler: PropTypes.func.isRequired //登入处理方法
};

export default LoginPanel;
