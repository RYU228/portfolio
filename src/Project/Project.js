import React, {Component} from 'react';
import './project.css';
//import image_url from "../images/thumbnail_pullup.jpg";

class Project extends Component {
    render() {
        return (
            <div className="project_container">
                <div className="project">
                    <div className="project_title">
                        <span>Pull Up Challenge</span>
                    </div>
                    <div className="project_content">
                        <span>운동법, 기록 공유, 자신의 목표를 설정하는 운동 커뮤니티 입니다.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;