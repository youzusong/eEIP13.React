import React from 'react';
import { Link } from 'react-router-dom';

class UserIndex extends React.Component{

    render(){
        return(
            <div>
                用戶中心

                <br />

                <Link to='/'>返回首页</Link>

            </div>
        );
    }


}

export default UserIndex;
