import React from "react";
import author from "../picture1.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import SkillBar from 'react-skillbars';


const AboutMe = () => {

    const skills = [
        { type: "Java", level: 70 },
        { type: "Python", level: 50 },
        { type: "Javascript", level: 60 },
        { type: "SQL", level: 70 },
        { type: "React", level: 50 },
    ];


    return (
        <div className="about">
            <div id="about" className="container-fluid py-5">

                <div className="row">
                    <h1 className="text-center about-heading">About Me</h1>
                    <div className="col-lg-4 col-md-6 col-sm-3 rounded-3 profile-wrap ">
                        <div className="photo-wrap">
                            {/* <img className="profile-img" src={author} alt="author..."></img> */}
                            <img className="img-fluid rounded-circle" src={author} data-holder-rendered="true" />

                        </div>
                        <p className="mb-5 about-description">
                            I’m a teamwork-oriented and driven aspiring Software Engineer, currently employed as
                            an IT Support Technician at Farmacia Central Drug, Puerto Rico. I’m very familiar with
                            networking and troubleshooting. I have experience with implementation and
                            maintenance of server-side application in business hierarchy, and data management. A
                            job in web development would align with my projects and interests.
                        </p>
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-3 mt-3">

                        <div >
                            <h5 className="mb-4 text-center text-dark">Education</h5>

                            <div className="list-group">
                                <a href="https://www.barry.edu/en" className="list-group-item list-group-item-action text-dark rounded-3 education-section">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1 school-heading">Barry University, Miami, FL</h5>
                                        <small className="text-muted">December 2020</small>
                                    </div>
                                    <small className="mb-1 text-dark">B.S. in Computer Science</small><br />
                                    <small className="text-dark">Minor: Mathematics</small>
                                </a>
                                <a href="https://csa.edu.pr/" className="list-group-item list-group-item-action text-dark rounded-3 education-section">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1 school-heading">Colegio San Antonio, Rio Piedras, PR</h5>
                                        <small className="text-muted">May 2016</small>
                                    </div>
                                    <small className="mb-1 text-dark">High School Degree</small>
                                </a>
                            </div>
                        </div>

                        <h5 className="mb-4 mt-2 text-center text-dark">Skills</h5>

                        <div className=""><SkillBar skills={skills} height={20} /></div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default AboutMe
