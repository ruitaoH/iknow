require('../styles/reset.css');
require('../styles/editQuestion.scss');

import React from 'react';

import HeaderBar from './HeaderBar'
import EditQuestionItem from './EditQuestionItem';

class EditQuestion extends React.Component{
    render(){
        return (
            <div className="editQuestion">
                <HeaderBar
                    content="我要提问"
                    afterDot="true"
                />

                <div className="edit_container">
                    <div className="question_container">
                        <p className="question">哪位好心的师弟师妹帮忙注册一个白云黄鹤的帐号用用？<span>5分</span></p>

                        <ul className="labels">
                            <li>#</li>
                            <li>学习考试</li>
                            <li>校园生活</li>
                        </ul>

                        <p className="content">我们私聊，就要毕业了，目前不需要，你看你要的话就拿走.</p>

                        <div className="num">
                            <span>10人关注</span>
                            <span>2人回答</span>
                        </div>
                    </div>

                    <div className="button_container">
                        <div className="left">
                            <img src={require('../images/xie.jpg')} />
                            <span>编辑问题</span>
                        </div>

                        <div className="line"></div>

                        <div className="right">
                            <img src={require('../images/close.png')} />
                            <span>关闭问题</span>
                        </div>
                    </div>

                    <div className="answer_container">
                        <EditQuestionItem
                        />
                        <EditQuestionItem
                        />
                        <EditQuestionItem
                        />
                        <EditQuestionItem
                        />
                        <EditQuestionItem
                        />
                        <EditQuestionItem
                        />
                        <EditQuestionItem
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditQuestion;
