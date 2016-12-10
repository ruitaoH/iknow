require('style/subject/exhibition.scss');

import React from 'react';

import ControllerUnit from './ControllerUnit'

class Exhibition extends React.Component{
    render() {
        return (
            <div className="exhibition">
                <div className="container">
                    <p>改了给金额输卵管ie缩颈股栗色格雷格角色i类高爱国</p>

                    <div className="like_read">
                        <span>123</span>
                        <span>123</span>
                    </div>
                </div>

                <div className="circle_container">
                    <ControllerUnit
                        selected='true'
                    />

                    <ControllerUnit
                        center='true'
                    />

                    <ControllerUnit
                    />
                </div>
            </div>
        );
    }
}

export default Exhibition;
