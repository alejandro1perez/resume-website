import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon
} from "react-share";

const ContactMe = () => {
    return (
        <div id="contactme" className="contacts">
            <h1 className="text-uppercase text-center text-dark">Contact Me</h1>
            <div className="container">
                <div className="row contact-me">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto text-center">
                        <a className="btn-links" href={"mailto:perez.alejandro1221@gmail.com?subject=SendMail&body=Description"}>
                            <EmailIcon size={36} className="rounded-3 mb-4 main-icon" />
                        </a>
                        <p className="text-dark">perez.alejandro1221@gmail.com</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto text-center">
                        <a className="btn-links" href={"https://www.linkedin.com/in/alejandro-perez-655616202"}>
                            <LinkedinIcon size={36} className="rounded-3 mb-4 main-icon" />
                        </a>
                        <p className="text-dark">Find me on Linkedin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
