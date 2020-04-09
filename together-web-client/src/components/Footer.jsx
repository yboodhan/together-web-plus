import React from 'react';

import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
    return (
        <footer>
            <p>Questions? Contact us.</p>
            <Row>
                <Col sm="4">
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    <p>About Us</p>
                </Col>

                <Col sm="4">
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    <p>About Us</p>
                </Col>

                <Col sm="4">
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    <p>About Us</p>
                </Col>

            </Row>

            <hr/>
            <div>
            <FontAwesomeIcon className="mx-1" size="lg" icon={faLinkedin}/>
            <FontAwesomeIcon className="mx-1" size="lg" icon={faGithub}/>
            <FontAwesomeIcon className="mx-1" size="lg" icon={faEnvelope}/>
            <FontAwesomeIcon className="mx-1" size="lg" icon={faFolder}/>
            </div>
            <br/>
            <div>
                © 2020 TogetherWeb
            </div>
      </footer>
    )
}

export default Footer