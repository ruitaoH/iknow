require('style/answer/editQuestionItem.scss');

import React from 'react';

class EditQuestionItem extends React.Component{
    render(){
        return (
            <div className="editQuestionItem">
                <div className="left">
                    <img src={require('../../images/portraits.jpg')} />
                    <span>LV12</span>
                </div>

                <div className="right">
                    <h1>昵称</h1>
                    <p>我们私聊，就要毕业了，目前不需要，你看你要的话就拿走。</p>
                </div>
            </div>
        );
    }
}

export default EditQuestionItem;
