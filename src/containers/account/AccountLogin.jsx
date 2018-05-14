import React from 'react';

class AccountLogin extends React.Component{

    render(){
        return(
            <div>
                <input type="text" ref="username" />
                <br />
                <input type="password" ref="password" />

                <button type="button" onclick={() => this.login.bind(this)}>登入</button>
            </div>
        );
    }

    login(){
        alert('登入:' + this.refs.username.value);
    }
}

export default AccountLogin;
