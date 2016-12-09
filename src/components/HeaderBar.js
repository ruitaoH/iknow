require('../styles/headerBar.scss');

import React from 'react';

class HeaderBar extends React.Component {
    render(){
        let afterContent;

        if(this.props.afterContent){
            afterContent = this.props.afterContent
        }else if(this.props.afterDot){
            afterContent = <i>&#xe68a;</i>
        }

        return (
            <div className="headerBar">
                <img src={require('../images/left_arrow.png')} />

                <p>{this.props.content}</p>

                <a>{afterContent}</a>
            </div>
        );
    }
}

export default HeaderBar;
