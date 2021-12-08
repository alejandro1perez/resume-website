import React from "react";
import author from "../picture1.jpeg";
import Education from "./Education.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import SkillBar from 'react-skillbars';


const AboutMe = () => {

    const skills = [
        {type: "Java", level: 80},
        {type: "Python", level: 70},
        {type: "Javascript", level: 70}, 
        {type: "SQL", level: 75},
        {type: "C#", level: 55},
        {type: "React", level: 50},
        {type: "Unity3D", level: 65},
        {type: "MySQL", level: 60}
      ];

     
    return (
        <div className="about">
        <div id="about" className="container-fluid py-5">
        <h1 className="text-center about-heading">About Me</h1>
            <div className="row"> 
            
                <div className="col-lg-4 col-md-6 col-sm-3 profile-wrap ">
                     <div className="photo-wrap">
                        {/* <img className="profile-img" src={author} alt="author..."></img> */}
                        <img className="img-fluid rounded-circle" src={author} data-holder-rendered="true"/>
                       
                    </div> 
         <div >
                    <h5 className="mb-4 text-center text-light">Education</h5>             

        <div className="list-group">
            <a href="https://www.barry.edu/en" className="list-group-item list-group-item-action text-white education-section">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 school-heading">Barry University, Miami, FL</h5>
                        <small>December 2020</small>
                </div>
                 <p className="mb-1">B.S. in Computer Science</p>
                 <small>Minor: Mathematics</small>
            </a>
        <a href="https://csa.edu.pr/" className="list-group-item list-group-item-action text-white education-section">
        <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 school-heading">Colegio San Antonio, Rio Piedras, PR</h5>
        <small>May 2016</small>
        </div>
        <p className="mb-1">High School Degree</p>
        </a>
        </div>
        </div>
                </div>
               
                <div className="col-lg-7 col-md-6 col-sm-3 mt-3">
                
                    <p className="mb-5 about-description">
                    I’m a teamwork-oriented and driven aspiring Software Engineer, currently employed as
an IT Support Technician at Farmacia Central Drug, Puerto Rico. I’m very familiar with
networking and troubleshooting. I have experience with implementation and
maintenance of server-side application in business hierarchy, and data management. A
job in web development would align with my projects and interests. 
                    </p> 
                    <h5 className="mb-4 mt-2 text-center text-light">Skills</h5>
                     
                     <div className=""><SkillBar skills={skills} height={20}/></div>
                     
                   
                </div>
                        
            
            </div>
        </div>
        </div>
    )
}

export default AboutMe
