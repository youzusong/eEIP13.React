import React from 'react';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

class NavBarPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onGoBack = this.onGoBack.bind(this);
    }

    render() {
        return (
            <NavBar
                mode="dark"
                icon={<Icon type="left"/>}
                onLeftClick={this.onGoBack}
            >{this.props.title}</NavBar>
        )
    }

    onGoBack() {
        this.props.history.goBack(-1);
    }
}

NavBarPanel.propTypes = {
    title: PropTypes.string.isRequired  //導航標題
};

export default withRouter(NavBarPanel);