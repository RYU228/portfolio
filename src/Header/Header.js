import React, {Component} from 'react';
import './Header.css'
import myPic from '../Images/pic/me.jpg';

class Header extends Component {
    componentDidMount() {
        this.showTitle(0);
    }
    showTitle = (index) => {
        const span = document.getElementsByClassName("header_changingTitle");

        for(let i =0; i<span.length; i++) {
            span[i].classList.add("hide");
        }

        span[index].classList.remove("hide");

        let next = 0;
        if(index+1 > 2) {
            next = 0;
        } else {
            next = index+1;
        }
        setTimeout(() => {
            this.showTitle(next);
        }, 1900);
    }

    render() {
        return (
            <div className="header_container">
                <div className="header_content">
                    {/* <img src={myPic} /> */}
                    <div className="header_intro">
                        <span className="header_title">안녕하세요</span>
                        <span className="header_changingTitle">도전정신이 있는</span>
                        <span className="header_changingTitle hide">팀워크가 좋은</span>
                        <span className="header_changingTitle hide">끊임없이 성장하는</span>
                        <span className="header_title">신입개발자 류근률 입니다.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;