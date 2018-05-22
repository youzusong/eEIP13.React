import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>商品搜索頁面</h1>
                <input type="text" ref="keywords" placeholder="請輸入關鍵字..." />
            </div>
        )
    }
}

export default Search;
