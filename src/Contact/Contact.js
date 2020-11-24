import React, {Component} from 'react';
import './contact.css';
import '../FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    render() {
        return (
            <div className="contact_container">
                <div className="contact_info">
                    <span className="contact_title">
                        Contact Me
                    </span>
                    <span className="contact_mailIcon">
                        <FontAwesomeIcon icon="envelope"/>
                    </span>
                    <span className="contact_content">
                        csryu228@gmail.com
                    </span>
                    <a href="https://github.com/ryu228">
                        <span className="contact_gitIcon">
                            <FontAwesomeIcon icon={["fab", "github"]}/>
                        </span>
                        <span className="contact_gitContent">
                            https://github.com/ryu228
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;