require('../styles/reset.css');
require('../styles/subject.scss');

import React from 'react';

import Exhibition from './Exhibition';
import SubjectItem from './SubjectItem';
import Menu from './Menu';

class Subject extends React.Component{
    render(){
        return (
            <div className="subject">
                <Exhibition />

                <div className="more">
                    <span>热门专题</span>

                    <div>
                        <span>More</span>
                        <img src={require('../images/account_arrow.png')} />
                    </div>
                </div>

                <SubjectItem />
                <SubjectItem />
                <SubjectItem />
                <SubjectItem />
                <SubjectItem />
                <SubjectItem />
                <SubjectItem />

                <footer>
                    <Menu />
                </footer>
            </div>
        );
    }
}

export default Subject;
