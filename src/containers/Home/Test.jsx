import React from 'react';
import { Link } from 'react-router-dom';

class HomeTest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            logging: false,
            error: ''
        };

        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);
    }

    render() {
        const {username, password, logging} = this.state;
        const loginDisabled = logging || !username || !password;

        return (
            <div>
                <div>
                    <label>用戶名：</label>
                    <input type="text" value={username} ref="username"
                           onChange={this.changeUsernameHandler}/>
                </div>
                <div>
                    <label>密碼：</label>
                    <input type="password" value={this.state.password} ref="password"
                           onChange={this.changePasswordHandler}/>
                </div>
                <div>
                    <button type="button" onClick={this.login} disabled={loginDisabled}>登入</button>
                </div>
            </div>
        );
    }

    changeUsernameHandler(e) {
        let username = e.target.value.replace(/\s/g, '');
        this.setState({
            username: username
        });
    }

    changePasswordHandler(e){
        let password = e.target.value.replace(/\s/g, '');
        this.setState({
            password: password
        });
    }

    login(){
        const{username, password} = this.state;

        this.setState({
            logging:true
        });

        setTimeout(()=>{
            this.setState({
                logging:false
            });

            alert('登入成功');

        },1000);
    }
}

export default HomeTest;
