import React from 'react';

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

                <button type="button" onClick={this.login} disabled={logging}>登入</button>
            </div>
        );
    }

    login() {
        this.props.loginHandler(this.refs.username, this.refs.password);
    }
}

export default LoginPanel;
