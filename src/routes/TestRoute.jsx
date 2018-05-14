import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

class TextRoute extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        const {component:Component, url, logged = true } = this.props;
        return (
            <Route render={props => (
                logged
                    ? (<Component {...props} />)
                    : (<Redirect to={{pathname: '/user/login', state:{from: props.location.pathname }}}/>)
            )}/>
        );
    }
}

export default TextRoute;