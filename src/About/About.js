import React, {Component} from 'react';
import './about.css';
import myPic from '../Images/pic/me.jpg';

class About extends Component {
    render() {
        return (
            <div className="about_container">
                <div className="about">
                    <span className="about_title">Who</span>
                    <div className="about_content">
                        <img src={myPic}/>
                        <div>
                            안녕하세요. 프론트엔드 개발자 류근률 입니다.
                            <br/>
                            웹 개발을 시작하며 기본기를 탄탄히 하기 위해 바닐라 자바스크립트부터 차근차근 공부하였습니다.
                            <br/>
                            리액트와 db등을 사용하여 조금이나마 기능이 갖춰진 결과물들을 뿌듯해 하며 웹 개발에 푹 빠져있습니다.
                            <br/>
                            새로운 좋은 팀에서 트렌디한 정보를 공유하며 더 나은 개발자로 성장하고 싶습니다.
                        </div>
                    </div>
                </div>
                <div className="about_skill">
                    <span className="skill_title">Skills</span>
                    <div className="skill_front">
                        <span className="front_title">Front-end</span>
                        <div className="front_skills">
                            <div className="front_html">
                                <div
                                className="html_logo">
                                </div>
                                <span>HTML</span>
                            </div>
                            <div className="front_css">
                                <div
                                className="css_logo">
                                </div>
                                <span>CSS</span>
                            </div>
                            <div className="front_javascript">
                                <div
                                className="javascript_logo">
                                </div>
                                <span>Javascript</span>
                            </div>
                            <div className="front_react">
                                <div
                                className="react_logo">
                                </div>
                                <span>React</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill_back">
                    <span className="back_title">Back-end</span>
                    <div className="back_skills">
                    <div className="back_nodejs">
                                <div
                                className="nodejs_logo">
                                </div>
                                <span>NodeJS</span>
                            </div>
                            <div className="back_mongodb">
                                <div
                                className="mongodb_logo">
                                </div>
                                <span>Mongodb</span>
                            </div>
                            <div className="back_mongoose">
                                <div
                                className="mongoose_logo">
                                </div>
                                <span>Mongoose</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;