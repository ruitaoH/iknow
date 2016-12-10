require('style/common/reset.css');
require('style/index/index.scss');

import React from 'react';

// import自定义组件
import Search from './Search';
import ListItem from './ListItem';

class Index extends React.Component{
    render(){
        return (
            <div>
                <header>
                    <Search />
                </header>

                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        );
    }
}

export default Index;
