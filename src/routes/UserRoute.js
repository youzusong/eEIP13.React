import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class UserRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {logged, component: Component} = this.props;

        return (
            <Route render={props => (
                logged
                    ? (<Component {...props} />)
                    : (<Redirect to={{pathname: '/user/login', state: {from: props.location.pathname}}}/>)
            )}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        logged: state.user.logged
    }
}

export default connect(mapStateToProps)(UserRoute);
