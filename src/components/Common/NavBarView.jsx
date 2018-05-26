import React from 'react';
import { withRouter} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';

class NavBarView extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.back()}
                rightContent={[]}
            >{this.props.title}</NavBar>
        )
    }

    back(){
        this.props.history.goBack(-1);
    }
}

export default withRouter(NavBarView);