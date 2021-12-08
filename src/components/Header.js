import React from "react";
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
        <div id="home"className="header-wrapper">
            <div className="main-info">
                <h1 className="name-heading">Alejandro Perez</h1>
                
                <Typed 
                className="typed-text"
                strings={["Web Development", "UX/UI", "Database"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
               <div className="btn-group" role="group" aria-label="Basic example">
               <LinkedinShareButton className="btn btn-primary me-4"
                                                    url={"https://www.linkedin.com/"}
                                                    quote={"FullStack Developer"}
                                                    hashtag="#JavaScript"
                                                >
                                                    <LinkedinIcon size={36} />
                                                </LinkedinShareButton>
                                                <EmailShareButton className="btn btn-primary me-4"
                                                    url={"https://www.gmail.com/"}
                                                >
                                                    <EmailIcon  size={36} />
                                                </EmailShareButton>
                                                {/* <a className="btn-main-offer" href="Alejandro Perez Resume.pdf" download="resume.pdf">CV</a>  */}
                                                <a className="btn-main-offer" href={Pdf} target="_blank">CV</a>
                                             
</div>
               
                                               
               {/* <a className="btn-main-offer" href="Alejandro Perez Resume.pdf" download="resume.pdf">Download Resume</a> */}
            </div>
        </div>
    )
}

export default Header
