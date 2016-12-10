require('style/common/reset.css');
require('style/notice/notice.scss');

import React from 'react';

class Notice extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selected:1
        };
    }

    select(index){
        this.setState({
            selected:index
        });
    }

    render(){
        let left_line,right_line,
            left_style,right_style;

        if(this.state.selected && this.state.selected == 1){
            left_style = {color:'#f77922'};
            left_line = <div className="under_line"></div>;
        }else if(this.state.selected && this.state.selected == 2){
            right_style = {color:'#f77922'};
            right_line = <div className="under_line"></div>;
        }

        return (
            <div className="notice">
                <div className="header_container">
                    <div className="left" style={left_style} onClick={this.select.bind(this,1)}>
                        内容<span></span>
                        {left_line}
                    </div>
                    <div className="line"></div>
                    <div className="right" style={right_style} onClick={this.select.bind(this,2)}>
                        私信<span></span>
                        {right_line}
                    </div>
                </div>

                <div className="main_container">

                </div>
            </div>
        );
    }
}

export default Notice;
