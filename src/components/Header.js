import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home"className="header-wraper">
            <div className="main-info">
                <h1>Alejandro Pérez</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design" , "Web Development" , "JavaScript" , "Bootstrap"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
               <a className="btn-main-offer" href="Alejandro Perez Resume.pdf" download="resume.pdf">Download Resume</a>
            </div>
        </div>
    )
}

export default Header
