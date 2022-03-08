//import React from "react";
//import logo from "../mylogo-nobackground.png";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const [colorChange, setColorChange] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            console.log(window.scrollY)
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)

    return (
        <nav className={colorChange ? 'navbar colorChange navbar-expand-lg navbar-light justify-content-start fixed-top' : 'navbar navbar-expand-lg navbar-light fixed-top'}>
            {/* </nav><nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top"> */}
            {/* // <nav className="navbar navbar-expand-lg navbar-light bg-dark"> */}
            {/* <Link className="navbar-brand d-md-lg d-inline" to="home" href="#">AP</Link> */}
            {/* <button className="navbar-toggler ms-auto " data-toggle="collapse" data-target="#collapsingNavbar2"  type="button"  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle Navigation">
     
      </button> */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                {/* <button class="navbar-toggler ms-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar2" aria-controls="collapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button> */}
                {/* <Link className="nav-link" href="#_"><i class="fa fa-search mr-1"></i></Link>  */}
                {/* <div className="collapse navbar-collapse" id="collapsingNavbar2"> */}


                {/* <ul className="navbar-nav ms-auto "> */}

                <button className="navbar-toggler md-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#1d1d1d" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link smooth={false} to="home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={false} to="about" offset={-40} className="nav-link" href="#">About Me</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={false} to="projects" offset={-40} className="nav-link" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={false} to="experience" offset={-40} className="nav-link" href="#">Experience</Link>
                        </li>

                        <li className="nav-item">
                            <Link smooth={false} to="contactme" offset={-40} className="nav-link" href="#">Contact</Link>
                        </li>
                        {/* <li className="nav-item">
                  {/* <Link smooth={false}  to="footer" offset={-110} className="nav-link" href="#">CV</Link>  */}
                        {/* <a className="nav-link" href="Alejandro Perez Resume.pdf" download="resume.pdf">CV</a>
              </li>  */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
