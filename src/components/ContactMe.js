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
                <h1 className="text-uppercase text-center">Contact Me</h1>
                <div className="container">
                    <div className="row contact-me">
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto">
                            <div className="text-center">
                                                <EmailShareButton className="mb-3"
                                                    url={"https://www.gmail.com/"}
                                                >
                                                    <EmailIcon className="mx-3" size={36} />
                                                </EmailShareButton>
                                    <p className="text-dark">perez.alejandro1221@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto">
                        <div className="text-center">
                                                <LinkedinShareButton className="mb-3"
                                                    url={"https://www.linkedin.com/"}
                                                    quote={"FullStack Developer"}
                                                    hashtag="#JavaScript"
                                                >
                                                    <LinkedinIcon className="mx-3" size={36} />
                                                </LinkedinShareButton>
                                                <p className="text-dark">Find me on Linkedin.</p>
                                             </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContactMe
