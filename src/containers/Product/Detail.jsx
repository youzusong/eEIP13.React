import React from 'react';

class Detail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // 从路由获取商品编号
        const prodId = this.props.match.params.id;

        return(
            <div>
                商品詳情頁 -- <span>{prodId}</span>
            </div>
        );
    }
}

export default Detail;