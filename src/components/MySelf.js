require('../styles/reset.css');
require('../styles/myself.scss');

import React from 'react';

import Menu from './Menu';
import InfoBox from './InfoBox';
import Tip from './Tip';

class MySelf extends React.Component{
    render(){
        return (
            <div className="myself">
                <div className="info_container">
                    <InfoBox />
                </div>

                <div className="tips_container">
                    <Tip
                        content="我的提问"
                        icon={require('../images/self_question.png')}
                    />
                    <Tip
                        content="我的回答"
                        icon={require('../images/self_answer.png')}
                    />
                    <Tip
                        content="我的关注"
                        icon={require('../images/self_concern.png')}
                    />
                    <Tip
                        content="我的收藏"
                        icon={require('../images/self_collect.png')}
                    />

                    <Tip
                        style={{position:'absolute','bottom':'1.54rem'}}
                        arrowStyle={{marginRight:'0.24rem'}}
                        content="我要反馈"
                        icon={require('../images/feedback.png')}
                    />
                </div>

                <footer>
                    <Menu />
                </footer>
            </div>
        );
    }
}

export default MySelf;
