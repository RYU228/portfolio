import React, {Component} from 'react';
import './project.css';
import image1 from "./../Images/site/1.png";
import image2 from "./../Images/site/2.png";
import image3 from "./../Images/site/3.png";
import image4 from "./../Images/site/4.png";
import image5 from "./../Images/site/5.png";

class Project extends Component {
    openModal = () => {
        const modal = document.querySelector(".project_modalOverlay");

        modal.classList.add("show");
        modal.classList.remove("hide");
    }
    closeModal = () => {
        const modal = document.querySelector(".project_modalOverlay");

        modal.classList.add("hide");
        modal.classList.remove("show");
    }

    render() {
        return (
            <div className="project_container">
                <div
                onClick={this.openModal}
                className="project">
                    <div className="project_title">
                        <span>Pull Up Challenge</span>
                    </div>
                    <div className="project_content">
                        <span>운동법, 기록 공유, 자신의 목표를 설정하는 운동 커뮤니티 입니다.</span>
                    </div>
                </div>
                <div className="project_modalOverlay">
                    <div className="project_modalContainer">
                        <button
                            className="project_closeBtn"
                            onClick={this.closeModal}>X</button>
                        <div className="project_modal">
                            <img className="image image1"
                             src={image1} alt="Project detial image"/>
                            <img className="image image2"
                             src={image2} alt="Project detial image"/>
                            <img className="image image3"
                             src={image3} alt="Project detial image"/>
                            <img className="image image4"
                             src={image4} alt="Project detial image"/>
                            <img className="image image5"
                            src={image5} alt="Project detial image"/>
                            <div className="modal_footer">
                                <span>깃허브에서 코드를 확인해보세요.</span>
                                <a href="https://github.com/ryu228/pull_up_2020">
                                    <button>소스 보러가기</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;