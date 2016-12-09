require('../styles/reset.css');
require('../styles/home.scss');

import React from 'react';

// import自定义组件
import Search from './Search';
import Menu from './Menu';
import ListItem from './ListItem';

class Home extends React.Component{
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

                <footer>
                    <Menu />
                </footer>
            </div>
        );
    }
}

export default Home;
