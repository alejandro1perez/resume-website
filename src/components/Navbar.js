import React from "react";
//import logo from "../mylogo-nobackground.png";
import {Link} from "react-scroll"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
      <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start fixed-top">
      <Link className="navbar-brand d-md-lg d-inline" href="#"></Link>
      <button className="navbar-toggler ms-auto ms-sm-2" data-toggle="collapse" data-target="#collapsingNavbar2"  type="button"  aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="nav-link" href="#_"><i class="fa fa-search mr-1"></i></Link> 
      <div className="navbar-collapse collapse justify-content-between align-items-center w-100 static-top" id="collapsingNavbar2">
          <ul className="navbar-nav mx-auto text-md-center text-left">
          <li className="nav-item">
                  <Link smooth={false}  to="home" className="nav-link" href="#">Home</Link> 
              </li>
              <li className="nav-item">
                  <Link smooth={false}  to="about" offset={-110} className="nav-link" href="#">About Me</Link> 
              </li>
              <li class="nav-item">
                  <Link smooth={false}  to="education" offset={-110} class="nav-link" href="#">Education</Link>
              </li>
              <li className="nav-item">
                  <Link smooth={false}  to="experience" offset={-110} className="nav-link" href="#">Experience</Link> 
              </li>
              <li className="nav-item">
                  <Link smooth={false}  to="projects" offset={-110} className="nav-link" href="#">Projects</Link> 
              </li>
              <li className="nav-item">
                  <Link smooth={false}  to="contacts" offset={-110} className="nav-link" href="#">Contact</Link> 
              </li>
          </ul>
      </div>
  </nav>
    )
}

export default Navbar
