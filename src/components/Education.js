import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Education = () => {
    return (
        <div id="education" className="education">
            <h2>Education</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-4">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" />
                                </div>
                                <h3>Colegio San Antonio, Rio Piedras, PR</h3>
                                <p>Highschool Degree, 2016</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" />
                            </div>
                                <h3>Barry University, Miami, FL</h3>
                                <p>Bachelor in Computer Science with a Math Minor, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        
    )
}

export default Education
