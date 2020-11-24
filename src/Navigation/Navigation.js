import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
    componentDidMount() {
        this.about();
    }
    project = () => {
        this.nav_project.classList.add("color_black");
        this.nav_about.classList.remove("color_black");
        this.nav_contact.classList.remove("color_black");
    }
    about = () => {
        this.nav_about.classList.add("color_black");
        this.nav_project.classList.remove("color_black");
        this.nav_contact.classList.remove("color_black");
    }
    contact = () => {
        this.nav_contact.classList.add("color_black");
        this.nav_project.classList.remove("color_black");
        this.nav_about.classList.remove("color_black");
    }

    render() {
        return (
            <div className="navigation_container">
                <ul className="navigation_ul">
                    <Link
                    onClick={this.project}
                    style={{
                        textDecoration: 'none',
                        color: '#999999'
                    }}
                    to="/Project">
                        <li
                        ref={ref=>(this.nav_project = ref)}>
                            Project
                        </li>
                    </Link>
                    <Link
                    onClick={this.about}
                    style={{
                        textDecoration: 'none',
                        color: '#999999'
                    }}
                    to="/">
                        <li
                        ref={ref=>(this.nav_about = ref)}>
                            About
                        </li>
                    </Link>
                    <Link
                    onClick={this.contact}
                    style={{
                        textDecoration: 'none',
                        color: '#999999'
                    }}
                    to="/Contact">
                        <li
                        ref={ref=>(this.nav_contact = ref)}>
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navigation;