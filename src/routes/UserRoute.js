import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserRoute = (path, component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                auth: false
            }
        }

        render() {
            return (
                <Route path='/user/index' component={component} />
                /*
                <Route {...rest} render={props => (
                    this.state.auth
                        ? (<Component {...props} />)
                        : (<Redirect to={{pathname: '/user/login', state: {from: props.location}}}/>))}
                />*/
            );
        }

        componentDidMount(){

        }
    }
}

export default UserRoute;
