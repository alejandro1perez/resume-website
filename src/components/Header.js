import React from "react";
import Button from "react";
import Typed from "react-typed";
import {
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon

} from "react-share";
import Pdf from '../Documents/Alejandro Perez Resume.pdf';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1 className="name-heading">Alejandro Pérez</h1>

                <Typed
                    className="typed-text"
                    strings={["Web Development", "React", "JavaScript"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a className="m-3" href={"https://www.linkedin.com/in/alejandro-perez-655616202"}>
                        <LinkedinIcon size={36} className="rounded-3 main-icon" />
                    </a>
                    <a className="m-3" href={"mailto:perez.alejandro1221@gmail.com?subject=SendMail&body=Description"}>
                        <EmailIcon size={36} className="rounded-3 main-icon" />
                    </a>
                    {/* <a className="btn-main-offer" href="Alejandro Perez Resume.pdf" download="resume.pdf">CV</a>  */}
                    <a className="btn-main-offer rounded-3 m-3" href={Pdf} target="_blank">CV</a>

                </div>


                {/* <a className="btn-main-offer" href="Alejandro Perez Resume.pdf" download="resume.pdf">Download Resume</a> */}
            </div>
        </div>
    )
}

export default Header
